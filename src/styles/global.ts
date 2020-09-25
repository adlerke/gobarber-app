import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
body {
    background: #312e38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    animation: fadein 0.6s linear;

}

body,input,button{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
}
h1,h2,h3,h4,h5,h6,strong {
    font-weight: 500;
}
button{
    cursor: pointer;
}

@keyframes fadein{

  from {
    opacity: 0;
  }

  to {
    opacity: 1;

  }
}

`;
