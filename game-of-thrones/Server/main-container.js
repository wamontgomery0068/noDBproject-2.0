const axios = require('axios');

let Houses = [];
let Crests = [];

function getHouse (req,res, next) {
    axios.get("https://www.anapioficeandfire.com/api/houses").then( response =>{
        Houses = response.data
        // console.log(response)
        res.status(200).send(Houses)
    }).catch(err => res.status(500).send(err))
};

function getCrest (req, res, next)  {
    axios.get("https://www.anapioficeandfire.com/api/houses").then( response =>{
        Crests = response.data.map(element => {
            if (element.name === "House Algood") {
                element.image =
                    "https://vignette.wikia.nocookie.net/gotrp/images/5/59/250px-Algood.png/revision/latest?cb=20150219022229"
            }
            if (element.name === "House Allyrion of Godsgrace") {
                element.image =
                    "http://awoiaf.westeros.org/images/thumb/2/25/House_Allyrion.PNG/250px-House_Allyrion.PNG"
            }
            if (element.name === "House Amber") {
                element.image =
                    "NO IMAGE"
            }
            if (element.name === "House Ambrose") {
                element.image =
                    "https://vignette.wikia.nocookie.net/iceandfire/images/a/ad/250px-Ambrose.png/revision/latest?cb=20170420030939"
            }
            if (element.name === "House Appleton of Appleton") {
                element.image =
                    "https://awoiaf.westeros.org/thumb.php?f=House_Appleton.png&width=250"
            }
            if (element.name === "Arryn of Gulltown") {
                element.image =
                    "http://wiki-test.westeros.org/thumb.php?f=House_Arryn.svg&width=250"
            }
            if (element.name === "Arryn of the Eyrie") {
                element.image =
                    "https://awoiaf.westeros.org/thumb.php?f=House_Arryn.svg&width=1200"
            }
            if (element.name === "House Ashford of Ashford") {
                element.image =
                    "https://awoiaf.westeros.org/thumb.php?f=House_Ashford.svg&width=1200" 
            }
            if (element.name === "House Ashwood") {
                element.image =
                    "https://vignette.wikia.nocookie.net/ttgot-s2-au/images/b/be/Ashwood.png/revision/latest?cb=20161213021139"
            }
            if (element.name === "House Baelish of Harrenhal") {
                element.image =
                    "https://static.tvtropes.org/pmwiki/pub/images/baelish.jpg"
            }

            return element;

        })
        // console.log('test', Houses)
        res.status(200).send(Crests)
    }).catch(err => res.status(500).send(err))
};

function addCrest(req, res) {
    Crests.push(req.body)
    res.status(200).send(Crests)
}

module.exports={
    getHouse,
    getCrest,
    addCrest
}