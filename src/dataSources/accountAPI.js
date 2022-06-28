const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig       = require('../server');


class AccountAPI extends RESTDataSource {

    constructor(){
        super();
        this.baseURL = serverConfig.account_api_url;
    }


    async createAccount(account){
        account = new Object(JSON.parse(JSON.stringify(account)));
        return await this.post('/cuentas', account);
    }

    async accountByUsername(username){
        return await this.get(`/cuentas/${username}`);
    }

    async createPrenda(prenda){
        prenda = new Object(JSON.parse(JSON.stringify(prenda)));
        return await this.post('/prendas', prenda)
    }

    async prendasByUsername(username){
        return await this.get(`/pedidosPrendas/${username}`);
    }

    async prendasById(prendaId){
        return await this.get(`/pedidosPrendas/get/${prendaId}`);
    }

    async updatePrenda(prenda){
        prenda = new Object(JSON.parse(JSON.stringify(prenda)));
        return await this.put('/pedidosPrendas/actualizar', prenda);
    }

    async deletePrenda(prendaId){
        return await this.delete(`/pedidos/eliminar/${prendaId}`);
    }
};
module.exports = AccountAPI;