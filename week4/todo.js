/*
add new todo
remove or delete task
complete task
sort tasks
filter tasks
complete by date

retrieve todos from data store
save todos to data store
remove todo from data store

display todo list
    get list element
    retrieve todos from data store
    for each todo...build html
    add todo to list
*/
import { qs } from "./utilities.js";
const todos = [];
function saveTodos(key) {
    saveToLS(key, todos);
}

class Todo {
    constructor(parentId, key) {
        this.listElement = qs(parentId);
        this.key = key;
    }
    addNewTodo(text) {
        const newTodo = {
            id: new Date(),
            text: text,
            completed: false
        }
        todos.push(newTodo);
        saveTodos();
    }
    completeTodo(todo) {}
    listTodos() {}
}

const myTodo = new Todo("#todoList", 'todos');