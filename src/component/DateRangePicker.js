import React, { useState } from 'react';
import '../css/DateRangePicker.css';

const DateRangePicker = ({ onDateSelect }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  const handleDayClick = (day) => {
    const clickedDate = new Date(currentYear, currentMonth, day);

    if (startDate && endDate) {
      setStartDate(clickedDate);
      setEndDate(null);
    } 
    else if (!startDate || (endDate && clickedDate < startDate)) {
      setStartDate(clickedDate);
      setEndDate(null);
    } 
    else if (clickedDate >= startDate) {
      setEndDate(clickedDate);
      if (onDateSelect) {
        onDateSelect(`${formatDate(startDate)} - ${formatDate(clickedDate)}`);
      }
    }
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderDays = () => {
    const totalDays = daysInMonth(currentMonth, currentYear);
    const daysArray = [];
    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(currentYear, currentMonth, day);
      let className = 'day';

      if (date.toDateString() === today.toDateString()) {
        className += ' today';
      }

      if (startDate && date.toDateString() === startDate.toDateString()) {
        className += ' active';
      }
      if (startDate && endDate && date >= startDate && date <= endDate) {
        className += ' active';
      }

      daysArray.push(
        <button
          key={day}
          className={className}
          onClick={() => handleDayClick(day)}
        >
          {day}
        </button>
      );
    }
    return daysArray;
  };

  return (
    <div className="date-range-picker">
      <div className="header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <span>
          {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
        </span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="days">{renderDays()}</div>
    </div>
  );
};

export default DateRangePicker;