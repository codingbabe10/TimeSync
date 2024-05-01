import { SlArrowDown, SlArrowRight  } from "react-icons/sl";


export default function ProfilePopup({toggleProfilePopup}) {

    return (
        <div className="
        absolute bottom-0 top-full right-[180px]
        bg-white h-[424px] w-[350px] shadow-2xl
        custom-flex-col justify-center items-center gap-5
        ">
            <SlArrowDown  className="absolute top-4 right-4 text-base text-primary-grey-600"/>
            <img src="https://i.pravatar.cc/300" alt="person"className="w-24 rounded-full" />
            <span className="font-bold">Luna Everett</span>
            <span className="text-primary-grey-600">Marketer | Organizer</span>

            <div className="border-t-2 border-b-2 border-primary-grey-500">
                <div className="border-b-2 border-primary-grey-500 custom-flex-row justify-between items-center py-4 px-2">
                    <span>Edit Profile</span>
                    <SlArrowRight  className="text-base text-primary-grey-600"/>
                </div>
                <div className="custom-flex-row justify-between items-center py-4 px-2">
                    <span>Switch to a different account</span>
                    <SlArrowRight onClick={toggleProfilePopup}  className="text-base text-primary-grey-600"/>
                </div>
            </div>

            <button className="bg-primary-green-500 text-white w-2/5 h-10 rounded-custom-default">Sign out</button>
        </div>
    )
}