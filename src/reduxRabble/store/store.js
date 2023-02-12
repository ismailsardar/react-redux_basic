import { configureStore } from "@reduxjs/toolkit";
import RabbilCounterReducer from "../state/counter/counterSlice";
import todoReducer from "../state/todo/todoSlice";

export default configureStore({
    reducer:{
        counter: RabbilCounterReducer,
        todo: todoReducer
    }
})