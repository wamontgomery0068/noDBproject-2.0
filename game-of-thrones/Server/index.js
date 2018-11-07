const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mc = require('./main-container');

const port = 3008;

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

// Primary Endpoints
app.get("/api/characters/", mc.getCharacter)
app.post("/api/characters/", mc.addCharacter)


app.listen(port, () => {console.log(`We are live on port: ${port}`)
});