const Router = require('express').Router
const UsersManager = require('../../daos/mongoManagers/userManager/usersManager.js')

const userService = new UsersManager()
const userRouter = Router()

userRouter
  .get('/', async (req, res) => {
    try {
      const user = await userService.getUsers({ isActive: true })

      res.send({
        status: 'success',
        result: user
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: error.message })
    }
  })
  .get('/:uid', async (req, res) => {
    try {
      const { uid } = req.params
      const user = await userService.getUserById({ _id: uid })

      res.send({
        status: 'success',
        result: user
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: error.message })
    }
  })
  .put('/:uid', async (req, res) => {
    try {
      const { uid } = req.params
      const { body } = req
      const user = await userService.updateUser({ _id: uid }, body)

      res.send({
        status: 'success',
        result: user
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: error.message })
    }
  })
  .post('/', async (req, res) => {
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
  .delete('/:uid', async (req, res) => {
    try {
      const { uid } = req.params
      const user = await userService.deleteUser({ _id: uid }, { isActive: false })

      res.send({
        status: 'success',
        result: user
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: error.message })
    }
  })

module.exports = userRouter
