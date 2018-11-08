const axios = require('axios');

let Houses = [];

function getHouses (req, res, next)  {
    Houses = [];
    axios.get("https://www.anapioficeandfire.com/api/houses").then( response =>{
        Houses = response.data.map(house => {
            let image = "";

            if (house.name === "House Algood") {
                image =
                    "https://vignette.wikia.nocookie.net/gotrp/images/5/59/250px-Algood.png/revision/latest?cb=20150219022229"
            }
            if (house.name === "House Allyrion of Godsgrace") {
                image =
                    "https://awoiaf.westeros.org/thumb.php?f=House_Allyrion.svg&width=1200"
            }
            if (house.name === "House Ambe") {
                image =
                    "NO IMAGE"
            }
            if (house.name === "House Ambrose") {
                image =
                    "https://vignette.wikia.nocookie.net/iceandfire/images/a/ad/250px-Ambrose.png/revision/latest?cb=20170420030939"
            }
            if (house.name === "Appleton of Appleton") {
                image =
                    "https://awoiaf.westeros.org/thumb.php?f=House_Appleton.png&width=250"
            }
            if (house.name === "Arryn of Gulltown") {
                image =
                    "https://awoiaf.westeros.org/thumb.php?f=Shett_%28Gulltown%29.png&width=250"
            }
            if (house.name === "Arryn of the Eyrie") {
                image =
                    "https://awoiaf.westeros.org/thumb.php?f=House_Arryn.svg&width=1200"
            }
            if (house.name === "House Ashford of Ashford") {
                image =
                    "https://awoiaf.westeros.org/thumb.php?f=House_Ashford.svg&width=1200" 
            }
            if (house.name === "House Ashwood") {
                image =
                    "https://vignette.wikia.nocookie.net/ttgot-s2-au/images/b/be/Ashwood.png/revision/latest?cb=20161213021139"
            }
            if (house.name === "House Baelish of Harrenhal") {
                image =
                    "https://awoiaf.westeros.org/thumb.php?f=House_Baelish_%28Harrenhal%29.svg&width=1200"
            }

            const newHouse = {
                ...house,
                image
            };
            Houses.push(newHouse);
        })
        console.log('test', response.data)
        res.status(200).send(Houses)
    }).catch(err => res.status(500).send(err))
}

function addName(req, res) {
    Name.push(req.body.newFavorite)
    res.status(200).send(Name)
}

module.exports={
    getHouses,
}