import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { signUpWithCredentials } from "../services/authService";
import TimeZonePicker from "./TimeZonePicker";

// Initialize Firebase with your project credentials
const firebaseConfig = {
  // Your Firebase config here
};

firebase.initializeApp(firebaseConfig);

export default function Register() {
  const formDataDefaults = { username: "", email: "", password: "", timezone: "" };

  const [formData, setFormData] = useState(formDataDefaults);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // Sign up the user with provided credentials
      await signUpWithCredentials(formData);
      
      // After successful sign up, sign in the user
      await firebase.auth().signInWithEmailAndPassword(formData.email, formData.password);

      // Redirect the user to another page or perform other actions
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <>
      <div className="
            fixed top-1 left-1  z-[2]
            w-full h-full bg-white
            custom-flex-row
            ">
        <img src="/signin-pic.png" alt="person working at desk" className="w-1/2 h-full object-cover" />

        <div className="w-1/2 custom-flex-col justify-center items-center gap-8">
          <div className="w-3/4">
            <h1 className="font-bold text-3xl">Sign Up</h1>
            <span>Let&apos;s start this collaboration</span>
          </div>

          <form onSubmit={handleSubmit} className="custom-flex-col justify-center items-center gap-5 w-3/4">

            <div className="w-full">
              <label htmlFor="username" className="font-bold">User name</label>
              <input
  type="text"
  name='username'
  value={formData.username}
  onChange={handleChange}
  className="outline outline-primary-grey-500 rounded-custom-default outline-2 px-4 py-2 w-full"
  required
  placeholder="Please enter your username"
/>
            </div>

            <div className="w-full">
              <label htmlFor="email" className="font-bold">Email</label>
              <input
                type="text"
                name='email'
                value={formData.email}
                onChange={handleChange}
                className="outline outline-primary-grey-500 rounded-custom-default outline-2 px-4 py-2 w-full"
                required
                placeholder="Please enter your email"
              />
            </div>

            <div className="w-full">
              <label htmlFor="password" className="font-bold">Password</label>
              <input
                type="password"
                name='password'
                value={formData.password}
                onChange={handleChange}
                className="outline outline-primary-grey-500 rounded-custom-default outline-2 px-4 py-2 w-full"
                required
                placeholder="Create a password"
              />
            </div>

            {/* <div className="w-full">
              <label htmlFor="timezone" className="font-bold">Time Zone</label>
              <input
                type="text"
                name='timezone'
                value={formData.timezone}
                onChange={handleChange}
                className="outline outline-primary-grey-500 rounded-custom-default outline-2 px-4 py-2 w-full"
                required
              />
            </div> */}

            <TimeZonePicker />

            <button type="submit" className="custom-button h-14">Sign up</button>

          </form>
        </div>
      </div>
    </>
  );
}
