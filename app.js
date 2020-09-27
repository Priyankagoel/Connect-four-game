const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

const app  = express();

app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const homeRoutes = require("./routes/home");
app.use(homeRoutes);
app.listen(8000);