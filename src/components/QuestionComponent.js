import React, { useState } from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";

function QuestionComponent({
  currentQuestion,
  options,
  correctAnswer,
  onNext,
}) {
  const [error, setError] = useState("");

  return (
    <div>
      {console.log(options)}
      <QuestionNumber>
        Question : {currentQuestion.questionNumber}
      </QuestionNumber>
      <QuestionCard>
        <Question>{currentQuestion.question}</Question>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {options.map((option, index) => (
            <Grid item xs={6} key={index}>
              <Option>{option}</Option>
            </Grid>
          ))}
        </Grid>
      </QuestionCard>
    </div>
  );
}

export default QuestionComponent;

const QuestionNumber = styled.div`
  width: 50%;
  margin: auto;
  width: fit-content;
  block-size: fit-content;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

const QuestionCard = styled.div`
  //   width: 70%;
  width: fit-content;
  block-size: fit-content;
  margin: auto;
  border: 2px solid black;
  padding: 20px;
  margin-top: 20px;
`;

const Question = styled.div`
  width: fit-content;
  font-size: 20px;
  block-size: fit-content;
  margin: auto;
  margin-bottom: 7vh;
`;

const ErrorMessage = styled.div`
  color: red;
`;

const Option = styled.button`
  margin: auto;
  font-size: 18px;
  text-align: center;
  width: 100%;
`;
