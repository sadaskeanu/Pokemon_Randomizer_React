import "./PokemonCard.css";

function PokemonCard({ pokemon }) {
  return (
    <div className="card__wrapper">
      <div className="name__hp__wrapper">
        <h3 className="pokemon__name">{pokemon.name.toUpperCase()}</h3>
        <p className="pokemon__hp">HP {pokemon.base_experience}</p>
      </div>

      <div className="pokemon__img__wrapper">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt="pockemon"
        />
      </div>
      <div className="pokemon__info__wrapper">
        <div className="id__wrapper">
          <p className="id">NO: {pokemon.id}</p>
        </div>
        <p className="pokemon__height">height: {pokemon.height}</p>
        <p className="pokemon__weight">weight: {pokemon.weight}</p>
        <p>type: {pokemon.types[0].type.name}</p>
      </div>
    </div>
  );
}

export default PokemonCard;
