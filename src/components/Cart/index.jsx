import { useContext } from "react";

import { Container } from "./style";

import { CartProductsContext } from "../../providers/cartProducts";

import { Button } from "../Button";
import { CartItem } from "../CartItem";

export const Cart = () => {
  const { cartProducts, setCartProducts } = useContext(CartProductsContext);

  const cartTotal = cartProducts.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <Container>
      <header>Carrinho de compras</header>

      {!cartProducts.length ? (
        <div>
          <h2>Seu carrinho está vazio!</h2>

          <p>Adicione itens.</p>
        </div>
      ) : (
        <>
          <ul>
            {cartProducts.map((product, index) => (
              <CartItem product={product} key={index} />
            ))}
          </ul>

          <footer>
            <div>
              <span>Total:</span>
              <span>R$ {cartTotal.toFixed(2)}</span>
            </div>
            <Button
              text="Remover todos"
              color="#27AE60"
              onClick={() => setCartProducts([])}
            />
          </footer>
        </>
      )}
    </Container>
  );
};
