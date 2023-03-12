import { createSlice } from "@reduxjs/toolkit";

export const completedSlice = createSlice({
    name: "completed",
    initialState: {
        value: {}
    },
    reducers: {
        newCompleted: (state, action) => {
            state.value[action.payload] = true;
        },
        resetCompleted: state => {
            state.value = {};
        }
    }
});

export const { newCompleted, resetCompleted } = completedSlice.actions;

export default completedSlice.reducer;