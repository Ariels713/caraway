import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    ${"" /* Color Pallete */}
      --color-primary:hsla(23, 30%, 96%, 1.00);
      --color-secondary:hsla(0, 0%, 14%, 1.00); 
      --color-tertiary: hsla(7, 89%, 62%, 1.00);
      --color-accent: hsla(180, 92%, 26%, 1.00);
      
      --color-secondaryHover: hsla(205, 58%, 26%, 1.00);
      ${"" /* --color-gray:${(props) => props.gray}; */}
    
    ${"" /* Shadows */}
    --shadow-color: 77deg 76% 40%;
    --shadow-elevation-medium:
    0.3px 0.5px 0.5px hsl(var(--shadow-color) / 0.49),
    0.5px 1px 1px -1.4px hsl(var(--shadow-color) / 0.39),
    1.6px 3.2px 3.1px -2.9px hsl(var(--shadow-color) / 0.29),
    4.5px 9px 8.6px -4.3px hsl(var(--shadow-color) / 0.18);

    
    ${"" /* Form Shadows */}
    --form-shadow-color: 255deg 54% 44%;
    --form-shadow-elevation-medium:
      0.3px 0.5px 0.7px hsl(var(--form-shadow-color) / 0.36),
      0.8px 1.6px 2px -0.8px hsl(var(--form-shadow-color) / 0.36),
      2.1px 4.1px 5.2px -1.7px hsl(var(--form-shadow-color) / 0.36),
      5px 10px 12.6px -2.5px hsl(var(--form-shadow-color) / 0.36);

      ${"" /* Breakpoints */}
      --screen-small:640px; 
      --screen-medium:768px; 
      --screen-large:1024px;
      --xl-screen:1280px; 
      --2xl-screen: 1536px; 
  }



  @font-face {
    font-family: "Open Sans", monospace;
    src: url("/public/fonts/OpenSans-VariableFont_wdth,wght.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/* 2. Remove default margin for common elements */
body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, ul, ol, dl, dt, dd {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%
}
/*
  4. Improve the typography across the site.
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  ${"" /* Modern CSS Reset */}
  text-rendering: optimizeSpeed;
  /* 🟣 Set base font-family */
  font-family: system-ui, sans-serif;
}
/* 5. Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}
/* 6. Inherit fonts for inputs and buttons */
input, button, textarea, select {
  font: inherit;
}
/*
  7. Create a root stacking context
*/
#__next {
  isolation: isolate;
  height:100%;
}

${"" /* Modern CSS Reset Start */}

:where(ul, ol):where([role="list"]) {
  margin: 0;
  padding: 0;
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}
a:not([class]) {
  /* 🟣 Relatively sized thickness and offset */
  text-decoration-thickness: max(0.08em, 1px);
  text-underline-offset: 0.15em;
}

img[width] {
  height: auto;
}

.nextImage {
    width:100%; 
    height: 100%;
    object-fit: cover;
    object-position: center;
}

:target {
  scroll-margin-top: 2rem;
}

:focus {
  scroll-margin-bottom: 8vh;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}

${"" /* Utility Classes */}
 
 .layout-flex {
   --gap: 2rem;
  --wrap: wrap;

  display: flex;
  flex-wrap: var(--wrap);
  gap: var(--gap);

 }




${"" /* Modal and Backdrop Styles */}

.backdrop{
  position:absolute;
  top:0;
  left:0;
  height: 100%;
  width: 100%;
  background-color: hsla(0, 0%, 12%, .50);
  display:grid;
  place-content:center;
}

.modal {
  width: clamp(50%, 700px, 90%);
  height: min-content(50%, 300px);
  margin:auto;
  padding-inline:2rem;
  padding-block: 0; 
  display:grid;
  place-content:center;
}

.product{
    position: relative;
    width: 800px;
    min-width: 350px;
    min-height: 500px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
}

.product-img{
    width: 40%;
    height: 500px;
    background-color: var(--color-primary);
    position: relative;
    ${
      "" /* opacity: 0;
    transform: translateY(-50px);
    animation: fade-in 1s forwards 1; */
    }
}

.product-img img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    user-select: none;
}


.product-listing{
    width: 60%;
    min-height: 500px;
    height: auto;
    background-color: #fffffe;
    padding: 40px;
    display: flex;
    justify-content: center;
    color: #eae3d2;
   
}

.name{
  color:var(--color-secondary);
    font-size: 2rem;
    text-transform: capitalize;
    line-height:1.2;
}

.info{
  color:var(--color-secondary);
    font-size: 1rem;
    line-height: 2;
    margin-block:2rem;
    margin-inline: 0; 
}

.price{
  color:var(--color-secondary);
  font-size:1rem; 
  font-weight:500; 
  margin-block-end:1.5rem;

}

.btn-and-rating-box{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.rating{
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rating img{
    width: 20px;
    height: 20px;
    margin: 0 2px;
}

.btn{
    background: #eae3d2;
    color: #292929;
    border: none;
    text-transform: capitalize;
    font-size: 16px;
    padding: 10px 20px;
    cursor: pointer;
}

.btn:hover{
    background-color: #eedbaf;
}

.content {
  display: flex;
    flex-direction: column;
    justify-content: space-between;
}


`;

export default GlobalStyle;
