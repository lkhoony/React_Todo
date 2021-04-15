import React, {useState} from 'react'

// ------------------------------------------------------
// # function(react hooks)을 활용해서 컴포넌트 생성

// 컴포넌트 내에서 useState로 데이터 관리하기
// function Input(props) {

//     const [todoText, setTodoText] = useState('');
    
//     return(

//       <div>
//         <input
//           className="w-100 p-2"
//           placeholder="Type todo"
//           value={todoText}
//           onChange={(e)=>setTodoText(e.target.value)}/>
//       </div>

//     );

// }

// ------------------------------------------------------
// # class를 활용해서 컴포넌트 생성
class Input extends React.Component{

    constructor(props){

        super(props);
        this.state = {
            todoText : ''
        }

        this.onChangeTodo = this.onChangeTodo.bind(this); 
        // bind 하지 않으면 onChangeTodo에서 this는 undefined
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(e) {
        if(e.key==='Enter'){
            console.log(e);
            this.state.todoText = '';
        }
    }

    onChangeTodo(e) {
        this.setState({
          todoText : e.target.value
        });
    }

    render() {
        return (
            <div>
                <input 
                  className="w-100 p-2"
                  placeholder="Type todo"
                  value={this.todoText}
                  onChange={this.onChangeTodo}
                  onKeyUp={this.addTodo}/>
            </div>
        );
    }
}

export default Input