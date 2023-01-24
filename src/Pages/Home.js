import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TextField, MenuItem } from "@mui/material";
import { useQuery, useQueryClient } from "react-query";
import categoryService from "../Services/categoryService";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Home({
  name,
  setName,
  selectedCategory,
  setSelectedCategory,
  difficulty,
  setDifficulty,
}) {
  const { data: categories, isSuccess } = useQuery("categories", () =>
    categoryService.getCategories()
  );

  let navigate = useNavigate();

  const [error, setError] = useState(false);
  const queryClient = useQueryClient();

  const handleSubmit = () => {
    if (!selectedCategory || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      navigate("/quiz");
    }
  };

  return (
    <React.Fragment>
      {isSuccess && (
        <Wrapper>
          {console.log(name, selectedCategory, difficulty)}
          <FormContainer>
            <StyledTextField
              label="Enter Your Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <StyledTextField
              select
              label="Select Category"
              variant="outlined"
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
            >
              {categories?.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </StyledTextField>
            <StyledTextField
              select
              label="Select Diffculty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              variant="outlined"
            >
              <MenuItem key="Easy" value="easy">
                Easy
              </MenuItem>
              <MenuItem key="Medium" value="medium">
                Medium
              </MenuItem>
              <MenuItem key="Hard" value="hard">
                Hard
              </MenuItem>
            </StyledTextField>
            {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
            <StyledButton
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit}
            >
              Start Quiz
            </StyledButton>
          </FormContainer>
          <StyledImage src="/quiz-app.png" />
        </Wrapper>
      )}
    </React.Fragment>
  );
}

export default Home;

const ErrorMessage = styled.div`
  color: red;
`;
const StyledButton = styled(Button)`
  background-color: rgb(118, 181, 197);
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 30px;
`;

const StyledImage = styled.img`
  width: 400px;
  height: 300px;
`;

const FormContainer = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 2%;
  padding-bottom: 2%;
`;
