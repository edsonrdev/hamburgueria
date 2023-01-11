import { Container } from "./style";
import { Product } from "../Product";

export const MenuContainer = ({ products }) => {
  return (
    <Container>
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </Container>
  );
};
