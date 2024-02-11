import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your signup logic here
        console.log(formData);
    };

    return (
        <div className="flex justify-center w-screen h-screen mt-[10px]">
            <div className="bg-white shadow-xl rounded-xl h-fit w-1/3 ">
                <div className="text-[40px] font-bold text-center my-[20px]">Signup</div>
                <div className="justify-center w-full h-full ">
                    <form className="flex flex-col items-center justify-center p-4 gap-y-6" onSubmit={handleSubmit}>
                        <div className="flex items-center justify-center w-full">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-4/5 p-3 text-3xl rounded-lg shadow-lg bg-zinc-100"
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
