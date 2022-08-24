export function renderTodo(todo) {
    const div = document.createElement('div');
    const li = document.createElement('li');

    div.classList.add('todo-list');
    li.textContent = `${todo.description}`;

    div.append(li);
    return li;
}
