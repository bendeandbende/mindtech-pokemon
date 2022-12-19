const DefaultState = {
  loading: false,
  data: {},
  errorMsg: '',
};

const PokemonMultipleReduer = (state: any = DefaultState, action: any) => {
  switch (action.type) {
    case 'POKEMON_MULTIPLE_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };

    case 'POKEMON_MULTIPLE_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'Unable to find pokemon',
      };

    case 'POKEMON_MULTIPLE_SUCCESS':
      return {
        ...state,
        loading: false,
        errorMsg: '',
        data: {
          // instead of overwriting data, we cache the previously viewd pokemon in order to avoid fetching again (to achieve better user experience)
          ...state.data,
          [action.pokemonName]: action.payload,
        },
      };

    default:
      return state;
  }
};

export default PokemonMultipleReduer;
