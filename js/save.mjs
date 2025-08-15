const SAVED_EVENT = 'saved-todo';
const STORAGE_KEY = 'TODO-APPS';

function saveData () {
    if(isStorageExist()) {
        const parsed = JSON.stringify(todos);
        localStorage.setItem(STORAGE_KEY, parsed);
        document.dispatchEvent(new Event(SAVED_EVENT));
    }
} 

function isStorageExist () {
    if (typeof(Storage) !== 'undefined') {
        return true;
    } else {
        alert('Browser kamu tidak mendukung local storage');
        return false;
    }
}

export {isStorageExist, saveData, SAVED_EVENT, STORAGE_KEY};