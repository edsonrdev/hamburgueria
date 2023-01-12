import { Container } from "./style";

import { useContext } from "react";
import { CartProductsContext } from "../../providers/cartProducts";
import { toast } from "react-toastify";

export const Product = ({ product }) => {
  const { cartProducts, setCartProducts } = useContext(CartProductsContext);

  const handleAddToCart = (product) => {
    const productAddedToCart = { ...product, quantity: 1 };

    const productAlreadyInTheCart = cartProducts.find(
      (cartProduct) => cartProduct.id === productAddedToCart.id
    );

    if (!productAlreadyInTheCart) {
      setCartProducts([...cartProducts, productAddedToCart]);
    } else {
      toast.error("Produto já existe no carrinho.");
    }
  };

  return (
    <Container>
      <header
        style={{
          backgroundImage: `url(${product.img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      ></header>
      <section>
        <h2>{product.name}</h2>
        <h3>{product.category}</h3>
        <span>R$ {product.price.toFixed(2)}</span>
        <button onClick={() => handleAddToCart(product)}>Adicionar</button>
      </section>
    </Container>
  );
};
