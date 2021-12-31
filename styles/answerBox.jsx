import Styled from 'styled-components'; 

export const MainBox = Styled.div `
  border-radius: 33px;
  overflow-x: hidden;
  height: 400px;
  width: 400px;
  background: white;
  padding: 10% 10%;
  box-shadow: -1px 0px 20px 5px #2e3d5826;
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;  
  }
    h1 { 
      color: #2E3D58;
      font-family: 'Merriweather', serif;
      margin: 0;
    }
    span { 
      color: #80808067;
      font-style: italic;
      margin-top: 2rem;
      display: block;
    }
    p { 
      line-height: 1.7;
      color: #2E3D58;
      margin-top: 2rem;
    }
    a { 
      color: #69c2b4;
      font-weight: 400;
    }
    @media (max-width: 1145px) { 
      margin-top: 3rem;
      width: 100%;
        h1 { 
          font-size: 25px;
        }
    }
`