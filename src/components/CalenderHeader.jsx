import PropTypes from 'prop-types';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";

export default function CalendarHeader(props) {

    const {
        view,
        toggleCalendarView
    } = props;

    function handleToggleCalendarView(view) {
        toggleCalendarView(view);
    }

    return (
        <div className="custom-flex-row justify-between">
            <span className="font-bold text-custom-lg">April 2024</span>

            <div className="
            custom-flex-row p-2
            bg-primary-grey-500 text-[#7C7C7C] rounded-custom-default
            ">
                <p 
                    onClick={()=>handleToggleCalendarView("daily")}
                    className={`
                    py-[6px] px-4 cursor-pointer ${view === "daily" && "bg-white text-primary-green-500 rounded-custom-default font-bold "}
                `}>Daily</p>

                <p 
                    onClick={()=>handleToggleCalendarView("weekly")}
                    className={`
                    py-[6px] px-4 cursor-pointer ${view === "weekly" && "bg-white text-primary-green-500 rounded-custom-default font-bold "}
                `}>Weekly</p>

                <p 
                    onClick={()=>handleToggleCalendarView("monthly")}
                    className={`
                    py-[6px] px-4 cursor-pointer ${view === "monthly" && "bg-white text-primary-green-500 rounded-custom-default font-bold "}
                `}>Monthly</p>
            </div>

            <div className="custom-flex-row justify-center items-center gap-3">
                <IoIosArrowDropleftCircle className="text-4xl text-primary-green-500" />
                <span className="bg-[#E3E7E8] px-4 py-2 rounded-custom-default">Today</span>
                <IoIosArrowDroprightCircle className="text-4xl text-primary-green-500" />
            </div>
        </div>
    )
}

CalendarHeader.propTypes = {
    view: PropTypes.string,
    toggleCalendarView: PropTypes.func
}