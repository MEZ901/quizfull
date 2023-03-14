import { createSlice } from "@reduxjs/toolkit";

const selectSlice = createSlice({
    name: "select",
    initialState: {
        value: false,
    },
    reducers: {
        selectToggle: state => {
            state.value = !state.value;
        }
    }
});

export const { selectToggle } = selectSlice.actions;

export default selectSlice.reducer;