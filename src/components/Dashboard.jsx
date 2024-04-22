import { CiSettings } from "react-icons/ci";
import { PiBellLight } from "react-icons/pi";
import { SlArrowDown } from "react-icons/sl";

export default function Dashboard() {

    return (
        <main className="m-8">
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

                    <div className="
                    custom-flex-row justify-center items-center gap-4 
                    border-[1px] border-primary-grey-500 rounded-custom-default py-2 px-4
                    ">
                        <div className="rounded-full bg-primary-grey-600 w-10 h-10"></div>
                        <span>Luna</span>
                        <SlArrowDown className="text-primary-grey-600 text-base" />
                    </div>
                </nav>
            </div>
        </main>
    )
}