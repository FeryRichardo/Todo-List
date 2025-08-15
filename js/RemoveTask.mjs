import findTodoIndex from './FindTodo.mjs';
import { todos, RENDER_EVENT } from './Todo.mjs';

function removeTaskFromCompleted (todoId) {
    const todoTarget = findTodoIndex(todoId);

    if (todoTarget === -1) return;

    todos.splice(todoTarget, 1);
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

export default removeTaskFromCompleted;