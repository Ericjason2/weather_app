const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/weather", async (req, res) => {
  const { city } = req.query;

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${city}&days=7`,
    );

    if (!response.ok) {
      console.error("Weather API responded with status", response.status);
      return res
        .status(response.status)
        .json({ error: "Failed to fetch weather data from Weather API." });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Weather API errr: ", error);
    res.status(500).json({ error: "Error fetching wweather data." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
