import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';

import { GetPokemonList, GetPokemonTypes } from '../actions/pokemonActions';
import { RootState } from '../Store';
import Button from './UI/Button';
import { TPokemonListItems } from '../types';

const SearchBar = () => {
  const pokemonList = useSelector((state: RootState) => state.PokemonList);
  const dispatch: any = useDispatch();
  const [search, setSearch] = useState('');
  const [filteredForCaught, setFilteredForCaught] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    _.isEmpty(pokemonList.pokemonTypes) && dispatch(GetPokemonTypes());
  }, []);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value.toLowerCase());

  const pokeTypeSelectHandler = (e: any) => {
    dispatch(GetPokemonList(1, e.target.value));
  };

  const pokemonPickHandler = () => {
    navigate(`/pokemon/${search}`);
  };

  return (
    <div>
      <div className="search-bar-wrapper">
        <p>Search: </p>
        <input className="nes-input" type="text" onChange={searchHandler} />
        <Button onClick={pokemonPickHandler}>Search</Button>
        <select
          defaultValue={pokemonList.selectedType}
          onChange={pokeTypeSelectHandler}
        >
          <option>All types</option>
          {pokemonList.pokemonTypes.map((pokeType: TPokemonListItems) => (
            <option key={pokeType.name}>{pokeType.name}</option>
          ))}
        </select>
      </div>
      <label>
        <input
          type="checkbox"
          className="nes-checkbox"
          checked={filteredForCaught}
          onChange={() => {
            setFilteredForCaught(!filteredForCaught);
          }}
        />
        <span>Caught</span>
      </label>
    </div>
  );
};

export default SearchBar;
