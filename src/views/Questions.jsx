import axios from "axios";
import { useLoaderData } from "react-router-dom";
import QuestionCard from "../components/questions/QuestionCard";
import Progress from "../components/questions/Progress";
import { Button } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SubjectIcon from '@mui/icons-material/Subject';
import { useSelector } from "react-redux";
import { useMemo } from "react";
import ExplanationModal from "../components/questions/ExplanationModal";
import { useDispatch } from "react-redux";
import { modalToggle } from "../features/modal/ExplanationModalSlice";

const Questions = () => {
    const questions = useLoaderData();
    const select = useSelector(state => state.selectChoice.value);
    const dispatch = useDispatch();
    useMemo(() => questions.sort(() => Math.random() - 0.5), [questions]);
    
    return (
        <div>
            <div className="my-10 min-h-[300px]">
                <QuestionCard question={questions[0]}/> 
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center">
                    <p className="font-semibold text-white mr-3">Your Progress: </p>
                    <Progress />
                </div>
                <div className={`${select ? 'flex' : 'hidden'} flex-col sm:flex-row gap-2`}>
                    <Button variant="text" sx={{color: 'white'}} endIcon={<SubjectIcon />} onClick={() => { dispatch(modalToggle()) }}>
                        Explanation
                    </Button>
                    <Button variant="contained" endIcon={<NavigateNextIcon />}>
                        Next question
                    </Button>

                    <ExplanationModal explanation={questions[0].explanation} />
                </div>
            </div>
        </div>
    )
}

export const questionsLoader = async () => {
    // let res = await axios.get("http://localhost:4000/questions");
    // console.log(res.json());
    const res = await fetch('http://localhost:4000/questions');
    
    return res.json();
}

export default Questions;
