const fetch = require("node-fetch");
const base_url = "https://api.giphy.com/v1/gifs/search";
const giphy_api_key = process.env.GIPHY_API_KEY;

async function getGIFByQuery(req, res) {
  const { query } = req.body;
  try {
    const JSONResponse = await fetch(
      `${base_url}?api_key=${giphy_api_key}&q=${query}`
    );
    const response = await JSONResponse.json();
    const dataResponse = response.data;
    res.status(200).send(dataResponse);
  } catch (err) {
    res.status(400).send(err);
  }
}
module.exports = { getGIFByQuery };
