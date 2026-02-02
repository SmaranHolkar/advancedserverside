const crypto = require('crypto');
const createResponse = require('../utils/response');

class apikeydao {
    constructor() {
        
    }

    async create() {
        const apikey = await crypto.randomBytes(32).toString('hex');
        return createResponse(true, apikey);
    }

}

module.exports = apikeydao;