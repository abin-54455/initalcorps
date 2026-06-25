export default function Mission() {
  return (
    <div style={{ marginTop: "56px", background: "#f8fafc", border: "1px solid #edf2f7", borderRadius: "20px", padding: "40px", maxWidth: "1200px", margin: "56px auto 0 auto", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "32px" }}>
      <div style={{ flex: "1 1 500px" }}>
        <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", margin: "0 0 12px 0" }}>Our Mission</h3>
        <p style={{ fontSize: "14.5px", lineHeight: "1.7", color: "#475569", margin: 0 }}>
          To empower entrepreneurs and businesses across India with seamless access to legal services, enabling them to focus on growth while we handle the complexities of compliance, registration, and certification.
        </p>
      </div>
      
      {/* Satisfaction Statistics Callout Box */}
      <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "24px 36px", textAlign: "center", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.04)", minWidth: "160px" }}>
        <div style={{ fontSize: "36px", fontWeight: "800", color: "#dfa155", lineHeight: "1" }}>98%</div>
        <div style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", marginTop: "6px" }}>Client Satisfaction</div>
      </div>
    </div>
  );
}