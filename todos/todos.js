import {
    addNewTodo,
    checkUser,
    getTodos,
    getUser,
    logoutUser,
    updateTodos,
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';
checkUser();

const logout = document.getElementById('logout');
const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

let todos = [];

export async function loadTodo() {
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

export async function handleUpdate(id, update) {
    await updateTodos(id, update);
    loadTodo();
}

todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(todoForm);
    const newTodo = await addNewTodo({
        description: data.get('description'),
    });
    todos.push(newTodo);
    todoForm.reset();
    loadTodo();
});

logout.addEventListener('click', async () => {
    await logoutUser();
});

loadTodo();
