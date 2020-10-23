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
        //console.log(todos);
        todos.push(newTodo);
        saveTodos(this.key);
    }
}