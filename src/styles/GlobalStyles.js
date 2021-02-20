import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
      }
      *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
      }
      :root{
          --primary: #fff;
          --secundary: #f5f5f5;
          --tertiary: #595959;
          --blue: #063DFF;
          --border: #E7E7E7;
          --font: #363636;
      }
`