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
        this.displayAllTodos(todos);
    }

    addNewTodo(text) {
        var newTodo = {
            id: new Date(),
            text: text,
            completed: false
        }
        console.log(newTodo);
        console.log(todos);
        todos.push(newTodo);
        saveTodos(this.key);
    }

    getText() {
        return this.text;
    }

    completeTodo(todo) {
        this.completed = true;
    }

    clearTodos() {

    }

    getTodos() {
        return todos;
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
                let checkBtn = this.configureCheckBtn(element);
                //delete button
                let deleteBtn = this.configureDeleteBtn(element);

                //div to hold everything
                let div = this.configureDiv();
                //adding the check button, text, and delete button to the div
                div.innerHTML = checkBtn.outerHTML + text.outerHTML + deleteBtn.outerHTML;

                //adding the div to the bullet and the bullet to the list
                list.appendChild(div);
            }
        }
    }

    z() {
        console.log("wast");
        document.getElementById("label").innerText = "test";
    }

    configureDiv() {
        let div = document.createElement("div");
        div.classList.add('e');
        div.display = "flex";
        return div;
    }

    configureDeleteBtn(element) {
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add('deleteBtn');

        deleteBtn.display = "inline-flex";
        deleteBtn.setAttribute('onclick', 'this.z');

        deleteBtn.class = "deleteBtn";
        return deleteBtn;
    }

    configureCheckBtn(element) {
        let checkBtn = document.createElement("button");
        checkBtn.textContent = "Check Off";
        checkBtn.display = "inline-flex";
        checkBtn.classList.add('checkBtn');
        checkBtn.setAttribute('onClick', 'this.a');

        checkBtn.class = "checkBtn";
        return checkBtn;
    }
}

export default Todo;