import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import questionService from "../Services/questionService";

function Quiz({ selectedCategory, difficulty }) {
  const { data: questions } = useQuery("question-list", () =>
    questionService.getQuestions({
      categories: selectedCategory,
      limit: 10,
      difficulty: difficulty,
    })
  );
  return (
    <div>
      {console.log(questions)}
      {console.log(selectedCategory)}
    </div>
  );
}

export default Quiz;
