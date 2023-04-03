import { useEffect, useState } from "react";
import { getPokemons, getPokemon } from "./API/API.js";
import Pokedex from "./Pokedex.jsx";
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer.jsx";

function App() {
  const total = 1281;
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(18);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(Math.ceil(total / limit));
  const [update, setUpdate] = useState(false);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(limit, offset);
      const listPokemons = data.map(async (e) => {
        return await getPokemon(e.url);
      });
      const results = await Promise.allSettled(listPokemons).then((results) => {
        return results.map((e) => {
          return e.value;
        });
      });
      setPokemons(results);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, [update]);

  useEffect(() => {
    setOffset((page - 1) * limit);
    setUpdate(!update);
  }, [page]);

  useEffect(() => {
    let newPage = Math.ceil((offset + 1) / limit);
    if (page != newPage) {
      setPage(newPage);
    } else {
      setUpdate(!update);
    }
    setPages(Math.ceil(total / limit));
  }, [limit]);

  return (
    <>
      <Header />
      <Navigation
        page={page}
        pages={pages}
        setPage={setPage}
        setLimit={setLimit}
        input={true}
      />
      <Pokedex pokemons={pokemons} />
      <Navigation page={page} pages={pages} setPage={setPage} />
      <Footer />
    </>
  );
}

export default App;
