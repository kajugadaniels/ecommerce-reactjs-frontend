import React from 'react';

const Register = () => {
  return (
    <div>
      <div
        className="flex h-screen items-center justify-center bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('/products/aut_background.png')",
        }}
      >
        <div className="w-[800px] rounded-lg bg-black bg-opacity-70 p-32 shadow-lg">
          {/* Title */}
          <h2 className="mb-4 text-center text-2xl font-bold text-white">
            Sign Up
          </h2>
          <p className="mb-6 text-center text-gray-400">
            Enter your details to sign up
          </p>

          {/* Form */}
          <form>
            {/* First Name */}
            <input
              type="text"
              placeholder="First Name"
              className="mb-4 w-full rounded border border-gray-600 bg-gray-800 px-10 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            {/* Last Name */}
            <input
              type="text"
              placeholder="Last Name"
              className="mb-4 w-full rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            {/* Username */}
            <input
              type="text"
              placeholder="Username"
              className="mb-4 w-full rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email or mobile number"
              className="mb-4 w-full rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            {/* Confirm Email */}
            <input
              type="email"
              placeholder="Confirm Email or mobile number"
              className="mb-4 w-full rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="mb-6 w-full rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full rounded bg-orange-500 py-2 font-semibold text-white transition duration-300 hover:bg-orange-600"
            >
              SIGN UP
            </button>
          </form>

          {/* Additional Links
        <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 bg-gray-700 border-gray-600 focus:ring-0"
            />
            Remember me
          </label>
          <a href="#" className="text-orange-500 hover:underline">
            Forgot password?
          </a>
        </div> */}

          {/* Login Link */}
          <p className="mt-6 text-center text-gray-400">
            Have an account?{' '}
            <a href="/signin" className="text-orange-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
