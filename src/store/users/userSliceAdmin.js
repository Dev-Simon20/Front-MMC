// import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cod_admin:null,
    nombre:null,
    apellido:null,
    role:null,
    token:null,
 }

export const userSlice=createSlice({
    name:'userAdmin',
    initialState,
    reducers:{
        addUserAdmin:(state,action)=>{
            const{cod_admin,nombre,apellido,role,token}=action.payload;
            state.cod_admin=cod_admin;
            state.nombre=nombre;
            state.apellido=apellido;
            state.role=role;
            state.token=token;
        }
}})
export const { addUserAdmin }=userSlice.actions;
export default userSlice.reducer



