const prendaResolver = {
    Query: {
        prendaByUsername: async(_, { username }, { dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if(username == usernameToken) 
                return await dataSources.accountAPI.prendasByUsername(username);
            else
                return null;
        }, 
        prendaById: async(_, { prendaId}, { dataSources, userIdToken} ) => {
            usernameToken       = (await dataSources.authAPI.getUser(userIdToken)).username
            const prenda   = await dataSources.accountAPI.prendasById( prendaId )
            usernamePrenda = prenda.username
            if(usernameToken == usernamePrenda)
                return prenda;
            else
                return null;
        }
        
    },
    Mutation: {
        createPrenda: async(_, { prenda }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if(prenda.username == usernameToken)
                return await dataSources.accountAPI.createPrenda(prenda);
            else
                return null;
        },
        updatePrenda: async(_, { prenda }, { dataSources, userIdToken }) => {
            usernameToken       = (await dataSources.authAPI.getUser(userIdToken)).username
            usernamePrenda = (await dataSources.accountAPI.prendasById(prenda.id)).username
            if(usernameToken == usernamePrenda)
                return await dataSources.accountAPI.updatePrenda(prenda);
            else
                return null;

        },
        deletePrenda: async(_, { prendaId }, { dataSources, userIdToken }) => {
            usernameToken       = (await dataSources.authAPI.getUser(userIdToken)).username
            usernamePrenda = (await dataSources.accountAPI.prendasById(prendaId)).username
            if(usernameToken == usernamePrenda) 
                return await dataSources.accountAPI.deletePrenda(prendaId);
            else
                return null;
        }
    }
};

module.exports = prendaResolver;