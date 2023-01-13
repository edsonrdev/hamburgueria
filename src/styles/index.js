import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        /* branding colors */
        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;

        /* grey scale colors */
        --gray-100: #333333;
        --gray-50: #828282;
        --gray-20: #E0E0E0;
        --gray-0: #F5F5F5;

        /* feedback colors */
        --negative: #E60000;
        --warning: #FFCD07;
        --success: #168821;
        --information: #155BCB;
    }

    body {
        min-height: 100vh;
        font-family: 'Inter', sans-serif;
    }

    .container {
        width: 100%;
        max-width: 1200px;
        margin: auto;
        padding: 0 16px;
    }

    button, input {
        font-family: 'Inter', sans-serif;
    }

    main > div {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 14px;
        /* background: lightpink; */

        @media (max-width: 640px) {
            flex-direction: column;
        }
    }

    main h2.search-message {
        margin-bottom: 20px;
    }
`;
