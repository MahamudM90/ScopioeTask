import React, { useState } from 'react';
import Rectangle from '../../assets/Rectangle.svg'
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(formData);
    };

    return (
        <div className='flex justify-between'>
            <div className="p-4 ml-4">
                <div>
                    <h1 className='text-xl text-[#4285F3]  font-poor-richard'>LOGO</h1>
                    <h5 className='text-xl text-[#152A16] w-[362px] h-[24px] mt-2 font-bold font-poppins'>Sign In To your Account</h5>
                    <p className='w-[429px] h-[67px] mt-4 text-[#5C635A] font-poppins'>Welcome Back! By click the sign up button, you're agree to Zenitood Terms and Service and acknlowledge the <span className='underline text-[#156BCA]'> Privacy and Policy</span> </p>
                </div>
                <div className='mt-4'>
                    <form onSubmit={handleSubmit} >
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-[#152A16] font-poppins">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded outline-none w-full" placeholder="@username"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-[#152A16] font-poppins">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded w-full outline-none  w-1/3" placeholder="Enter Your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-[#152A16] font-poppins">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="mt-1 p-2 border border-gray-300 rounded w-full outline-none  w-full"
                                    placeholder='Enter your password'
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute -ml-10 mt-5"
                                >
                                    {showPassword ? <div>
                                        <FaEye />
                                    </div> : <div>
                                        <FaEyeSlash />
                                    </div>}
                                </button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-[#152A16] font-poppins text-gray-700 outline-none  w-full" >Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="mt-1 p-2 border border-gray-300 rounded  w-full outline-none" placeholder="Re-type password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute -ml-10 mt-5"
                                >
                                    {showPassword ? <div>
                                        <FaEye />
                                    </div> : <div>
                                        <FaEyeSlash />
                                    </div>}
                                </button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="acceptTerms"
                                    checked={formData.acceptTerms}
                                    onChange={handleChange}
                                    className="form-checkbox"
                                    required
                                />
                                <span className="ml-2 text-[#4285F3] font-poppins">Accept Terms of Service</span>
                            </label>
                        </div>
                        <div className='mx-12'>
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded w-[258px] h-[42px] font-poppins">
                                Sign Up
                            </button>
                            <h4 className='font-poppins mr-3 mt-2'>Already Have an Account? <Link to='/signin'><span className='text-[#156BCA] underline'>Login</span></Link> </h4>
                        </div>
                    </form>
                </div>
            </div>
            <div className='mx-8 mt-4 rounded'>
                <img className='w-[515px] h-[615px] blur' src={Rectangle}></img>
            </div>
            <div className='absolute ml-[890px] mt-[270px] w-[341px] h-[143px] bg-[#152A16] opacity-[70%] rounded'>
                <div className='text-center mt-10 ml-14 w-[221px] h-[53px]'>
                    <h2 className='text-[#156BCA] font-poppins'>Create Account</h2>
                    <h5 className='text-[#FFFFFF] font-poppins'>Fill In your Information</h5>
                </div>

            </div>
        </div>
    );
};

