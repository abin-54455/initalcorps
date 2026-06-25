// Component 62 — individual startup insight card
export default function StartupCard({ title, badge, badgeColor, badgeText, stat, statSmall, description }) {
  return (
    <div className="mi-card">
      <div className="mi-card-top">
        <span className="mi-card-title">{title}</span>
        <span
          className="mi-card-badge"
          style={{ background: badgeColor, color: badgeText }}
        >
          {badge}
        </span>
      </div>
      <div className={`mi-card-stat ${statSmall ? "mi-card-stat--small" : "mi-card-stat--large"}`}>
        {stat}
      </div>
      <p className="mi-card-desc">{description}</p>
    </div>
  );
}