export const getPokemons = async (limit = 20, offset = 0) => {
  try {
    const request = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    )
      .then((data) => data.json())
      .then((data) => {
        return data.results;
      });
    return request;
  } catch (err) {}
};

export const getPokemon = async (
  url = "https://pokeapi.co/api/v2/pokemon/1/"
) => {
  try {
    const request = await fetch(url)
      .then((data) => data.json())
      .then((data) => {
        return data;
      });
    return request;
  } catch (err) {}
};
