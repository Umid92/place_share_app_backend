const express = require("express");

const placeConrollers = require("../controllers/places-controllers");

const router = express.Router();

router.post("/", placeConrollers.createPlace);

router.get("/:pid", placeConrollers.getPlaceById);

router.get("/users/:uid", placeConrollers.getPlaceByUserId);

router.patch("/:pid",placeConrollers.updatePlace)

router.delete("/:pid",placeConrollers.deletePlace)

module.exports = router;
