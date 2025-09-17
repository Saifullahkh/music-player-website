"use client"

// pages/signup.js
import { useState } from 'react';
import Head from 'next/head';
import { FcGoogle } from 'react-icons/fc';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className=" flex items-center justify-center p-2 md:p-4">
      <div className="bg-[#53063E] p-4 md:p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-[#EE10B0] mb-2">Sign Up</h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className='md:flex gap-4 md:space-y-0 space-y-2'>
            <div>
            <label htmlFor="name" className="block text-sm font-medium  mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-white rounded-lg focus:ring-2 focus:ring-[#EE10B0] focus:border-[#EE10B0] outline-none transition"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="number" className="block text-sm font-medium  mb-1">
              Number
            </label>
            <input
              id="number"
              name="number"
              type="tel"
              required
              value={formData.number}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-white rounded-lg focus:ring-2 focus:ring-[#EE10B0] focus:border-[#EE10B0] outline-none transition"
              placeholder="Enter your phone number"
            />
          </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium  mb-1">
              E-Mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-white rounded-lg focus:ring-2 focus:ring-[#EE10B0] focus:border-[#EE10B0] outline-none transition"
              placeholder="Enter your email address"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#EE10B0] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#EE10B0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EE10B0] transition"
          >
            Sign Up
          </button>
        </form>

        <div className="my-2 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 ">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button className="w-full flex items-center justify-center gap-3 bg-transparent border border-[#EE10B0] py-3 md:px-4 rounded-lg font-medium hover:bg-[#EE10B0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EE10B0] transition">
          <FcGoogle className="text-xl" />
          Sign Up With Google
        </button>
      </div>
    </div>
  );
}