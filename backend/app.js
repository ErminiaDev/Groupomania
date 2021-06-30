const express =require("express");

//body-parser
const bodyParser = require('body-parser');

//pour accéder au path de notre serveur
const path = require('path');

var cors = require('cors');

const app = express();


//initiating dotenv and making environment variables available throughout the app
require('dotenv').config() 

app.use(cors());

//middleware body-parser (deprecated)
app.use(bodyParser.json());

const apiRoutes = require("./routes/apiRoutes");
const { sequelize } = require("./models");
app.use("/api", apiRoutes);

//exporter cette application pour y accéder depuis les autres fichiers notamment le serveur
module.exports = app;