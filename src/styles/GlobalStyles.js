import { createGlobalStyle } from 'styled-components';

// Las fuentes ya están importadas en el index.html, no es necesario importarlas aquí
const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #f9f9f9;
    color: #333;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    color: #1a365d;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #d4af37;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #b8971f;
  }
`;

export default GlobalStyles;