import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import MiniCalendar from "./MiniCalendar";
import EventCreationModal from "./EventCreationModal";

export default function Sidebar() {

    const [isModalShown, setIsModalShown] = useState(false);

    const [collaborators, setCollaborators] = useState([
        {
            name: "Elijah Garcia",
            position: "Influencer",
            imgUrl: "https://i.pravatar.cc/300"
        },
        {
            name: "Lucas Hernandez",
            position: "Project Manager",
            imgUrl: "https://i.pravatar.cc/300"
        },
        {
            name: "Isabella Patel",
            position: "Graphic Designer",
            imgUrl: "https://i.pravatar.cc/300"
        },
        {
            name: "Benjamin Chen",
            position: "Videographer",
            imgUrl: "https://i.pravatar.cc/300"
        }
    ]);

    const [newPerson, setNewPerson] = useState("")

    const colors = [
        "bg-secondary-red-500",
        "bg-secondary-orange-500",
        "bg-secondary-blue-500",
        "bg-secondary-pink-500",
        "bg-secondary-yellow-500"
    ];


    return (
        <section className="p-8 w-[30%] shadow-2xl min-h-[100vh] relative">
            <div className="custom-flex-row justify-normal gap-2">
                <img src="/TimeSync-Logo-full.png" alt="logo" className="w-32" />
                {/* <span className="text-custom-logo">TimeSync</span> */}
            </div>

            <div className="p-8 custom-flex-col  justify-center gap-6">
                <button onClick={()=>setIsModalShown(true)} className="
                py-3 px-7 text-white bg-primary-green-500 rounded-custom-default
                custom-flex-row items-center justify-center gap-2
                ">
                    <BsPlus />
                    Create an event
                </button>

                <EventCreationModal isModalShown={isModalShown} closeModal={()=>setIsModalShown(false)} />

                <MiniCalendar />

                <div className="custom-flex-col justify-center gap-4">
                    <h2 className="text-custom-md font-bold">Collaborators</h2>

                    <div className="
                    custom-flex-row justify-center items-center
                    custom-text-input bg-primary-grey-400 text-primary-grey-500 !outline-none
                    ">
                        <CiSearch className="text-primary-grey-600 text-3xl"/>
                        <input type="text"
                            value={newPerson}
                            onChange={e => { setNewPerson(e.target.value); }} placeholder="Search People"
                            className="bg-transparent text-primary-grey-700 !outline-none"
                        />
                    </div>

                    {/* COLLABORATOR CARDS */}
                    <div className="custom-flex-col justify-center gap-4">
                        {collaborators.map((collaborator, i) => {
                            return (
                                <div key={collaborator.name}
                                    className={`
                                    ${colors[i % 5]} custom-flex-row justify-between items-center gap-2
                                     px-4 py-2 rounded-custom-full
                                     `}
                                >
                                    <div className="">
                                        <img src={collaborator.imgUrl} alt={collaborator.name} className="w-12 rounded-full" />
                                    </div>
                                    <div className="custom-flex-col">
                                        <span className="w-36 text-nowrap overflow-hidden inline-block overflow-ellipsis">{collaborator.name}</span>
                                        <span>{collaborator.position}</span>
                                    </div>
                                    <div className="">
                                        <RxCross2 className="text-3xl text-primary-grey-700" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    
                    <button className="
                    custom-flex-row justify-center items-center gap-1
                    w-full h-14 mx-auto rounded-custom-default bg-white border-2 border-primary-grey-700
                    ">
                        <BsPlus className="text-3xl" /> Add collaborators
                    </button>
                </div>
            </div>
        </section>
    )
}