//quando clicar no pokemon esconder o atual e mostrar o clicado
//pra isso trabalharemos com dois elementos: liastagem e o cartao do pokemon
//criaremos 2 variaveis
//vamos usar eventos de clique
//remover a classe "aberto" só do cartao que esta aberto
//ao clicar em um pokemon, pegaremos o id do cartao clicado
//remover a classe ativo do pokemon atual
//adicionar a classe ativo no item selecionado da lista

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        //remover a classe "aberto" só do cartao que esta aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokemon, pegaremos o id do cartao clicado
        const idPokemonSelecionado = pokemon.attributes.id.value
        let cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo do pokemon atual
        const cartaoPokemonAtivo = document.querySelector('.ativo')
        cartaoPokemonAtivo.classList.remove('ativo')

        //adicionar a classe ativo no item selecionado da lista
        let cartaoPokemonParaAtivar = document.getElementById(idPokemonSelecionado)
        cartaoPokemonParaAtivar.classList.add('ativo')

    })
})
