import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { CatchPokemon, ReleasePokemon } from '../actions/pokemonActions';

const PokemonDetailedCard = ({ pokemonName }: { pokemonName: string }) => {
  const pokemonState = useSelector((state: any) => state.Pokemon);
  const pokemonList = useSelector((state: any) => state.PokemonList);
  const dispatch: any = useDispatch();

  if (!_.isEmpty(pokemonState.data[pokemonName])) {
    const pokeData = pokemonState.data[pokemonName];

    return (
      <div className="pokemon-wrapper nes-container is-rounded">
        <div className="item">
          <h1>Pictures</h1>
          <div className="pokemon-image-container">
            <img src={pokeData.sprites.front_default} alt="" />
            <img src={pokeData.sprites.back_default} alt="" />
            <img src={pokeData.sprites.front_shiny} alt="" />
            <img src={pokeData.sprites.back_shiny} alt="" />
          </div>
        </div>
        <div className="item">
          <h1>Stats</h1>
          {pokeData.stats.map((pokemon: any) => {
            return (
              <p>
                {pokemon.stat.name}: {pokemon.base_stat}
              </p>
            );
          })}
        </div>
        <div className="item">
          <h1>Abilities</h1>
          {pokeData.abilities.map((pokemon: any) => {
            return <p>{pokemon.ability.name}</p>;
          })}
        </div>
        <button
          className="nes-btn"
          onClick={() => {
            pokemonList.caughtPokemonList?.includes(pokemonName)
              ? dispatch(ReleasePokemon(pokemonName))
              : dispatch(CatchPokemon(pokemonName));
          }}
        >
          {pokemonList.caughtPokemonList?.includes(pokemonName)
            ? 'Release'
            : 'Catch'}
        </button>
      </div>
    );
  }

  if (pokemonState.loading) {
    return <p>loading...</p>;
  }

  if (pokemonState.errorMsg !== '') {
    return <p>{pokemonState.errorMsg}</p>;
  }

  return <p>error getting pocket monsters</p>;
};

export default PokemonDetailedCard;
