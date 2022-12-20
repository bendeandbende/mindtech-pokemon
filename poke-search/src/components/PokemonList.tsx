import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';

import { TPokemonListItems, TPokemonName } from '../types';
import { RootState } from '../Store';

import Spinner from './UI/Spinner';

const PokemonList = ({ pokemonData }: { pokemonData: TPokemonListItems[] }) => {
  const pokemonList = useSelector((state: RootState) => state.PokemonList);
  const navigate = useNavigate();

  if (pokemonList.loading) {
    return <Spinner />;
  }

  if (!_.isEmpty(pokemonData)) {
    return (
      <div className="list-wrapper">
        {pokemonData.map((pokemon: TPokemonListItems) => {
          const pokemonName = pokemon.name || pokemon;

          return (
            <div
              className="pokemon-item"
              key={pokemonName as TPokemonName}
              onClick={() => {
                navigate(`/pokemon/${pokemonName}`);
              }}
            >
              <p>{pokemonName as TPokemonName}</p>
              {pokemonList.caughtPokemonList.includes(pokemonName) && (
                <i className="nes-pokeball"></i>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  if (pokemonList.errorMsg !== '') {
    return <p>{pokemonList.errorMsg}</p>;
  }

  return <p>Something went wrong</p>;
};

export default PokemonList;
