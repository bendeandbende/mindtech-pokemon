export type TPokemonName = string;
export type TPage = number;
export type TPokemonType = string;

export type TPokemon = {};

export type TConfig = {
  API_URL: string;
  PAGE_MAX: number;
};

export type TPokemonListItems = {
  name: TPokemonName;
  url: string;
};

export type TPokemonListState = {
  loading: boolean;
  data: [];
  caughtPokemonList: [];
  errorMsg: string;
  page: TPage;
  pokemonTypes: [];
  selectedType: TPokemonType;
  showCaughtOnly: boolean;
};

export type TPokemonState = {
  loading: boolean;
  data: object;
  errorMsg: string;
};

export type TActions = {
  type: string;
  payload?: any;
  caughPokemonListUpdated?: [];
  pokemonName?: string;
  pokemonType?: string;
  count?: number;
  pokeData?: [];
  page?: TPage;
  isFilteredForCaught?: boolean;
};

export enum EActions {
  PokemonListLoading = 'POKEMON_LIST_LOADING',
  PokemonListSuccess = 'POKEMON_LIST_SUCCESS',
  PokemonListFail = 'POKEMON_LIST_FAIL',
  PokemonMultipleLoading = 'POKEMON_MULTIPLE_LOADING',
  PokemonMultipleSucces = 'POKEMON_MULTIPLE_SUCCESS',
  PokemonMultipleFail = 'POKEMON_MULTIPLE_FAIL',
  PokemonListCaught = 'POKEMON_LIST_CAUGHT',
  PokemonCaught = 'POKEMON_CAUGHT',
  PokemonReleased = 'POKEMON_RELEASED',
  PokemonTypesLoading = 'POKEMON_TYPES_LOADING',
  PokemonTypesFail = 'POKEMON_TYPES_FAIL',
  PokemonTypesSuccess = 'POKEMON_TYPES_SUCCESS',
  ToggleShowCaughtOnly = 'TOGGLE_SHOW_CAUGHT_ONLY',
}
