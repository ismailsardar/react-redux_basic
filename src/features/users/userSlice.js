import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fatchUsers = createAsyncThunk('users/fatchusers', async ()=> {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
});

const userSlice = createSlice({
    name: 'users',
    initialState:{
        isLoding: false,
        users: [],
        error: null,
    },
    extraReducers:(builder)=>{
        builder.addCase(fatchUsers.pending, (state)=>{
            state.isLoding = true;
        });
        builder.addCase(fatchUsers.fulfilled, (state,action)=>{
            state.isLoding = false;
            state.users = action.payload;
            state.error = null;
        });
        builder.addCase(fatchUsers.rejected, (state,action)=>{
            state.isLoding = false;
            state.users = [];
            state.error = action.error.message;
        });
    }
});

export default userSlice.reducer;