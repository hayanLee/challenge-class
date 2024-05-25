import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --bg-color : #fff;
        --border-color: rgb(230, 230, 230);
        --gray : rgb(128, 128, 128);
        --text : rgb(64, 64, 64);
        --accent-color: rgb(18, 18, 18);
        --point-color : rgb(255, 224, 127);
    }
    *{
        box-sizing: border-box;
    }
    html, body{
        height: 100%;
    }
    body{
       margin: 0;
    }
    #root{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }


`;

export default GlobalStyle;
