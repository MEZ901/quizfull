import axios from "axios";
import { useLoaderData } from "react-router-dom";
import QuestionCard from "../components/questions/QuestionCard";
import Progress from "../components/questions/Progress";
import { Button } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SubjectIcon from '@mui/icons-material/Subject';

const Questions = () => {
    const questions = useLoaderData();
    questions.sort(() => Math.random() - 0.5);
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
                <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant="text" sx={{color: 'white'}} endIcon={<SubjectIcon />}>
                        Explanation
                    </Button>
                    <Button variant="contained" endIcon={<NavigateNextIcon />}>
                        Next question
                    </Button>
                </div>
            </div>
        </div>
    )
}

export const questionsLoader = async () => {
    // axios.get("http://localhost:4000/questions").then((response) => {
    //     return response;
    // });
    const res = await fetch('http://localhost:4000/questions');
    return res.json();
}

export default Questions;
