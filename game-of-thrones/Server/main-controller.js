const axios = require('axios');

let houseDetails = [];
let exploreList = [];

// Function Works DONT TOUCH IT
function getHouseDetails (req, res, next)  {
    axios.get("https://www.anapioficeandfire.com/api/houses").then( response =>{
        houseDetails = response.data.map(element=> {

            if (element.name === "House Algood") {
                element.image =
                    "https://vignette.wikia.nocookie.net/gotrp/images/5/59/250px-Algood.png/revision/latest?cb=20150219022229"
            }
            if (element.name === "House Algood" ) {
                element.id = 0;
            }
            ////
            if (element.name === "House Allyrion of Godsgrace") {
                element.image =
                    "http://awoiaf.westeros.org/images/thumb/2/25/House_Allyrion.PNG/250px-House_Allyrion.PNG"
            }
            if (element.name === "House Allyrion of Godsgrace" ) {
                element.id = 1;
            }
            ////
            if (element.name === "House Amber") {
                element.image =
                    "NO IMAGE"
            }
            if (element.name === "House Amber" ) {
                element.id = 2;
            }
            ////
            if (element.name === "House Ambrose") {
                element.image =
                    "https://vignette.wikia.nocookie.net/iceandfire/images/a/ad/250px-Ambrose.png/revision/latest?cb=20170420030939"
            }
            if (element.name === "House Ambrose" ) {
                element.id = 3;
            }
            ////
            if (element.name === "House Appleton of Appleton") {
                element.image =
                    "https://awoiaf.westeros.org/thumb.php?f=House_Appleton.png&width=250"
            }
            if (element.name === "House Appleton of Appleton" ) {
                element.id = 4;
            }
            ////
            if (element.name === "Arryn of Gulltown") {
                element.image =
                    "http://wiki-test.westeros.org/thumb.php?f=House_Arryn.svg&width=250"
            }
            if (element.name === "Arryn of Gulltown" ) {
                element.id = 5;
            }
            ////
            if (element.name === "Arryn of the Eyrie") {
                element.image =
                    "https://awoiaf.westeros.org/thumb.php?f=House_Arryn.svg&width=1200"
            }
            if (element.name === "Arryn of the Eyrie" ) {
                element.id = 6;
            }
            ////
            if (element.name === "House Ashford of Ashford") {
                element.image =
                    "https://awoiaf.westeros.org/thumb.php?f=House_Ashford.svg&width=1200" 
            }
            if (element.name === "House Ashford of Ashford" ) {
                element.id = 7;
            }
            ////
            if (element.name === "House Ashwood") {
                element.image =
                    "https://vignette.wikia.nocookie.net/ttgot-s2-au/images/b/be/Ashwood.png/revision/latest?cb=20161213021139"
            }
            if (element.name === "House Ashwood" ) {
                element.id = 8;
            }
            ////
            if (element.name === "House Baelish of Harrenhal") {
                element.image =
                    "https://static.tvtropes.org/pmwiki/pub/images/baelish.jpg"
            }
            if (element.name === "House Baelish of Harrenhal" ) {
                element.id = 9;
            }

            return element;

        });
        res.status(200).send(houseDetails)
    }).catch(err => res.status(500).send(err))
};

const addExploreHouse = ( req, res, next) => {
    const{
        id,
        name,
        image,
        coatOfArms
    } = req.body.element;
    let list = {
        id,
        name,
        image,
        coatOfArms
    };
    exploreList.push(list);
    id++;
    res.status(200).json(exploreList);
};

const DisplayExpHouse = (req, res, next) => {
    res.status(200).json(exploreList);
}

// function deleteList( req, res, next){
//     const { id } = req.params;
//     const houseIndex = Favorites.findIndex( b => b.id === id);
//     Favorites.splice(houseIndex, 1);
//     res.status(200).json(Favorites)
// }

module.exports={
    getHouseDetails,
    DisplayExpHouse,
    addExploreHouse,
    // deleteList
}