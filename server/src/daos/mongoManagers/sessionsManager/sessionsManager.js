const usersModel = require('../../../models/usersModel/users.model.js')

class SessionsManager {
  async authUser (email, password) {
    const user = await usersModel.findOne({ email }).lean()

    if (user && user.password === password) {
      return user
    } else {
      return null
    }
  }
}

module.exports = SessionsManager
