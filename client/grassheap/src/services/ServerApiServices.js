const base_url = 'http://localhost:3001'

exports.getTasksByMonth = async (month) => {
  const JSONtasks = await fetch(`${base_url}/tasks/month/${month}`);
  const tasks = await JSONtasks.json();
  return tasks;
}
