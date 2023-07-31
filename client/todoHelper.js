const addEditListener = (editBtn, todo) => {
  editBtn.addEventListener('click', async (e) => {
    const record = e.target.parentElement.parentElement;
    const [title, description] = [record.children[2], record.children[3]];
    let canEdit = !(!!title.className && !!description.className);
    if (!canEdit) {
        console.log('can edit', canEdit)
        const [currTitle, currDesc] = [title.textContent, description.textContent]
        console.log('currTitle', currTitle)
        console.log('currDesc', currDesc, todo.description)
        if (currTitle !== todo.title || currDesc !== todo.description) {
            updateTodo(todo.id, {...todo, title: currTitle, description: currDesc})
        }
    }
    editBtn.textContent = canEdit ? 'save' : 'edit';
    editBtn.style.backgroundColor = canEdit ? 'darkblue' : 'darkslategray';
    for (let col of [title, description]) {
      col.className = (canEdit && 'editable') || '';
      col.setAttribute('contenteditable', canEdit);
    }
  });
};

const addDeleteListener = (deleteBtn, id) => {
  deleteBtn.addEventListener('click', async (e) => {
    const record = e.target.parentElement.parentElement;
    await deleteTodo(id);
    record.remove();
  });
};
const createEditCol = (todo) => {
  const editCol = document.createElement('td');
  const editBtn = document.createElement('button');
  editBtn.className = 'edit';
  editBtn.textContent = 'edit';
  addEditListener(editBtn, todo);
  editCol.appendChild(editBtn);
  return editCol;
};

const createDeleteCol = (id) => {
  const deleteCol = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete';
  deleteBtn.textContent = 'delete';
  addDeleteListener(deleteBtn, id);
  deleteCol.appendChild(deleteBtn);
  return deleteCol;
};

const createTodoCols = (todo) => {
  const id = document.createElement('td');
  id.textContent = todo.id;
  const done = document.createElement('td');
  done.innerHTML = `<input class="check" ${
    !!todo.completed && 'checked'
  } name='todo-checkbox' type='checkbox'/>`;
  const title = document.createElement('td');
  title.textContent = todo.title;
  const description = document.createElement('td');
  description.textContent = todo.description;
  return [id, done, title, description];
};

const createTodoRecord = (todo) => {
  const todoRecord = document.createElement('tr');
  todoRecord.append(
    ...[...createTodoCols(todo), createEditCol(todo), createDeleteCol(todo.id)]
  );
  return todoRecord;
};
