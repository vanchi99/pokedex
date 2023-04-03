function Card({ pokemon }) {
  let values = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    grass: "#78C850",
    electric: "#E0BE37",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dark: "#705848",
    dragon: "#7038F8",
    steel: "#B8B8D0",
    fairy: "#F0B6BC",
  };
  const handleOnClick = () => {
    console.log(pokemon.name);
  };
  return (
    <div className="card" onClick={handleOnClick}>
      <div className="card-number">
        <span>#{pokemon.id}</span>
      </div>
      <div>
        <img src={pokemon.sprites.front_default} className="card-image"></img>{" "}
      </div>
      <div className="card-title">
        <span>{pokemon.name.toUpperCase()}</span>
      </div>
      <div className="card-body">
        {pokemon.types.map((e, i) => {
          return (
            <div
              key={i}
              className="types"
              style={{
                backgroundColor: values[e.type.name],
              }}
            >
              {e.type.name.toUpperCase()}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
