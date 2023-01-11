import styled from "styled-components";

export const Container = styled.button`
  background: ${({ color }) => (color ? color : "#E0E0E0")};
`;
