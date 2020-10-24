import { getFromLS, qs, setClick } from './utilities.js';

const myTodo = new Todo("#todoList", "todos");

setClick('#addButton', addButton);
qs('body').addEventListener('onload', myTodo.displayAllTodos(myTodo.key));

function addButton() {
    var inputValue = document.getElementById('task').value;
    // const input = getFromLS(qs('task').value);
    console.log(inputValue);
    myTodo.addNewTodo(inputValue /*, myTodo.key*/ );
    myTodo.displayAllTodos(myTodo.key);
    inputValue = "";
}

import Todo from "./todo.js";