$(document).ready(async function () {



    let URL = "https://pokeapi.co/api/v2/pokemon/?limit=150&offset=0";

    const header = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit    headers: {
        'Content-Type': 'application/json'      // 'Content-Type': 'application/x-www-form-urlencoded',
    }

    const res = await fetch(`${URL}`, header)
       .then((response) => response.json())
       .then((data => data.results))
console.log(res.map(value => fetch(value)
    .then(res => res.json())
    .then(res => res)
    ));
    // new DataTable('#pokedex');
});

// function mostrarPokemon(pokemon) {
//     let tipos = pokemon.types.map((type) => `<p> Tipo ${type.type.name}</p>`);
//     tipos = tipos.join('');
//     div =
//         `
//         <tr>
//         <td>#${pokemon.id}</td>
//         <td>${pokemon.name}</td>
//         <td>${tipos}</td>
//         <td>${pokemon.height}</td>
//         <td><img src="${pokemon.sprites.other["official-artwork"].front_default}" alt=""m style="width: 300px; height: 300px;"></td>
//         </tr>
//         `;

//     $('#pokedex tbody').append(div);
// };