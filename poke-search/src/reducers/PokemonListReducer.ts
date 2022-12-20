const DefaultState = {
  loading: false,
  data: [],
  caughtPokemonList: [],
  errorMsg: '',
  page: 1,
};

const PokemonListReducer = (state: any = DefaultState, action: any) => {
  switch (action.type) {
    case 'POKEMON_LIST_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: '',
        count: 0,
      };

    case 'POKEMON_LIST_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'Unable to get pokemon',
      };

    case 'POKEMON_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        page: action.payload.page,
        count: action.payload.count,
        errorMsg: '',
      };
    case 'POKEMON_LIST_CAUGHT':
      return {
        ...state,
        caughtPokemonList: action.payload,
        errorMsg: '',
      };
    case 'POKEMON_CAUGHT':
      return {
        ...state,
        caughtPokemonList: [...state.caughtPokemonList, action.pokemonName],
        errorMsg: '',
      };
    case 'POKEMON_RELEASED':
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
