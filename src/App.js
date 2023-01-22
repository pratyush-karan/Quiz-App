import React from "react";
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
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Wrapper>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />}></Route>

            <Route path="/quiz" exact element={<Quiz />}></Route>

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
