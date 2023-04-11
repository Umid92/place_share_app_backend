const express = require("express");
const bodyparser = require("body-parser");

const placesRoute = require("./routes/places-routes");

const app = express();

app.use("/api/places", placesRoute);
app.use((error, req, res, next) => {
  res.status(error.code || 500);
  res.json({ message: error.message || "Unknown error occured" });
});
app.listen("5000");
