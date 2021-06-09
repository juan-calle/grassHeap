import TaskList from './TaskList/TaskList';

function Tasks(props){
  const today = new Date();
  const lastMonth = today.getMonth()-1;
  const thisMonth = today.getMonth();
  const nextMonth = today.getMonth()+1;

  return (
    <div>
      <h2>Last Month</h2>
      <TaskList month={lastMonth} />
      <h2>This Month</h2>
      <TaskList month={thisMonth} />
      <h2>Next Month</h2>
      <TaskList month={nextMonth} />
    </div>
  )
}

export default Tasks;
