import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const todos = this.props.todos;
        const todosList = todos.map(
            (todo) => <Todo 
                        key={ todo.id } todo={ todo } 
                        toggleTodo={this.props.toggleTodo} 
                        deleteTodo={this.props.deleteTodo}/>
        );
        return (
            <div>
                { todosList } 
            </div>
        );   
    }
}


export default TodoList