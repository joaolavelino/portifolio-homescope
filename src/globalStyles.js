import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  //colors

  button {
    border:none;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    background-color: darkorange;
    border-radius: 5px;
    padding: 1rem 2rem;
    transition:0.4s;
    cursor: pointer;
    &:hover{
      background-color: #ff9d00;
    }
    &.round{
      border-radius:50%;
      width: 2rem;
      padding: 0 0 0 0 ;
    }
    &.outline{
      border: 2px solid white;
      color: white;
      background: none;
      &:hover{
        background-color: white;
        border: none;
        color:darkorange;
      }
    }
    &.white{
      background-color:white;
      border: 2px solid white;
      &:hover{
        background-color: transparent;
        border: 2px solid white;
        color:white;
      }
    }
    &.green{
      background-color: #17bebb;
    }
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  h1,h2,h3,h4,h5,h6{
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
  }

  body{
    font-family: 'Roboto', sans-serif;
  }


`;

export default GlobalStyle;
