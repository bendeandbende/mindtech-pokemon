import { combineReducers } from 'redux';
import PokemonListReducer from './PokemonListReducer';
import PokemonMultipleReduer from './PokemonMultipleRecuder';

const RootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonMultipleReduer,
});

export default RootReducer;
