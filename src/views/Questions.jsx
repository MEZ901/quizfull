import axios from "axios";
import { useLoaderData } from "react-router-dom";
import QuestionCard from "../components/questions/QuestionCard";
import Progress from "../components/questions/Progress";
import { Button } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SubjectIcon from '@mui/icons-material/Subject';
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import ExplanationModal from "../components/questions/ExplanationModal";
import { useDispatch } from "react-redux";
import { modalToggle } from "../features/modal/ExplanationModalSlice";
import { newActiveStep } from '../features/stepper/ActiveSlice';
import { newCompleted } from '../features/stepper/CompletedSlice';
import { selectToggle } from "../features/quiz/SelectSlice";

const Questions = () => {
    const questions = useLoaderData();
    useMemo(() => questions.sort(() => Math.random() - 0.5), [questions]);
    const select = useSelector(state => state.selectChoice.value);
    const dispatch = useDispatch();
    const [index, setIndex] = useState(0);
    const activeStep = useSelector(state => state.activeStep.value);
    const progress = (index * 100) / questions.length;
    const showResult = () => {
        dispatch(newCompleted(activeStep));
        dispatch(newActiveStep());
    }
    
    return (
        <div>
            <div className="my-10 min-h-[300px]">
                <QuestionCard question={questions[index]}/> 
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center">
                    <p className="font-semibold text-white mr-3">Your Progress: </p>
                    <Progress value={progress} />
                </div>
                <div className={`${select ? 'flex' : 'hidden'} flex-col sm:flex-row gap-2`}>
                    <Button variant="text" sx={{color: 'white'}} endIcon={<SubjectIcon />} onClick={() => { dispatch(modalToggle()) }}>
                        Explanation
                    </Button>
                    <Button variant="contained" endIcon={<NavigateNextIcon />} onClick={() => { index < questions.length - 1 ? setIndex((prev) => prev + 1) : showResult(); dispatch(selectToggle()) }}>
                        {index < questions.length - 1 ? 'Next question' : 'Finish the quiz'}
                    </Button>
                </div>
                    <ExplanationModal explanation={questions[index].explanation} />
            </div>
        </div>
    )
}

export const questionsLoader = async () => {
    const res = await fetch('http://localhost:4000/questions');
    return res.json();
}

export default Questions;
