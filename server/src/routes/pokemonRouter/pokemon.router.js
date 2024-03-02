const Router = require('express').Router
const axios = require('axios')

const pokemonRouter = Router()

pokemonRouter
  .get('/', async (req, res) => {
    try {
      const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=60')
      const pokemonData = result.data.results

      const pokemonDetails = await Promise.all(pokemonData.map(async (pokemon) => {
        const detail = await axios.get(pokemon.url)
        return {
          name: pokemon.name,
          number: detail.data.id,
          types: detail.data.types.map(type => type.type.name),
          image: detail.data.sprites.other.showdown.front_default
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
