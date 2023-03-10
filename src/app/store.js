import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/modal/ModalSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
    reducer: {
        modal: modalReducer,
        user: userReducer,
    },
});

export default store;