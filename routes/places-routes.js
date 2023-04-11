const express = require("express");

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

const router = express.Router();
router.get("/:pid", (req, res, next) => {
  const palceId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => p.id === palceId);
  res.json({ place });
});

router.get("/users/:uid", (req, res, next) => {
  const uid = req.params.uid;
  const user = DUMMY_PLACES.find((p) => p.creator === uid);

  res.json({ user });
});

module.exports = router;
