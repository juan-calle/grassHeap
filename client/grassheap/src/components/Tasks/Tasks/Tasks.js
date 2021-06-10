import React from 'react';
// import Spinner from '../Spinner/spinner';
import MonthTaskBox from '../MonthTasksBox/MonthTasksBox'


function Tasks () {

  const today = new Date();
  const currentMonth = today.getMonth();
  const lastMonth = currentMonth-1;
  const nextMonth = currentMonth+1;
  const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

  return (
      <div>
        <h2>Last Month</h2>
        <MonthTaskBox monthNumber={lastMonth}  monthName={months[lastMonth]} />
        <h2>This Month</h2>
        <MonthTaskBox monthNumber={currentMonth}  monthName={months[currentMonth]}/>
        <h2>Next Month</h2>
        <MonthTaskBox monthNumber={nextMonth} monthName={months[nextMonth]}/>
      </div>
  )
}

export default Tasks;
