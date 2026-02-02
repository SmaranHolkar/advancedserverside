const apikey = require('../daos/apikeydao');

class apikeyService{
    constructor(){
        this.ud = new apikey();
    }

    async create(req) {
        return await this.ud.create(req);
    }

    async retrieveApiKey(req) {
        this.ud.retrieveApiKey(req);
    }

    async update(req) {
        this.ud.update(req);
    }

    async delete(req) {

    }

}

module.exports = apikeyService;