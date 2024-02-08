const Router = require('express').Router
const UsersManager = require('../../daos/mongoManagers/userManager/usersManager.js')
const SessionsManager = require('../../daos/mongoManagers/sessionsManager/sessionsManager.js')

const userService = new UsersManager()
const sessionService = new SessionsManager()
const sessionRouter = Router()

sessionRouter
  .get('/login', async (req, res) => {
    try {
      const user = await userService.getUsers({ isActive: true })
      res.render('session.handlebars', { user })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: error.message })
    }
  })
  .post('/login', async (req, res) => {
    try {
      const user = await sessionService.authUser(req.body.email, req.body.password)
      console.log('Authenticated User:', user)
      if (user) {
        // res.send('Welcome!')
        req.session.user = user
        res.redirect('/')
      } else {
        // res.send('Failed!')
        res.redirect('/sessions/login')
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: error.message })
    }
  })

module.exports = sessionRouter
