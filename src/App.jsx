import { useContext } from "react";

import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { MenuContainer } from "./components/MenuContainer";
import { ProductsContext } from "./providers/products";
import { SearchContext } from "./providers/search";

export const App = () => {
  const { products } = useContext(ProductsContext);
  const { search } = useContext(SearchContext);

  let filteredProducts = [];

  if (search) {
    filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="App">
      <Header />

      <main>
        <div className="container">
          <h2 className="search-results">
            {search
              ? filteredProducts.length
                ? `Resultados para: ${search}`
                : `Sem resultados para: ${search}`
              : ""}
          </h2>

          <div>
            {!search ? (
              <MenuContainer products={products} />
            ) : (
              filteredProducts.length && (
                <MenuContainer products={filteredProducts} />
              )
            )}
            <Cart />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
