const axios = require('axios');

var Characters = [];

function getNames(req, res, next) {
    axios.get('https://anapioficeandfire.com/api/characters?page=1&pageSize=50').then( response =>{
        Characers = response.data
        console.log('test', response.data)
        res.status(200).send(Characters)
    }).catch(err => res.status(500).send(err))
}

module.exports={
    getNames
};