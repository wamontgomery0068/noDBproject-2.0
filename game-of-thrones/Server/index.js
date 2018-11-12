const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mc = require('./main-controller');

const port = 3008;

const app = express();
app.use( bodyParser.json() );
app.use( cors() );



// GET Request with Associated Endpoint
app.get('/api/gameofthrones/house/details', mc.getHouseDetails)

// Post Request with Associated Endpoint
app.post('/api/gameofthrones/explore/house/details', mc.addExploreHouse)
app.get('./api/gameofthrones/explore/house/details', mc.DisplayExpHouse)

// app.delete(`/api/gameofthrones/house/name${id}/:id`, mc.deleteList)


app.listen(port, () => {console.log(`We are live on port: ${port}`)
});