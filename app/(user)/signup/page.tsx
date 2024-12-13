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

    if (password !== confirmPassword) { // Corrected comparison
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
        confirmPassword,
      };

      const response = await registerUser(data);

      if (response.status === 201) {
        toast.success('Registration successful! Please log in.');
        router.push('/signin');
      } else {
        // Display backend validation errors if any
        if (response.data.errors) {
          response.data.errors.forEach((err: any) => {
            toast.error(err.msg);
          });
        } else {
          toast.error(response.data.message || 'Registration failed.');
        }
      }
    } catch (error: any) {
      // Removed console.error for cleaner logs
      toast.error(error.response?.data?.message || 'An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage: "url('/products/aut_background.png')",
      }}
    >
      <div className="w-full max-w-md rounded-lg bg-black bg-opacity-70 p-6 shadow-lg sm:p-8 md:p-12">
        {/* Title */}
        <h2 className="mb-2 text-center text-2xl font-bold text-white sm:text-3xl">
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
<<<<<<< HEAD
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 text-white placeholder-gray-500 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
=======
            className="mb-4 w-full rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
>>>>>>> cad270464973bb0ea45f93cba771a9dbd36e1a3d
          />

          {/* Last Name */}
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
<<<<<<< HEAD
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 text-white placeholder-gray-500 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
=======
            className="mb-4 w-full rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
          />

          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="mb-4 w-full rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
>>>>>>> cad270464973bb0ea45f93cba771a9dbd36e1a3d
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email or mobile number"
<<<<<<< HEAD
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 text-white placeholder-gray-500 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
=======
            className="mb-4 w-full rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
>>>>>>> cad270464973bb0ea45f93cba771a9dbd36e1a3d
          />

          {/* Phone Number */}
          <input
<<<<<<< HEAD
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 text-white placeholder-gray-500 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
=======
            type="email"
            placeholder="Confirm Email or mobile number"
            className="mb-4 w-full rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
>>>>>>> cad270464973bb0ea45f93cba771a9dbd36e1a3d
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
<<<<<<< HEAD
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
=======
            className="mb-6 w-full rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
>>>>>>> cad270464973bb0ea45f93cba771a9dbd36e1a3d
          />

          {/* Sign Up Button */}
          <button
            type="submit"
<<<<<<< HEAD
            disabled={isSubmitting}
            className={`w-full py-2 font-semibold text-white transition duration-300 bg-[#D87D4A] rounded hover:bg-[#c36a39] ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
=======
            className="w-full rounded bg-[#D87D4A] py-2 font-semibold text-white transition duration-300 hover:bg-[#D87D4A]"
>>>>>>> cad270464973bb0ea45f93cba771a9dbd36e1a3d
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
