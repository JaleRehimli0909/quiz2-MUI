import React, { useState } from "react";
import "./Question.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Question = ({
  currQues,
  serCurrQues,
  questions,
  setQuestions,
  score,
  setScore,
  correct,
  options,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const handleSelected = (option) => {
    if(selected === option && selected === correct){
      return 'select';
    }else if( selected === option && selected !== correct){
      return 'wrong'
    }else if(option === correct){
      return'select';
    }
  }

  const handleCheck = (option) => {
    setSelected(option);
    if( option === correct) setScore(score + 1);
    setError(false);

  }

  return (
    <div className="question">
      <h1>Question {currQues + 1}</h1>
      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}


          {
            options && 
            options.map((option, index)=>(
              <button 
              onClick={()=>{handleCheck(option)}}
             className={` singleOption ${selected && handleSelected(option)}`}
             disabled = {selected}

               key={index}>{option}</button>

            ))
          }
        </div>
      

        </div>
      </div>
    </div>
  );
};

export default Question;
