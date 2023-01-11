import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  header {
    flex: 0 0 70px;
    height: 70px;
    background: #e0e0e0;
    border-radius: 5px;
  }

  img {
    width: 100%;
  }

  section {
    flex: 1;
    position: relative;
    padding: 0 10px;
    /* background-color: lime; */
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 0.1;
    /* background: red; */
    color: #333;
  }

  h3,
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */

    /* grey-300 */

    color: #828282;
  }

  span {
    font-weight: 700;
    color: #27ae60;
  }

  div {
    position: absolute;
    right: 10px;
    bottom: 0;

    height: 22px;

    /* background: red; */

    display: flex;
    gap: 4px;

    input {
      width: 48px;
      padding: 0;
      text-align: center;
      font-size: 12px;
      border: 1px solid #d8d8d8;
      border-radius: 3px;
    }

    button {
      width: 22px;
      border-radius: 50%;
      border: 0;
      background: #27ae60;

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        color: #fff;
      }
    }
  }
`;
