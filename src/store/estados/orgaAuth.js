import { createSlice } from "@reduxjs/toolkit";

const initialState={
    auth:false
 }

export const OrgaAuthSlice=createSlice({
    name:'orgaAuth',
    initialState,
    reducers:{
        changeAuthOrg:(state,action)=>{
            const auth=action.payload;
            state.auth=auth;
        }
}})
export const { changeAuthOrg }=OrgaAuthSlice.actions;
export default OrgaAuthSlice.reducer