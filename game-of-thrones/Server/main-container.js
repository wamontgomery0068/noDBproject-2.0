const axios = require('axios');

var character = [];

function getCharacter(req, res, next) {
    axios.get('https://anapioficeandfire.com/api/characters?page=1&pageSize=50').then( response =>{
        character = response.data
        console.log('test', response.data)
        res.status(200).send(character)
    }).catch(err => res.status(500).send(err))
}

function addCharacter() {
    character.push(req.body.newFavorite)
    res.status(200).send(character)
}

module.exports={
    getCharacter,
    addCharacter
};