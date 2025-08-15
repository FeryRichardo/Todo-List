import { todos } from './Todo.mjs';

function findTodoIndex(todoId) {
    for (const index in todos) {
        if (todos[index].id === todoId) {
            return index;
        }
    };

    return -1;
}

export default findTodoIndex;