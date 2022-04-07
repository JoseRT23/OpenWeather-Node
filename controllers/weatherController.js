const axios = require("axios");

exports.getWheather = async (req, res, next) => {

    const cityName = req.body.cityName
    const countryCode = req.body.countryCode

    url = `https://api.openweathermap.org/data/2.5/weather?appid=aea65ecfd9833784ee7bdc9b7ceab687&units=metric&q=${cityName},${countryCode}`

    axios.get(url)
    .then(function (response) {
        res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
      next();
    })

}