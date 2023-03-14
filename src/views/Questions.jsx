import axios from "axios";
import { useLoaderData } from "react-router-dom";
import QuestionCard from "../components/questions/QuestionCard";
import Progress from "../components/questions/Progress"

const Questions = () => {
    const questions = useLoaderData();
    questions.sort(() => Math.random() - 0.5);
    return (
        <div>
            <div className="my-10">
                <QuestionCard question={questions[0].question} choices={questions[0].choices} /> 
            </div>
            <div className="flex items-center">
                <p className="font-semibold text-white mr-3">Your Progress: </p>
                <Progress />
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
