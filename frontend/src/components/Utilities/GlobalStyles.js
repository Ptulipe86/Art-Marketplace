import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --color-cedar: #3E1D13;
  --color-mediumTurquoise: #32CED5;
  --color-alabaster:#FBFBFC;
  --color-sunsetOrange: #FD5E53;
  --font-heading: 'Bebas Neue', cursive;
  --font-body: 'Amiri', serif;
  --gradient: radial-gradient(circle, rgba(251,251,252,1) 5%, rgba(253,94,83,1) 39%, rgba(50,206,213,1) 78%, rgba(62,29,19,1) 97%);
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
  color: var(--color-cedar);
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
a{
  text-decoration: none;
}
button{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  border: 2px solid var(--color-alabaster) ;
  margin: 1px;
  background-color: var(--color-alabaster);
  color: var(--color-cedar);
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