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

const postRoutes = require("./routes/post");
const userRoutes = require("./routes/user");
const commentRoutes = require("./routes/comment");
app.use("/api/publications", postRoutes);
app.use("/api/utilisateurs", userRoutes);
app.use("/api/publications", commentRoutes);


//exporter cette application pour y accéder depuis les autres fichiers notamment le serveur
module.exports = app;