import { createSlice } from "@reduxjs/toolkit";

export const explanationModalSlice = createSlice({
    name: 'explanationModal',
    initialState: {
        value: false,
    },
    reducers: {
        modalToggle: (state) => {
            state.value = !state.value;
        }
    }
});

export const { modalToggle } = explanationModalSlice.actions;

export default explanationModalSlice.reducer;