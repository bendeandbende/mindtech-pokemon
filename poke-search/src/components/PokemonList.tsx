import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';

import { TPokemonListItems } from '../types';
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
          return (
            <div
              className="pokemon-item"
              key={pokemon.name}
              onClick={() => {
                navigate(`/pokemon/${pokemon.name}`);
              }}
            >
              <p>{pokemon.name}</p>
              {pokemonList.caughtPokemonList.includes(pokemon.name) && (
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
