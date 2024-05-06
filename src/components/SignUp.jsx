import { useState } from "react"
import { signUpWithCredentials } from "../services/authService";

export default function SignUp() {

    const formDataDefaults = { username: '', email: '', password: '', timezone: ""  }

    const [formData, setFormData] = useState(formDataDefaults);

    function handleSubmit(e){
        e.preventDefault()
        signUpWithCredentials(formData);
        setFormData(formDataDefaults);
    }

    return (
        <>
            <div className="
            fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]
            w-3/4 h-3/4 bg-white
            custom-flex-row
            ">
                <img src="/signin-pic.png" alt="person working at desk" className="w-1/2 h-full object-cover" />

                <div className="w-1/2 custom-flex-col justify-center items-center gap-8">
                    <div className="w-3/4">
                        <h1 className="font-bold text-3xl">Sign Up</h1>
                        <span>Let&apos;s start this collaboration</span>
                    </div>

                    <form onSubmit={handleSubmit} className="custom-flex-col justify-center items-center gap-5 w-full">

                        <div className=" w-3/4">
                            <label htmlFor="username" className="font-bold">User name</label>
                            <input type="text" name='username' value={formData.username}
                                onChange={(e) => setFormData((prevState) => ({ ...prevState, name: e.target.value }))}
                                className="outline outline-primary-grey-500 rounded-custom-default outline-2 px-4 py-2 w-full"
                                required
                                placeholder="Please enter your name"
                            />
                        </div>

                        <div className=" w-3/4">
                            <label htmlFor="email" className="font-bold">Email</label>
                            <input type="text" name='email' value={formData.email}
                                onChange={(e) => setFormData((prevState) => ({ ...prevState, name: e.target.value }))}
                                className="outline outline-primary-grey-500 rounded-custom-default outline-2 px-4 py-2 w-full"
                                required
                                placeholder="Please enter your name"
                            />
                        </div>

                        <div className="w-3/4">
                            <label htmlFor="password" className="font-bold">Password</label>
                            <input type="password" name='password' value={formData.password}
                                onChange={(e) => setFormData((prevState) => ({ ...prevState, password: e.target.value }))}
                                className="outline outline-primary-grey-500 rounded-custom-default outline-2 px-4 py-2  w-full"
                                required
                                placeholder="Create a password"
                            />
                        </div>

                        <div className="w-3/4">
                            <label htmlFor="timezone" className="font-bold">Time Zone</label>
                            <input type="text" name='timezone' value={formData.timezone}
                                onChange={(e) => setFormData((prevState) => ({ ...prevState, timezone: e.target.value }))}
                                className="outline outline-primary-grey-500 rounded-custom-default outline-2 px-4 py-2  w-full"
                                required
                            />
                        </div>

                        <button className="custom-button h-14">Sign in</button>

                    </form>
                </div>
            </div>
        </>
    )}

  
