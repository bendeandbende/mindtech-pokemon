# Pokémon APP

## Starting the web page

```
npm run start
```

## Features

### Searchbar

### Filter by type

### Catching Pokémon

### Releasing Pokémon

### Filter by caught Pokémon

## About the code

Application was created with TypeScript, React and Redux
API call is from pokeapi.co

The caught Pokémon are stored in local storage so they won't go back to the wild after closing the browser. Dispate that, we still store them in Redux state, storing them is sychronyzed.

### Pagination

For pagination react-pagenation was used. For performance, in pagination handler an if statement is used to avoid refetching data. Setting an initialPage property on ReactPagination triggers an onChange event, that's why it was necessarry.

Pagination is onyl used when all pokemon are fetched, otherwise they are shown on one page.
