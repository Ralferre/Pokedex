const pokeApi = {}                      //criando um objeto chamado pokeApi

function convertePokemonApiDetalheParaPokemon(pokeDetalhe) {
    const pokemon = new Pokemon()
    pokemon.id = pokeDetalhe.id

    pokemon.name = pokeDetalhe.name

    const types = pokeDetalhe.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types                       //tem-se a lista de types
    pokemon.type = type                         //tem-se apena nome de um type

    pokemon.imagem = pokeDetalhe.sprites.other.dream_world.front_default
    pokemon.digito = `00`
    if (pokemon.id > 9) {
        pokemon.digito = `0`
    }
    if (pokemon.id > 99) {
        pokemon.digito = ``
    }
    
    pokemon.height = pokeDetalhe.height

    pokemon.weight = pokeDetalhe.weight

    const abilities = pokeDetalhe.abilities.map((abilityName) => abilityName.ability.name)
    const [ability] = abilities
    pokemon.abilities = abilities
    pokemon.ability = ability

    const stats = pokeDetalhe.stats.map((statName) => statName.stat.name)
    const [stat] = stats
    pokemon.statsName = stats                   //tem-se a lista de nomes das Stats
    pokemon.statName = stat                     //tem-se apenas um nome de Stat

    const baseStats = pokeDetalhe.stats.map((baseStat) => baseStat.base_stat)
    const [baseStat] = baseStats
    pokemon.baseStats = baseStats               //tem-se a lista de valores das Stats
    pokemon.baseStat = baseStat                 //tem-se apenas um valor de Stat

    const moves = pokeDetalhe.moves.map((moves) => moves.move.name)
    pokemon.moves = moves                       //tem-se a lista de moves
    return pokemon
}

pokeApi.getPokemonDetalhes = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json()
    .then(convertePokemonApiDetalheParaPokemon)
)}

pokeApi.getPokemons = (offset, limit) => {              //criando um método, ou seja uma função dentro de um objeto
    // const offset = 0;                                        //podemos passar esses como parâmetros da função
    // const limit = 10;                                        //por exemplo pokeApi.getpokemons = (offset = 0, limit = 0) => {}
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
        return fetch(url)
            .then((response) => response.json())
            .then((jsonBody) => jsonBody.results)
            .then((pokemons) => pokemons.map(pokeApi.getPokemonDetalhes))
            .then((detalheSolicita) => Promise.all(detalheSolicita))
            .then((detalhesPokemons) => (detalhesPokemons))
            .catch((error) => console.log(error))
}