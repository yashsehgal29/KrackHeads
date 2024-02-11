import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your signup logic here
    console.log(formData);
    const { fullName, email, phone, password, confirmPassword } = formData;

    if (password === confirmPassword) {
      try {
        const res = await fetch(
          "https://crack-hack-default-rtdb.firebaseio.com/userdetails.json",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              fullName,
              email,
              phone,
              password,
              confirmPassword,
            }),
          }
        );

        if (res.ok) {
          // Navigate to the "/login" path on successful signup
          navigate("/login");
          // Reset the form data after successful signup
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
          });
        } else {
          // Handle other response scenarios (e.g., display an error message)
          console.error("Signup failed:", res.statusText);
        }
      } catch (error) {
        console.error("Error during signup:", error);
      }
    } else {
      alert("Password doesn't match. Please re-enter.");
    }
  };

  return (
    <div className="flex justify-center w-screen h-screen mt-[100px]">
      <div className="w-1/3 bg-white shadow-xl rounded-xl h-fit sh ">
        <div className="text-[40px] font-bold text-center my-[30px]">
          Signup
        </div>
        <div className="justify-center w-full h-full ">
          <form
            className="flex flex-col items-center justify-center p-4 gap-y-6"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center justify-center w-full">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-4/5 p-3 text-3xl rounded-lg shadow-lg bg-zinc-100"
                required
              />
            </div>
            <div className="flex items-center justify-center w-full">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-4/5 p-3 text-3xl rounded-lg shadow-lg bg-zinc-100"
                required
              />
            </div>
            <div className="flex items-center justify-center w-full">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-4/5 p-3 text-3xl rounded-lg shadow-lg bg-zinc-100"
                required
              />
            </div>
            <div className="flex items-center justify-center w-full">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-4/5 p-3 text-3xl rounded-lg shadow-lg bg-zinc-100"
                required
              />
            </div>
            <div className="flex items-center justify-center w-full">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-4/5 p-3 text-3xl rounded-lg shadow-lg bg-zinc-100"
                required
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
                <Link to="/login">Already have an account? Login</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
