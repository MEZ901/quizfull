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
            let score = (action.payload.correctAnswer * 100) / action.payload.totalQuestions
            state.value.score = score;
        },
        resetScore: (state) => {
            state.value.score = 0;
        }
    },
});

export const { username, score, resetScore } = userSlice.actions;

export default userSlice.reducer;