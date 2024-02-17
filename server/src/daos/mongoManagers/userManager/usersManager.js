const usersModel = require('../../../models/usersModel/users.model.js')

class UsersManager {
  async getUsers (value) {
    return await usersModel.find(value).lean()
  }

  async getUserById (uid) {
    return await usersModel.findOne(uid)
  }

  async createUser (value) {
    return await usersModel.create(value)
  }

  async updateUser (uid, value) {
    return await usersModel.findByIdAndUpdate(uid, value)
  }

  async deleteUser (uid, value) {
    return await usersModel.findByIdAndUpdate(uid, value)
  }
}

module.exports = UsersManager
