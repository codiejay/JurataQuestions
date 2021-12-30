import Styled from 'styled-components'; 

export const MainBox = Styled.div `
  border-radius: 33px;
  height: 400px;
  width: 400px;
  background: white;
  padding: 10% 10%;
  box-shadow: -1px 0px 20px 5px #2e3d5826;
    h1 { 
      color: #2E3D58;
    }
    span { 
      color: #80808067;
      font-style: italic;
    }
    @media (max-width: 1145px) { 
      margin-top: 3rem;
      width: 100%;
    }
`