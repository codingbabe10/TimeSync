import { useState } from "react";
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";

export default function MiniCalendar() {

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

    return (
        <section className="">
            <div className="custom-flex-row justify-between items-center">
                <IoIosArrowDropleftCircle onClick={prevMonth} className="text-4xl text-primary-green-500" />
                <span className="text-bold">{formattedDate}</span>
                 <IoIosArrowDroprightCircle onClick={nextMonth} className="text-4xl text-primary-green-500" />
            </div>

            <table className="w-full custom-flex-col">
                <thead>
                    <tr className="
                     text-primary-grey-600
                        custom-flex-row items-center w-full
                    ">
                        <th 
                        className="w-[14.2857142857%]">Su</th>
                        <th 
                        className="w-[14.2857142857%]">Mo</th>
                        <th 
                        className="w-[14.2857142857%]">Tu</th>
                        <th 
                        className="w-[14.2857142857%]">We</th>
                        <th 
                        className="w-[14.2857142857%]">Th</th>
                        <th 
                        className="w-[14.2857142857%]">Fr</th>
                        <th 
                        className="w-[14.2857142857%]">Sa</th>
                    </tr>
                </thead>
                <tbody className="w-full text-primary-grey-700">
                     <tr className="custom-flex-row">
                        {emptyCells.length > 0 && emptyCells.map((_, index) => (
                            <td className="mini-calendarDay" key={`empty-padStart-${index}`}></td>
                        ))}
                        {
                            emptyCells.length < 7 && Array.from({ length: 7 - emptyCells.length }).map((_, index)=>{
                                return(
                                    <td
                                        className="mini-calendarDay"
                                        key={`empty-nonempty-${index}`}
                                    >
                                        <p className="">{index + 1}</p>
                                    </td>
                                )
                            })
                        }
                    </tr>
                    {Array.from({length:  emptyCells.length < 6 ? 4:5 }).map((_, row)=>{
                            return (
                                <tr key={row} className="custom-flex-row">
                                        {Array.from({ length: 7 }).map((_, index) => {
                                            const day = 6 - emptyCells.length + (index + 2 + row) + (6 * row);
                                            return (
                                                day <= daysInMonth ? (
                                                    <td className="mini-calendarDay" key={index}>
                                                        <p className="">
                                                        {day}
                                                        </p>
                                                    </td>
                                                ) : (
                                                    <td className="mini-calendarDay" key={`empty-padEnd-${index}`}></td>
                                                )
                                            );
                                        })}
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </section>
    )
}