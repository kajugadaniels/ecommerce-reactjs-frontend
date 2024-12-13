'use client';

import React, { useState } from 'react';
import { loginUser } from '@/Helpers/CallRequestHelper';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/contexts/userContext';

const Login = () => {
  const router = useRouter();
  const { setUserData, setToken } = useUserContext();

  const [formData, setFormData] = useState({
    login: '',
    password: '',
    rememberMe: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Frontend validation
    const { login, password } = formData;
    if (!login || !password) {
      toast.error('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const data = {
        login,
        password,
      };

      const response = await loginUser(data);

      if (response.status === 200) {
        const { user, token } = response.data;
        toast.success('Login successful!');
        setUserData(user);
        setToken(token);
        // Store data in localStorage
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        // Redirect to protected route
        router.push('/users/allusers');
      } else {
        // Display backend validation errors if any
        if (response.data.errors) {
          response.data.errors.forEach((err: any) => {
            toast.error(err.msg);
          });
        } else {
          toast.error(response.data.message || 'Login failed.');
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
          Login
        </h2>
        <p className="mb-6 text-center text-gray-400">
          Enter your details to sign in
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <input
            type="email"
            name="login"
            placeholder="Email or mobile number"
<<<<<<< HEAD
            value={formData.login}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 text-white bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A] placeholder-gray-500"
=======
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
            className="w-full mb-6 px-4 py-2 text-white bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A] placeholder-gray-500"
=======
            className="mb-6 w-full rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
>>>>>>> cad270464973bb0ea45f93cba771a9dbd36e1a3d
          />

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="mr-2 bg-gray-700 border-gray-600 focus:ring-0"
              />
              Remember me
            </label>
            <a href="#" className="text-[#D87D4A] hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
<<<<<<< HEAD
            disabled={isSubmitting}
            className={`w-full bg-[#D87D4A] text-white py-2 rounded font-semibold hover:bg-[#c36a39] transition duration-300 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
=======
            className="w-full rounded bg-[#D87D4A] py-2 font-semibold text-white transition duration-300 hover:bg-[#c36a39]"
>>>>>>> cad270464973bb0ea45f93cba771a9dbd36e1a3d
          >
            {isSubmitting ? 'Signing In...' : 'SIGN IN'}
          </button>
        </form>

<<<<<<< HEAD
=======
        {/* Additional Links */}
        <div className="mt-4 flex flex-col items-center justify-between text-sm text-gray-400 sm:flex-row">
          <label className="mb-2 flex items-center sm:mb-0">
            <input
              type="email"
              placeholder="Email or mobile number"
              className="mb-4 w-full rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            Remember me
          </label>
          <a href="#" className="text-[#D87D4A] hover:underline">
            Forgot password?
          </a>
        </div>

>>>>>>> cad270464973bb0ea45f93cba771a9dbd36e1a3d
        {/* Login Link */}
        <p className="mt-6 text-center text-gray-400">
          Don`t have an account?{' '}
          <a href="/signup" className="text-[#D87D4A] hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
