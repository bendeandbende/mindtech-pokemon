import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetPokemon } from '../actions/pokemonActions';
import PokemonDetailedCard from '../components/PokemonDetailedCard';

const Pokemon = () => {
  const pokemonName: string | undefined = useParams().pokemon;
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, []);

  return (
    <div className="pokemon">
      <h1>{pokemonName}</h1>
      {pokemonName === undefined ? (
        ''
      ) : (
        <PokemonDetailedCard pokemonName={pokemonName} />
      )}
    </div>
  );
};

export default Pokemon;
