import { useState } from "react";

export default function MonthCalendar() {

  const [currentDate, setCurrentDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentDate(prevDate => {
      const prevMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
      return prevMonthDate;
    });
  };

  const nextMonth = () => {
    setCurrentDate(prevDate => {
      const nextMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
      return nextMonthDate;
    });
  };

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

  const daysInMonth = Array.from({ length: getDaysInMonth(currentDate) }, (_, index) => index + 1).length;

    const emptyCells = Array.from({ length: getFirstDayOfWeek(currentDate) }, (_, index) => index);

    const formattedDate = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

    console.log(emptyCells)

    return (
        <section className="">
             <h2>{formattedDate}</h2>
            <button onClick={prevMonth}>Previous Month</button>
            <button onClick={nextMonth}>Next Month</button>
            <table className="w-full custom-flex-col">
                <thead>
                    <tr className="
                     text-primary-grey-600
                        custom-flex-row items-center w-full
                    ">
                        <th 
                        className="calendarHeaderDay rounded-tl-custom-default border-[#C0C0C0] text-[#969696]">Sun</th>
                        <th 
                        className="calendarHeaderDay border-[#C0C0C0]">Mon</th>
                        <th 
                        className="calendarHeaderDay border-[#C0C0C0] text-[#969696]">Tue</th>
                        <th 
                        className="calendarHeaderDay border-[#C0C0C0]">Wed</th>
                        <th 
                        className="calendarHeaderDay border-[#C0C0C0] text-[#969696]">Thu</th>
                        <th 
                        className="calendarHeaderDay border-[#C0C0C0]">Fri</th>
                        <th 
                        className="calendarHeaderDay border-[#C0C0C0] rounded-tr-custom-default  text-[#969696]">Sat</th>
                    </tr>
                </thead>
                <tbody className="w-full text-primary-grey-700">
                     <tr className="custom-flex-row">
                        {emptyCells.length > 0 && emptyCells.map((_, index) => (
                            <td className="month-calendarDay" key={`empty-padStart-${index}`}></td>
                        ))}
                        {
                            emptyCells.length < 7 && Array.from({ length: 7 - emptyCells.length }).map((_, index)=>{
                                return(
                                    <td
                                        className="month-calendarDay"
                                        key={`empty-nonempty-${index}`}
                                    >
                                        <p className="">{index + 1}</p>
                                    </td>
                                )
                            })
                        }
                    </tr>
                    {
                        Array.from({length:  emptyCells.length < 6 ? 4:5 }).map((_, row)=>{
                            return (
                                <tr key={row} className="custom-flex-row">
                                        {Array.from({ length: 7 }).map((_, index) => {
                                            const day = 6 - emptyCells.length + (index + 2 + row) + (6 * row);
                                            return (
                                                day <= daysInMonth ? (
                                                    <td className="month-calendarDay" key={index}>
                                                        <p className="">
                                                        {day}
                                                        </p>
                                                    </td>
                                                ) : (
                                                    <td className="month-calendarDay" key={`empty-padEnd-${index}`}></td>
                                                )
                                                    
                                            );
                                        })}

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}