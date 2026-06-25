import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/dashboard");
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
        backgroundColor: "#9ca3af",
        padding: "20px",
        boxSizing: "border-box"
      }}
    >
      <form onSubmit={handleRegister} style={{ width: "100%", maxWidth: "460px", background: "#ffffff", borderRadius: "24px", padding: "40px", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", position: "relative", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", boxSizing: "border-box" }}>
        <button type="button" style={{ position: "absolute", top: "20px", right: "20px", width: "32px", height: "32px", borderRadius: "50%", border: "none", background: "#f3f4f6", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#6b7280", fontSize: "14px" }}>✕</button>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
          <div style={{ width: "64px", height: "64px", background: "#0a6b82", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="28" height="28" fill="none" stroke="#ffffff" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
        </div>

        <h2 style={{ textAlign: "center", fontSize: "24px", fontWeight: "700", color: "#111827", margin: "0 0 6px 0" }}>Create Account</h2>
        <p style={{ textAlign: "center", fontSize: "14px", color: "#6b7280", margin: "0 0 24px 0" }}>Register to access our services</p>

        {/* Tab Switcher */}
        <div style={{ display: "flex", border: "1px solid #e5e7eb", borderRadius: "10px", overflow: "hidden", marginBottom: "24px", padding: "4px", background: "#fff" }}>
          <button type="button" onClick={() => navigate("/login")} style={{ flex: 1, padding: "10px 0", fontSize: "14px", fontWeight: "600", background: "transparent", color: "#0a6b82", border: "none", cursor: "pointer" }}>Sign In</button>
          <button type="button" style={{ flex: 1, padding: "10px 0", fontSize: "14px", fontWeight: "600", background: "#0a6b82", color: "#ffffff", border: "none", borderRadius: "8px" }}>Register</button>
        </div>

        <div style={{ marginBottom: "14px" }}>
          <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Full Name</label>
          <div style={{ display: "flex", alignItems: "center", border: "1px solid #e5e7eb", borderRadius: "10px", height: "44px", padding: "0 14px" }}><input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Rajesh Kumar" style={{ flex: 1, border: "none", outline: "none", fontSize: "14px" }} required /></div>
        </div>

        <div style={{ marginBottom: "14px" }}>
          <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Email Address</label>
          <div style={{ display: "flex", alignItems: "center", border: "1px solid #e5e7eb", borderRadius: "10px", height: "44px", padding: "0 14px" }}><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" style={{ flex: 1, border: "none", outline: "none", fontSize: "14px" }} required /></div>
        </div>

        <div style={{ marginBottom: "14px" }}>
          <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Phone Number</label>
          <div style={{ display: "flex", alignItems: "center", border: "1px solid #e5e7eb", borderRadius: "10px", height: "44px", padding: "0 14px" }}><input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210" style={{ flex: 1, border: "none", outline: "none", fontSize: "14px" }} /></div>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Password</label>
          <div style={{ display: "flex", alignItems: "center", border: "1px solid #e5e7eb", borderRadius: "10px", height: "44px", padding: "0 14px" }}>
            <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••" style={{ flex: 1, border: "none", outline: "none", fontSize: "14px" }} required />
          </div>
        </div>

        <button type="submit" style={{ width: "100%", height: "50px", background: "#0a6b82", color: "#ffffff", border: "none", borderRadius: "10px", fontSize: "15px", fontWeight: "600", cursor: "pointer" }}>
          Create Account
        </button>

        <p style={{ textAlign: "center", fontSize: "14px", color: "#6b7280", marginTop: "24px", marginBottom: "0" }}>
          Already have an account? <span onClick={() => navigate("/login")} style={{ color: "#0a6b82", fontWeight: "600", cursor: "pointer" }}>Sign In</span>
        </p>
      </form>
    </div>
  );
}