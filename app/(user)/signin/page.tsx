import React from 'react';

const Login = () => {
  return <div>
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center opacity-60"
      style={{
        backgroundImage: "url('/products/aut_background.png')", 
      }}
    >
      <div className="bg-black bg-opacity-70 p-32 rounded-lg shadow-lg w-[800px]">
        {/* Title */}
        <h2 className="text-white text-2xl font-bold text-center mb-4">Login</h2>
        <p className="text-gray-400 text-center mb-6">
          Enter your details to sign up
        </p>

        {/* Form */}
        <form>       

          {/* Email */}
          <input
            type="email"
            placeholder="Email or mobile number"
            className="w-full mb-4 px-4 py-2 text-white bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

      

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 px-4 py-2 text-white bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded font-semibold hover:bg-orange-600 transition duration-300"
          >
            SIGN IN 
          </button>
        </form>

        {/* Additional Links */}
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
        </div>

        {/* Login Link */}
        <p className="text-center text-gray-400 mt-6">
         Don't Have an account?{" "}
          <a href="/signup" className="text-orange-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  </div>;
};

export default Login;
