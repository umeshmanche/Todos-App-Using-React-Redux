import {createSlice} from "@reduxjs/toolkit"

const FormSlice = createSlice({
    name: "form",
    initialState: {
        display: false
    },
    reducers: {
        manageForm(state) {
            state.display = !state.display;
        }
    }
})

export const formActions = FormSlice.actions;

export default FormSlice;