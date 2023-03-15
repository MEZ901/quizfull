import { createSlice } from "@reduxjs/toolkit";

export const ScoreCounterSlice = createSlice({
    name: 'scoreCounter',
    initialState: {
        value: {
            correctAnswer: 0,
            wrongAnswer: 0,
        },
    },
    reducers: {
        correctAnswer: (state) => {
            state.value.correctAnswer += 1;
        },
        wrongAnswer: (state) => {
            state.value.wrongAnswer += 1;
        },
        resetCorrectAnswer: (state) => {
            state.value.correctAnswer = 0;
        },
        resetWrongAnswer: (state) => {
            state.value.wrongAnswer = 0;
        },
    },
});

export const { correctAnswer, wrongAnswer, resetCorrectAnswer, resetWrongAnswer } = ScoreCounterSlice.actions;

export default ScoreCounterSlice.reducer;