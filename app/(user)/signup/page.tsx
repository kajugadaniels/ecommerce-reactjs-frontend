import React from 'react';

const Register = () => {
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
        <form>
          {/* First Name */}
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 mb-4 text-white placeholder-gray-500 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
          />

          {/* Last Name */}
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 mb-4 text-white placeholder-gray-500 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
          />

          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 mb-4 text-white placeholder-gray-500 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email or mobile number"
            className="w-full px-4 py-2 mb-4 text-white placeholder-gray-500 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
          />

          {/* Confirm Email */}
          <input
            type="email"
            placeholder="Confirm Email or mobile number"
            className="w-full px-4 py-2 mb-4 text-white placeholder-gray-500 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-6 text-white placeholder-gray-500 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
          />

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white transition duration-300 bg-[#D87D4A] rounded hover:bg-[#D87D4A]"
          >
            SIGN UP
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
