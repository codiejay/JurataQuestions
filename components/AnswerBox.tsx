import React from 'react'; 
import { MainBox } from '../styles/answerBox';

export const AnswerBox = ({answer} :{answer?: string}) => { 
  console.log();
  
  return ( 
    <MainBox>
      <h1>Answers:</h1>
      { 
        answer ? 
          <p>{answer}</p> : 
          <span>Your answers will display here</span>
      }
    </MainBox>
  )
};

