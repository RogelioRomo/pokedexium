const usersModel = require('../../../models/usersModel/users.model.js')
const bcryptConfig = require('../../../config/bcrypt.config.js')
class UsersManager {
  async getUsers (value) {
    return await usersModel.find(value).lean()
  }

  async getUserById (uid) {
    return await usersModel.findOne(uid)
  }

  async createUser (value) {
    value.password = bcryptConfig.createHash(value.password)
    return await usersModel.create(value)
  }

  async updateUser (uid, value) {
    if (value.password) {
      value.password = bcryptConfig.createHash(value.password)
    }
    return await usersModel.findByIdAndUpdate(uid, value, { new: true })
  }

  async deleteUser (uid, value) {
    return await usersModel.findByIdAndUpdate(uid, value)
  }
}

module.exports = UsersManager
