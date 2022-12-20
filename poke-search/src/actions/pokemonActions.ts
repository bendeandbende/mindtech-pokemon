import axios from 'axios';

import config from '../config';

export const GetPokemonList = (page: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: 'POKEMON_LIST_LOADING',
    });

    const offset = page * config.PAGE_MAX - config.PAGE_MAX;

    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${config.PAGE_MAX}&offset=${offset}`
    );

    res.data.page = page;

    dispatch({
      type: 'POKEMON_LIST_SUCCESS',
      payload: res.data,
    });
  } catch (error: any) {
    dispatch({
      type: 'POKEMON_LIST_FAIL',
    });
  }
};

export const getPokemon = (pokemon: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: 'POKEMON_MULTIPLE_LOADING',
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dispatch({
      type: 'POKEMON_MULTIPLE_SUCCESS',
      payload: res.data,
      pokemonName: pokemon,
    });
  } catch (error: any) {
    dispatch({
      type: 'POKEMON_MULTIPLE_FAIL',
    });
  }
};

export const GetCaughtPokemonList = () => (dispatch: any) => {
  const caughtPokemonList: string[] = [];
  const caughtPokemonListJSON = localStorage.getItem('caughtPokemonList') ?? '';

  if (caughtPokemonListJSON) {
    caughtPokemonList.push(...JSON.parse(caughtPokemonListJSON));
  }

  dispatch({
    type: 'POKEMON_LIST_CAUGHT',
    payload: caughtPokemonList,
  });
};

export const CatchPokemon = (pokemonName: string) => (dispatch: any) => {
  if (localStorage.getItem('caughtPokemonList')?.length) {
    const caughtPokemonList = localStorage.getItem('caughtPokemonList') || '';
    const caughtPokemonListParsed = JSON.parse(caughtPokemonList);

    if (caughtPokemonListParsed.includes(pokemonName)) return;

    caughtPokemonListParsed.push(pokemonName);

    localStorage.setItem(
      'caughtPokemonList',
      JSON.stringify(caughtPokemonListParsed)
    );
  } else {
    localStorage.setItem('caughtPokemonList', JSON.stringify([pokemonName]));
  }

  dispatch({
    type: 'POKEMON_CAUGHT',
    pokemonName,
  });
};

export const ReleasePokemon = (pokemonName: string) => (dispatch: any) => {
  const caughtPokemonList = localStorage.getItem('caughtPokemonList') || '';
  const caughtPokemonListParsed = JSON.parse(caughtPokemonList);

  const caughPokemonListUpdated = caughtPokemonListParsed.filter(
    (pokemon: string) => pokemonName !== pokemon
  );

  localStorage.setItem(
    'caughtPokemonList',
    JSON.stringify(caughPokemonListUpdated)
  );

  dispatch({
    type: 'POKEMON_RELEASED',
    caughPokemonListUpdated,
  });
};
