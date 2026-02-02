const createResponse = require('../utils/response');
const connection = require('../database/dbconfig');

class userdao{

    constructor(){


    }

    async create(req) {
        return new Promise((resolve, reject) => {
            connection.run(`insert into users (fn, sn, password, email, userType) values (?,?,?,?,?)`, [...Object.values(req.body)],
                function (err) {
                    if (err) {
                        return resolve(createResponse(false, null, err));
                    }
                    if (this.changes === 0) {
                        return resolve(createResponse(false, null, "insertion failed"));
                    }
                    const userData = {
                        id: this.lastID,
                        email: req.body.email,
                        fn: req.body.fn,
                        sn: req.body.sn,
                    }
                    resolve(createResponse(true, userData, userData));
                })
            })
        }
    

    async retrievebyemail(req) {

    }

    async update(req) {
        
    }

    async delete(req) {

    }

}

module.exports = userdao;