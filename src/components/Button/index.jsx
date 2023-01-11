import { Container } from "./style";

export const Button = ({ text, color, ...rest }) => {
  return <Container {...rest}>{text}</Container>;
};
