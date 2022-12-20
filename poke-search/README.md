# Pokémon APP

## Starting the web page

```
npm run start
```

## Features

### Searchbar

Search for a specific Pokémon.

### Filter by type

Search by Pokémon Types

### Catching Pokémon

Upon opening a Pokémon card, you can catch is, too.

### Releasing Pokémon

Opposite of catching Pokémon

### Filter by caught Pokémon

Showing caught Pokémon only

## About the code

Application was created with TypeScript, React and Redux.
API call is from pokeapi.co.

The caught Pokémon are stored in local storage so they won't go back to the wild after closing the browser. Despite that, we still store them in Redux state, storing them is sychronyzed.

### Pagination

For pagination react-pagenation was used. For performance, in pagination handler an if statement is used to avoid refetching data. Setting an initialPage property on ReactPagination triggers an onChange event, that's why it was necessarry.

Pagination is onyl used when all pokemon are fetched, otherwise they are shown on one page.
