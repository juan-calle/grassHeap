const base_url = 'http://localhost:3001'

exports.getTasksByMonth = async (month) => {
  const JSONtasks = await fetch(`${base_url}/tasks/month/${month}`);
  const tasks = await JSONtasks.json();
  return tasks;
}

exports.getMyPlants = async () => {
  const JSONPlants = await fetch(`${base_url}/myplants`);
  const myPlants = await JSONPlants.json();
  return myPlants;
}

exports.saveToMyPlants = async (plant) => {
  const JSONPlant = JSON.stringify(plant);
  const response = await fetch(`${base_url}/myplants`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSONPlant
  });
  return response.json();
}

exports.removeFromMyPlants = async (plantID) => {
  const JSONPlant = JSON.stringify({plantID});
  const response = await fetch(`${base_url}/myplants`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSONPlant
  });
  return response.json();
}
