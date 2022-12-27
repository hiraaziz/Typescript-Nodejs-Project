import {QuestionsCardType} from './Types.js'

type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
  };

export const fetchQuizQuestions=async():Promise<QuestionsCardType[]>=>{
    const fetch_data = await fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple');
    const data = await fetch_data.json()
 
    return await data.results.map((question:Question)=>({
        question:question.question,
        correct_answer:question.correct_answer,
        incorrect_answers:question.incorrect_answers
    }));
    
}