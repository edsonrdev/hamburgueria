import styled from "styled-components";

export const Container = styled.header`
  background: #f5f5f5;
  margin-bottom: 20px;

  .container {
    height: 80px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-weight: 900;
    font-size: 28px;
    cursor: pointer;

    background: linear-gradient(90deg, #333333 20%, #eb5757 48%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  input {
    width: 320px;
    height: 60px;
    padding: 10px;

    background: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    border: 2px solid var(--gray-20);
    border-radius: 8px;

    :focus {
      border-color: transparent;
      outline: 2px solid var(--color-primary);
    }

    ::placeholder {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      color: var(--gray-20);
    }
  }
`;
