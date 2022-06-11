import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --color-cedar: #3E1D13;
  --color-mediumTurquoise: #32CED5;
  //instead of white//
  --color-alabaster:#FBFBFC;
  --color-sunsetOrange: #FD5E53;
  --font-heading: 'Bebas Neue', cursive;
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
  /* font-family: ; */
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
input, button, textarea, select {
  font: inherit;
  overflow-wrap: break-word;
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