const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mc = require('./main-container');

const port = 3008;

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

// Endpoints
app.get("/api/gameofthrones/houses", mc.getHouse)
app.get("/api/gameofthrones/houses/crest", mc.getCrest)
app.post("/api/gameofthrones/crest", mc.addCrest)


app.listen(port, () => {console.log(`We are live on port: ${port}`)
});