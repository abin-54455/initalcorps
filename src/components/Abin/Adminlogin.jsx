import React, { useState } from "react";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";
function AdminSignInModal(props) {
  // Fixed error in user's initial email string to match criteria
  const initialEmail = props.initialEmail || "admin@initialcorps.in";

  const onSignIn = props.onSignIn;
  const onClose = props.onClose;

  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  // Added error message state for explicit validation feedback
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errorMessage) setErrorMessage(""); // Clear error when user re-types
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errorMessage) setErrorMessage("");
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Explicit structural email validation logic
    if (email.trim().toLowerCase() !== "admin@initialcorps.in") {
      setErrorMessage("Access Denied: Invalid administrator email address.");
      return; // Halts compilation and blocks parent dispatch actions
    }

    if (onSignIn) {
      onSignIn({
        email: email,
        password: password,
      });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4 z-50">
      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex flex-col items-center">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 rounded-full p-1.5"
          aria-label="Close modal"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Shield Header Icon */}
        <div className="w-16 h-16 bg-[#1A365D] rounded-2xl flex items-center justify-center shadow-md mb-4 mt-2">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>

        {/* Titles */}
        <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight text-center">
          Admin Sign In
        </h2>
        <p className="text-sm text-gray-400 font-medium tracking-wide mt-1.5 mb-6 text-center">
          Enter your admin credentials to continue
        </p>

        {/* Validation Error Alert Box */}
        {errorMessage && (
          <div className="w-full mb-4 px-4 py-3 bg-red-50 border border-red-100 text-red-600 text-xs font-semibold rounded-xl flex items-center gap-2 animate-shake">
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-5">
          
          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="admin@initialcorps.in"
                required
                className={`w-full pl-12 pr-4 py-3.5 bg-white border rounded-xl text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 transition-all text-[15px] ${
                  errorMessage ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-gray-200 focus:ring-blue-500/20 focus:border-blue-500"
                }`}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter password"
                required
                className={`w-full pl-12 pr-12 py-3.5 bg-white border rounded-xl text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 transition-all text-[15px] ${
                  errorMessage ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-gray-200 focus:ring-blue-500/20 focus:border-blue-500"
                }`}
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={() => navigate('/dashboardpage')}
            className="w-full mt-2 bg-[#1A365D] hover:bg-[#152c4d] text-white font-semibold py-4 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.99]"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Sign In as Admin
          </button>

        </form>
      </div>
    </div>
  );
}

export default AdminSignInModal;