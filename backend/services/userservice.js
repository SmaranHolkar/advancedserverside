const userdao = require('../daos/userdao');

class userService{
    constructor(){
        this.ud = new userdao();
    }

    async create(req) {
        //validation
        const result = await this.ud.create(req);
        //Some checks and balances and business logic
        return result;
    }

    async retrievebyemail(req) {
        this.ud.retrievebyemail(req);
    }

    async update(req) {
        this.ud.update(req);
    }

    async delete(req) {

    }

}

module.exports = userService;