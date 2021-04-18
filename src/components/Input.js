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
        // this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }

    addTodo(e) {
        if(e.key==='Enter' && e.target.value!==''){
            this.props.addTodo(e.target.value);
            this.setState({
                todoText : ''
            })
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

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(prevProps, prevState, snapshot);

        // 무한 루프에 빠지지 않도록 조건문에 작성 권장
        if(prevState.todoText !== this.state.todoText){
            console.log(this.state.todoText);
        }
    }

    render() {
        return (
            <div>
                <input 
                  className="w-100 p-2"
                  placeholder="Type todo"
                  value={this.state.todoText}
                  onChange={this.onChangeTodo}
                  onKeyUp={this.addTodo}/>
            </div>
        );
    }
}

export default Input