function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Tail whip",
  };
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      {pokeCharacteristics.type}, {pokeCharacteristics.move}
    </div>
  );
}

export default Showcase;
