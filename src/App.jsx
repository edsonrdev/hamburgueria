import { useContext } from "react";
import React from "react";

import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { MenuContainer } from "./components/MenuContainer";
import { ProductsContext } from "./providers/products";
import { SearchContext } from "./providers/search";

export const App = () => {
  const { products } = useContext(ProductsContext);
  const { search } = useContext(SearchContext);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

  let searchMessage = "";

  if (search && filteredProducts.length) {
    searchMessage = `Resultados para: ${search}`;
  } else if (search && !filteredProducts.length) {
    searchMessage = "Produto não encontrado!";
  }

  return (
    <div className="App">
      <Header />

      <main className="container">
        <h2 className="search-message">{searchMessage}</h2>

        <div>
          <MenuContainer
            products={filteredProducts.length ? filteredProducts : products}
          />
          <Cart />
        </div>
      </main>
    </div>
  );
};

export default App;
