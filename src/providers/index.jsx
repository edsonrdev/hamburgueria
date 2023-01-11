import { ProductsProvider } from "./products";
import { CartProductsProvider } from "./cartProducts";
import { SearchProvider } from "./search";

export const Providers = ({ children }) => (
  <ProductsProvider>
    <CartProductsProvider>
      <SearchProvider>{children}</SearchProvider>
    </CartProductsProvider>
  </ProductsProvider>
);
