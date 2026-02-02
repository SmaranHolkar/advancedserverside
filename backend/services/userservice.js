const userdao = require('../daos/userdao');

class userService{
    constructor(){
        this.ud = new userdao();
    }

    async create(req) {
        return await this.ud.create(req);
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