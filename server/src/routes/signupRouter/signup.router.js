const Router = require('express').Router
const UsersManager = require('../../daos/mongoManagers/userManager/usersManager.js')

const userService = new UsersManager()
const signupRouter = Router()

signupRouter
  .get('/signup', async (req, res) => {
    try {
      const { body } = req
      const user = await userService.createUser(body)

      res.send({
        status: 'success',
        result: user
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: error.message })
    }
  })
