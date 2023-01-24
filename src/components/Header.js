import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <StyledLink to="/">Quiz App</StyledLink>
      <StyledHr />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 50px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: rgb(6, 57, 112);
`;

const StyledHr = styled.hr`
  height: 10px;
  width: 80%;
  text-align: center;
  background-color: rgb(118, 181, 197);
  border: none;
`;
