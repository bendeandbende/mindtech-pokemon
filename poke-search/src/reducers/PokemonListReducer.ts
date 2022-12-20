import { EActions, TActions, TPokemonListState } from '../types';

const DefaultState: TPokemonListState = {
  loading: false,
  data: [],
  caughtPokemonList: [],
  errorMsg: '',
  page: 1,
  pokemonTypes: [],
  selectedType: 'All types',
};

const PokemonListReducer = (state: any = DefaultState, action: TActions) => {
  switch (action.type) {
    case EActions.PokemonTypesLoading:
      return {
        ...state,
        loading: true,
        errorMsg: '',
        count: 0,
      };

    case EActions.PokemonTypesFail:
      return {
        ...state,
        loading: false,
        errorMsg: 'Unable to get pokemon',
      };

    case EActions.PokemonTypesSuccess:
      return {
        ...state,
        loading: false,
        pokemonTypes: action.payload.results,
        errorMsg: '',
      };

    case EActions.PokemonListLoading:
      return {
        ...state,
        loading: true,
        errorMsg: '',
        count: 0,
      };

    case EActions.PokemonListFail:
      return {
        ...state,
        loading: false,
        errorMsg: 'Unable to get pokemon',
      };

    case EActions.PokemonListSuccess:
      return {
        ...state,
        loading: false,
        data: action.pokeData,
        page: action.page,
        count: action.count,
        selectedType: action.pokemonType,
        errorMsg: '',
      };
    case EActions.PokemonListCaught:
      return {
        ...state,
        caughtPokemonList: action.payload,
        errorMsg: '',
      };
    case EActions.PokemonCaught:
      return {
        ...state,
        caughtPokemonList: [...state.caughtPokemonList, action.pokemonName],
        errorMsg: '',
      };
    case EActions.PokemonReleased:
      return {
        ...state,
        caughtPokemonList: [action.caughPokemonListUpdated],
        errorMsg: '',
      };

    default:
      return state;
  }
};

export default PokemonListReducer;
