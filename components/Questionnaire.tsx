import React from 'react'; 
import { Grid, QuestionContainer, Input, MainBttn } from '../styles/questionnaire';
import {BiCheck} from 'react-icons/bi'
import { AnswerBox } from './AnswerBox';
import {gql, useQuery} from '@apollo/client';
import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client'
import { RestLink } from 'apollo-link-rest';
import {useRouter} from 'next/router';

//Creating A RestLink so we can pass in our headers(Auth/bearerToken)
const restLink = new RestLink({
  uri: 'https://api.m3o.com/v1/',
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
  },
});


//Creating an instance of ApolloClient and initiating cache
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
})


//Querying with GRAPHQL and listing data we are interested in getting back ie: answer, url.
const query = gql`
  query Question($input: Payload!) {
    answer(input: $input)
      @rest(type: "Answer", method: "POST", path: "answer/Question") {
      answer
      url
    }
  }
`
export const  Questionnaire = () => { 

  //Hooks
  let router = useRouter();
  const [question, setQuestion] = React.useState<string | null>();
  const [response, setResponse] = React.useState<{answer: string, url: string}>({ 
    answer: '',
    url: '',
  });


//Now this function initiate the search and communicates with the api
const initSearch = (keyWord: string) => {
  const payload = { query: keyWord }
  client.query({ query, variables: { input: payload } }).then((response) => {
    setResponse(
      {
        ...response, 
        answer: response.data.answer.answer, 
        url: response.data.answer.url,
      });
  })
}


//This helps us check if the url has a query to it and if it does we run it up! 
React.useEffect(() => {
  const urlQuery = router.asPath.split("=")[1];
  if(urlQuery) { 
    setQuestion(urlQuery);
    initSearch(urlQuery)
  }
}, [])

//component's functions
const handleQuestionChange = (event: any) => { 
  setQuestion(event.target.value)
}

const HandleQuestionSubmit = (event: any) => { 
  event.preventDefault();
  if(question) { 
    initSearch(question)
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
              value={question ? question : ''}
            />
          </form>
          <MainBttn opacity={question} onClick={HandleQuestionSubmit}>
            <BiCheck fontSize='24px'/>
            <p>Press Enter To Submit</p>
          </MainBttn>
        </div>
        <AnswerBox 
          answer={response?.answer && response?.answer } 
          url={response?.url && response?.url}
        /> 
      </Grid>
    </QuestionContainer>
  )
}
