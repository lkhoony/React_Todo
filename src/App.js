// import Todo from '@/components/Todo.js'
// import Today from '@/components/Today.js'
// import CompletedTodo from '@/components/CompletedTodo.js'
import React from 'react'
import Clock from './components/Clock'
import Input from './components/Input'
import CompletedTodo from './components/CompletedTodo'

class App extends React.Component{

  constructor(props){

    super(props);
    this.state = {
      
      todos : [
        {id : 1, text : 'buy a car', checked :  false, completed : ''},
        {id : 2, text : 'play game', checked :  false, completed : ''}        
      ]
    }

  }
  render() {
    return(
      <div className="container">
        <h1 className="text-center mb-3">Todo App</h1>
        <Clock />
        <Input />
        <CompletedTodo todos={this.state.todos}/>
        <hr />
      </div>    
    );

  }

}

export default App;
