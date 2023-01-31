import { REQUEST_FAILED, REQUEST_LODING, REQUEST_SUCCESS } from "../constant/ConstantTodo";

//initialState
const initialState = {
    isLoading: false,
    todos: [],
    error: null,
}

const todosReduser = (state=initialState, action)=>{
    switch (action.type) {
        case REQUEST_LODING:
            return{
                ...state,
                isLoading: true,
            };
        case REQUEST_SUCCESS:
            return{
                isLoading: false,
                todos: action.payload,
                error: null,
            };
        case REQUEST_FAILED:
            return{
                isLoading: false,
                todos: [],
                error: action.payload,
            };
    
        default:
            return state;
    }
}

export default todosReduser;