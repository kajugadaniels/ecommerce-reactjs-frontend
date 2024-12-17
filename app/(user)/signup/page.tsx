'use client';

import React, { useState } from 'react';
import { registerUser } from '@/Helpers/CallRequestHelper';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Frontend validation
    const { firstName, lastName, email, phoneNumber, password, confirmPassword } = formData;
    if (!firstName || !lastName || !email || !phoneNumber || !password || !confirmPassword) {
      toast.error('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Password and Confirm Password do not match.');
      return;
    }

    setIsSubmitting(true);

    try {
      const data = {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
      };

      const response = await registerUser(data);

      if (response.status === 201) {
        toast.success('Registration successful! Please log in.');
        router.push('/signin');
      } else {
        // Display backend validation errors if any
        if (response.data.errors) {
          Object.values(response.data.errors).forEach((err: any) => {
            toast.error(err);
          });
        } else {
          toast.error(response.data.error || 'Registration failed.');
        }
      }
    } catch (error: any) {
      // Removed console.error for cleaner logs
      toast.error(error.response?.data?.error || 'An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen p-4 bg-center bg-cover"
      style={{
        backgroundImage: "url('/products/aut_background.png')",
      }}
    >
      <div className="w-full max-w-md p-6 bg-black rounded-lg shadow-lg bg-opacity-70 sm:p-8 md:p-12">
        {/* Title */}
        <h2 className="mb-2 text-2xl font-bold text-center text-white sm:text-3xl">
          Sign Up
        </h2>
        <p className="mb-6 text-center text-gray-400">
          Enter your details to create an account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 text-white placeholder-gray-500 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
          />

          {/* Last Name */}
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 text-white placeholder-gray-500 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 text-white placeholder-gray-500 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
          />

          {/* Phone Number */}
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 text-white placeholder-gray-500 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 text-white placeholder-gray-500 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
          />

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-6 text-white placeholder-gray-500 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
          />

          {/* Sign Up Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 font-semibold text-white transition duration-300 bg-[#D87D4A] rounded hover:bg-[#c36a39] ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Signing Up...' : 'SIGN UP'}
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-gray-400">
          Already have an account?{' '}
          <a href="/signin" className="text-[#D87D4A] hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
