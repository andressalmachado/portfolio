import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`

  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Inter", sans-serif;
    background-color: #fff;
    }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
 
  /* Globals */
  button,
  a {
    text-decoration: none;
    color: inherit;
    opacity: 1;
    transition: .3s;
    cursor: pointer;
    &:hover,
    &:focus {
      opacity: .7;
    }
  }
  

`;
