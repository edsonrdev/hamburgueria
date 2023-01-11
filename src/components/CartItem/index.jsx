import { useContext } from "react";

import { useEffect } from "react";
import { Container } from "./style";
import { HiPlus, HiMinus } from "react-icons/hi";

import { CartProductsContext } from "../../providers/cartProducts";

export const CartItem = ({ product }) => {
  const { cartProducts, setCartProducts } = useContext(CartProductsContext);

  const remainingProducts = cartProducts.filter(
    (cartproduct) => cartproduct.id !== product.id
  );

  const handleIncreaseQtd = (product) => {
    product.quantity += 1;

    setCartProducts([...remainingProducts, product]);
  };

  const handleDecreaseQtd = (product) => {
    if (product.quantity >= 2) {
      product.quantity -= 1;

      setCartProducts([...remainingProducts, product]);
    } else {
      setCartProducts(remainingProducts);
    }
  };

  useEffect(() => {
    console.log(cartProducts);
  }, [cartProducts]);

  return (
    <Container>
      <header>
        <img src={product.img} alt={product.name} />
      </header>

      <section>
        <h2>{product.name}</h2>
        <h3>{product.category}</h3>
        <span>R$ {product.price.toFixed(2)}</span>
        <div>
          <button onClick={() => handleDecreaseQtd(product)}>
            <HiMinus />
          </button>
          <input type="text" value={product.quantity} readOnly />
          <button onClick={() => handleIncreaseQtd(product)}>
            <HiPlus />
          </button>
        </div>
      </section>
    </Container>
  );
};
