import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { Todo, createTodoManager } from './todoManager';
import { todosBuilder } from './utils/builders';
const app = express();

app.use(cors());
app.use(bodyParser.json());

let todoManager = createTodoManager(todosBuilder(5));

app.get('/', (_, res) => {
  const todos = Object.fromEntries(todoManager.getAll().entries());
  res.json(todos);
});

app.post('/', (req, res) => {
  const todo: Todo = req.body;
  todoManager.add(todo);
  res.json({ status: 200 });
});

app.put('/:id', (req, res) => {
  let id = Number(req.params.id);
  let todo = req.body;
  console.log(id, todo)
  todoManager.update(id, todo);
  console.info(todoManager.getAll());
  res.json({ status: 200});
});

app.delete('/:id', (req, res) => {
  try {
    todoManager.delete(Number(req.params.id));
    console.info(todoManager.getAll());
    res.json({ status: 200 });
  } catch (error) {
    res.json({ status: 400 });
  }
});

app.listen(3000, () => {
  console.log('Todos CRUD API Server Running');
});
