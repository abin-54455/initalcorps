export default function AboutCard() {
  const features = [
    { icon: "✔️", title: "100% Online Process", desc: "No office visits required" },
    { icon: "🛡️", title: "Expert Guidance", desc: "CA, CS & legal experts" },
    { icon: "🕒", title: "Fast Turnaround", desc: "Industry-leading timelines" },
    { icon: "👥", title: "15,000+ Clients", desc: "Trusted across India" }
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", maxWidth: "1200px", margin: "0 auto" }}>
      {features.map((item, idx) => (
        <div key={idx} style={{ background: "#f8fafc", border: "1px solid #f1f5f9", borderRadius: "16px", padding: "32px 20px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ width: "44px", height: "44px", background: "#e2e8f0", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", marginBottom: "20px" }}>
            {item.icon}
          </div>
          <h3 style={{ fontSize: "15px", fontWeight: "700", color: "#0f172a", margin: "0 0 8px 0" }}>{item.title}</h3>
          <p style={{ fontSize: "13px", color: "#64748b", margin: 0 }}>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}