const Router = require('express').Router
const sessionRouter = require('./sessionRouter/session.router.js')
const userRouter = require('./userRouter/users.router.js')

const appRouter = Router()

appRouter.use('/api/session', sessionRouter)
appRouter.use('/api/users', userRouter)

module.exports = appRouter
