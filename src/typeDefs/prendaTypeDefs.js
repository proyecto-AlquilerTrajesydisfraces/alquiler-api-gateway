const { gql } = require('apollo-server');

const prendaTypes = gql `
    type Prenda {
        id:String!
        username:String!
        tipoPrenda:String!
        prenda:Int!
        cantidad:Int!
        talla:String!
        fechaInicioPedido:String!
        fechaEntrega:String!
        detalles:String!
        estado:String
    }
    input PrendaInput {
        username:String!
        tipoPrenda:String!
        prenda:Int!
        cantidad:Int!
        talla:String!
        detalles:String!
    }
    input PrendaUpdate {
        id:String!
        tipoPrenda:String!
        prenda:Int!
        cantidad:Int!
        talla:String!
        detalles:String!
    }
    extend type Query{
        prendaByUsername(username:String!):[Prenda]
        prendaById(prendaId:String!):Prenda
       
    }
    extend type Mutation{
        createPrenda(prenda:PrendaInput!):Prenda
        updatePrenda(prenda:PrendaUpdate!):Prenda
        deletePrenda(prendaId:String!):String!
    }
`;
module.exports = prendaTypes;