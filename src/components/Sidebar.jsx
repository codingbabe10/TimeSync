import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import MiniCalendar from "./MiniCalendar";
import EventCreationModal from "./EventCreationModal";

export default function Sidebar() {

    const [isModalShown, setIsModalShown] = useState(false);

    return (
        <section className="p-8 w-[30%] shadow-2xl min-h-[100vh] relative">
            <div className="custom-flex-row justify-normal gap-2">
                <img src="/logo.png" alt="logo" className="w-6" />
                <span className="text-custom-logo">TimeSync</span>
            </div>

            <div className="p-8 custom-flex-col  justify-center">
                <button onClick={()=>setIsModalShown(true)} className="
                py-3 px-7 text-white bg-primary-green-500 rounded-custom-default
                custom-flex-row items-center justify-center gap-2
                ">
                    <BsPlus />
                    Create an event
                </button>

                <EventCreationModal isModalShown={isModalShown} closeModal={()=>setIsModalShown(false)} />

                <MiniCalendar />

                <div className="">
                    <h2 className="text-custom-md font-bold">Collaborators</h2>
                    <div className="">
                        <input type="text" placeholder="Search People" className="bg-primary-grey-400 text-primary-grey-500" />
                    </div>
                </div>
            </div>


        </section>
    )
}