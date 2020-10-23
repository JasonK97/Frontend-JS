import { qs } from './utilities.js';

const myTodo = new Todo("#todoList", "todos");

let Button = qs('#addButton');
Button.addEventListener('click', addButton);
qs('body').addEventListener('onload', myTodo.displayAllTodos(myTodo.key));

function addButton() {
    const inputElement = qs('#task').value;

    console.log(inputElement);
    myTodo.addNewTodo(inputElement, myTodo.key);
    myTodo.displayAllTodos(myTodo.key);
    qs('#task').value = "";
}


import Todo from "./todo.js";