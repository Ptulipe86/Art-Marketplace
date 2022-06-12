import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --color-cedar: #3E1D13;
  --color-mediumTurquoise: #32CED5;
  --color-alabaster:#FBFBFC;
  --color-sunsetOrange: #FD5E53;
  --font-heading: 'Bebas Neue', cursive;
  --font-body: 'Amiri', serif;
}

*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  height: 100%;
}
body {
  font-family: var(--font-body);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
ol, ul {
  list-style: none;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input,textarea, select {
  font: inherit;
  overflow-wrap: break-word;
}
button{
  text-align: center;
  width: 100%;
  border-radius: 10px;
  margin: 1px;
  &:hover{
    background-color: var(--color-mediumTurquoise);
    color: var(--color-cedar);
  }
}
h1,h2{
  overflow-wrap: break-word;
  font-family: var(--font-heading);
}
p, h3, h4, h5, h6 {
  
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}

`;