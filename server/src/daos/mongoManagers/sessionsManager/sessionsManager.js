const { isValidPassword } = require('../../../config/bcrypt.config.js')
const usersModel = require('../../../models/usersModel/users.model.js')

class SessionsManager {
  async authUser (email, password) {
    const user = await usersModel.findOne({ email }).lean()

    if (user && isValidPassword(password, user.password)) {
      return user
    } else {
      return new Error('Invalid email or password')
    }
  }
}

module.exports = SessionsManager
