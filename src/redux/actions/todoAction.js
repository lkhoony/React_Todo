import types from './actionType.js';

const addTodo = (todoText) => ({
    type : types.ADD_TODO,
    todoText
});

const deleteTodo = (id) =>({
    type : types.DELETE_TODO,
    id : id
});

const toggleTodo = (id,checked) => ({
    type : types.TOGGLE_TODO,
    id : id,
    checked : checked
});

export default{
    addTodo,
    deleteTodo,
    toggleTodo
}