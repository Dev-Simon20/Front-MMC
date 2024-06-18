import { createSlice } from "@reduxjs/toolkit";

const initialState={
    auth:false
 }

export const adminAuthSlice=createSlice({
    name:'adminAuth',
    initialState,
    reducers:{
        changeAuth:(state,action)=>{
            const auth=action.payload;
            state.auth=auth;
        }
}})
export const { changeAuth }=adminAuthSlice.actions;
export default adminAuthSlice.reducer
