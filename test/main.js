import { qs, setClick } from "./utilities.js";
import Todo from "./todo.js";

qs("main").innerHTML = "It worked!";

const myTodo = new Todo("#todoList", "todos");

function addButton(ev) {
    const inputValue = qs('todoInput').value;
    myTodo.addNewTodo(inputValue);
}

setClick('#addButton', addButton);
// qs('#addButton').addEventListener('touchend', addButton);