import React from 'react'

class CompletedTodo extends React.Component {

    constructor(props){
        super(props);
    }

    numberOfCompletedTodo() {
        // console.log(this.props.todos);
        return this.props.todos.filter(todo=>todo.checked).length;
    }

    render() {
        return(
            <div 
              className="mt-3"
              style={{
                fontWeight : 'bold'
              }}>
                Completed todo : {this.numberOfCompletedTodo()}
            </div>
        );
    }
}

export default CompletedTodo