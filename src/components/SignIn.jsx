import { useState  } from "react"

export default function SignIn(props) {

    const { signUp, signInWithGoogle, } = props;
    
    const [credentials, setCredentials] = useState({ username: '', email: '', password: '', timezone: ""  })

    function handleSubmit(e){
        e.preventDefault()
        signUp(credentials.email, credentials.password);
    }

    return (
        <>
            <div className="
            fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]
            w-3/4 h-3/4 bg-white
            custom-flex-row
            ">
                <img src="/signin-pic.png" alt="person working at desk" className="w-1/2 h-full object-cover" />

                <div className="w-full custom-flex-col justify-center items-center gap-8">
                    <div className="w-3/4">
                        <h1 className="font-bold text-3xl">Sign In</h1>
                        <span>Let&#39;s start this collboration</span>
                    </div>

                    <form onSubmit={handleSubmit} className="custom-flex-col justify-center items-center gap-5 w-full">

                        {/* <div className=" w-3/4">
                            <label htmlFor="username" className="font-bold">Username</label>
                            <input type="text" name='username' value={credentials.username}
                                onChange={(e) => setCredentials((prevState) => ({ ...prevState, username: e.target.value }))}
                                className="outline outline-primary-grey-500 rounded-custom-default outline-2 px-4 py-2 w-full"
                                required
                            />
                        </div> */}

                        <div className="w-3/4">
                            <label htmlFor="email" className="font-bold">Email</label>
                            <input type="text" name='email' value={credentials.emai}
                                onChange={(e) => setCredentials((prevState) => ({ ...prevState, email: e.target.value }))}
                                className="outline outline-primary-grey-500 rounded-custom-default outline-2 px-4 py-2  w-full"
                                required
                            />
                        </div>

                        <div className="w-3/4">
                            <label htmlFor="password" className="font-bold">Password</label>
                            <input type="text" name='password' value={credentials.password}
                                onChange={(e) => setCredentials((prevState) => ({ ...prevState, password: e.target.value }))}
                                className="outline outline-primary-grey-500 rounded-custom-default outline-2 px-4 py-2  w-full"
                                required
                            />
                        </div>

                        {/* <div className="w-3/4">
                            <label htmlFor="timezone" className="font-bold">Time Zone</label>
                            <input type="text" name='timezone' value={credentials.timezone}
                                onChange={(e) => setCredentials((prevState) => ({ ...prevState, timezone: e.target.value }))}
                                className="outline outline-primary-grey-500 rounded-custom-default outline-2 px-4 py-2  w-full"
                                required
                            />
                        </div> */}

                        <button className="custom-button w-3/4 h-14">Sign in</button>

                    </form>
                </div>
            </div>
        </>
    )}

  
