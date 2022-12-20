import axios from 'axios';

import config from '../config';
import { EActions, TPage, TPokemonType } from '../types';

export const GetPokemonTypes = () => async (dispatch: any) => {
  try {
    dispatch({
      type: EActions.PokemonTypesLoading,
    });

    const res = await axios.get(`${config.API_URL}/type`);

    dispatch({
      type: EActions.PokemonTypesSuccess,
      payload: res.data,
    });
  } catch {
    dispatch({
      type: EActions.PokemonTypesFail,
    });
  }
};

export const GetPokemonList =
  (
    page: TPage,
    pokemonType: TPokemonType = 'All types',
    caughtOnly: boolean = false
  ) =>
  async (dispatch: any) => {
    try {
      dispatch({
        type: EActions.PokemonListLoading,
      });

      const offset = page * config.PAGE_MAX - config.PAGE_MAX;

      let isSpecificTypeQuery = false;
      let url = `${config.API_URL}/pokemon?limit=${config.PAGE_MAX}&offset=${offset}`;

      if (pokemonType !== 'All types') {
        isSpecificTypeQuery = true;
        url = `${config.API_URL}/type/${pokemonType}`;
      }

      const res = await axios.get(url);
      res.data.page = page;

      const pokemon = isSpecificTypeQuery
        ? res.data.pokemon.map((pok: any) => pok.pokemon)
        : res.data.results;

      dispatch({
        type: EActions.PokemonListSuccess,
        pokemonType,
        pokeData: pokemon,
        page: res.data?.page,
        count: res.data?.count,
      });
    } catch {
      dispatch({
        type: EActions.PokemonListFail,
      });
    }
  };

export const ToggleShowCaughtOnly =
  (isFilteredForCaught: boolean) => (dispatch: any) => {
    dispatch({
      type: EActions.ToggleShowCaughtOnly,
      isFilteredForCaught,
    });
  };

export const GetPokemon = (pokemon: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: EActions.PokemonMultipleLoading,
    });

    const res = await axios.get(`${config.API_URL}/pokemon/${pokemon}`);

    dispatch({
      type: EActions.PokemonMultipleSucces,
      payload: res.data,
      pokemonName: pokemon,
    });
  } catch {
    dispatch({
      type: EActions.PokemonMultipleFail,
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
    type: EActions.PokemonListCaught,
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
    type: EActions.PokemonCaught,
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
    type: EActions.PokemonReleased,
    caughPokemonListUpdated,
  });
};
