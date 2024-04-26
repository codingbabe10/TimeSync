import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function SignUp() {

    const [user, setUser] = useState({ username: '', position: '', password: '', timezone: ""  })
    const navigate = useNavigate();

    async function registerUser(){
        const res = await fetch('http://127.0.0.1:5000/register',{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        if(res.ok){
            const data = await res.json()
            console.log(data,"==========");
            navigate('/login', {replace: true});
         }
        //  return redirect("/login")
       
    }

    function handleSubmit(e){
        e.preventDefault()
        registerUser()
        console.log(user, 'form submitted');
        
        setUser({username:'',email:'',password:''});
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
                        <h1 className="font-bold text-3xl">Sign Up</h1>
                        <span>You are invited to the &apos;Eternal Elegence Promotion&apos; by Emily at GlamAura Cosmetics</span>
                    </div>

                    <form onSubmit={handleSubmit} className="custom-flex-col justify-center items-center gap-5 w-full">

                        <div className=" w-3/4">
                            <label htmlFor="username" className="font-bold">Username</label>
                            <input type="text" name='name' value={user.name}
                                onChange={(e) => setUser((prevState) => ({ ...prevState, name: e.target.value }))}
                                className="outline outline-primary-grey-500 rounded-custom-default outline-2 px-4 py-2 w-full"
                                required
                            />
                        </div>

                        <div className="w-3/4">
                            <label htmlFor="position" className="font-bold">Position</label>
                            <input type="text" name='position' value={user.position}
                                onChange={(e) => setUser((prevState) => ({ ...prevState, position: e.target.value }))}
                                className="outline outline-primary-grey-500 rounded-custom-default outline-2 px-4 py-2  w-full"
                                required
                            />
                        </div>

                        <div className="w-3/4">
                            <label htmlFor="timezone" className="font-bold">Time Zone</label>
                            <input type="text" name='timezone' value={user.timezone}
                                onChange={(e) => setUser((prevState) => ({ ...prevState, timezone: e.target.value }))}
                                className="outline outline-primary-grey-500 rounded-custom-default outline-2 px-4 py-2  w-full"
                                required
                            />
                        </div>

                        <div className="w-3/4">
                            <label htmlFor="password" className="font-bold">Password</label>
                            <input type="password" name='password' value={user.password}
                                onChange={(e) => setUser((prevState) => ({ ...prevState, password: e.target.value }))}
                                className="outline outline-primary-grey-500 rounded-custom-default outline-2 px-4 py-2  w-full"
                                required
                            />
                        </div>

                        <button className="bg-primary-green-500 text-white w-3/4 h-14 rounded-custom-default">Sign in</button>

                    </form>
                </div>
            </div>
        </>
    )}

  
