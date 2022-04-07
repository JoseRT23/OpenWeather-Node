const router = require("express").Router();
const weatherController = require("../controllers/weatherController");

router.post("/getWeather", weatherController.getWheather);

module.exports = router;