import React from 'react';

const Login = () => {
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
        <form>
          {/* Email */}
          <input
            type="email"
            placeholder="Email or mobile number"
            className="mb-4 w-full rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="mb-6 w-full rounded border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
          />

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full rounded bg-[#D87D4A] py-2 font-semibold text-white transition duration-300 hover:bg-[#c36a39]"
          >
            SIGN IN
          </button>
        </form>

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
