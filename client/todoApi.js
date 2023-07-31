//GET -> /
const getTodos = async () => {
    const fetchedTodos =  await fetch('http://localhost:3000');
    return await fetchedTodos.json();
}
//POST -> /
const addTodo = async (todoToAdd, e) => {
    let res = await fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todoToAdd)
    });
    return await res.json();
}

//PUT -> /:id

const updateTodo = async (id, updatedTodo) => {
    let res = await fetch(`http://localhost:3000/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTodo)
    })
    return await res.json()
}

//DELETE -> /:idx
const deleteTodo = async (id) => {
    let res = await fetch(`http://localhost:3000/${id}`, {
        method: 'DELETE'
    })
    return await res.json()
}