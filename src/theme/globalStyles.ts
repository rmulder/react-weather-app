import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-family: "Poppins", sans-serif;
    }
    #root{
        height:100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    body{
        color: black;
    }
    h3, p{
        margin:0;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    input, button{
        font-family: "Poppins", sans-serif;
    }
`;

export default GlobalStyle;
