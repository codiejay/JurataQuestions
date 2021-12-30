import React from 'react'; 
import { Grid, QuestionContainer, Input, MainBttn } from '../styles/questionnaire';
import {BiCheck} from 'react-icons/bi'
import { AnswerBox } from './AnswerBox';
import {gql} from '@apollo/client';
import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client'
import { RestLink } from 'apollo-link-rest'

const restLink = new RestLink({
  uri: 'https://api.m3o.com/v1/',
  headers: {
    authorization: 'Bearer ZTIxNDlkMWQtYWM2Ny00OWEwLTk5YWQtMTJkZWFjYWE5MTdk',
  },
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
})

const query = gql`
  query Question($input: Payload!) {
    answer(input: $input)
      @rest(type: "Answer", method: "POST", path: "answer/Question") {
      answer
    }
  }
`

export const  Questionnaire = () => { 

  //Hooks
  const [question, setQuestion] = React.useState<string | null>();
  const [answer, setanswer] = React.useState<string | null>();


  //component functions
  const handleQuestionChange = (event: any) => { 
    setQuestion(event.target.value)
  }

  const HandleQuestionSubmit = (event: any) => { 
    event.preventDefault();
    if(question) { 
      const payload = { query: question }
      client.query({ query, variables: { input: payload } }).then((response) => {
        console.log(response.data.answer.answer)
        setanswer(response.data.answer.answer)
      })
    }
    
  }
  return ( 
    <QuestionContainer>
      <Grid>
        <div>
          <form onSubmit={HandleQuestionSubmit}>
            <Input 
              placeholder='Ask your question here'
              onChange={handleQuestionChange}
            />
          </form>
          <MainBttn disabled={question}>
            <BiCheck fontSize='24px'/>
            <p>Press Enter To Submit</p>
          </MainBttn>
        </div>
        <AnswerBox answer={answer && answer }/> 
      </Grid>
    </QuestionContainer>
  )
}