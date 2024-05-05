import { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { PiBellLight } from "react-icons/pi";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import ProfilePopup from "./ProfilePopup";
import Sidebar from "./Sidebar";
import CalendarHeader from "./CalenderHeader";
import MonthCalendar from "./MonthCalendar";
// import WeekCalendar from "./WeekCalendar";

export default function Dashboard() {

    const [calendarView, setCalendarView] = useState("monthly");
    const [isProfilePopupActive, setIsProfilePopupActive] = useState(false);


    function toggleProfilePopup() {
        setIsProfilePopupActive(prev => !prev);
    }

    return (
        <div className="custom-flex-row">
            <Sidebar />

            <div className="m-8 w-full">
                {/* TOP OF PAGE AND NAVBAR/TOOLBAR */}
                <div className="
                custom-flex-row justify-between items-center
                ">
                    <span className="
                    bg-secondary-blue-500 py-2.5 px-6 rounded-custom-full
                    ">
                        Project: Eternal Elegance Promotion
                    </span>

                    <nav className="custom-flex-row items-center gap-6">
                        <CiSettings className="text-primary-grey-600 text-2xl"/>

                        <PiBellLight className="text-primary-grey-600 text-2xl" />

                        <div className="w-0.5 h-[35px] bg-primary-grey-400"></div>

                        <div onClick={ toggleProfilePopup} className="
                        relative  custom-flex-row justify-center items-center gap-4 
                        border-[1px] border-primary-grey-500 rounded-custom-default py-2 px-4
                        cursor-pointer
                        ">
                            <div className="rounded-full bg-primary-grey-600 w-10 h-10"></div>
                            <span>Luna</span>
                            {isProfilePopupActive ? <SlArrowUp className="text-primary-grey-600 text-base" />
                                : <SlArrowDown className="text-primary-grey-600 text-base" />}
                            {isProfilePopupActive && <ProfilePopup toggleProfilePopup={toggleProfilePopup} />}
                        </div>
                    </nav>
                </div>

                <main className="mt-8">
                    <CalendarHeader view={calendarView} toggleCalendarView={(view) => setCalendarView(view)} />
                    
                    {calendarView === "monthly" && <MonthCalendar/>}
                    {/* {calendarView === "weekly" && <WeekCalendar/>} */}
                    {/* calendarView === "daily" && <DayCalendar/>} */}
                </main>
                </div>
            </div>
    )
}