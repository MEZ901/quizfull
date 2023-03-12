import { createSlice } from "@reduxjs/toolkit";

export const activeSlice = createSlice({
    name: "active",
    initialState: {
        value: 0
    },
    reducers: {
        newActiveStep: state => {
            state.value += 1;
        },
        resetActiveStep: state => {
            state.value = 0;
        }
    }
});

export const { newActiveStep, resetActiveStep } = activeSlice.actions;

export default activeSlice.reducer;