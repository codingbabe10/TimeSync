import { BsPlus } from "react-icons/bs";
import MiniCalendar from "./MiniCalendar";

export default function Sidebar() {

    return (
        <section className="p-8 w-[30%] shadow-2xl min-h-[100vh]">
            <div className="custom-flex-row justify-normal gap-2">
                <img src="/logo.png" alt="logo" className="w-6" />
                <span className="text-custom-logo">TimeSync</span>
            </div>

            <div className="p-8 custom-flex-col  justify-center items-center">
                <button className="
                py-3 px-7 text-white bg-primary-green-500 rounded-custom-default
                custom-flex-row items-center justify-center gap-2
                ">
                    <BsPlus />
                    Create an event
                </button>

                <MiniCalendar />
            </div>

        </section>
    )
}