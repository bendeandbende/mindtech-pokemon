import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import {
  CatchPokemon,
  GetCaughtPokemonList,
  GetPokemonList,
} from '../actions/pokemonActions';
import config from '../config';
import PokemonList from '../components/PokemonList';

const Home = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const dispatch: any = useDispatch();
  const pokemonList = useSelector((state: any) => state.PokemonList);

  useEffect(() => {
    dispatch(GetCaughtPokemonList());
    _.isEmpty(pokemonList.data) && FetchData(pokemonList.page);
  }, []);

  const FetchData = (page = pokemonList.page) => {
    dispatch(GetPokemonList(page));
  };

  return (
    <div>
      <div className="search-bar-wrapper">
        <p>Search: </p>
        <input
          className="nes-input"
          type="text"
          onChange={(e: any) => setSearch(e.target.value)}
        />
        <button
          className="nes-btn"
          onClick={() => {
            navigate(`/pokemon/${search}`);
          }}
        >
          Search
        </button>
      </div>
      <PokemonList />
      {!_.isEmpty(pokemonList.data) && (
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
