export interface Todo {
    id?: number;
    title: string;
    description?: string;
    completed?: boolean;
}

export type Todos = Array<Todo> | Map<number, Todo>;

export interface TodoManager {
    add: (todo: Todo) => void;
    getById: (todoId: number) => Todo | undefined;
    getAll: () => Todos
    update: (todoId: number, todo: Omit<Todo, 'id'>) => void;
    delete: (todoId: number) => void;
}