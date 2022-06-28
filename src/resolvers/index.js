const authResolver     = require('./authResolver')
const accountResolver  = require('./accountResolver')
const prendaResolver   = require('./prendaResolver')
const lodash           = require('lodash')

const resolvers = lodash.merge(authResolver, accountResolver, prendaResolver);
module.exports = resolvers;