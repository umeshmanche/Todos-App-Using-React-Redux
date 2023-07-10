import { configureStore } from "@reduxjs/toolkit";
import Formslice from "./FormSlice";
import TaskSlice from "./TodoSlice";

const Store = configureStore({
    reducer : {
        form: Formslice.reducer,
        todos: TaskSlice.reducer
    }
})

export default Store;