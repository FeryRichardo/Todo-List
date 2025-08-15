import { RENDER_EVENT } from "./Todo.mjs";
import { findTodo } from "./MakeTodo.mjs";

function undoTaskFromCompleted (todoId) {
    const todoTarget = findTodo(todoId);

    if (todoTarget == null) return;

    todoTarget.isCompleted = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
}

export default undoTaskFromCompleted;