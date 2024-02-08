const Router = require('express').Router
const homeRouter = require('./homeRouter/home.router.js')
const sessionRouter = require('./sessionRouter/session.router.js')
const signupRouter = require('./signupRouter/signup.router.js')

const appRouter = Router()

// appRouter.use('/home', homeRouter)
appRouter.use('/session', sessionRouter)
// appRouter.use('/signup', signupRouter)

module.exports = appRouter
