import axios from "axios";
import { useLoaderData } from "react-router-dom";

const Questions = () => {
    const questions = useLoaderData();
    questions.sort((a, b) => Math.random() - 0.5);
    return (
        <div>
            
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
