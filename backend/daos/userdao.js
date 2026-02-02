const createResponse = require('../utils/response');


class userdao{

    constructor(){


    }

    async create(req) {
        return createResponse(true, { "fn":req.body.fn, "sn":req.body.sn });
    }

    async retrievebyemail(req) {

    }

    async update(req) {
        
    }

    async delete(req) {

    }

}

module.exports = userdao;