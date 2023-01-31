import axios from 'axios';

import { REQUEST_FAILED, REQUEST_LODING, REQUEST_SUCCESS } from "../constant/ConstantTodo";

export const getAllTodos = () => async (dispatch) => {
    dispatch({type: REQUEST_LODING});    
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        dispatch({type: REQUEST_SUCCESS, payload: res.data});
    } catch (error) {
        dispatch({type: REQUEST_FAILED, payload: error.message});
    }
}