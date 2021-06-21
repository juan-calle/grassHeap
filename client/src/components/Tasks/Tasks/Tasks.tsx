import React, { useEffect, useState } from 'react';
import MonthTaskBox from '../MonthTasksBox/MonthTasksBox';
import { months, bgColor } from '../../../utils/months';
import './Tasks.css';

function Tasks(): JSX.Element {
  const [currentMonth, setCurrentMonth] = useState<number>(0);

  const lastMonth = currentMonth - 1;
  const nextMonth = currentMonth + 1;

  function getBGColor (month: number): string {
    return bgColor[months[month]];
  }
  console.log((currentMonth + 1) % 12);

  useEffect(() => {
    const today: Date = new Date();
    const thisMonth = today.getMonth();
    setCurrentMonth(thisMonth);
  }, []);

  return (
    <div className="Tasks">
      <button
        className="tasks__prev tasks__scroller--btn"
        onClick={() => setCurrentMonth(currentMonth - 1)}>
        ◀
      </button>
      <div className="tasks__allmonths">
        <div
          style={{ backgroundColor: getBGColor(lastMonth) }}
          className={`tasks__month tasks__month--${lastMonth}`}>
          <MonthTaskBox monthNumber={lastMonth} monthName={months[lastMonth]} />
        </div>
        <div
          style={{ backgroundColor: getBGColor(currentMonth) }}
          className={`tasks__month tasks__month--${currentMonth}`}>
          <MonthTaskBox
            monthNumber={currentMonth}
            monthName={months[currentMonth]}
          />
        </div>
        <div
          style={{ backgroundColor: getBGColor(nextMonth) }}
          className={`tasks__month tasks__month--${nextMonth}`}>
          <MonthTaskBox monthNumber={nextMonth} monthName={months[nextMonth]} />
        </div>
      </div>
      <button
        className="tasks__next tasks__scroller--btn"
        onClick={() => setCurrentMonth((currentMonth + 1)%12)}>
        ▶
      </button>
    </div>
  );
}

export default Tasks;
