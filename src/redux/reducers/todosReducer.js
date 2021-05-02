import types from '../actions/actionType';

const initialState = {

    todos : [
        {id : 1, todoText : 'buy a car', checked :  false},
        {id : 2, todoText : 'play game', checked :  false},
        {id : 3, todoText : 'have dinner', checked :  false}       
    ]

}

const todoReducer = (state = initialState, action) => {

    switch(action.type){

        case types.ADD_TODO : 
            
            return{
                ...state,
                todos : [   
                            ...state.todos,
                            {
                                id : Math.random(),
                                todoText : action.todoText,
                                checked :  false
                            } 
                        ]
            };

        case types.DELETE_TODO :
            return {
                ...state,
                todos : state.todos.filter(todo=>todo.id!==action.id)
            };
        
        case types.TOGGLE_TODO :
            return {
                ...state,
                todos : state.todos.map(
                    todo => todo.id===action.id 
                        ? {...todo, checked : action.checked}
                        : todo
                )
            };

        default :
            return state;
    }
}

export default todoReducer;
