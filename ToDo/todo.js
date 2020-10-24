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
                let text = document.createElement("p");
                text.textContent = element.text;
                text.class = "text";
                let checkBtn = this.configureCheckBtn(element);
                let deleteBtn = this.configureDeleteBtn(element);
                let div = this.configureDiv();
                div.innerHTML = checkBtn.outerHTML + text.outerHTML + deleteBtn.outerHTML;
                list.appendChild(div);
            }
        }
    }

    deleteTask() {
        console.log("delete?");
    }

    checkOff(task) {
        console.log("check off?");
    }

    configureDiv() {
        let div = document.createElement("div");
        div.classList.add('item');
        div.display = "flex";
        return div;
    }

    configureDeleteBtn(element) {
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.display = "inline-flex";
        deleteBtn.setAttribute('onclick', this.deleteTask);
        deleteBtn.class = "deleteBtn";
        return deleteBtn;
    }

    configureCheckBtn(element) {
        let checkBtn = document.createElement("button");
        checkBtn.textContent = "Completed?";
        checkBtn.display = "inline-flex";
        checkBtn.classList.add('checkBtn');
        checkBtn.setAttribute('onclick', 'checkOff(this)');
        checkBtn.class = "checkBtn";
        return checkBtn;
    }
}

// var classname = document.getElementsByClassName("deleteBtn");

// var del = function() {
//     console.log('crap');
// }

// for (var i = 0; i < classname.length; i++) {
//     classname[i].addEventListener('click', del);
// }

export default Todo;