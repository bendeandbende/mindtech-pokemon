import { combineReducers } from 'redux';
import PokemonListReducer from './PokemonListReducer';
import PokemonMultileReduer from './PokemonMultipleRecuder';

const RootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonMultileReduer,
});

export default RootReducer;
