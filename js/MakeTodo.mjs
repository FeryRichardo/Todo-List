import { todos, RENDER_EVENT } from './Todo.mjs';

function makeTodo (todoObject) {
    const textTitle = document.createElement('h2');
    textTitle.innerText = todoObject.title;

    const textTimestamp = document.createElement('p');
    textTimestamp.innerText = todoObject.timestamp;

    const textContainer = document.createElement('div');
    textContainer.classList.add('inner');
    textContainer.append(textTitle, textTimestamp);

    const container = document.createElement('div');
    container.classList.add('item', 'shadow');
    container.append(textContainer);
    container.setAttribute('id', `todo-${todoObject.id}`);

    if (todoObject.isCompleted) {
        const undoButton = document.createElement('button');
        undoButton.classList.add('undo-button');

        undoButton.addEventListener('click', function () {
            undoTaskFromCompleted(todoObject.id);
        });

        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-button');

        trashButton.addEventListener('click', function () {
            removeTaskFromCompleted(todoObject.id);
        });

        container.append(undoButton, trashButton);
    } else {
        const checkButton = document.createElement('button');
        checkButton.classList.add('check-button');

        checkButton.addEventListener('click', function () {
            addTaskToCompleted(todoObject.id);
        });

        container.append(checkButton);
    }

    return container;
}


function addTaskToCompleted (todoID) {
    const todoTarget = findTodo(todoID);

    if (todoTarget == null) return;

    todoTarget.isCompleted = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
}

function findTodo (todoId) {
    for (const todoItem of todos) {
        if (todoItem.id === todoId) {
            return todoItem;
        }
    }
    return null;
}


export default makeTodo;