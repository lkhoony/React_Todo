import React from 'react'

class CompletedTodo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    numberOfCompletedTodo() {
        return this.props.todos.filter(todo=>todo.checked).length;
    }

    render() {
        return(
            <div>
                Completed todo : {this.numberOfCompletedTodo()}
            </div>
        );
    }
}

export default CompletedTodo