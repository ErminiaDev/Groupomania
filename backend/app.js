const express =require("express");

//body-parser
const bodyParser = require('body-parser');

//pour accéder au path de notre serveur
const path = require('path');

const app = express();

//middleware body-parser (deprecated)
app.use(bodyParser.json());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

require('dotenv').config() 

const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

//exporter cette application pour y accéder depuis les autres fichiers notamment le serveur
module.exports = app;