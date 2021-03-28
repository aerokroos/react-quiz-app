import React, { useState, useEffect } from "react";

import { quiz } from "../quiz";
import ChoicesList from "./ChoicesList";

import styled from "styled-components";

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
    <Container>
      <h1>Animal Quiz 🦓</h1>
      {quizList.slice(leftCounter, rightCounter).map((quiz, key) => (
        <ContainerCard key={key}>
          <Question>{quiz.question}</Question>
          <ChoicesList
            choices={quiz.choices}
            answer={quiz.answer}
            leftCounter={leftCounter}
            rightCounter={rightCounter}
          />
        </ContainerCard>
      ))}
      {
        <ButtonSection>
          <Button disabled={prevButton} onClick={prevQuestion}>
            Prev
          </Button>
          <Button disabled={nextButton} onClick={nextQuestion}>
            Next
          </Button>
        </ButtonSection>
      }
    </Container>
  );
}

function useQuiz() {
  const [quizList, setQuizList] = useState([]);

  useEffect(() => {
    setQuizList(quiz);
  }, [quizList]);
  return quizList;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
`;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 1em;
  background-color: #99b898;
  width: 500px;
  height: 550px;
  border-radius: 20px;
`;

const Question = styled.h2`
  color: white;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1em;
  width: 500px;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  cursor: pointer;
  padding: 0.5em;
  border: 2px solid black;
  border-radius: 5px;
`;
