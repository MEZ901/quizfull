import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        value: {},
    },
    reducers: {
        username: (state, action) => {
            state.value.username = action.payload;
        },
        score: (state, action) => {
            state.value.score = action.payload;
        }
    },
});

export const { username, score } = userSlice.actions;

export default userSlice.reducer;