import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modals",
    initialState: {
        value: false,
    },
    reducers: {
        modalToggle: (state) => {
            state.value = !state.value;
        },
    }
});

export const { modalToggle } = modalSlice.actions;

export default modalSlice.reducer;