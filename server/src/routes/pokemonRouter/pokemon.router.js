const Router = require('express').Router
const axios = require('axios')

const pokemonRouter = Router()

pokemonRouter
  .get('/', async (req, res) => {
    try {
      const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
      const pokemonData = result.data.results

      const pokemonDetails = await Promise.all(pokemonData.map(async (pokemon) => {
        const detail = await axios.get(pokemon.url)
        const species = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${detail.data.id}`)
        const evolution = await axios.get(species.data.evolution_chain.url)

        const getEvolutions = async (evolutionChain) => {
          const firstPokemonDetail = await axios.get(`https://pokeapi.co/api/v2/pokemon/${evolutionChain.species.name}`)
          const evolutions = [{
            name: evolutionChain.species.name,
            image: firstPokemonDetail.data.sprites.other['official-artwork'].front_default
          }]
          let evoData = evolutionChain.evolves_to[0]

          while (evoData) {
            const evoDetail = await axios.get(`https://pokeapi.co/api/v2/pokemon/${evoData.species.name}`)
            evolutions.push({
              name: evoData.species.name,
              image: evoDetail.data.sprites.other['official-artwork'].front_default
            })
            evoData = evoData.evolves_to[0]
          }

          return evolutions
        }

        return {
          name: pokemon.name,
          number: detail.data.id,
          types: detail.data.types.map(type => type.type.name),
          image: detail.data.sprites.other.showdown.front_default,
          imageStatic: detail.data.sprites.other['official-artwork'].front_default,
          stats: detail.data.stats.map(stat => ({
            name: stat.stat.name,
            value: stat.base_stat
          })),
          generation: species.data.generation.name,
          evolution: await getEvolutions(evolution.data.chain)
        }
      }))

      res.send({
        status: 'success',
        result: pokemonDetails
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: error.message })
    }
  })

module.exports = pokemonRouter
