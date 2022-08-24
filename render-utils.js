export function renderTodo(todo) {
    const li = document.createElement('li');

    li.textContent = `${todo.description}`;

    return li;
}
