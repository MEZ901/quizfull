import axios from "axios";
import { useLoaderData } from "react-router-dom";
import QuestionCard from "../components/questions/QuestionCard";

const Questions = () => {
    const questions = useLoaderData();
    questions.sort(() => Math.random() - 0.5);
    return (
        <div className="mt-10">
            <QuestionCard question={questions[0].question} choices={questions[0].choices} /> 
        </div>
    )
}

export const questionsLoader = async () => {
    // axios.get("http://localhost:4000/questions").then((response) => {
    //     return response;
    // });
    const res = await fetch('http://localhost:4000/questions?_sort=id&_order=asc,desc');
    return res.json();
}

export default Questions;
