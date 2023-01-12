import styled from "styled-components";

export const Container = styled.li`
  flex: 1 0 250px;
  border: 2px solid var(--gray-20);
  border-radius: 5px;
  background: var(--gray-0);
  list-style: none;

  header {
    height: 150px;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 9px;
    padding: 16px;
    background: #fff;

    h2,
    h3,
    span {
      font-style: normal;
    }

    h2 {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;

      color: var(--grey-100);
    }

    h3 {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;

      color: var(--grey-300);
    }

    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;

      color: var(--color-primary);
    }

    button {
      color: #fff;

      width: 106px;
      height: 40px;

      background: var(--color-primary);
      border: 2px solid var(--color-primary);
      border-radius: 8px;
    }
  }
`;
