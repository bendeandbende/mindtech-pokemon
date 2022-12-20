import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';

import { RootState } from '../Store';

import {
  GetCaughtPokemonList,
  GetPokemonList,
} from '../actions/pokemonActions';
import config from '../config';
import PokemonList from '../components/PokemonList';
import { TPage } from '../types';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const dispatch: any = useDispatch();
  const pokemonList = useSelector((state: RootState) => state.PokemonList);

  useEffect(() => {
    dispatch(GetCaughtPokemonList());
    _.isEmpty(pokemonList.data) && FetchData(pokemonList.page);
  }, []);

  const FetchData = (page: TPage = pokemonList.page) => {
    dispatch(GetPokemonList(page, 'All types'));
  };

  return (
    <div>
      <SearchBar />
      <PokemonList pokemonData={pokemonList.data} />
      {!_.isEmpty(pokemonList.data) &&
        pokemonList.selectedType === 'All types' && (
          <ReactPaginate
            pageCount={Math.ceil(pokemonList.count / config.PAGE_MAX)}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            initialPage={pokemonList.page - 1}
            onPageChange={(pages) => {
              if (pages.selected === pokemonList.page - 1) return; // initialPage triggers onPageChange, this is needed to avoid fetching the same data that's already in state.
              FetchData(pages.selected + 1);
            }}
            containerClassName="pagination"
          />
        )}
    </div>
  );
};

export default Home;
