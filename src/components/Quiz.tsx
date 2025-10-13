import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import { questions } from "../data/questions";
import "../App.css";

const Quiz: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswer = (answer: string) => {
        if (answer === questions[currentIndex].answer) {
            setScore((s) => s + 1);
        }
        const nextIndex = currentIndex + 1;
        if (nextIndex < questions.length) {
            setCurrentIndex(nextIndex);
        } else {
            setShowScore(true);
        }
    };

    const handlePrev = () => {
        setCurrentIndex((i) => Math.max(0, i - 1));
    };

    return (
        <div className="quiz-container">
            {showScore ? (
                <h2>
                    Quiz Finished! Your score is {score} / {questions.length}
                </h2>
            ) : (
                <QuestionCard
                    question={questions[currentIndex]}
                    handleAnswer={handleAnswer}
                    onPrev={handlePrev}
                    isFirst={currentIndex === 0}
                />
            )}
        </div>
    );
};

export default Quiz;