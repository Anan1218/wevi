'use client';

import React, { useEffect } from 'react';

export default function ResultsSection() {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

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
      sectionPadding: '40px 32px',         // Reduced section padding
      maxWidth: '88rem',                   // Max width of content
      containerPadding: '4rem',            // Inner container padding
      gridGap: '3rem',                     // Gap between grid items
      contentGap: '2rem'                   // Gap between content elements
    },
    
    // Background and colors
    colors: {
      sectionBackground: '#fafafa',                                                  // Very light gray background
      containerGradient: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #0f766e 100%)', // Consistent teal gradient
      orangeAccent: '#f97316',                                                       // Orange accent color
      pinkAccent: '#fb7185',                                                         // Pink accent color
    },
    
    // Typography
    typography: {
      // Main title
      titleSize: 'clamp(2.5rem, 4vw, 3.5rem)',        // Title font size
      titleWeight: '400',                              // Title font weight
      titleLineHeight: '1.1',                         // Title line height
      titleLetterSpacing: '-0.02em',                  // Title letter spacing
      titleMarginBottom: '1.5rem',                    // Space below title
      
      // Subtitle
      subtitleSize: '1.125rem',                       // Subtitle font size
      subtitleWeight: '400',                          // Subtitle font weight
      subtitleMarginBottom: '4rem',                   // Space below subtitle
      
      // Stats
      statNumberSize: 'clamp(3rem, 6vw, 4.5rem)',    // Large stat numbers
      statNumberWeight: '300',                        // Stat number weight
      statLabelSize: '1.125rem',                      // Stat label size
      statLabelWeight: '500',                         // Stat label weight
      statGap: '0.75rem',                             // Gap between number and label
      
      // Font family for all text
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    
    // Effects
    effects: {
      containerShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',  // Softer shadow
      imageShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      orangeGlow: '0 0 30px rgba(249, 115, 22, 0.3)',
      floatingCardShadow: '0 20px 25px -5px rgba(249, 115, 22, 0.15), 0 10px 10px -5px rgba(249, 115, 22, 0.1)'
    }
  };

  return (
    <div 
      ref={sectionRef}
      className="w-full relative overflow-hidden"
      style={{
        backgroundColor: 'white',
        padding: '40px 32px 60px 32px',
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative background elements */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
        style={{
          position: 'absolute',
          top: '-6rem',
          right: '-6rem',
          width: '24rem',
          height: '24rem',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #f97316 0%, #fb7185 100%)',
          opacity: 0.05,
          zIndex: 1
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5"
        style={{
          position: 'absolute',
          bottom: '-4rem',
          left: '-4rem',
          width: '16rem',
          height: '16rem',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #0d9488 0%, #14b8a6 100%)',
          opacity: 0.05,
          zIndex: 1
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
        <div 
          className="bg-white rounded-3xl shadow-lg overflow-hidden relative"
          style={{
            backgroundColor: 'white',
            borderRadius: '2rem',
            boxShadow: config.effects.containerShadow,
            overflow: 'hidden',
            position: 'relative',
            padding: '3rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <div 
            className="grid lg:grid-cols-2 gap-12 items-center relative"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            
            {/* Left side - Content */}
            <div 
              className="pr-8 relative"
              style={{
                paddingRight: '2rem',
                position: 'relative'
              }}
            >
              {/* Orange accent line */}
              <div 
                className="absolute left-0 top-0 w-1 h-16 rounded-full"
                style={{
                  position: 'absolute',
                  left: '-1.5rem',
                  top: '1rem',
                  width: '4px',
                  height: '4rem',
                  borderRadius: '9999px',
                  background: 'linear-gradient(180deg, #f97316 0%, #fb7185 100%)',
                  boxShadow: config.effects.orangeGlow
                }}
              />

              <h2 
                className="font-normal leading-tight mb-6 text-gray-900 relative"
                style={{
                  fontSize: config.typography.titleSize,
                  fontWeight: config.typography.titleWeight,
                  color: '#111827',
                  marginBottom: config.typography.titleMarginBottom,
                  lineHeight: config.typography.titleLineHeight,
                  letterSpacing: config.typography.titleLetterSpacing,
                  fontFamily: config.typography.fontFamily,
                  position: 'relative',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                }}
              >
                Proven Results That Matter
                {/* Orange highlight accent */}
                <div 
                  className="absolute bottom-0 left-0 w-20 h-1 rounded-full"
                  style={{
                    position: 'absolute',
                    bottom: '-0.5rem',
                    left: 0,
                    width: '5rem',
                    height: '3px',
                    borderRadius: '9999px',
                    backgroundColor: config.colors.orangeAccent,
                    opacity: 0.6,
                    transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                  }}
                />
              </h2>
              
              <p 
                className="text-gray-600 mb-16 leading-relaxed"
                style={{
                  fontSize: config.typography.subtitleSize,
                  color: '#6b7280',
                  marginBottom: config.typography.subtitleMarginBottom,
                  lineHeight: '1.6',
                  fontWeight: config.typography.subtitleWeight,
                  fontFamily: config.typography.fontFamily,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                }}
              >
                Real agencies are seeing transformational improvements in efficiency, staff satisfaction, and patient care quality.
              </p>

              {/* Stats Grid */}
              <div 
                className="grid gap-8"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '2rem'
                }}
              >
                {[
                  {
                    number: "67%",
                    label: "Reduction in nurse overtime hours",
                    description: "Automated scheduling eliminates last-minute staffing emergencies",
                    color: "#0d9488"
                  },
                  {
                    number: "89%",
                    label: "Fewer missed patient appointments",
                    description: "24/7 AI assistant handles rescheduling and confirmations",
                    color: "#0d9488"
                  },
                  {
                    number: "45%",
                    label: "Decrease in nurse turnover",
                    description: "Better work-life balance leads to happier, more productive staff",
                    color: "#0d9488"
                  }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 relative"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      position: 'relative'
                    }}
                  >
                    <div 
                      className="text-teal-600 font-light"
                      style={{
                        fontSize: config.typography.statNumberSize,
                        fontWeight: config.typography.statNumberWeight,
                        color: stat.color,
                        lineHeight: '1',
                        fontFamily: config.typography.fontFamily,
                        flexShrink: 0
                      }}
                    >
                      {stat.number}
                    </div>
                    <div style={{ paddingTop: '0.5rem' }}>
                      <h3 
                        className="text-gray-900 font-medium mb-1"
                        style={{
                          fontSize: config.typography.statLabelSize,
                          fontWeight: config.typography.statLabelWeight,
                          color: '#111827',
                          marginBottom: '0.25rem',
                          fontFamily: config.typography.fontFamily
                        }}
                      >
                        {stat.label}
                      </h3>
                      <p 
                        className="text-gray-500 text-sm"
                        style={{
                          color: '#6b7280',
                          fontSize: '0.875rem',
                          lineHeight: '1.5'
                        }}
                      >
                        {stat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Home Health Image with Floating Cards */}
            <div 
              className="relative"
              style={{
                position: 'relative',
                height: '500px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
              }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center rounded-2xl"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url("/senior-woman-talking-with-her-doctor.jpg")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '1rem'
                }}
              >
                {/* Subtle overlay for contrast */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-teal-900/10 to-transparent rounded-2xl"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, transparent 100%)',
                    borderRadius: '1rem'
                  }}
                />
              </div>
              
              {/* Floating stats overlay with orange accents */}
              <div 
                className="absolute bottom-6 left-6 right-6"
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1s'
                }}
              >
                <div 
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border-l-4"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '0.75rem',
                    padding: '1rem',
                    boxShadow: config.effects.floatingCardShadow,
                    borderLeft: '4px solid #f97316'
                  }}
                >
                  <h4 
                    className="text-gray-900 font-semibold mb-2 text-sm"
                    style={{
                      color: '#111827',
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      fontSize: '0.875rem'
                    }}
                  >
                    Patient Satisfaction Score
                  </h4>
                  <div 
                    className="flex items-center space-x-3"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}
                  >
                    <div 
                      className="text-2xl font-light text-teal-600 relative"
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: '300',
                        color: '#0d9488',
                        position: 'relative'
                      }}
                    >
                      94.8%
                      {/* Orange accent dot */}
                      <div 
                        className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
                        style={{
                          position: 'absolute',
                          top: '-0.25rem',
                          right: '-0.25rem',
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: config.colors.orangeAccent
                        }}
                      />
                    </div>
                    <div 
                      className="text-green-600 text-xs font-medium bg-orange-50 px-2 py-1 rounded-full"
                      style={{
                        color: '#16a34a',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        backgroundColor: '#fff7ed',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px'
                      }}
                    >
                      ↗ +12% vs. manual scheduling
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional floating metric card */}
              <div 
                className="absolute top-6 right-6"
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1.2s'
                }}
              >
                <div 
                  className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md border-r-4"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '0.5rem',
                    padding: '0.75rem',
                    boxShadow: '0 4px 6px -1px rgba(249, 115, 22, 0.1)',
                    borderRight: '4px solid #fb7185'
                  }}
                >
                  <div 
                    className="text-sm font-medium text-gray-700 mb-1"
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151',
                      marginBottom: '0.25rem'
                    }}
                  >
                    Time Saved Daily
                  </div>
                  <div 
                    className="text-lg font-semibold text-pink-600"
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#fb7185'
                    }}
                  >
                    3.2 hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .grid.lg\\:grid-cols-2 {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .pr-8 {
            padding-right: 0 !important;
          }
          
          /* Adjust image height on mobile for better view */
          .relative[style*="height: 500px"] {
            height: 300px !important;
          }
          
          /* Ensure image is centered and well-positioned */
          .bg-cover.bg-center {
            background-position: center top !important;
          }
        }
        
        @keyframes floatAnimation {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .floating-card {
          animation: floatAnimation 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 