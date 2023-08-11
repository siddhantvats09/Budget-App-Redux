import { createSlice } from "@reduxjs/toolkit";

const userName=createSlice({
    name : "username",
    initialState:'',
    reducers:{
        
        addname(state,action){
            console.log(action.payload)
            state=state.replace(state,"")
           return state.concat(action.payload)
        },
    }
})


export const {addname} =userName.actions;
export default userName.reducer ;