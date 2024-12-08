import React from 'react';

const Register = () => {
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
        <form>
          {/* First Name */}
          <input
            type="text"
            placeholder="First Name"
            className="mb-4 w-full rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
          />

          {/* Last Name */}
          <input
            type="text"
            placeholder="Last Name"
            className="mb-4 w-full rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
          />

          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="mb-4 w-full rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email or mobile number"
            className="mb-4 w-full rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
          />

          {/* Confirm Email */}
          <input
            type="email"
            placeholder="Confirm Email or mobile number"
            className="mb-4 w-full rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="mb-6 w-full rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
          />

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full rounded bg-[#D87D4A] py-2 font-semibold text-white transition duration-300 hover:bg-[#D87D4A]"
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
