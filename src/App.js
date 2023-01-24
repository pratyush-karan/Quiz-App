import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import { useQueryClient, QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default function App() {
  const [name, setName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [score, setScore] = useState(0);

  const CategoryName = (cat) => {
    switch (cat) {
      case "Arts & Literature":
        return "arts_and_literature";
      case "Film & TV":
        return "film_and_tv";
      case "Food & Drink":
        return "food_and_drink";
      case "General Knowledge":
        return "general_knowledge";
      case "Geography":
        return "geography";
      case "History":
        return "history";
      case "Music":
        return "music";
      case "Science":
        return "science";
      case "Society & Culture":
        return "society_and_culture";
      case "Sport & Leisure":
        return "sport_and_leisure";
      default:
        return null;
    }
  };
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Wrapper>
          <Header />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Home
                  name={name}
                  setName={setName}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  difficulty={difficulty}
                  setDifficulty={setDifficulty}
                />
              }
            ></Route>

            <Route
              path="/quiz"
              exact
              element={
                <Quiz
                  name={name}
                  selectedCategory={selectedCategory}
                  difficulty={difficulty}
                  CategoryName={CategoryName}
                  score={score}
                  setScore={setScore}
                />
              }
            ></Route>

            <Route path="/result" exact element={<Result />}></Route>
          </Routes>
          <Footer />
        </Wrapper>
      </Router>
    </QueryClientProvider>
  );
}

const Wrapper = styled.div`
  // background: linear-gradient(to right, #80ffdb, #5390d9);
  background: fff;
  height: 100vh;
`;
