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

  // Function to get the number of days in the current month
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

 // Function to get number of days in the current month
  const daysInMonth = Array.from({ length: getDaysInMonth(currentDate) }, (_, index) => index + 1).length;

    const emptyCells = Array.from({ length: getFirstDayOfWeek(currentDate) }, (_, index) => index);

    const formattedDate = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

    console.log(emptyCells)

    return (
        <section className="">
            {/* <span>Monthly Calendar</span> */}
             <h2>{formattedDate}</h2>
            <button onClick={prevMonth}>Previous Month</button>
            <button onClick={nextMonth}>Next Month</button>
            <table className="w-full custom-flex-col">
                <thead>
                    <tr className="
                    bg-primary-grey-500 text-primary-grey-600
                        custom-flex-row items-center w-full
                    ">
                        <th 
                        className="w-[14.2857142857%] p-2 border-x-[.5px] border-t-[.5px] rounded-tl-custom-default border-[#C0C0C0] text-[#969696]">Sun</th>
                        <th 
                        className="w-[14.2857142857%] p-2 border-x-[.5px] border-t-[.5px] border-[#C0C0C0]">Mon</th>
                        <th 
                        className="w-[14.2857142857%] p-2 border-x-[.5px] border-t-[.5px] border-[#C0C0C0] text-[#969696]">Tue</th>
                        <th 
                        className="w-[14.2857142857%] p-2 border-x-[.5px] border-t-[.5px] border-[#C0C0C0]">Wed</th>
                        <th 
                        className="w-[14.2857142857%] p-2 border-x-[.5px] border-t-[.5px] border-[#C0C0C0] text-[#969696]">Thu</th>
                        <th 
                        className="w-[14.2857142857%] p-2 border-x-[.5px] border-t-[.5px] border-[#C0C0C0]">Fri</th>
                        <th 
                        className="w-[14.2857142857%] p-2 border-x-[.5px] border-t-[.5px] border-[#C0C0C0] rounded-tr-custom-default  text-[#969696]">Sat</th>
                    </tr>
                </thead>
                <tbody className="w-full text-primary-grey-700">
                     <tr className="custom-flex-row">
                        {emptyCells.length > 0 && emptyCells.map((_, index) => (
                            <td className="w-[14.2857142857%] h-[200px]  p-2  border-[#E8E8E8] border-[.5px]" key={`empty-padStart-${index}`}></td>
                        ))}
                        {
                            emptyCells.length < 7 && Array.from({ length: 7 - emptyCells.length }).map((_, index)=>{
                                return(
                                    <td
                                        className="w-[14.2857142857%] h-[200px]  p-2  border-[#E8E8E8] border-[.5px]"
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
                                                    <td className="w-[14.2857142857%] h-[200px]  p-2  border-[#E8E8E8] border-[.5px]" key={index}>
                                                        <p className="">
                                                        {day}
                                                        </p>
                                                    </td>
                                                ) : (
                                                    <td className="w-[14.2857142857%] h-[200px]  p-2  border-[#E8E8E8] border-[.5px]" key={`empty-padEnd-${index}`}></td>
                                                )
                                                    
                                            );
                                        })}

                                </tr>
                            )
                        })
                    }
                    {/* <tr>
                        {emptyCells.map((_, index) => (
                        <td key={`empty-${index}`}></td>
                        ))}
                        {daysInMonth.map(day => (
                        <td key={day}>{day}</td>
                        ))}
                    </tr> */}
                </tbody>
            </table>
        </section>
    )
}