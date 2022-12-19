import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { GetPokemonList } from '../actions/pokemonActions';
import { Link, Route, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import config from '../config';

const PokemonList = (props: any) => {
  const [search, setSearch] = useState('');
  const dispatch: any = useDispatch();
  const pokemonList = useSelector((state: any) => state.PokemonList);

  const navigate = useNavigate();

  useEffect(() => {
    FetchData(1);
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };

  const ShowData = () => {
    if (pokemonList.loading) {
      return <p>LOADING...</p>;
    }

    if (!_.isEmpty(pokemonList.data)) {
      return (
        <div className="list-wrapper">
          {pokemonList.data.map((pokemon: any) => {
            return (
              <div
                className="pokemon-item"
                key={pokemon.name}
                onClick={() => {
                  navigate(`/pokemon/${pokemon.name}`);
                }}
              >
                <p>{pokemon.name}</p>
              </div>
            );
          })}
        </div>
      );
    }

    if (pokemonList.errorMsg !== '') {
      return <p>{pokemonList.errorMsg}</p>;
    }

    return <p>something went wrong</p>;
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
      <ShowData />
      {!_.isEmpty(pokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / config.PAGE_MAX)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(pages) => FetchData(pages.selected + 1)}
          containerClassName="pagination"
        />
      )}
    </div>
  );
};

export default PokemonList;
