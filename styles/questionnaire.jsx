import styled from 'styled-components'; 

const baseColor = '#69c2b4';
export const QuestionContainer = styled.div`
  height: 100vh;
  background: ${baseColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20%;
  font-family: 'Source Sans Pro', sans-serif;
    @media (max-width: 1145px) { 
      padding: 4%;
    }
`

export const Grid = styled.div`
  background: ${baseColor};
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 70% 30%;
  width: 100%;
    @media (max-width: 1145px) { 
      display: block;
    }
`


export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #ffffff;
  background: transparent;
  width: 70%;
  padding-bottom: 0.5em;
  font-size: 29px;
  color: #fff;
  font-family: 'Source Sans Pro', sans-serif;
  display: block;
    ::placeholder { 
      color: #fff;
    }
    :focus { 
      outline: none
    }
    @media (max-width: 1145px) { 
      width: 100%;
      font-size: 19px;
    }
`

export const MainBttn = styled.button`
  color: white;
  background: #2E3D58;
  opacity: ${props => props.disabled ? 1 : 0.4};
  border: none;
  font-size: 18px;
  border-radius: 12px;
  margin-top: 2rem;
  display: flex; 
  align-items: center;
  padding: 0px 13px;
  gap: 11px;
  cursor: ${props => props.disabled ? 'pointer' : 'not-allowed'};
  transition: all 0.41s;
    :focus { 
      outline: none
    }
    @media (max-width: 1145px) { 
      font-size: 14px;
    }
  
`