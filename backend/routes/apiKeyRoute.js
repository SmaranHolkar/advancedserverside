const apikeyService = require('../services/apiservice');
const express = require('express');

const router = express.Router();

router.get('/create', async (req, res) => {
    this.apikey= new apikeyService();
    const result = await this.apikeyService.create(req);
    res.json(result);
})



router.get('/retrieveById', async (req, res) => {
 
})

router.delete('/delete', async (req, res) => {

})

router.put('/update', async (req, res) => {

})

module.exports = router;