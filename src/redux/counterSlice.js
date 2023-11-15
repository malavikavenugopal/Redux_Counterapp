import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice
/* A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
The reducer argument is passed to createReducer(). */({
    name:'counterApp',

    initialState:{
        value:0
    },
    //actiond mentioned  here as object
    reducers:{
        //logics to update state
        //logic to increment
        increment:(state,action)=>{
            //if it's argument function then it can only be accessed by action and value in payload
            state.value+=action.payload
        },
        //logic to decrement number
        decrement:(state,action)=>{
             state.value-=action.payload
        },
        reset:(state,action)=>{
            state.value=0
        }

    }

})

//action is required by component inorder to update store
export const {increment,decrement,reset} = counterSlice.actions

//reducer is required to store to change the state value

export default counterSlice.reducer



