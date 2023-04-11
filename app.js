const express = require("express");
const bodyparser = require("body-parser");

const placesRoute = require("./routes/places-routes");
const usersRoute = require("./routes/users-routes");

const app = express();

app.use("/api/places", placesRoute);

app.listen("5000");
