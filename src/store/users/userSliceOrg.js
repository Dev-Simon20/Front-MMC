import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cod_organizador:null,
    nombre_org:null,
    director:null,
    role:null,
    token:null,
 }
export const userSliceOrg=createSlice({
    name:'userOrg',
    initialState,
    reducers:{
        addUserOrg:(state,action)=>{
            const{cod_organizador,nombre_org,director,role,token}=action.payload;
            state.cod_organizador=cod_organizador;
            state.nombre_org=nombre_org;
            state.director=director;
            state.role=role;
            state.token=token;
        }
}})
export const { addUserOrg }=userSliceOrg.actions;
export default userSliceOrg.reducer
