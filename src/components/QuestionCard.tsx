import React from "react";
import { Question } from "../data/questions";
import "../App.css";

type Props = {
    question: Question;
    handleAnswer: (answer: string) => void;
    onPrev?: () => void;
    isFirst?: boolean;
};

const QuestionCard: React.FC<Props> = ({ question, handleAnswer, onPrev, isFirst }) => {
    return (
        <div className="question-card">
            <h3>{question.question}</h3>
            {question.options.map((option) => (
                <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="option-button"
                >
                    {option}
                </button>
            ))}
            <button
                className="prev"
                onClick={() => onPrev && onPrev()}
                disabled={!!isFirst}
            >
                Back
            </button>
        </div>
    );
};

export default QuestionCard;