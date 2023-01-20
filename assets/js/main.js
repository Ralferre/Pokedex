const pokemonLista = document.getElementById('pokemonLista');
const carregaMais = document.getElementById('carregaMais');
const bodyModalDetalhesPokemon = document.getElementById('pokemon-detail-modal-body');
const modal = new bootstrap.Modal(document.getElementById('pokemon-detail-modal'))

const maxRegistro = 200;
const limit = 10;
let offset = 0;

function convertePokemonEmHtml(pokemon) {
    return `
            <li class="pokemon btn-pokemon-detail-modal ${pokemon.type} ${pokemon.types}" data-pokemon-id="${pokemon.id}">    
                <span class="name">${pokemon.name}</span> 
                <span class="number">#${pokemon.digito}${pokemon.id}</span> 

                 <div class="detail">
                    <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                </div>
                
                    <img src="${pokemon.imagem}"
                    alt="${pokemon.name}">
            </li>
            `
}

function carregaPokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {                     //no pokemons temos a lista capturada pelo FETCH via url
        const novoHtml = pokemons.map(convertePokemonEmHtml).join('')               //armazenamos em variável uma lista acumulada (JOIN) em html
        pokemonLista.innerHTML += novoHtml
        const elements = document.querySelectorAll('.btn-pokemon-detail-modal')
        elements.forEach(element => {
            const pokemonId = element.getAttribute('data-pokemon-id')
            element.addEventListener('click', () => {
                identifyWhichPokemonDetail(pokemons, pokemonId)
            })
        })
    })
}

function identifyWhichPokemonDetail(pokemons, pokemonId) {
    let pokemonDetalhado = []
    for (let i = 0; i < pokemons.length; i++) {
        if (pokemons[i].id === Number(pokemonId)) {
            pokemonDetalhado = pokemons[i]
            openModalDetailsPokemon(pokemonDetalhado)

        }
    }
}

function openModalDetailsPokemon(pokemonDetalhado) {
    console.log(pokemonDetalhado)
    bodyModalDetalhesPokemon.innerHTML =
        `<div id="pokemon-detail-modal-body" class="modal-body ${pokemonDetalhado.type} ${pokemonDetalhado.types}">

        <div class="row">
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="mt-2">
                            <h1>
                                ${pokemonDetalhado.name}
                            </h1>
    
                            <div class="detail">
                                <ol class="types">
                                    ${pokemonDetalhado.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                                </ol>
                            </div>

                        </div>
    
                        <ul class="list-group list-group-flush mt-4">
                            <li class="list-group-item bg-transparent">
                                Experience <b class="float-end">64</b>
                            </li>
    
                            <li class="list-group-item bg-transparent">
                                Height  <b class="float-end">${pokemonDetalhado.height}</b>
                            </li>
    
                            <li class="list-group-item bg-transparent">
                                Weight  <b class="float-end">${pokemonDetalhado.weight}</b>
                            </li>
                        </ul>
                    </div>
    
                    <div class="col-sm-6">
                        <img alt="" class="img-fluid d-block mx-auto" style="width: 300px;"
                            src=${pokemonDetalhado.imagem}>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="row mt-4">
            <div class="col-sm-12">
                <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title">
                            Abilities
                        </h4>
                    </div>
    
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <ol class="types">
                                    ${pokemonDetalhado.abilities.map((ability) => `<li class="type ${ability}">${ability}</li>`).join('')}
                            </ol>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-12">
                <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title">
                            Base Stats
                        </h4>
                    </div>
    
            <div class="modal__content-otherStats">
                <div class="modal__content-otherStat">
                    <div class="modal__content-otherStatContent"><span
                            class="modal__content-otherStatContentPower">hp</span><span
                            class="modal__content-otherStatContentValue">${pokemonDetalhado.baseStats[0]}</span></div>
                    <div class="modal__content-otherStatTimeLine">
                        <div class="modal__content-otherStatTimeLineStat"
                            style="width: ${pokemonDetalhado.baseStats[0]}%; background-color: rgb(252, 107, 110);"></div>
                    </div>
                </div>
                <div class="modal__content-otherStat">
                    <div class="modal__content-otherStatContent"><span
                            class="modal__content-otherStatContentPower">attack</span><span
                            class="modal__content-otherStatContentValue">${pokemonDetalhado.baseStats[1]}</span></div>
                    <div class="modal__content-otherStatTimeLine">
                        <div class="modal__content-otherStatTimeLineStat"
                            style="width: ${pokemonDetalhado.baseStats[1]}%; background-color: rgb(33, 150, 243);"></div>
                    </div>
                </div>
                <div class="modal__content-otherStat">
                    <div class="modal__content-otherStatContent"><span
                            class="modal__content-otherStatContentPower">defense</span><span
                            class="modal__content-otherStatContentValue">${pokemonDetalhado.baseStats[2]}</span></div>
                    <div class="modal__content-otherStatTimeLine">
                        <div class="modal__content-otherStatTimeLineStat"
                            style="width: ${pokemonDetalhado.baseStats[2]}%; background-color: rgb(9, 75, 232);"></div>
                    </div>
                </div>
                <div class="modal__content-otherStat">
                    <div class="modal__content-otherStatContent"><span
                            class="modal__content-otherStatContentPower">special-attack</span><span
                            class="modal__content-otherStatContentValue">${pokemonDetalhado.baseStats[3]}</span></div>
                    <div class="modal__content-otherStatTimeLine">
                        <div class="modal__content-otherStatTimeLineStat"
                            style="width: ${pokemonDetalhado.baseStats[3]}%; background-color: rgb(33, 150, 243);"></div>
                    </div>
                </div>
                <div class="modal__content-otherStat">
                    <div class="modal__content-otherStatContent"><span
                            class="modal__content-otherStatContentPower">special-defense</span><span
                            class="modal__content-otherStatContentValue">${pokemonDetalhado.baseStats[4]}</span></div>
                    <div class="modal__content-otherStatTimeLine">
                        <div class="modal__content-otherStatTimeLineStat"
                            style="width: ${pokemonDetalhado.baseStats[4]}%; background-color: rgb(62, 209, 224);"></div>
                    </div>
                </div>
                <div class="modal__content-otherStat">
                    <div class="modal__content-otherStatContent"><span
                            class="modal__content-otherStatContentPower">speed</span><span
                            class="modal__content-otherStatContentValue">${pokemonDetalhado.baseStats[5]}</span></div>
                    <div class="modal__content-otherStatTimeLine">
                        <div class="modal__content-otherStatTimeLineStat"
                            style="width: ${pokemonDetalhado.baseStats[5]}%; background-color: rgb(207, 155, 72);"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
                    
                </div>
            </div>
        </div>
    
    </div>
    
    </div>
    </div>
    </div>
`
    modal.show()
}


carregaPokemons(offset, limit);

carregaMais.addEventListener(`click`, () => {
    offset += limit;
    const qtdeProximaPagina = offset + limit;
    if (qtdeProximaPagina >= maxRegistro) {
        const novoLimite = maxRegistro - offset;
        carregaPokemons(offset, novoLimite)
        carregaMais.parentElement.removeChild(carregaMais)
    } else {
        carregaPokemons(offset, limit)
    }
})


