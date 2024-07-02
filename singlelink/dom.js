import SinglyLinkedList from "./single8.js";

const list = new SinglyLinkedList();

// HTML elements
const todoInput = document.querySelector("#todo");
const btn = document.querySelector("#btn");
const todos = document.querySelector("#todos");

const addTodo = (e) => {
  e.preventDefault();
  let newTodo = todoInput.value;
  list.push(newTodo);
  todoInput.value = "";
  displayTodos();
};

const deleteTodo = (index) => {
  list.remove(index);
  displayTodos();
};

btn.addEventListener("click", addTodo);

const displayTodos = () => {
  todos.innerHTML = "";
  let current = list.head;
  let index = 0;
  while (current) {
    const li = document.createElement("li");
    li.textContent = current.val;

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.addEventListener("click", () => {
      deleteTodo(index);
    });

    li.appendChild(del);
    todos.appendChild(li);
    current = current.next;
    index++;
  }
};

list.print();
console.log(list);

