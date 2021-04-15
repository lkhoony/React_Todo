import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {

        const todos = this.props.todos;
        console.log(todos);
        const todosList = todos.map(
            (todo)=> <Todo key={ todo.id } todo={ todo }/>
        );

        return (
            <div>
                { this.todoList } 
            </div>
        );   
    }
}

export default TodoList