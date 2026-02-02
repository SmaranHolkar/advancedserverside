const userService = require('../services/userservice');
const express = require('express');

const router = express.Router();

router.post('/create', async (req, res) => {
    this.userService = new userService();
    const result = await this.userService.create(req);
    res.json(result);
})

router.get('/retrieveAll', async (req, res) => {
 
})

router.get('/retrievebyemail', async (req, res) => {

})

router.delete('/delete', async (req, res) => {

})

router.put('/update', async (req, res) => {

})

module.exports = router;