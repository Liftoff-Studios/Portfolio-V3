let express = require("express");
let app = express();
const path = require('path');
let fetch = require("node-fetch");

app.use("/",express.static(path.join(__dirname,"/Resources")))
app.use("/blog",express.static(path.join(__dirname,"/Blog")))

app.listen(process.env.PORT);
module.exports = app;