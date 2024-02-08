const userModel = require('../../../models/usersModel/users.model.js')

class UsersManager {
  async getUsers (value) {
    return await userModel.find(value).lean()
  }
}

module.exports = UsersManager
