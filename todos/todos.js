import { addNewTodo, checkUser, getTodos, getUser, logoutUser } from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';
checkUser();

const logout = document.getElementById('logout');
const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

let todos = [];

async function loadTodo() {
    const user = await getUser();
    if (!user) location.replace('../');
    todos = await getTodos();
    displayTodos();
}

function displayTodos() {
    todoList.textContent = '';
    for (let todo of todos) {
        const li = renderTodo(todo);
        todoList.appendChild(li);
    }
}

todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(todoForm);
    await addNewTodo({
        description: data.get('description'),
    });
    todoForm.reset();
    loadTodo();
});

logout.addEventListener('click', async () => {
    await logoutUser();
});

loadTodo();
