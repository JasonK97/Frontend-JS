import { getFromLS, qs, setClick } from './utilities.js';

const myTodo = new Todo("#todoList", "todos");

// let Button = qs('#addButton');
// Button.addEventListener('click', addButton);
setClick('#addButton', addButton);
qs('body').addEventListener('onload', myTodo.displayAllTodos(myTodo.key));

function addButton() {
    var inputValue = document.getElementById('task').value;
    // const input = getFromLS(qs('task').value);
    console.log(inputValue);
    myTodo.addNewTodo(inputValue /*, myTodo.key*/ );
    myTodo.displayAllTodos(myTodo.key);
    qs('task').value = "";
}

import Todo from "./todo.js";