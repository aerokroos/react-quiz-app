import React, { useState } from "react";

import styled from "styled-components";
import Result from "./Result";

export default function ChoicesList(props) {
  const [selectedOption, setSelectedOption] = useState(props.choices[0]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
    console.log(e.target.value);

    if (e.target.value === props.answer) {
      setScore(score + 1);
    }
  };

  function finish() {
    setShowResult(true);
  }

  return (
    <ChoicesListContainer>
      <Choice>
        <Input
          type="radio"
          value={props.choices[0]}
          checked={selectedOption === props.choices[0]}
          onChange={(e) => handleRadioChange(e)}
        />
        <label>{props.choices[0]}</label>
      </Choice>
      <Choice>
        <Input
          type="radio"
          value={props.choices[1]}
          checked={selectedOption === props.choices[1]}
          onChange={(e) => handleRadioChange(e)}
        />
        <label>{props.choices[1]}</label>
      </Choice>
      <Choice>
        <Input
          type="radio"
          value={props.choices[2]}
          checked={selectedOption === props.choices[2]}
          onChange={(e) => handleRadioChange(e)}
        />
        <label>{props.choices[2]}</label>
      </Choice>
      <Choice>
        <Input
          type="radio"
          value={props.choices[3]}
          checked={selectedOption === props.choices[3]}
          onChange={(e) => handleRadioChange(e)}
        />
        <label>{props.choices[3]}</label>
      </Choice>
      <FinishSection>
        {props.leftCounter >= "9" && props.rightCounter >= "10" ? (
          <ButtonFinish onClick={finish}>Finish</ButtonFinish>
        ) : (
          ""
        )}
      </FinishSection>
      <ResultContainer>
        {showResult ? <Result score={score} /> : ""}
      </ResultContainer>
    </ChoicesListContainer>
  );
}

const ChoicesListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  cursor: pointer;
`;

const Choice = styled.div`
  background-color: #fecea8;
  color: #2a363b;
  padding: 0.5em;
  border-bottom: 2px solid white;
  width: 300px;
  border-radius: 10px;
  padding: 1em 1em;
  margin-bottom: 1em;
`;

const FinishSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonFinish = styled.button`
  background-color: #e84a5f;
  color: white;
  cursor: pointer;
  padding: 0.5em;
  border: 2px solid white;
  border-radius: 5px;
`;

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
