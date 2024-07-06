import { configureStore } from "@reduxjs/toolkit";
import { todoReducers } from "./TodoReducer";

export const store = configureStore({
    reducer:{
        todoReducers,
    },
});