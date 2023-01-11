import styled from "styled-components";

export const Container = styled.div`
  flex: 0 0 320px;
  background: #f5f5f5;

  > header {
    color: #fff;
    background: #27ae60;
    height: 65px;

    padding: 020px;
  }

  > div {
    min-height: 212px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  > ul {
    max-height: 240px;
    overflow: auto;
  }

  li {
    display: flex;
    padding: 10px;

    :not(:last-child) {
      border-bottom: 1px solid #ddd;
    }

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
      position: relative;
      padding: 0 10px;
    }

    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
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
  }

  > footer {
    padding: 10px;

    div {
      display: flex;
      justify-content: space-between;
    }

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      color: #333;
    }
  }
`;
