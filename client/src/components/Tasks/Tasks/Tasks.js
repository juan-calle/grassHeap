import React, { useEffect, useState } from "react";
// import Spinner from '../Spinner/spinner';
import MonthTaskBox from "../MonthTasksBox/MonthTasksBox";
import { months, bgColor } from "../../../utils/months";
import "./Tasks.css";

function Tasks() {
  const [currentMonth, setCurrentMonth] = useState(0);

  const lastMonth = currentMonth - 1;
  const nextMonth = currentMonth + 1;

  useEffect(() => {
    const today = new Date();
    const thisMonth = today.getMonth();
    setCurrentMonth(thisMonth);
  }, []);

  return (
    <div className="Tasks">
      <button
        className="tasks__prev tasks__scroller--btn"
        onClick={() => setCurrentMonth(currentMonth - 1)}
      >
        ◀
      </button>
      <div className="tasks__allmonths">
        <div
          // TODO figure out why bgColor inline style not working
          style={{ backgroundColor: bgColor.monthName }}
          className={`tasks__month tasks__month--${lastMonth}`}
        >
          <MonthTaskBox monthNumber={lastMonth} monthName={months[lastMonth]} />
        </div>
        <div
          style={{ backgroundColor: bgColor.monthName }}
          className={`tasks__month tasks__month--${currentMonth}`}
        >
          <MonthTaskBox
            monthNumber={currentMonth}
            monthName={months[currentMonth]}
          />
        </div>
        <div
          style={{ backgroundColor: bgColor.December }}
          className={`tasks__month tasks__month--${nextMonth}`}
        >
          <MonthTaskBox monthNumber={nextMonth} monthName={months[nextMonth]} />
        </div>
      </div>
      <button
        className="tasks__next tasks__scroller--btn"
        onClick={() => setCurrentMonth(currentMonth + 1)}
      >
        ▶
      </button>
    </div>
  );
}

export default Tasks;
