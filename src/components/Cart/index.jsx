import { useContext } from "react";

import { Container } from "./style";

import { CartProductsContext } from "../../providers/cartProducts";

import { CartItem } from "../CartItem";

export const Cart = () => {
  const { cartProducts, setCartProducts } = useContext(CartProductsContext);

  const cartTotal = cartProducts.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <Container>
      <header>
        <h1>Carrinho de compras</h1>
      </header>

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
              <span className="total-label">Total:</span>
              <span className="total-value">R$ {cartTotal.toFixed(2)}</span>
            </div>
            <button onClick={() => setCartProducts([])}>Remover todos</button>
          </footer>
        </>
      )}
    </Container>
  );
};
