const pokemonList = document.getElementById("pokemonList"); // Aqui eu estou atribuindo a variável "pokemonList" o valor do ID "pokemonList" do HTML.
const loadMoreButton = document.getElementById("loadMore");
const maxRecords = 1154;
const limit = 24;
let offset = 0;

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons
      .map(
        (pokemon) =>
          `
          <li class="pokemon ${pokemon.type}">
              <span class="number">#${pokemon.number}</span>
              <span class="name">${
                pokemon.name[0].toUpperCase() +
                pokemon.name.slice(1).toLowerCase()
              }</span>
              <div class="detail">
                  <ol class="types">
                      ${pokemon.types
                        .map(
                          (type) =>
                            `<li class="type ${type}">${
                              type[0].toUpperCase() +
                              type.slice(1).toLowerCase()
                            }</li>`
                        )
                        .join("")}
                  </ol>
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    pokemon.number
                  }.png" alt="${pokemon.name}">
              </div>
          </li>
    `
      )
      .join("");
    pokemonList.innerHTML += newHtml;
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const qtdRecordNextPage = offset + limit;

  if (qtdRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});

/*
function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemon = []) => {
    const newHtml = pokemons
      .map(
        (pokemon) =>
          ` 
          <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${
              pokemon.name[0].toUpperCase() +
              pokemon.name.slice(1).toLowerCase()
            }</span>

            <div class="detail">
                <ol class="types">
                ${pokemon.types
                  .map((type) => `<li class="type ${type}">${type}</li>`)
                  .join("")}
                </ol>

                <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
            </div>
          </li>
    `
      )
      .join("");
    pokemonList.innerHTML += newHtml;
  });
}
*/

/*
pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
  const newHtml = pokemons.map(convertPokemonToLi).join("");
  pokemonList.innerHTML += newHtml;
});
*/
