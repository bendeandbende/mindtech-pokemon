import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPokemon } from '../actions/pokemonActions';
import _ from 'lodash';

const Pokemon = (props: any) => {
  const pokemonName: any = useParams().pokemon;
  const dispatch: any = useDispatch();
  const pokemonState = useSelector((state: any) => state.Pokemon);

  useEffect(() => {
    dispatch(getPokemon(pokemonName));
  }, []);

  const ShowData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];

      return (
        <div className="pokemon-wrapper">
          <div className="item">
            <h1>Pictures</h1>
            <img src={pokeData.sprites.front_default} alt="" />
            <img src={pokeData.sprites.back_default} alt="" />
            <img src={pokeData.sprites.front_shiny} alt="" />
            <img src={pokeData.sprites.back_shiny} alt="" />
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

  return (
    <div className="pokemon">
      <h1>{pokemonName}</h1>
      <ShowData />
    </div>
  );
};

export default Pokemon;
