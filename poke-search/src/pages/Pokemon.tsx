import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPokemon } from '../actions/pokemonActions';
import PokemonDetailedCard from '../components/PokemonDetailedCard';

const Pokemon = () => {
  const pokemonName: any = useParams().pokemon;
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getPokemon(pokemonName));
  }, []);

  return (
    <div className="pokemon">
      <h1>{pokemonName}</h1>
      <PokemonDetailedCard pokemonName={pokemonName} />
    </div>
  );
};

export default Pokemon;