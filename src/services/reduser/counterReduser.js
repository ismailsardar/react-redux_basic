import { DECREMENT, INCREMENT, RESET } from "../constant/counterConstant";

//counter Reduser
const initailCounter = {
    count: 0,
}

//REDUSER
const counterReduser = (state=initailCounter, action)=>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return{
                ...state,
                count: state.count - 1,
            };
        case RESET:
            return{
                ...state,
                count: 0,
            };    
        default:
            return state;
    }
}

export default counterReduser;