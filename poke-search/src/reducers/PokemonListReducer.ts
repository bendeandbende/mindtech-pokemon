const DefaultState = {
  loading: false,
  data: [],
  errorMsg: '',
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
        count: action.payload.count,
        errorMsg: '',
      };
    default:
      return state;
  }
};

export default PokemonListReducer;
