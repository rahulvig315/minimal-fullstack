
import { Todo } from '../../types';
import { validateProps } from '../validators';

export const validateTodoProps = (todo: Todo) => validateProps(todo, ['title']);

export const isTodoMap = (todoMap: unknown): todoMap is Map<number, Todo> => {
    if (todoMap instanceof Map) {
        for (let [key, todo] of todoMap.entries()) {
            if (!(typeof key === 'number') || !(validateTodoProps(todo))) {
                return false
            }
        }
    }
    return true;
}
