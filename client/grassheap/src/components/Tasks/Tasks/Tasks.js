import React, { useEffect, useState } from 'react';
// import Spinner from '../Spinner/spinner';
import MonthTaskBox from '../MonthTasksBox/MonthTasksBox'
import './Tasks.css';

function Tasks () {

  const [ currentMonth , setCurrentMonth ] = useState(0);

  const lastMonth = currentMonth-1;
  const nextMonth = currentMonth+1;
  const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];


  useEffect(()=> {
    const today = new Date();
    const thisMonth = today.getMonth();
    setCurrentMonth(thisMonth);
  }, [])


  return (
    <div>
      <button className="tasks__prev tasks__scroller-btn" onClick={()=>setCurrentMonth(currentMonth-1)}>◀</button>
      <button className="tasks__next tasks__scroller-btn" onClick={()=>setCurrentMonth(currentMonth+1)}>▶</button>
      <div className="tasks__allmonths">
        <div className="tasks__month">
          <MonthTaskBox monthNumber={lastMonth}  monthName={months[lastMonth]} />
        </div>
        <div className="tasks__month">
          <MonthTaskBox monthNumber={currentMonth}  monthName={months[currentMonth]}/>
        </div>
        <div className="tasks__month">
          <MonthTaskBox monthNumber={nextMonth} monthName={months[nextMonth]}/>
        </div>
      </div>
    </div>
  )
}

export default Tasks;
