import React from 'react'; 
import { Grid, QuestionContainer, Input, MainBttn } from '../styles/questionnaire';
import {BiCheck} from 'react-icons/bi'
import { AnswerBox } from './AnswerBox';


//Global Functions
const HandleQuestionSubmit = (event: any) => { 
  event.preventDefault();
}

export const  Questionnaire = () => { 

  //Hooks
  const [question, setQuestion] = React.useState<string | null>();

  //component functions
  const handleQuestionChange = (event: any) => { 
    setQuestion(event.target.value)
  }
  return ( 
    <QuestionContainer>
      <Grid>
        <form onSubmit={HandleQuestionSubmit}>
          <Input 
            placeholder='Ask your question here'
            onChange={handleQuestionChange}
          />
          <MainBttn disabled={question}>
            <BiCheck fontSize='24px'/>
            <p>Press Enter To Submit</p>
          </MainBttn>
        </form>
        <AnswerBox answer=''/> 
      </Grid>
    </QuestionContainer>
  )
}