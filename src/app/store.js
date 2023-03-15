import { configureStore } from "@reduxjs/toolkit";
import authModalReducer from "../features/modal/AuthModalSlice";
import userReducer from "../features/user/userSlice";
import activeStepReducer from "../features/stepper/ActiveSlice";
import completedStepsReducer from "../features/stepper/CompletedSlice";
import selectChoiceReducer from "../features/quiz/SelectSlice";
import explanationModalReducer from "../features/modal/ExplanationModalSlice"

const store = configureStore({
    reducer: {
        authModal: authModalReducer,
        user: userReducer,
        activeStep: activeStepReducer,
        completedSteps: completedStepsReducer,
        selectChoice: selectChoiceReducer, 
        explanationModal: explanationModalReducer,
    },
});

export default store;