import Card from "./Card";

function Pokedex({ pokemons }) {
  return (
    <div className="pokedex">
      {pokemons.map((e) => {
        return <Card pokemon={e} key={e.id} />;
      })}
    </div>
  );
}

export default Pokedex;
