import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  //colors
  a{
    text-decoration: none;
  }

  textarea {
    display: block;
    width: 100%;
    height: 10rem;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    &:focus{
      outline: none;
    }
    
  }

  input{
  padding: 0.5rem 1rem;
  font-size: 1rem;
  text-transform: uppercase;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: .4s;
  cursor: text;
    &.outline{
      border: 2px solid white;
      color: white;
      background: none;
      &:hover{
        background-color: white;
        border: 2px solid white;
        color:darkorange;
      }
    }
  }

  select {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: .4s;
    cursor: pointer;
      &.outline{
      border: 2px solid white;
      color: white;
      background: none;
      &:hover{
        background-color: white;
        border: 2px solid white;
        color:darkorange;
      }
    }
  }


    

  
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
    color: white;
    border-radius: 5px;
    padding: 1rem 2rem;
    transition:0.4s;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.2);
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
        border: 2px solid white;
        color:darkorange;
      }
    }
    &.small{
      border-radius: 2px;
      padding: .2rem .5rem;
      font-size: 80%;
    }
    &.white{
      background-color:white;
      border: 2px solid white;
      color: black;
      &:hover{
        background-color: transparent;
        border: 2px solid white;
        color:white;
      }
    }
    &.green{
      background-color: #17bebb;
    }

    &.gray{
      background-color: gray;
      &:hover{
        background-color: darkgray;
      }
    }


    p, h5, h4, h6{
      margin-right: 1rem;
      
    }
    *{
      pointer-events: none;
    }
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  h1,h2,h3,h4,h5,h6, label, legend{
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    font-weight: bolder;
  }

  p.error{
    color: red;
  }

  legend{
    padding: 0 1rem;
  }
  label{
    font-size: 1rem;
    margin-right: 1rem;
  }

  body{
    font-family: 'Roboto', sans-serif;
    width: 100%;
  }

  main{
    margin-top: 10rem;
    width: 100%;
  }


`;

export default GlobalStyle;
