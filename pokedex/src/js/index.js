const listaSelecaoPokemos = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelector('.pokemon-card')

listaSelecaoPokemos.forEach(pokemon =>{

    pokemon.addEventListener('click',() =>{

        const cartaoPokemonAberto = document.querySelector('.open')
        cartaoPokemonAberto.classList.remove('open')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idCartaoPokemonParaAbrir = idPokemonSelecionado + '-card'
        const CartaoPokemonParaAbrir = document.getElementById(idCartaoPokemonParaAbrir)
        CartaoPokemonParaAbrir.classList.add('open')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const PokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        PokemonSelecionadoNaListagem.classList.add('ativo')



    })
})