import { configureStore } from "@reduxjs/toolkit";
import RabbilCounterReducer from "../state/counter/counterSlice";

export default configureStore({
    reducer:{
        counter: RabbilCounterReducer
    }
})