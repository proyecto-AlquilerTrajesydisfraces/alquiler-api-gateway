const authTypes        = require("./authTypeDefs")
const accountTypes     = require('./accountTypeDefs')
const prendaTypes      = require('./prendaTypeDefs')

const schemaArrays = [authTypes, accountTypes, prendaTypes]
module.exports    = schemaArrays