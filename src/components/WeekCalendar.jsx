

export default function WeekCalendar() {

    return (
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
                     
                </tbody>
            </table>
    )
}