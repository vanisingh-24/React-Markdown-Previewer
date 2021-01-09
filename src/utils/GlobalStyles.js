import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
 body{
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Poppins", sans-serif;
    transition: all 0.50s linear;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
 }

 html{
    box-sizing: border-box;
 }

 *, *:before, *:after {
    box-sizing: inherit;
 }
`;

export default GlobalStyles;