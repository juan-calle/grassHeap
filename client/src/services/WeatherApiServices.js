const base_url = 'http://localhost:3001'

exports.getWeather = async () => {
  try {
    const JSONweather = await fetch(`${base_url}/weather`);
    const weather = await JSONweather.json();
    return weather;
  } catch (err) {
    return err;
  }
}
