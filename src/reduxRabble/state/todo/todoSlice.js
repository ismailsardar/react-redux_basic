import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({

    name: "todo",
    initialState:{
        value:[]
    },
    reducers:{
        addTodos:(state,action)=>{
            state.value.push(action.payload);
        },
        editeTodos:(state,action)=>{
            state.value.splice(action.payload['index'],1,action.payload['task']);
        },
        removeTodos:(state,action)=>{
            state.value.splice(action.payload,1);
        },
    }    
});

export const {addTodos,editeTodos,removeTodos}  = todoSlice.actions;
export default todoSlice.reducer;