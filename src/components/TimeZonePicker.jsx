import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import spacetime from "spacetime";


export default function TimeZonePicker() {

    const s = spacetime.now();

    const [timezone, setTimezone] = useState(s);
    const [search, setSearch] = useState(s.timezone().name);
    const [list, setList] = useState(Object.entries(spacetime.timezones()));

    // console.log(Object.entries(spacetime.timezones()))


    // function searchTimezone(id) {
    //     const tz = spacetime.now(id);
    //     return tz;
    // }

    // function findTimezoneByName(chars) {
    //     const tzs = Object.entries(spacetime.timezones());
    //     const found = tzs.filter(item => {
    //         return item[0].startsWith(chars.toLowerCase());
    //     });
    //     setList(found)
    // }

    // function setUserTimezone(newTz) {
    //     console.log("prev tz: ", spacetime.now())
        
    //     // s.goto(newTz)
    //     setTimezone(setUserTimezone);

    //     console.log("timezone changed: ", setUserTimezone)
    // }

    return (
        <div className="w-full">
 <label htmlFor="timezone" className="font-bold">Time Zone</label>
            {/* <div className="
                    custom-flex-row items-center
                    w-full custom-text-input bg-primary-grey-400 text-primary-grey-500 !outline-none
                    ">
                <span>Find your timezone on the list.</span>
                       <CiSearch className="text-primary-grey-600 text-3xl"/> 
                        <select name="timezone" id="timezone"
                            onChange={e => { setTimezone(e.target.value); }} 
                            className="bg-white text-primary-grey-700 !outline-none w-full"
                >
                    {
                        Object.entries(spacetime.timezones()).map(tz => {
                            console.log(tz)
                            return (
                                <option key={tz}>
                                    {tz[0]}
                                </option>
                            )
                        })
                    }
                        </select>
            </div> */}

            <div className="
                    custom-flex-row items-center
                    w-full custom-text-input bg-primary-grey-400 text-primary-grey-500 !outline-none
                    ">
                        <CiSearch className="text-primary-grey-600 text-3xl"/>
                        <input type="search" name="timezone" id="timezone"
                            value={search}
                            onChange={e => {
                                setSearch(e.target.value);
                                findTimezoneByName(e.target.value);
                            }} 
                            placeholder="Find your timezone on the list."
                            className="bg-transparent text-black !outline-none w-full"
                        />
                {/* <button className="bg-primary-green-500">Search</button> */}

                

            </div>
            {/* <div name="timezone" id="timezone"
                className="bg-white text-primary-grey-700 outline-1 outline-primary-grey-00 w-full h-32 overflow-y-scroll
                ">
                    {
                        list.map(item => {
                            return (
                                <div key={item[0]}
                                    onClick={setUserTimezone(item[0])}
                                >
                                    {item[0]}
                                </div>
                            )
                        })
                    }
                </div> */}
        </div>
    )
}