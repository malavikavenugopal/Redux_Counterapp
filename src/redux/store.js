import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";



//this recognized to be a store file it is compulsory needed to import configurestore()(it is imported from reduxjs/toolkit) .otherwise its only a  js file
export const store = configureStore({


    //reducer can only update value of state in store
    //reducer key is predefined
    //object which can hold more than one reducer

    reducer:{
       counter:counterSlice
    }
})

