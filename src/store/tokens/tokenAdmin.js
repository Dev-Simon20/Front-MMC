import { createSlice } from "@reduxjs/toolkit";

const initialState={
    token:null
 }

export const tokenAdminSlice=createSlice({
    name:'tokenAdmin',
    initialState,
    reducers:{
        setToken:(state,action)=>{
            const {token}=action.payload;
            state.token=token;
        }
}})
export const { setToken }=tokenAdminSlice.actions;
export default tokenAdminSlice.reducer