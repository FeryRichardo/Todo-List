function generateId () {
    return +new Date();
}

function generateTodoObject (id, title, timestamp, isCompleted) {
    return {
        id,
        title,
        timestamp,
        isCompleted,
    }
};

export { generateId, generateTodoObject };