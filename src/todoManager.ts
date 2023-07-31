import { Todo, TodoManager, Todos } from './types';
import { isTodoMap, validateTodoProps } from './utils/todos/todos';


export function createTodoManager(
    todos: Todos = []
): TodoManager {
    let _todos = Array.isArray(todos) ? new Map<number, Todo>(todos.entries()) : todos;
    if (!isTodoMap(todos)) {
        throw Error('Invalid todos format, todos must be type Todos')
    }
    return {
        add: (todo: Omit<Todo, 'id'>) => {
            if (!validateTodoProps(todo)) {
                console.error('Invalid todo format. Could not add to todos')
            }
            let id = Math.max(0, ..._todos.keys()) + 1;
            _todos.set(id, { id, completed: false, ...todo });
        },
        getById: (todoId: number): Todo | undefined => {
            if (!_todos.has(todoId)) {
                console.error()
                return;
            }
            return _todos.get(todoId)
        },
        getAll: (): Todos => {
            return _todos;
        },
        update: (todoId: number, todo: Partial<Omit<Todo, 'id'>>) => {
            if (_todos.get(todoId)) {
                _todos.set(todoId, { ..._todos.get(todoId), ...todo } as Todo);
            } else {
                console.info(`Todo ${todoId} could not be updated because it does not exist.`)
            }
        },
        delete: (todoId: number) => {
            if (_todos.get(todoId)) {
                _todos.delete(todoId);
            } else {
                console.info(`Todo ${todoId} does not exist.`)
            }
        }
    }
}

export { Todo };
