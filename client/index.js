function main() {
    let todos;
    const loadTodos = async () => {
            todos = todos || await getTodos()
            console.log('todos', todos)
            for (let [idx, todo] of Object.entries(todos)) {
                const todoRecord = createTodoRecord(todo)
                tbody.appendChild(todoRecord);
            }
        
    }
    
    window.onload = async event => {
        await loadTodos();
    }
    
    document.addEventListener('submit', async e => {
        e.preventDefault();
        const id = Math.max(0, ...Object.values(todos).map(obj => obj.id)) + 1; 
        const todo = {
            id,
            title: e.target[0].value,
            description: e.target[1].value
        }
        if (todo.title) {
            let res = await addTodo(todo);
            document.querySelector('#form').reset()
            tbody.appendChild(createTodoRecord(todo));
        }
    })
}

main();
