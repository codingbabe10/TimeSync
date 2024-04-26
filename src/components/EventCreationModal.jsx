import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import MiniCalendar from "./MiniCalendar"


export default function EventCreationModal({ isModalShown, closeModal }) {
    
    const [projectSettings, setProjectSettings] = useState({
        name: "",
        suggestedEventDate: "",
        suggestedEventTime: "",
        timeZone: "",
        attendees: "",
        dueDate: ""
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setProjectSettings(prev => ({ ...prev, [name]: value }));
    }

    return (
        <div className={`
        ${!isModalShown && "hidden"}
        absolute top-0 left-0
        bg-white h-full p-9
        `}>
            <RxCross2 className="absolute top-4 right-4 text-3xl" onClick={closeModal} />
            
            <div className="
                custom-flex-col gap-2
            ">

                 {/* PROJECT NAME */}
                <label htmlFor="name" className="custom-flex-col gap-2 my-2">
                    Project Name
                    <input type="text" id="name" name="name" value={projectSettings.name} onChange={handleChange}/>
                </label>

                <div className="custom-flex-row gap-2">
                    {/* SUGGESTED EVENT DATE */}
                    <label htmlFor="suggestedEventDate" className="custom-flex-col gap-2 my-2">
                        Suggested event date
                        <input type="text" id="suggestedEventDate" name="suggestedEventDate" value={projectSettings.suggestedEventDate} onChange={handleChange}/>
                    </label>
                    {/* SUGGESTED EVENT TIME*/}
                    <label htmlFor="suggestedEventTime" className="custom-flex-col gap-2 my-2">
                        Suggested event time
                        <input type="text" id="suggestedEventTime" name="suggestedEventTime" value={projectSettings.suggestedEventTime} onChange={handleChange}/>
                    </label>
                </div>

                {/* <div className="w-5/6"> */}
                    <MiniCalendar />
                {/* </div> */}

                {/* TIME ZONE*/}
                <label htmlFor="timeZone" className="custom-flex-col gap-2 my-2">
                    Time zone
                    <input type="text" id="timeZone" name="timeZone" value={projectSettings.timeZone} onChange={handleChange}/>
                </label>

                {/* ATTENDEES */}
                <label htmlFor="suggestedEventTime" className="custom-flex-col gap-2 my-2">
                    Attendees
                    <input type="text" id="suggestedEventTime" name="suggestedEventTime" value={projectSettings.suggestedEventTime} onChange={handleChange}/>
                </label>
                
                {/* DUEDATE*/}
                <label htmlFor="dueDate" className="custom-flex-col gap-2 my-2">
                    Request availability submission date
                    <input type="text" id="dueDate" name="dueDate" value={projectSettings.dueDate} onChange={handleChange}/>
                </label>
            </div>

            <button className="custom-button w-full">SEND INVITATION</button>

        </div>
    )
}

