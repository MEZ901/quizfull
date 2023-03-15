import { createSlice } from "@reduxjs/toolkit";

export const authModalSlice = createSlice({
    name: "authModal",
    initialState: {
        value: false,
    },
    reducers: {
        modalToggle: (state) => {
            state.value = !state.value;
        },
    }
});

export const { modalToggle } = authModalSlice.actions;

export default authModalSlice.reducer;