import { qs, saveToLS, getFromLS } from './utilities.js';

// var something = "something";
// var somethingElse = "something else";
var todos = [];

function saveTodos(key) {
    saveToLS(key, todos);
}
class Todo {
    constructor(parentId, key) {
        this.listElement = qs(parentId);
        this.key = key;
    }

    addNewTodo(text, key) {
        const newTodo = {
            id: new Date(),
            text: text,
            completed: false
        }
        todos.push(newTodo);
        saveTodos(key);
    }

    getText() {
        return this.text;
    }

    completeTodo(todo) {

    }

    z() {
        console.log("wast");
        document.getElementById("label").innerText = "test";
    }

    clearTodos() {

    }

    a() {
        console.log("check");
        return false;
    }

    displayAllTodos(key) {

        todos = getFromLS(key);
        if (todos != null) {
            console.log("Length " + todos.length);
            var list = qs('#todoList');
            list.innerHTML = "";
            for (let index = 0; index < todos.length; index++) {
                let element = todos[index];
                //grabbing the text from the todo object
                let text = document.createElement("p");
                text.textContent = element.text;
                text.class = "text";
                //checkmark button
                let checkButt = this.configureCheckButt(element);
                //delete button
                let deleteButt = this.configureDeleteButt(element);

                //   deleteButt.onclick = function() { this.z(); };
                console.log(deleteButt.onclick);
                // deleteButt.onclick = function() {
                //     console.log("asdfhj");
                // };
                //div to hold everything
                let div = this.configureDiv();
                //adding the check button, text, and delete button to the div
                // div.appendChild(checkButt);
                // div.appendChild(text);
                // div.appendChild(deleteButt);
                div.innerHTML = checkButt.outerHTML + text.outerHTML + deleteButt.outerHTML;

                //adding the div to the bullet and the bullet to the list
                list.appendChild(div);
            }
        }

    }

    configureDiv() {
        let div = document.createElement("div");
        div.classList.add('e');
        div.display = "flex";
        return div;
    }

    configureDeleteButt(element) {
        let deleteButt = document.createElement("button");
        deleteButt.textContent = "Delete";
        deleteButt.classList.add('deleteButt');

        deleteButt.display = "inline-flex";
        deleteButt.setAttribute('onClick', 'this.z');

        deleteButt.class = "deleteButt";
        return deleteButt;
    }
    configureCheckButt(element) {
        let checkButt = document.createElement("button");
        checkButt.textContent = "Check Off";
        checkButt.display = "inline-flex";
        checkButt.classList.add('checkButt');
        checkButt.setAttribute('onClick', 'this.a');

        checkButt.class = "checkButt";
        return checkButt;
    }
}

function tester() {
    console.log("test");
}

export default Todo;