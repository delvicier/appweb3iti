const express = require('express');
const response = require ('../../network/response');
const router = express.Router();

router.get('/message', function (req, res) {
    response.success(req, res);
});

router.post('/message', function (req, res) {
    response.success(req, res);
});

module.exports = router;