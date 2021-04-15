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
        // setstate를 불필요하게 작성하면 여러번 렌더링
        // ## 컴포넌트 생명주기 
        // >> react 생명주기는 어떤게 있고 어떻게 잔행되는지
        // react 기본적으로 제공되는 생명주기에 작성할수 있게
        // ## GNB, LNB (레이아웃을 정할때 알아야 할 것들 )
        // 하나투어 클론코딩?
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