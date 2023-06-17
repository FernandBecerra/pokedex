function atras() {
    let pokemonId = document.pokemonKeySend.pokemonId.value
    pokemonId = (Number(pokemonId) - 1 <= 1) ? 1 : Number(pokemonId) - 1;
    getPokemon(pokemonId)
}

function sigiente() {
    let pokemonId = document.pokemonKeySend.pokemonId.value
    pokemonId = (Number(pokemonId) + 1 >= 898) ? 898 : Number(pokemonId) + 1;

    getPokemon(pokemonId)
}


function getPokemon(id = 1) {

    let pokemonApi = "https://pokeapi.co/api/v2/pokemon/" + id
    let pokemonreq = new XMLHttpRequest();
    let typesreq = new XMLHttpRequest();
    pokemonreq.open("GET", pokemonApi, false)
    pokemonreq.send()
    let pokemonData = JSON.parse(pokemonreq.responseText)
    document.getElementById("pokemonId").value = pokemonData.id

    document.getElementById("name-display").innerHTML = "NOMBRE: " + pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1)
    document.getElementById("altura").innerHTML = pokemonData.height / 10 + "  metros"
    document.getElementById("peso").innerHTML = pokemonData.weight / 10 + "  kilogramos"


    const stats_base = pokemonData.stats.map(stats => stats.base_stat)

    document.getElementById("hp").innerHTML = stats_base[0]
    document.getElementById("ataque").innerHTML = stats_base[1]
    document.getElementById("defansa").innerHTML = stats_base[2]
    document.getElementById("velocidad").innerHTML = stats_base[5]
    document.getElementById("pokemonType").innerHTML = ""
    pokemonData.types.map(item => document.getElementById("pokemonType").innerHTML += `
    <ul>
  <li>${item.type.name}</li>
  
</ul> 
    `)
    document.getElementById("imgPokemon").src = pokemonData.sprites.other.dream_world.front_default



}
