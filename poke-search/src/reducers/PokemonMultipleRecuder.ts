import { EActions, TActions, TPokemonState } from '../types';

const DefaultState: TPokemonState = {
  loading: false,
  data: {},
  errorMsg: '',
};

const PokemonMultipleReduer = (state: any = DefaultState, action: TActions) => {
  switch (action.type) {
    case EActions.PokemonMultipleLoading:
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };

    case EActions.PokemonMultipleFail:
      return {
        ...state,
        loading: false,
        errorMsg: 'Unable to find pokemon',
      };

    case EActions.PokemonMultipleSucces:
      return {
        ...state,
        loading: false,
        errorMsg: '',
        data: {
          // instead of overwriting data, we cache the previously viewd pokemon in order to avoid fetching again (to achieve better user experience)
          ...state.data,
          [action.pokemonName as string]: action.payload,
        },
      };

    default:
      return state;
  }
};

export default PokemonMultipleReduer;
