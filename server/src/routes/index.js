const Router = require('express').Router
const sessionRouter = require('./sessionRouter/session.router.js')
const userRouter = require('./userRouter/users.router.js')
const pokemonRouter = require('./pokemonRouter/pokemon.router.js')

const appRouter = Router()

appRouter.use('/api/session', sessionRouter)
appRouter.use('/api/users', userRouter)
appRouter.use('/api/pokemon', pokemonRouter)

module.exports = appRouter
