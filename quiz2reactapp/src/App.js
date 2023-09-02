import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficultly = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficultly && `&difficultly=${difficultly}`}&type=multiple`
    );

    setQuestions(data.results);
  };
  return (
    <BrowserRouter>
      <div
        className="app"
        style={{ backgroundImage: "url(./images/bgPicture.jpg)" }}
      >
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                fetchQuestions={fetchQuestions}
                name={name}
                setName={setName}
              />
            }
          ></Route>
          <Route
            path="/quiz"
            element={<Quiz name={name} questions={questions} score={score}  setScore={setScore} setQuestions={setQuestions}/>}
          ></Route>
          <Route path="/result" element={<Result />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
