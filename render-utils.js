import { deleteTodos, updateTodos } from './fetch-utils.js';
import { loadTodo } from './todos/todos.js';

export function renderTodo(todo) {
    const li = document.createElement('li');

    li.textContent = `${todo.description}`;

    const updateButton = document.createElement('button');
    updateButton.textContent = 'update todo';
    updateButton.classList.add('update-button');
    li.classList.add('updated-todo');
    updateButton.addEventListener('click', async (e) => {
        e.preventDefault();
        await updateTodos(todo.id, { complete: !todo.complete });
        loadTodo();
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.classList.add('delete-button');

    deleteButton.addEventListener('click', async (e) => {
        e.preventDefault();
        await deleteTodos(todo.id);
        loadTodo();
    });

    // const check = document.createElement('');
    li.append(updateButton, deleteButton);
    return li;
}
