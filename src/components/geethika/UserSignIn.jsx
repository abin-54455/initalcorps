import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserSignIn({ onClose }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("user@initialcorps.in"); // Updated default to fit user context
  const [password, setPassword] = useState("1234567");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    
    // Your authentication/submission logic goes here...
    
    // Redirects to the Services Page upon submission
    navigate("/ServicesPage"); 
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate(-1); // Back to welcome screen if modal is closed
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4 z-50">
      {/* Form Container */}
      <form
        onSubmit={handleSignIn}
        className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex flex-col"
      >
        {/* Close Button */}
        <button 
          onClick={() => navigate("/Welcomepage")} 
          type="button"
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 rounded-full p-1.5 self-end"
          aria-label="Close modal"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* User Icon Header */}
        <div className="w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center shadow-md mb-4 mt-2 mx-auto">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
        </div>

        {/* Titles */}
        <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight text-center">
          User Sign In
        </h2>
        <p className="text-sm text-gray-400 font-medium tracking-wide mt-1.5 mb-6 text-center">
          Welcome back! Sign in to your account
        </p>

        {/* Tab Switcher */}
        <div className="flex border border-gray-200 rounded-xl overflow-hidden mb-6 p-1 bg-gray-50/50">
          <button type="button" className="flex-1 py-2 text-sm font-semibold bg-cyan-600 text-white rounded-lg shadow-sm border border-cyan-700/10">
            Sign In
          </button>
          <button 
            type="button" 
            onClick={() => navigate("/register")} 
            className="flex-1 py-2 text-sm font-semibold bg-transparent text-cyan-700 hover:text-cyan-800"
          >
            Register
          </button>
        </div>

        {/* Input Fields */}
        <div className="space-y-5">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-[15px]"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-4 pr-12 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-[15px]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-600/10 transition-all active:scale-[0.99]"
        >
          Sign In
        </button>

        {/* Footer Link */}
        <p className="text-center text-sm text-gray-500 mt-6 mb-0">
          Don't have an account?{" "}
          <span 
            onClick={() => navigate("/register")} 
            className="text-cyan-600 font-semibold cursor-pointer hover:underline"
          >
            Register now
          </span>
        </p>
      </form>
    </div>
  );
}