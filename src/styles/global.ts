import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
        font-family: 'Montserrat', sans-serif;
    } 

    body {
        background-color: ${(props) => props.theme.colors.primary}; 
        color: ${(props) => props.theme.colors.white};         
        @media (max-width: 720px) {
            width: 100vw;
        }
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
