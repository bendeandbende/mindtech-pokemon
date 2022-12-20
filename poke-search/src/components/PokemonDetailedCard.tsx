import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { CatchPokemon, ReleasePokemon } from '../actions/pokemonActions';
import Button from './UI/Button';
import { RootState } from '../Store';
import { TPokemonName } from '../types';
import Spinner from './UI/Spinner';
import Card from './UI/Card';

const PokemonDetailedCard = ({
  pokemonName,
}: {
  pokemonName: TPokemonName;
}) => {
  const pokemonState = useSelector((state: RootState) => state.Pokemon);
  const pokemonList = useSelector((state: RootState) => state.PokemonList);
  const dispatch: any = useDispatch();

  if (!_.isEmpty(pokemonState.data[pokemonName])) {
    const pokeData = pokemonState.data[pokemonName];

    return (
      <Card>
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
          <p>height: {pokeData.height}"</p>
          <p>weight: {pokeData.weight} lb</p>
          {pokeData.stats.map((pokemon: any) => {
            return (
              <p key={pokemon.stat.name}>
                {pokemon.stat.name}: {pokemon.base_stat}
              </p>
            );
          })}
        </div>
        <div className="item">
          <h1>Abilities</h1>
          {pokeData.abilities.map((pokemon: any) => {
            return <p key={pokemon.ability.name}>{pokemon.ability.name}</p>;
          })}
        </div>
        <Button
          onClick={() => {
            pokemonList.caughtPokemonList?.includes(pokemonName)
              ? dispatch(ReleasePokemon(pokemonName))
              : dispatch(CatchPokemon(pokemonName));
          }}
        >
          {pokemonList.caughtPokemonList?.includes(pokemonName)
            ? 'Release'
            : 'Catch'}
        </Button>
      </Card>
    );
  }

  if (pokemonState.loading) {
    return <Spinner />;
  }

  if (pokemonState.errorMsg !== '') {
    return <p>{pokemonState.errorMsg}</p>;
  }

  return <p>error getting pocket monsters</p>;
};

export default PokemonDetailedCard;
