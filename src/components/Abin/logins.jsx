export default function Logins({
  hoverTheme = "admin",
  badgeText,
  badgeColorClass,
  icon,
  roleTitle,
  description,
  buttonText,
  buttonColorClass,
  onCardClick,
}) {

  const themes = {
    admin: {
      border: "group-hover:border-blue-200",
      title: "group-hover:text-blue-700",
      glow: "from-blue-50/60",
      topBar: "from-blue-600 to-blue-400",
      button: "group-hover:from-blue-700 group-hover:to-blue-500",
    },

    executive: {
      border: "group-hover:border-amber-200",
      title: "group-hover:text-amber-700",
      glow: "from-amber-50/60",
      topBar: "from-amber-600 to-amber-400",
      button: "group-hover:from-amber-700 group-hover:to-amber-500",
    },

    user: {
      border: "group-hover:border-cyan-200",
      title: "group-hover:text-cyan-700",
      glow: "from-cyan-50/60",
      topBar: "from-cyan-600 to-cyan-400",
      button: "group-hover:from-cyan-700 group-hover:to-cyan-500",
    },
  };

  const theme = themes[hoverTheme];

  return (
    <div
      className={`
        group relative flex flex-col items-center
        bg-white rounded-3xl p-6 overflow-hidden
        border border-gray-100 w-full md:w-72 cursor-pointer

        shadow-[0_4px_20px_rgba(0,0,0,0.05)]
        transition-all duration-500 ease-out

        hover:-translate-y-2
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
        ${theme.border}
      `}
    >

      {/* Top Animated Border */}
      <div
        className={`
          absolute top-0 left-0 h-1 w-0
          bg-gradient-to-r ${theme.topBar}
          transition-all duration-500
          group-hover:w-full
        `}
      />

      {/* Glow */}
      <div
        className={`
          absolute inset-0 opacity-0
          bg-gradient-to-br ${theme.glow} via-transparent to-transparent
          transition-opacity duration-500
          group-hover:opacity-100
        `}
      />

      {badgeText && (
        <span
          className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full z-10 ${badgeColorClass}`}
        >
          {badgeText}
        </span>
      )}

      <div className="mt-6 mb-4 z-10 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
        {icon}
      </div>

      <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-1 z-10">
        {roleTitle?.split(" ")[0]}
      </span>

      <h3
        className={`text-xl font-bold text-[#0F172A] mb-3 z-10 transition-colors duration-300 ${theme.title}`}
      >
        {roleTitle}
      </h3>

      <p className="text-xs text-center text-gray-500 leading-relaxed min-h-[64px] px-2 mb-6 z-10">
        {description}
      </p>

      <button
        onClick={onCardClick}
        type="button"
        className={`
          w-full mt-auto py-3 px-4 rounded-xl border
          font-semibold text-sm flex items-center justify-center gap-2
          transition-all duration-300 active:scale-[0.98] z-10

          group-hover:bg-gradient-to-r
          group-hover:text-white
          group-hover:border-transparent
          group-hover:shadow-lg
          ${theme.button}

          ${buttonColorClass}
        `}
      >
        {buttonText}

        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </div>
  );
}