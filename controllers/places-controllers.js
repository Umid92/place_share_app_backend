const uuid = require("uuid/v4");
const HttpError = require("../models/http-error");

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State",
    description: "One of the most famous buldings",
    location: {
      lat: 40.7484405,
      lang: -73.9856644,
    },
    address: "20 W 34th St., New York, NY 10001, Amerika Birləşmiş Ştatları",
    creator: "u1",
  },
];

const getPlaceById = (req, res, next) => {
  const palceId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => p.id === palceId);
  if (!place) {
    throw new HttpError("Could not find the place with id", 404);
  }
  res.json({ place });
};

const getPlaceByUserId = (req, res, next) => {
  const uid = req.params.uid;
  const user = DUMMY_PLACES.find((p) => p.creator === uid);
  if (!user) {
    return next(new HttpError("Could not find the place with user id", 404));
  }

  res.json({ user });
};

const createPlace = (req, res, next) => {
  const { title, description, coordinates, address, creator } = req.body;
  const createdPlace = {
    id: uuid(),
    title,
    description,
    location: coordinates,
    address,
    creator,
  };

  DUMMY_PLACES.push(createdPlace);

  res.status(201).json({ place: createdPlace });
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
