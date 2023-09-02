import React, { useEffect, useState } from "react";
import { CircularProgress } from '@mui/material';
import Questions from '../../components/Question/Question';
import './Quiz.css';

const Quiz = ({ name, questions, setQuestions, score, setScore }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    console.log(questions);
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answers,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions]);

  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Wellcome, {name}</span>
      {
        questions ? (
          <>
          <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>Score : {score}</span>

          </div>
          <Questions
          currQues={currQues}
          setCurrQues={setCurrQues}
          options={options}
          questions={questions}
          correct = {questions[currQues]?.correct_answers}
          score={score}
          setScore={setScore}
          setQuestions={setQuestions}
          />


       
          </>

        ): (
          <CircularProgress style={{margin: 100}}
           color="inherit"
            size={150}
            thickness={1}
            />
        )
      }
    </div>
  );
};

export default Quiz;
