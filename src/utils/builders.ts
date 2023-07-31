import { Todo } from "../types"
import { getRandomBoolean } from "./randomGenerators"

const todoListBuilder = (numTodos = 10): Todo[] => {
    return [...Array(numTodos)].map((_, idx): Todo => ({
        id: idx,
        title: `task ${idx}`,
        description: `description ${idx}`,
        completed: getRandomBoolean()
    }))
}

export const todosBuilder = (numTodos = 10) => {
    return new Map(todoListBuilder(numTodos).entries());
}
