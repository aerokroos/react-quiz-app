import React, { useState, useEffect } from "react";

import { quiz } from "../quiz";
import ChoicesList from "./ChoicesList";

export default function QuestionList() {
  const quizList = useQuiz();
  const [leftCounter, setLeftCounter] = useState(0);
  const [rightCounter, setRightCounter] = useState(1);
  const [prevButton, setPrevButton] = useState(true);
  const [nextButton, setNextButton] = useState(false);

  function prevQuestion() {
    if (leftCounter <= "0" && rightCounter <= "1") {
      setPrevButton(true);
      setNextButton(false);
    } else {
      setLeftCounter(leftCounter - 1);
      setRightCounter(rightCounter - 1);
      setPrevButton(false);
      setNextButton(false);
    }
  }

  function nextQuestion() {
    if (leftCounter >= "9" && rightCounter >= "10") {
      setNextButton(true);
      setPrevButton(false);
    } else {
      setLeftCounter(leftCounter + 1);
      setRightCounter(rightCounter + 1);
      setNextButton(false);
      setPrevButton(false);
    }
  }

  return (
    <div>
      {quizList.slice(leftCounter, rightCounter).map((quiz, key) => (
        <div key={key}>
          <h3>{quiz.question}</h3>
          <ChoicesList
            choices={quiz.choices}
            answer={quiz.answer}
            leftCounter={leftCounter}
            rightCounter={rightCounter}
          />
        </div>
      ))}
      {
        <div>
          <button disabled={prevButton} onClick={prevQuestion}>
            Prev
          </button>
          <button disabled={nextButton} onClick={nextQuestion}>
            Next
          </button>
        </div>
      }
    </div>
  );
}

function useQuiz() {
  const [quizList, setQuizList] = useState([]);

  useEffect(() => {
    setQuizList(quiz);
  }, [quizList]);
  return quizList;
}
