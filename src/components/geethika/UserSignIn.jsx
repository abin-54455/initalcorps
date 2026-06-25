import React, { useState } from 'react'; // Fixed: Added missing useState hook import
import { useNavigate } from 'react-router-dom';

export default function UserSignIn({ onClose }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("admin@initialcorps.in");
  const [password, setPassword] = useState("1234567");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    // Your submission logic...
    navigate("/ServicesPage"); // Navigate to ServicesPage after successful sign-in
  };

  // Safe handler for closing or turning back
  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate(-1); // Defaults to taking the user back to the welcome screen if no onClose prop is provided
    }
  };

  return (
    // 🌐 Centering Parent Wrapper
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#9ca3af", // Matches your grey background backdrop
        padding: "20px",
        boxSizing: "border-box"
      }}
    >
      {/* Your Form Modal */}
      <form
        onSubmit={handleSignIn}
        style={{
          width: "100%",
          maxWidth: "460px",
          background: "#ffffff",
          borderRadius: "24px", // Matches your smooth layout mockup corners
          padding: "40px",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          position: "relative",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          boxSizing: "border-box"
        }}
      >
        {/* Close Button wired up cleanly */}
        <button 
          type="button" 
          onClick={handleClose}
          style={{ position: "absolute", top: "20px", right: "20px", width: "32px", height: "32px", borderRadius: "50%", border: "none", background: "#f3f4f6", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#6b7280", fontSize: "14px" }}
        >
          ✕
        </button>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{ width: "64px", height: "64px", background: "#0a6b82", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="28" height="28" fill="none" stroke="#ffffff" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
        </div>

        <h2 style={{ textAlign: "center", fontSize: "24px", fontWeight: "700", color: "#111827", margin: "0 0 6px 0" }}>User Sign In</h2>
        <p style={{ textAlign: "center", fontSize: "14px", color: "#6b7280", margin: "0 0 24px 0" }}>Welcome back! Sign in to your account</p>

        {/* Tab Switcher */}
        <div style={{ display: "flex", border: "1px solid #e5e7eb", borderRadius: "10px", overflow: "hidden", marginBottom: "24px", padding: "4px", background: "#fff" }}>
          <button type="button" style={{ flex: 1, padding: "10px 0", fontSize: "14px", fontWeight: "600", background: "#0a6b82", color: "#ffffff", border: "none", borderRadius: "8px" }}>Sign In</button>
          <button type="button" onClick={() => navigate("/register")} style={{ flex: 1, padding: "10px 0", fontSize: "14px", fontWeight: "600", background: "transparent", color: "#0a6b82", border: "none", cursor: "pointer" }}>Register</button>
        </div>

        <div style={{ marginBottom: "18px" }}>
          <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Email Address</label>
          <div style={{ display: "flex", alignItems: "center", border: "1px solid #e5e7eb", borderRadius: "10px", height: "48px", padding: "0 14px" }}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ flex: 1, border: "none", outline: "none", fontSize: "14px" }} required />
          </div>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Password</label>
          <div style={{ display: "flex", alignItems: "center", border: "1px solid #e5e7eb", borderRadius: "10px", height: "48px", padding: "0 14px" }}>
            <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} style={{ flex: 1, border: "none", outline: "none", fontSize: "14px" }} required />
            <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af" }}>
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
        </div>

        <button type="submit" style={{ width: "100%", height: "50px", background: "#0a6b82", color: "#ffffff", border: "none", borderRadius: "10px", fontSize: "15px", fontWeight: "600", cursor: "pointer" }}>
          Sign In
        </button>

        <p style={{ textAlign: "center", fontSize: "14px", color: "#6b7280", marginTop: "24px", marginBottom: "0" }}>
          Don't have an account? <span onClick={() => navigate("/register")} style={{ color: "#0a6b82", fontWeight: "600", cursor: "pointer" }}>Register now</span>
        </p>
      </form>
    </div>
  );
}