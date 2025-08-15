import { generateId, generateTodoObject } from "./Generated.mjs";
import { todos, RENDER_EVENT } from './Todo.mjs';
import { saveData } from "./save.mjs";

function addTodo () {
    const textTodo = document.getElementById('title').value;
    const timestamp = document.getElementById('date').value;

    const generatedID = generateId();
    const todoObject = generateTodoObject(generatedID, textTodo, timestamp, false);
    todos.push(todoObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

export default addTodo;