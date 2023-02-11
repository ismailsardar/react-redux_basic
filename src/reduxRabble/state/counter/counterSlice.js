import { createSlice } from "@reduxjs/toolkit";

export const RabbilCounterSlice = createSlice({
    name: "counter",
    initialState:{count: 0},
    reducers:{
        increment:(state)=>{
            state.count += 1;
        },
        decrement:(state)=>{
            state.count -= 1;
        },
        coustom:(state,action)=>{
            state.count += action.payload;
        }
    }
});

export const {increment,decrement,coustom} = RabbilCounterSlice.actions;
export default RabbilCounterSlice.reducer;