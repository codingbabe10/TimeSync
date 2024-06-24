import { useState, useEffect } from "react";

export default function MonthCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date()); // Initialize with current date

  useEffect(() => {
    setCurrentDate(new Date()); // Update currentDate to the current date whenever component mounts or currentDate changes
  }, []);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfWeek = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const emptyCells = Array.from({ length: getFirstDayOfWeek(currentDate) }, (_, index) => index);
  const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);
  
  // Dynamically gets the current month and year for formattedDate
  const formattedDate = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;

  return (
    <section className="">
      <h2 className="text-2xl font-bold">{formattedDate}</h2>
      <table className="w-full custom-flex-col">
        <thead>
          <tr className="text-primary-grey-600 custom-flex-row items-center w-full">
            <th className="calendarHeaderDay rounded-tl-custom-default border-[#C0C0C0] text-[#969696]">Sun</th>
            <th className="calendarHeaderDay border-[#C0C0C0]">Mon</th>
            <th className="calendarHeaderDay border-[#C0C0C0] text-[#969696]">Tue</th>
            <th className="calendarHeaderDay border-[#C0C0C0]">Wed</th>
            <th className="calendarHeaderDay border-[#C0C0C0] text-[#969696]">Thu</th>
            <th className="calendarHeaderDay border-[#C0C0C0]">Fri</th>
            <th className="calendarHeaderDay border-[#C0C0C0] rounded-tr-custom-default text-[#969696]">Sat</th>
          </tr>
        </thead>
        <tbody className="w-full text-primary-grey-700">
          <tr className="custom-flex-row">
            {emptyCells.map((_, index) => (
              <td className="month-calendarDay" key={`empty-padStart-${index}`}></td>
            ))}
            {daysArray.slice(0, 7 - emptyCells.length).map((day) => (
              <td className="month-calendarDay" key={day}>
                <p className="">{day}</p>
              </td>
            ))}
          </tr>
          {Array.from({ length: Math.ceil((daysInMonth + emptyCells.length - (7 - emptyCells.length)) / 7) }).map((_, rowIndex) => (
            <tr key={rowIndex} className="custom-flex-row">
              {Array.from({ length: 7 }).map((_, colIndex) => {
                const day = (rowIndex * 7 + colIndex + 1) + (7 - emptyCells.length);
                return day <= daysInMonth ? (
                  <td className="month-calendarDay" key={day}>
                    <p className="">{day}</p>
                  </td>
                ) : (
                  <td className="month-calendarDay" key={`empty-padEnd-${colIndex}`}></td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}