const { gql } = require('apollo-server')

const accountTypes = gql `
    type Account {
        username:String!
        prendasAlquiladas:Int!
        fechaUltimoAlquiler:String!
    }
    extend type Query{
        accountByUsername(username:String!):Account
    }
`;
module.exports = accountTypes;