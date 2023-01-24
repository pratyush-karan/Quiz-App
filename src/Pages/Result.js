import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Result({ score, setName, setSelectedCategory, setDifficulty }) {
  let navigate = useNavigate();
  const onNavigateToHome = () => {
    setName("");
    setSelectedCategory("");
    setDifficulty("");
    navigate("/");
  };
  return (
    <Container>
      <FinalScore>Final Score : {score}</FinalScore>
      <ButtonContainer>
        <StyledButton
          variant="contained"
          color="primary"
          size="large"
          onClick={onNavigateToHome}
        >
          Go To Homepage
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
}

export default Result;
const Container = styled.div`
  display: flex;
  margin-top: 150px;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  width: 30%;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const FinalScore = styled.div`
  width: fit-content;
  block-size: fit-content;
  font-size: 45px;
  border: 1px solid black;
  padding: 5px 10px;
  margin: auto;
  text-align: center;
`;
const StyledButton = styled(Button)`
  background-color: rgb(118, 181, 197);
  margin: auto;
  text-align: center;
`;
