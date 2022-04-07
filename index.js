const express = require("express");
const app = express();
const morgan = require("morgan");
const weatherRoute = require("./routes/weather");


app.use(express.json());
app.use(morgan("common"));

app.use(weatherRoute);

app.listen(5000, () => {
    console.log("Backend server is running...");
});