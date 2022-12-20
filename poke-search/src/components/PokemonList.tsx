import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';

const PokemonList = () => {
  const pokemonList = useSelector((state: any) => state.PokemonList);
  const navigate = useNavigate();

  if (pokemonList.loading) {
    return <p>LOADING...</p>;
  }

  if (!_.isEmpty(pokemonList.data)) {
    return (
      <div className="list-wrapper">
        {pokemonList.data.map((pokemon: any) => {
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

  return <p>something went wrong</p>;
};

export default PokemonList;
