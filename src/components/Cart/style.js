import styled from "styled-components";

export const Container = styled.div`
  flex: 0 0 320px;
  background: #f5f5f5;
  border-radius: 5px;
  overflow: hidden;

  > header {
    color: #fff;
    background: var(--color-primary);
    height: 65px;
    padding-left: 16px;

    display: flex;
    align-items: center;

    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
    }
  }

  > div {
    min-height: 212px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2,
    p {
      font-style: normal;
      line-height: 24px;
      text-align: center;
    }

    h2 {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;

      color: var(--gray-100);
    }

    p {
      font-weight: 400;
      font-size: 14px;

      color: var(--gray-50);
    }
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
      color: var(--color-primary);
    }
  }

  > footer {
    padding: 10px 10px 19px 10px;

    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      padding: 0 2px;

      span {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
      }

      span.total-label {
        color: var(--gray-100);
      }

      span.total-value {
        color: var(--gray-50);
      }
    }

    button {
      width: 100%;
      height: 60px;

      background: var(--gray-20);

      border: 2px solid var(--gray-20);
      border-radius: 8px;

      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;

      color: var(--gray-50);

      cursor: pointer;

      transition: border-color 0.2s ease-in-out, background 0.2s ease-in-out,
        color 0.2s ease-in-out;

      :hover {
        color: var(--gray-20);
        border-color: var(--gray-50);
        background: var(--gray-50);
      }
    }
  }
`;
