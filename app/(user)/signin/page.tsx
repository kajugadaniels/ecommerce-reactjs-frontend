import React from 'react';

const Login = () => {
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
          Login
        </h2>
        <p className="mb-6 text-center text-gray-400">
          Enter your details to sign in
        </p>

        {/* Form */}
        <form>
          {/* Email */}
          <input
            type="email"
            placeholder="Email or mobile number"
            className="w-full mb-4 px-4 py-2 text-white bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A] placeholder-gray-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 px-4 py-2 text-white bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D87D4A] placeholder-gray-500"
          />

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-[#D87D4A] text-white py-2 rounded font-semibold hover:bg-[#c36a39] transition duration-300"
          >
            SIGN IN
          </button>
        </form>

        {/* Additional Links */}
        <div className="flex flex-col items-center justify-between mt-4 text-sm text-gray-400 sm:flex-row">
          <label className="flex items-center mb-2 sm:mb-0">
            <input
              type="checkbox"
              className="mr-2 bg-gray-700 border-gray-600 focus:ring-0"
            />
            Remember me
          </label>
          <a href="#" className="text-[#D87D4A] hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Login Link */}
        <p className="mt-6 text-center text-gray-400">
          Don't have an account?{' '}
          <a href="/signup" className="text-[#D87D4A] hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
