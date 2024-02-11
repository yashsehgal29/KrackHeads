import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ref, get, query, orderByChild, equalTo } from "firebase/database";

import db from "../../firebase";
const Login = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    try {
      const usersRef = ref(db, "userdetails");
      const queryRef = query(usersRef, orderByChild("email"), equalTo(email));
      // Fetch user data from Firebase Realtime Database
      const snapshot = await get(queryRef);

      const userData = snapshot.val();

      if (userData) {
        // User with the provided phone number exists
        const user = Object.values(userData)[0];

        // Check if the password matches
        if (user.password === password) {
          // Successfully logged in
          console.log("Login successful");
          navigate("/home/*");
        } else {
          // Incorrect password
          console.log("Incorrect password");
        }
      } else {
        // User with the provided phone number does not exist
        console.log("User not found");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <div className="flex justify-center w-screen h-screen mt-[100px]">
      <div className="bg-white shadow-xl rounded-xl h-fit w-96 sh ">
        <div className="text-[40px] font-bold text-center my-[30px]">Login</div>
        <div className="justify-center w-full h-full ">
          <form
            className="flex flex-col items-center justify-center p-4 gap-y-6"
            onSubmit={handleLogin}
          >
            <div className="flex items-center justify-center w-full">
              <input
                type="email"
                name="email"
                placeholder="Your E-mail"
                className="w-4/5 p-3 text-3xl rounded-lg shadow-lg bg-zinc-100"
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-center w-full">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="w-4/5 p-3 text-3xl rounded-lg shadow-lg bg-zinc-100"
              />
            </div>
            <div className="flex flex-col justify-center w-2/3">
              <button
                type="submit"
                className=" text-3xl mt-[20px] bg-blue-200 p-3 rounded-xl shadow-xl hover:shadow"
              >
                Submit
              </button>
              <div className="p-3 text-center">
                <Link to="/signup">New Here? Sign up</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
