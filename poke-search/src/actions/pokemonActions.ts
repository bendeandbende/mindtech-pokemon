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

export const GetCaughtPokemonList = (page: any) => (dispatch: any) => {
  // action for caught pokemon
};
