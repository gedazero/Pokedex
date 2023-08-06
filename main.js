$(document).ready(function () {
    
    let URL = "https://pokeapi.co/api/v2/pokemon/";

    for (let i = 1; i <= 151; i++) {
        fetch(URL + i)
        .then((response) => response.json())
        .then((data => mostrarPokemon(data)))
    }
    new DataTable('#pokedex');
});

function mostrarPokemon(pokemon) {
    let tipos = pokemon.types.map((type) => `<p> Tipo ${type.type.name}</p>`);
    tipos = tipos.join('');
    div =
        `
        <tr>
        <td>#${pokemon.id}</td>
        <td>${pokemon.name}</td>
        <td>${tipos}</td>
        <td>${pokemon.height}</td>
        <td><img src="${pokemon.sprites.other["official-artwork"].front_default}" alt=""m style="width: 300px; height: 300px;"></td>
        </tr>
        `;

        $('#pokedex tbody').append(div);
};