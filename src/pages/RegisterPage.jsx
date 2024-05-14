import { CiSettings } from "react-icons/ci";
import { PiBellLight } from "react-icons/pi";
import { SlArrowDown } from "react-icons/sl";
import SignUp from '../components/SignUp';
import Sidebar from "../components/Sidebar";
import MonthCalendar from "../components/MonthCalendar";
import React, { useState } from 'react';

import './SignInPage.css';

export default function RegisterPage() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '', timezone: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://127.0.0.1:5000/register', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                // Redirect or navigate to the login page
            } else {
                // Handle error response
                console.error('Registration failed:', res.statusText);
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <>
       
       <>
       
        <SignUp handleChange={handleChange} formData={formData} />

       
        
        </>   
    </>
);}
