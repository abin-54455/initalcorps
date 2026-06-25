import { useState, useEffect } from "react";

export default function BannerCard() {
  // 1. Array containing your carousel slide data (Images, Titles, and Descriptions)
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80", // Premium office interior (Matches Image 21)
      badge: "⭐ Trusted by 15,000+ businesses",
      title: "Start Your Business Journey",
      desc: "Company incorporations done in as little as 3 days — fully online, zero hassle."
    },
    {
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80", // Modern office corridor (Matches image_3dcf0c.jpg)
      badge: "⚡ Seamless Legal Ecosystem",
      title: "Incorporate with Confidence",
      desc: "We integrate framework incorporation structures, intellectual property rights, and compliance management."
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80", // Corporate high-rise building
      badge: "💼 Global Startup Structures",
      title: "Accelerate Funding & Strategy",
      desc: "Simplify your compliance pathway and position your venture directly for cross-border investments."
    }
  ];

  const [current, setCurrent] = useState(0);

  // 2. Navigation Functions
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // 3. 🕒 AUTOMATIC MOVE LOGIC (Runs every 4 seconds)
  useEffect(() => {
    const slideTimer = setInterval(() => {
      nextSlide();
    }, 4000); // 4000 milliseconds = 4 seconds

    // Clear the interval whenever the component unmounts or slide changes to avoid memory leaks
    return () => clearInterval(slideTimer);
  }, [current]);

  return (
    <div 
      style={{ 
        position: "relative", 
        width: "100%", 
        height: "520px", 
        overflow: "hidden",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      }}
    >
      {/* Slide Wrapper Layout */}
      <div 
        style={{ 
          width: "100%", 
          height: "100%", 
          backgroundImage: `url(${slides[current].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.8s ease-in-out", // Smooth dissolve animation
          position: "relative"
        }}
      >
        {/* Dark Film Overlay matching your layout darkness layer */}
        <div 
          style={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            width: "100%", 
            height: "100%", 
            background: "linear-gradient(90deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.4) 60%, rgba(15,23,42,0.7) 100%)",
            zIndex: 1 
          }}
        />

        {/* Slide Content Box Container */}
        <div 
          style={{ 
            position: "relative", 
            zIndex: 2, 
            height: "100%", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            padding: "0 8%",
            color: "#ffffff",
            maxWidth: "750px"
          }}
        >
          {/* Top Info Badge */}
          <div 
            style={{ 
              alignSelf: "flex-start", 
              background: "rgba(217, 119, 6, 0.15)", 
              border: "1px solid #d97706", 
              color: "#fbbf24", 
              padding: "6px 14px", 
              borderRadius: "20px", 
              fontSize: "12px", 
              fontWeight: "600", 
              letterSpacing: "0.5px", 
              marginBottom: "24px" 
            }}
          >
            {slides[current].badge}
          </div>

          {/* Main Title Heading */}
          <h1 
            style={{ 
              fontSize: "48px", 
              fontWeight: "800", 
              margin: "0 0 16px 0", 
              lineHeight: "1.15", 
              letterSpacing: "-1px" 
            }}
          >
            {slides[current].title}
          </h1>

          {/* Subtext Description Block */}
          <p 
            style={{ 
              fontSize: "16px", 
              lineHeight: "1.6", 
              color: "#cbd5e1", 
              margin: "0 0 32px 0", 
              maxWidth: "520px" 
            }}
          >
            {slides[current].desc}
          </p>

          {/* Call To Action Accent Button */}
          <button 
            style={{ 
              alignSelf: "flex-start", 
              background: "#dfa155", 
              color: "#1e1b4b", 
              border: "none", 
              padding: "12px 28px", 
              borderRadius: "6px", 
              fontSize: "14px", 
              fontWeight: "700", 
              cursor: "pointer", 
              display: "flex", 
              alignItems: "center", 
              gap: "8px",
              boxShadow: "0 4px 14px rgba(223,161,85,0.3)" 
            }}
          >
            Incorporate Now <span>→</span>
          </button>
        </div>
      </div>

      {/* 🧭 Left Interactive Arrow Controller Button */}
      <button 
        onClick={prevSlide}
        style={{ 
          position: "absolute", left: "24px", top: "50%", transform: "translateY(-50%)", zIndex: 3,
          background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
          width: "40px", height: "40px", borderRadius: "50%", color: "#ffffff", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px"
        }}
      >
        ‹
      </button>

      {/* 🧭 Right Interactive Arrow Controller Button */}
      <button 
        onClick={nextSlide}
        style={{ 
          position: "absolute", right: "24px", top: "50%", transform: "translateY(-50%)", zIndex: 3,
          background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
          width: "40px", height: "40px", borderRadius: "50%", color: "#ffffff", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px"
        }}
      >
        ›
      </button>

      {/* 🔘 Carousel Navigation Indicator Dots */}
      <div 
        style={{ 
          position: "absolute", 
          bottom: "24px", 
          left: "50%", 
          transform: "translateX(-50%)", 
          zIndex: 3, 
          display: "flex", 
          gap: "8px" 
        }}
      >
        {slides.map((_, index) => (
          <div 
            key={index}
            onClick={() => setCurrent(index)}
            style={{ 
              width: index === current ? "28px" : "8px", 
              height: "8px", 
              borderRadius: "4px", 
              background: index === current ? "#dfa155" : "rgba(255,255,255,0.4)",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          />
        ))}
      </div>
    </div>
  );
}