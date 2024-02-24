const bcrypt = require('bcrypt')

const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))

const isValidPassword = (password, passwordUser) => bcrypt.compareSync(password, passwordUser)

module.exports = { isValidPassword, createHash }
