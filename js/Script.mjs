import addTodo from './AddTodo.mjs';
import { makeTodo } from './MakeTodo.mjs';
import { todos, RENDER_EVENT } from './Todo.mjs';
import { saveData, isStorageExist, SAVED_EVENT, STORAGE_KEY } from './save.mjs';

document.addEventListener('DOMContentLoaded', function() {
    const submitForm = document.getElementById('form');
    submitForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addTodo();
    });
});

document.addEventListener(RENDER_EVENT, function (event) {
    console.log(event.type);
    console.log(todos);

    const uncompletedTODOList = document.getElementById('todos');
    uncompletedTODOList.innerHTML = '';

    const completedTODOList = document.getElementById('completed-todos');
    completedTODOList.innerHTML = '';

    for (const todoItem of todos) {
        const todoElement = makeTodo(todoItem);
        if (!todoItem.isCompleted) {
            uncompletedTODOList.append(todoElement);
        } else {
            completedTODOList.append(todoElement);
        }
    }
});

document.addEventListener(SAVED_EVENT, function () {
    console.log(localStorage.getItem(STORAGE_KEY));
})