import React from 'react'; 
import { MainBox } from '../styles/answerBox';

export const AnswerBox = (
  {answer, url} 
  :{answer: string|null, url: string
  }) => 
  
  {
  return ( 
    <MainBox>
      <h1>Answers:</h1>
      { 
        answer ? 
          <>
            {
              answer.split(' ')[0] !== 'Sorry' && <a href={url}>Read more...</a>
            }
            <p>{answer}</p> 
          </>
          : 
          <span>Your answers will display here</span>
      }
    </MainBox>
  )
};

