const express = require ('express');
const message = require ('../message/network')

const routes = function (server){
    server.use('/message', message)
}