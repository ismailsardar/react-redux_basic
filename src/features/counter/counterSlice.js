import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {count: 0},
    reducers:{
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementBy5: (state) => {
            state.count += 5;
        },
    }
});

export const {increment, decrement,reset,incrementBy5} = counterSlice.actions;

export default counterSlice.reducer;