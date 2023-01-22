import React from "react";
import styled from "styled-components";

function Footer() {
  return <Container>App made by Pratyush Karan</Container>;
}

export default Footer;

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  text-align: center;
  position: absolute;
  bottom: 0px;
  margin-left: 20%;
`;
