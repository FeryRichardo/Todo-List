import addTodo from './AddTodo.mjs';
import makeTodo from './MakeTodo.mjs';
import { todos, RENDER_EVENT } from './Todo.mjs';

document.addEventListener('DOMContentLoaded', function() {
    const submitForm = document.getElementById('form');
    submitForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addTodo();
    });
});

document.addEventListener(RENDER_EVENT, function () {
    console.log(todos);

    const uncompletedTODOList = document.getElementById('todos');
    uncompletedTODOList.innerHTML = '';

    for (const todoItem of todos) {
        const todoElement = makeTodo(todoItem);
        if (!todoItem.isCompleted) {
            uncompletedTODOList.append(todoElement);
        }
    }
});