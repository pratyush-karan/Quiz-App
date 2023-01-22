import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TextField, MenuItem } from "@mui/material";
import { useQuery, useQueryClient } from "react-query";
import categoryService from "../Services/categoryService";

function Home() {
  const { data: categories, isSuccess } = useQuery("categories", () =>
    categoryService.getCategories()
  );

  const [selectedCategory, setSelectedCategory] = useState(null);
  const queryClient = useQueryClient();

  return (
    <React.Fragment>
      {isSuccess && (
        <Wrapper>
          <FormContainer>
            <StyledTextField label="Enter Your Name" variant="outlined" />
            <StyledTextField select label="Select Category" variant="outlined">
              {Object.keys(categories?.data).map((category, index) => (
                <MenuItem
                  key={index}
                  value={category ? category : "Select your Category"}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </MenuItem>
              ))}
            </StyledTextField>
          </FormContainer>
          <StyledImage src="/quiz-app.png" />
        </Wrapper>
      )}
    </React.Fragment>
  );
}

export default Home;

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
