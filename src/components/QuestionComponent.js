import React, { useState } from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function QuestionComponent({
  currentQuestion,
  options,
  correctAnswer,
  onNext,
  setOptions,
  setScore,
  onQuit,
}) {
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const handleSelect = (option) => {
    if (option.optionText === correctAnswer) {
      setOptions((old) => {
        return old.map((e) => {
          if (e.optionText === option.optionText) {
            return { ...e, evaluation: "correct" };
          } else {
            return { ...e, evaluation: "not-selected" };
          }
        });
      });
      setScore((prevState) => prevState + 1);
    } else {
      setOptions((old) => {
        return old.map((e) => {
          if (e.optionText === option.optionText) {
            return { ...e, evaluation: "incorrect" };
          } else if (e.optionText === correctAnswer) {
            return { ...e, evaluation: "correct" };
          } else {
            return { ...e, evaluation: "not-selected" };
          }
        });
      });
    }

    setError(null);
  };

  const handleColor = (evaluation) => {
    switch (evaluation) {
      case "correct":
        return "#0f7c23";
      case "incorrect":
        return "#b90f0f";
      case "not-selected":
        return "inherit";
      default:
        return "inherit";
    }
  };

  return (
    <React.Fragment>
      <QuestionNumber>
        Question : {currentQuestion?.questionNumber}
      </QuestionNumber>
      <QuestionCard>
        <Question>{currentQuestion?.question}</Question>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {options?.map((option, index) => (
            <Grid item xs={6} key={index}>
              <Option
                onClick={() => handleSelect(option)}
                disabled={option?.evaluation ? true : false}
                color={handleColor(option?.evaluation)}
                text={
                  option?.evaluation === "correct" ||
                  option?.evaluation === "incorrect"
                    ? "white"
                    : "black"
                }
              >
                {option.optionText}
              </Option>
            </Grid>
          ))}
        </Grid>

        <ButtonContainer>
          <StyledButton
            variant="contained"
            color="primary"
            size="large"
            onClick={onQuit}
          >
            Quit
          </StyledButton>

          <StyledButton
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              if (options[0]?.evaluation) {
                onNext();
              } else {
                setError("Please select an option");
              }
            }}
          >
            Next Question
          </StyledButton>
        </ButtonContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </QuestionCard>
    </React.Fragment>
  );
}

export default QuestionComponent;

const StyledButton = styled(Button)`
  background-color: #012d5e !important;
  width: 200px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  margin: auto;
  margin-top: 20px;
`;

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
  min-width: 500px;
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
  padding: 5px;
  background-color: ${(props) => props.color};
  color: ${(props) => props.text};
`;
