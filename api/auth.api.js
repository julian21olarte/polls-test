'use strict';

const authService = require('../services/auth.service');

function login(req, res) {
    let credentials = req.body;
    authService.login(credentials)
    .then(user => {
        if(user) {
            res.status(200).send({user});
        }
        else {
            res.status(401).send({message: 'Unauthenticate'});
        }
    })
    .catch(error => {
        res.status(401).send({message: 'Unauthenticate'});
    }); 
}


function logout(req, res) {
    
}



module.exports = {
    login,
    logout
}