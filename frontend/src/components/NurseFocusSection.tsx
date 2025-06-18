import React, { useRef, useEffect, useState } from 'react';

export default function NurseFocusSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const config = {
    // Layout configuration
    layout: {
      sectionPadding: '40px 32px 20px 32px', // Reduced bottom padding to fix spacing
      maxWidth: '88rem',                   // Max width of content
      containerPadding: 'clamp(2.3rem, 4vw, 4rem)', // Responsive padding: 2.3rem mobile, 4rem desktop
      gridGap: '4rem',                     // Gap between grid items
      contentGap: '2rem'                   // Gap between content elements
    },
    
    // Background and colors
    colors: {
      sectionBackground: 'white',                                                    // Section background
      containerGradient: 'linear-gradient(135deg, #fb7185 0%, #f97316 50%, #ea580c 100%)', // Orange/pink gradient
      buttonBackground: 'white',                                                     // Button background
      buttonTextColor: '#ea580c',                                                    // Button text color - orange
      accentColor: '#fb7185',                                                        // Pink accent
    },
    
    // Typography
    typography: {
      // Main title
      titleSize: 'clamp(2.5rem, 4vw, 3.5rem)',        // Title font size
      titleWeight: '400',                              // Title font weight
      titleLineHeight: '1.1',                         // Title line height
      titleLetterSpacing: '-0.02em',                  // Title letter spacing
      titleMarginBottom: '1.5rem',                    // Space below title
      
      // Description
      descriptionSize: '1.125rem',                    // Description font size
      descriptionWeight: '400',                       // Description font weight
      descriptionLineHeight: '1.6',                  // Description line height
      descriptionMarginBottom: '3rem',               // Space below description
      
      // Feature items
      featureGap: '2rem',                            // Gap between feature items
      featureTitleSize: '1.125rem',                  // Feature title font size
      featureTitleWeight: '600',                     // Feature title font weight
      
      // Button
      buttonPadding: '1rem 2rem',                    // Button padding
      buttonFontSize: '1.125rem',                    // Button font size
      buttonFontWeight: '600',                       // Button font weight
      
      // Font family for all text
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    
    // Effects
    effects: {
      containerShadow: '0 20px 25px -5px rgba(251, 113, 133, 0.2), 0 10px 10px -5px rgba(251, 113, 133, 0.1)',  // Orange shadow
      buttonShadow: '0 10px 15px -3px rgba(234, 88, 12, 0.2)',       // Orange button shadow
      imageShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      floatingElementShadow: '0 10px 15px -3px rgba(251, 113, 133, 0.3)'
    }
  };

  return (
    <div 
      ref={sectionRef}
      className="w-full relative overflow-hidden"
      style={{
        backgroundColor: config.colors.sectionBackground,
        padding: config.layout.sectionPadding,
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Floating decorative elements with gentle animations */}
      <div 
        className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-10"
        style={{
          position: 'absolute',
          top: '5rem',
          right: '5rem',
          width: '8rem',
          height: '8rem',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #fb7185 0%, #f97316 100%)',
          opacity: 0.1,
          zIndex: 1,
          transform: 'translateY(0px)',
          animation: 'float 6s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute bottom-20 left-20 w-24 h-24 rounded-full opacity-10"
        style={{
          position: 'absolute',
          bottom: '5rem',
          left: '5rem',
          width: '6rem',
          height: '6rem',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
          opacity: 0.1,
          zIndex: 1,
          transform: 'translateY(0px)',
          animation: 'float 4s ease-in-out infinite reverse'
        }}
      />

      {/* Additional micro decorative elements */}
      <div 
        className="absolute top-1/3 left-10 w-3 h-3 rounded-full opacity-20"
        style={{
          position: 'absolute',
          top: '33%',
          left: '2.5rem',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#f97316',
          opacity: 0.2,
          zIndex: 1,
          animation: 'pulse 3s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute top-2/3 right-16 w-2 h-2 rounded-full opacity-30"
        style={{
          position: 'absolute',
          top: '67%',
          right: '4rem',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#fb7185',
          opacity: 0.3,
          zIndex: 1,
          animation: 'pulse 2s ease-in-out infinite 1s'
        }}
      />
      <div 
        className="absolute top-1/4 right-1/3 w-1 h-8 rounded-full opacity-15"
        style={{
          position: 'absolute',
          top: '25%',
          right: '33%',
          width: '4px',
          height: '32px',
          borderRadius: '9999px',
          background: 'linear-gradient(180deg, #f97316 0%, transparent 100%)',
          opacity: 0.15,
          zIndex: 1,
          animation: 'fadeInOut 4s ease-in-out infinite'
        }}
      />

      <div 
        className="max-w-7xl mx-auto relative"
        style={{
          maxWidth: config.layout.maxWidth,
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* Orange Gradient Container with Unique Shape */}
        <div 
          className="rounded-3xl shadow-xl overflow-hidden relative transition-all duration-700 hover:shadow-2xl"
          style={{
            background: config.colors.containerGradient,
            borderRadius: '2rem 2rem 2rem 8rem',
            boxShadow: config.effects.containerShadow,
            overflow: 'hidden',
            position: 'relative',
            transition: 'all 0.7s ease-out'
          }}
        >
          {/* Subtle gradient overlay */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
              opacity: 0.2,
              pointerEvents: 'none'
            }}
          />

          <div 
            className="grid lg:grid-cols-2 gap-0 items-center relative mobile-responsive-grid"
            style={{
              display: 'grid',
              gap: 0,
              alignItems: 'center',
              position: 'relative'
            }}
          >
            
            {/* Left side - Content */}
            <div 
              className="p-16 text-white relative"
              style={{
                padding: config.layout.containerPadding,
                color: 'white',
                position: 'relative'
              }}
            >
              {/* Decorative elements */}
              <div 
                className="absolute top-8 right-8 w-16 h-16 rounded-full border-2 border-white/20 transition-all duration-500 hover:border-white/40 hover:scale-105"
                style={{
                  position: 'absolute',
                  top: '2rem',
                  right: '2rem',
                  width: '4rem',
                  height: '4rem',
                  borderRadius: '50%',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.5s ease-out'
                }}
              />

              {/* Small floating dots around the decorative circle */}
              <div 
                className="absolute top-6 right-6 w-2 h-2 rounded-full bg-white/30"
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  animation: 'twinkle 2s ease-in-out infinite'
                }}
              />
              <div 
                className="absolute top-12 right-20 w-1 h-1 rounded-full bg-white/40"
                style={{
                  position: 'absolute',
                  top: '3rem',
                  right: '5rem',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.4)',
                  animation: 'twinkle 3s ease-in-out infinite 1s'
                }}
              />

              <div>
                <h2 
                  className="font-normal leading-tight mb-6"
                  style={{
                    fontSize: config.typography.titleSize,
                    fontWeight: config.typography.titleWeight,
                    color: 'white',
                    marginBottom: config.typography.titleMarginBottom,
                    lineHeight: config.typography.titleLineHeight,
                    letterSpacing: config.typography.titleLetterSpacing,
                    fontFamily: config.typography.fontFamily
                  }}
                >
                  Give Your Nurses Their Time Back
                </h2>
                <p 
                  className="text-white/90 mb-12 leading-relaxed"
                  style={{
                    fontSize: config.typography.descriptionSize,
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: config.typography.descriptionMarginBottom,
                    lineHeight: config.typography.descriptionLineHeight,
                    fontWeight: config.typography.descriptionWeight,
                    fontFamily: config.typography.fontFamily
                  }}
                >
                  Stop nurse burnout from endless phone calls and administrative tasks. Let AI handle patient scheduling so your nurses can focus on what matters most: patient care.
                </p>
              </div>

              <div 
                className="space-y-8 mb-12"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: config.typography.featureGap,
                  marginBottom: '3rem'
                }}
              >
                {[
                  {
                    icon: "📞",
                    title: "24/7 Call Coverage",
                    description: "No more after-hours calls interrupting nurse rest and personal time",
                    accent: "#fbbf24"
                  },
                  {
                    icon: "📋",
                    title: "70% Less Administrative Work", 
                    description: "Eliminate manual scheduling tasks that keep nurses from patient care",
                    accent: "#fb7185"
                  },
                  {
                    icon: "⚖️",
                    title: "Improved Work-Life Balance",
                    description: "Predictable schedules and reduced interruptions lead to happier, more productive nursing staff",
                    accent: "#60a5fa"
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 relative group"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      position: 'relative'
                    }}
                  >
                    
                    <div 
                      className="text-2xl mt-1 relative transition-transform duration-300 group-hover:scale-110"
                      style={{
                        fontSize: '2rem',
                        marginTop: '0',
                        flexShrink: 0,
                        position: 'relative',
                        transition: 'transform 0.3s ease-out',
                        width: '3rem',
                        height: '3rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <div 
                        className="absolute inset-0 rounded-full opacity-20 transition-all duration-500 group-hover:opacity-40 group-hover:scale-125"
                        style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          right: '0',
                          bottom: '0',
                          borderRadius: '50%',
                          backgroundColor: feature.accent,
                          opacity: 0.2,
                          transition: 'all 0.5s ease-out'
                        }}
                      />
                      <span style={{ position: 'relative', zIndex: 1 }}>{feature.icon}</span>
                    </div>
                    <div>
                      <h3 
                        className="text-lg font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-white/95"
                        style={{
                          fontSize: config.typography.featureTitleSize,
                          fontWeight: config.typography.featureTitleWeight,
                          color: 'white',
                          marginBottom: '0.5rem',
                          fontFamily: config.typography.fontFamily,
                          transition: 'color 0.3s ease-out'
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p 
                        className="text-white/80 transition-colors duration-300 group-hover:text-white/90"
                        style={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          lineHeight: '1.5',
                          fontSize: '1rem',
                          transition: 'color 0.3s ease-out'
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                className="bg-white hover:bg-gray-50 text-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-lg relative overflow-hidden group hover:shadow-xl hover:scale-105"
                style={{
                  backgroundColor: config.colors.buttonBackground,
                  color: config.colors.buttonTextColor,
                  padding: config.typography.buttonPadding,
                  borderRadius: '9999px',
                  fontWeight: config.typography.buttonFontWeight,
                  fontSize: config.typography.buttonFontSize,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: config.effects.buttonShadow,
                  transition: 'all 0.3s ease-out',
                  fontFamily: config.typography.fontFamily,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Smooth animated background */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, #f97316 0%, #fb7185 100%)',
                    opacity: 0,
                    transition: 'opacity 0.5s ease-out'
                  }}
                />
                <span style={{ position: 'relative', zIndex: 1 }}>Learn More</span>
                <svg 
                  width="20" 
                  height="20" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  style={{ 
                    position: 'relative', 
                    zIndex: 1,
                    transition: 'transform 0.3s ease-out'
                  }}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Right side - Nurse Image */}
            <div 
              className="relative h-full hidden lg:block"
              style={{
                position: 'relative'
              }}
            >
              {/* Daily Schedule Card */}
              <div 
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-l-4 transition-all duration-500 hover:shadow-2xl animate-fadeIn"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  boxShadow: config.effects.floatingElementShadow,
                  borderLeft: '4px solid #f97316',
                  transition: 'all 0.5s ease-out',
                  marginBottom: '1rem',
                  animation: isVisible ? 'slideUp 0.5s ease-out forwards' : 'none',
                  opacity: isVisible ? 1 : 0
                }}
              >
                <div 
                  className="flex items-center justify-between mb-4"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}
                >
                  <h4 
                    className="text-gray-900 font-semibold"
                    style={{
                      color: '#111827',
                      fontWeight: '600',
                      fontSize: '1rem'
                    }}
                  >
                    Nurse&apos;s Day: After WeviHealth
                  </h4>
                  <div 
                    className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: '#fed7aa',
                      color: '#9a3412',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}
                  >
                    85% Patient Care
                  </div>
                </div>
                
                <div 
                  className="space-y-3"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                  }}
                >
                  {[
                    { time: "7:30 AM", task: "🏥 Patient visit", type: "care" },
                    { time: "10:00 AM", task: "🏥 Patient visit", type: "care" },
                    { time: "12:30 PM", task: "🍽️ Lunch break", type: "break" },
                    { time: "2:00 PM", task: "🏥 Patient visit", type: "care" },
                    { time: "4:30 PM", task: "🏥 Patient visit", type: "care" }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-2 rounded-lg bg-orange-50 border border-orange-200 transition-all duration-300 hover:bg-orange-100"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.5rem',
                        borderRadius: '0.5rem',
                        backgroundColor: '#fff7ed',
                        border: '1px solid #fed7aa',
                        transition: 'all 0.3s ease-out'
                      }}
                    >
                      <span 
                        className="text-sm font-medium text-gray-900"
                        style={{
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          color: '#111827'
                        }}
                      >
                        {item.time}
                      </span>
                      <span 
                        className="text-sm text-orange-700"
                        style={{
                          fontSize: '0.875rem',
                          color: '#c2410c'
                        }}
                      >
                        {item.task}
                      </span>
                    </div>
                  ))}
                </div>

                <div 
                  className="mt-4 text-center"
                  style={{
                    marginTop: '1rem',
                    textAlign: 'center'
                  }}
                >
                  <p 
                    className="text-sm text-gray-600"
                    style={{
                      fontSize: '0.875rem',
                      color: '#6b7280'
                    }}
                  >
                    ✨ No scheduling calls • No overtime • No stress
                  </p>
                </div>
              </div>

              {/* Weekly Overview Card */}
              <div 
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-l-4 transition-all duration-500 hover:shadow-2xl animate-fadeIn"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  boxShadow: config.effects.floatingElementShadow,
                  borderLeft: '4px solid #fb7185',
                  transition: 'all 0.5s ease-out',
                  animation: isVisible ? 'slideUp 0.5s ease-out 0.1s forwards' : 'none',
                  opacity: isVisible ? 1 : 0
                }}
              >
                <div 
                  className="flex items-center justify-between mb-4"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}
                >
                  <h4 
                    className="text-gray-900 font-semibold"
                    style={{
                      color: '#111827',
                      fontWeight: '600',
                      fontSize: '1rem'
                    }}
                  >
                    Weekly Overview
                  </h4>
                  <div 
                    className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: '#fce7f3',
                      color: '#9d174d',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}
                  >
                    Optimized Schedule
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Patient Visits", value: "20", change: "+15% efficiency" },
                    { label: "Travel Time", value: "4.2h", change: "-30% reduced" },
                    { label: "Admin Tasks", value: "2.5h", change: "-70% reduced" },
                    { label: "Patient Satisfaction", value: "98%", change: "+12% improved" }
                  ].map((stat, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-br from-orange-50 to-pink-50 p-3 rounded-xl"
                      style={{
                        background: 'linear-gradient(135deg, #fff7ed 0%, #fdf2f8 100%)',
                        padding: '0.75rem',
                        borderRadius: '0.75rem'
                      }}
                    >
                      <div 
                        className="text-sm text-gray-600"
                        style={{
                          fontSize: '0.875rem',
                          color: '#4b5563'
                        }}
                      >
                        {stat.label}
                      </div>
                      <div 
                        className="text-xl font-semibold text-gray-900"
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: '600',
                          color: '#111827'
                        }}
                      >
                        {stat.value}
                      </div>
                      <div 
                        className="text-xs text-green-600"
                        style={{
                          fontSize: '0.75rem',
                          color: '#059669'
                        }}
                      >
                        {stat.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        .mobile-responsive-grid {
          min-height: 600px;
        }
        
        @media (max-width: 1023px) {
          .mobile-responsive-grid {
            min-height: auto;
            grid-template-columns: 1fr !important;
          }
          
          .mobile-responsive-grid > div:last-child {
            display: none !important;
          }
        }
        
        @media (min-width: 1024px) {
          .mobile-responsive-grid > div:last-child {
            display: flex !important;
            flex-direction: column;
            gap: 1rem;
            padding: 2rem;
            height: 100%;
            min-height: 600px;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
} 