const { gql } = require('apollo-server');

const authTypes = gql `
    type Tokens {
        refresh:String!
        access :String!
    }
    type Access {
        access:String!
    }
    input Refresh {
        refresh:String!
    }
    input CredentialsInput {
        username:String!
        password:String!
    }
    input SignUpInput {
        username:String!
        password:String!
        nombre  :String!
        email   :String!
        telefono:Int!
    }
    type UserDetail{
        id      :Int!
        username:String!
        nombre  :String!
        email   :String!
        telefono:String!
    }
    input UserUpdate{
        id:Int!
        password:String!
        nombre:String!
    }
    type Query {
        userDetailById(userId:Int!)   :UserDetail!

    }
    type Mutation{
        signUpUser(userInput:SignUpInput)   :Tokens!
        logIn(credentials:CredentialsInput!):Tokens!
        refreshToken(token:Refresh!)        :Access!
        updateUser(user:UserUpdate!)        :UserDetail!
        deleteUser(userId:Int!)             :String!
    }
`;
module.exports = authTypes;