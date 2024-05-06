import React, { useState } from 'react';


export default function WeekCalendar() {

    const today = new Date();
    // Get the day of the week (0 is Sunday, 1 is Monday, ..., 6 is Saturday)
    const dayOfWeek = today.getDay();
    // Calculate the difference to Sunday (0 if today is Sunday, positive or negative otherwise)
    const daysToSunday = -dayOfWeek;
    // Calculate the date of the current Sunday by adding daysToSunday to today
    const initialDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + daysToSunday);

    const [currentDate, setCurrentDate] = useState(initialDate);

    const prevWeek = () => {
      setCurrentDate(prevDate => {
        const prevWeekDate = new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() - 7);
        return prevWeekDate;
      });
    };
  
    const nextWeek = () => {
      setCurrentDate(prevDate => {
        const nextWeekDate = new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() + 7);
        return nextWeekDate;
      });
    };
  
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    return (
        <table className="w-full custom-flex-col">
             
                <thead>
                    <tr className="
                    bg-primary-white text-primary-grey-600
                        custom-flex-row items-center w-full
                    ">
                        <th 
                        
                        className="w-[14.2857142857%] p-2 border-x-[.5px] border-t-[.5px] rounded-tl-custom-default border-[#C0C0C0] text-[#969696] light gray">Sun</th>
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
                {[...Array.from({ length: 16 })].map((_, rowIndex) => (
  <tr key={rowIndex}>
    {daysOfWeek.map((_, index) => {
      const day = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + index);
      
      return (
        // <tr key={index} style={{ height: '50px' }}>
        <td key={index}  className="p-2 border border-gray-300" style={{ position: 'relative', width: `${1 / daysOfWeek.length}%`, verticalAlign: 'top', textAlign: 'left', borderBottom: '1px solid #C0C0C0', padding: '30px', margin:'px' }}>
          
          {rowIndex === 0 ? (
            <div style={{ position: 'absolute', top: '5px', left: '5px' }}>{day.getDate()}</div>
          ) : null}
        </td>
        // </tr>
      );
    })}
  </tr>
))}


        {/* {[...Array(16)].map((_, index) => (
  <tr key={index}>
    
    <td colSpan={daysOfWeek.length} className="border border-[#C0C0C0]" style={{ height:'10px',verticalAlign: 'top',textAlign: 'left',  borderBottom: '1px solid #C0C0C0'  }}></td>
  </tr>
))} */}

                </tbody>
            </table>
    )
        
}