// import Todo from '@/components/Todo.js'
// import Today from '@/components/Today.js'
// import CompletedTodo from '@/components/CompletedTodo.js'
import React from 'react'
import Clock from './components/Clock'
import Input from './components/Input'
import CompletedTodo from './components/CompletedTodo'
import TodoList from './components/TodoList';
// import {todoAction} from './redux/actions';
import actions from './redux/actions';
import {connect} from 'react-redux';

class App extends React.Component{

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     todos : [
  //       {id : 1, text : 'buy a car', checked :  false, completed : ''},
  //       {id : 2, text : 'play game', checked :  false, completed : ''},
  //       {id : 3, text : 'have dinner', checked :  false, completed : ''}       
  //     ]
  //   }
  //   this.addTodo = this.addTodo.bind(this);
  //   this.toggleCheckbox = this.toggleCheckbox.bind(this);
  //   this.deleteTodo = this.deleteTodo.bind(this);
  // }

  // // Add Todo Object to todos in state
  // addTodo(todoText) {
  //   this.setState({
  //     todos : this.state.todos.concat({
  //       id : Math.random(),
  //       text : todoText,
  //       checked : false,
  //       completed : ''
  //     })
  //   });
  //   // # 해당 로그에서는 todos에 객체 요소를 추가했음에도 추가되지 않은 로그가 나옴 >> setState의 비동기 동작
  // }

  // // Toggle Checkbox 
  // toggleCheckbox(id, checked) {
  //   const { todos }  = this.state;
  //   this.setState({
  //     // map : callback이 return하는 값으로 새로운 배열을 만들어서 리턴
  //     todos : todos.map(
  //       todo => id ===todo.id 
  //         ? {...todo, checked : checked } // 기존의 todo 객체를 복사하고 checked 키를 가진 값을 checked로 설정
  //         : todo  
  //     )
  //   });
  // }

  // // Delete Todo
  // deleteTodo(id){
  //   const { todos }  = this.state;
  //   this.setState({
  //     todos : todos.filter(
  //       todo => todo.id !== id  
  //     )
  //   });
  // }

  constructor(props){
    super(props);
  }



  render() {
    return(
      <div className="container">
        <h1 className="text-center mb-3">Todo App</h1>
        <Clock />
        <Input addTodo={ this.props.addTodo }/>
        <CompletedTodo todos={this.props.todos}/>
        <hr />
        <TodoList
          deleteTodo = {this.props.deleteTodo}
          toggleTodo = {this.props.toggleTodo}
          todos = {this.props.todos}
        ></TodoList>
      </div>    
    );
  }
}

// component에서 state를 사용할 수 있게 props로 전달
const mapStateToProps = (state) => {

  return{
      // state를 사용하기 위해서 어떤 reducer의 state인지 설정해야함
      todos : state.todoReducer.todos
  };
}

// dispatch 함수를 컨포넌트에서 사용할 수 있게 함수를 props로 전달
const mapDispatchToProps = dispatch => ({
  addTodo : (todo) => dispatch(actions.todoAction.addTodo(todo)),
  deleteTodo : (id) => dispatch(actions.todoAction.deleteTodo(id)),
  toggleTodo : (id,checked) => dispatch(actions.todoAction.toggleTodo(id,checked))
  // addTodo : (todo) => dispatch(todoAction.addTodo(todo)),
  // deleteTodo : (id) => dispatch(todoAction.deleteTodo(id)),
  // toggleTodo : (id,checked) => dispatch(todoAction.toggleTodo(id,checked))  
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
