import { applyMiddleware, createStore } from "redux";
import todosReduser from "./services/reduser/todosReduser";
import thunk from 'redux-thunk' 

const store2 = createStore(todosReduser,applyMiddleware(thunk));

export default store2;