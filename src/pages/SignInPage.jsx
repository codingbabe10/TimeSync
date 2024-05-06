import { CiSettings } from "react-icons/ci";
import { PiBellLight } from "react-icons/pi";
import { SlArrowDown } from "react-icons/sl";
import SignIn from '../components/SignIn';
import Sidebar from "../components/Sidebar";
import MonthCalendar from "../components/MonthCalendar";

import './SignInPage.css'

export default function SignInPage() {



 
  
  return (
    <>
      {/* MODAL */}
      <SignIn signIn={signIn} signInWithGoogle={signInWithGoogle} />
      
      {/* OVERLAY */}
      <div className="fixed z-[1] left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-[.60]"></div>
      
    <div className="custom-flex-row ">
        {/* DAHSBOARD BACKGROUND */}
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

                <main className="mt-8">
                    <MonthCalendar/>
                </main>
                </div>
      </div>
    </>
  )
}