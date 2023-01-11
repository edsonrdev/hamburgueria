import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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

    main .container > div {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 14px;
        background: red;
    }

    main .search-results {
        margin-bottom: 20px;
    }
`;
