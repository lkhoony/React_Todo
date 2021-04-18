import React from 'react'

class Todo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            completedAt : ''
        }
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    toggleCheckbox(e) {
        this.props.toggleCheckbox(this.props.todo.id, e.target.checked)
        const date = new Date();
        if(e.target.checked){
            this.setState({
                completedAt : 'completed at ' + date.toLocaleTimeString()
            });
        }else{
            this.setState({
                completedAt : ''
            });
        }
    }

    deleteTodo(){
        this.props.deleteTodo(this.props.todo.id);
    }

    render() {
        return(
            <div className='mb-2 d-flex'>
                {/* input */}
                <div>
                  <input 
                    className="mr-3"
                    type="checkbox"
                    checked={this.props.todo.checked}
                    onChange={this.toggleCheckbox}
                  />
                </div>

                {/* todo text */}
                <span
                  style={{
                    marginLeft : 10,
                    textDecoration : (this.props.todo.checked ? 'line-through' : '')}}
                    className = {"ml-3 flex-grow-1 " + (this.props.todo.checked ? 'text-muted' : '')}
                >{this.props.todo.text}</span>

                {/* is completed */}
                <span
                  className="flex-grow-2"
                  style={{
                    marginRight : "10px",
                    color : "rgba(0,0,0,0.3)"
                  }}>{this.state.completedAt}</span>
                
                {/* delete button */}
                <button
                  className="btn btn-danger btn-sm"
                  onClick = {this.deleteTodo}
                  >Delete
                </button>
            </div>
        )
    }
}

export default Todo