import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/modal/ModalSlice";

const store = configureStore({
    reducer: {
        modal: modalReducer,
    },
});

export default store;