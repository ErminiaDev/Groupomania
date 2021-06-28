const express =require("express");

//body-parser
const bodyParser = require('body-parser');

//pour accéder au path de notre serveur
const path = require('path');

var cors = require('cors')

const app = express();

//initiating dotenv and making environment variables available throughout the app
require('dotenv').config() 

app.use(cors());

//CORS
/* app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
}); */

//middleware body-parser (deprecated)
app.use(bodyParser.json());

/* app.use(express.urlencoded({extended:true}));
app.use(express.json()); */

const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

//exporter cette application pour y accéder depuis les autres fichiers notamment le serveur
module.exports = app;