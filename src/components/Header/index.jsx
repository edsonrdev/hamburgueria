import { useEffect, useContext } from "react";

import { Button } from "../Button";
import { Container } from "./style";

import { SearchContext } from "../../providers/search";

export const Header = () => {
  const { search, setSearch } = useContext(SearchContext);

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <Container>
      <div className="container">
        <h1>Hamburgueria</h1>

        <form>
          <input
            type="search"
            placeholder="Digitar pesquisa"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </Container>
  );
};
