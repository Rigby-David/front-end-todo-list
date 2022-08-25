const BASE_URL = 'http://localhost:7890';

export async function signUpUser(userInfo) {
    const res = await fetch(`${BASE_URL}/api/v1/users`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
        credentials: 'include',
    });
    const data = await res.json();
    if (res.ok) {
        location.replace('./todos');
    } else {
        console.error(data.message);
    }
}
export async function signInUser(userInfo) {
    const res = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
        credentials: 'include',
    });
    const data = await res.json();
    if (res.ok) {
        location.replace('./todos');
    } else {
        console.error(data.message);
    }
}

export async function getUser() {
    const res = await fetch(`${BASE_URL}/api/v1/users/me`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    if (res.ok) {
        const user = await res.json();
        return user;
    }
}

export async function checkUser() {
    const user = await getUser();
    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    const user = await getUser();
    if (user) {
        location.replace('./todos');
    }
}

export async function logoutUser() {
    const res = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
        method: 'DELETE',
        credentials: 'include',
    });
    if (res.ok) {
        location.replace('../');
    }
}

export async function addNewTodo(todoInfo) {
    const res = await fetch(`${BASE_URL}/api/v1/todos`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todoInfo),
        credentials: 'include',
    });

    const data = await res.json();
    if (res.ok) {
        return data;
    }
}

export async function getTodos() {
    const res = await fetch(`${BASE_URL}/api/v1/todos`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });

    const data = await res.json();
    if (res.ok) {
        return data;
    }
}

export async function updateTodos(id, update) {
    const res = await fetch(`${BASE_URL}/api/v1/todos/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
        credentials: 'include',
    });

    const data = await res.json();
    if (res.ok) {
        return data;
    }
}

export async function deleteTasks(id) {
    const res = await fetch(`${BASE_URL}/api/v1/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });

    const data = await res.json();
    if (res.ok) {
        return data;
    }
}
