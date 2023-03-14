import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/modal/ModalSlice";
import userReducer from "../features/user/userSlice";
import activeStepReducer from "../features/stepper/ActiveSlice";
import completedStepsReducer from "../features/stepper/CompletedSlice";
import selectChoiceReducer from "../features/quiz/SelectSlice"

const store = configureStore({
    reducer: {
        modal: modalReducer,
        user: userReducer,
        activeStep: activeStepReducer,
        completedSteps: completedStepsReducer,
        selectChoice: selectChoiceReducer, 
    },
});

export default store;