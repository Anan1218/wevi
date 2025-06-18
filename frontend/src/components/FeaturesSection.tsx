'use client';

import React, { useRef, useEffect, useState } from 'react';

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger the feature card animations
          visibleFeatures.forEach((_, index) => {
            setTimeout(() => {
              setVisibleFeatures(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 100); // 100ms delay between each feature
          });
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
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
      sectionPadding: '80px 32px 40px 32px', // Increased top from 40px to 60px, bottom from 20px to 40px
      maxWidth: '88rem',                    // Max width of content
      containerPadding: '3rem',             // Reduced inner container padding
      featureGridGap: '2rem',               // Gap between feature cards
      contentGap: '2rem'                    // Gap between content elements
    },
    
    // Background and colors
    colors: {
      sectionBackground: '#fafafa',                                                  // Very light gray background
      headerGradient: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #0f766e 100%)', // Consistent teal gradient
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
      
      // Feature cards
      featureTitleSize: '1.25rem',                   // Feature title font size
      featureTitleWeight: '600',                     // Feature title font weight
      featureDescSize: '0.95rem',                    // Feature description font size
      
      // Font family for all text
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    
    // Effects
    effects: {
      headerShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',  // Header shadow
      featureCardShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',  // Feature card shadow
      featureCardHoverShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' // Hover shadow
    }
  };

  const features = [
    {
      title: "AI-Powered Scheduling",
      description: "Intelligent algorithms that understand patient needs, nurse availability, and route optimization for maximum efficiency.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      gradient: "linear-gradient(135deg, #fb7185 0%, #f97316 100%)",
      bgColor: "#fff7ed"
    },
    {
      title: "24/7 Patient Communication", 
      description: "Round-the-clock AI assistant handles patient calls, scheduling requests, and appointment confirmations seamlessly.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      gradient: "linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)",
      bgColor: "#f0fdfa"
    },
    {
      title: "Real-time Route Optimization",
      description: "Dynamic route planning that adapts to traffic, cancellations, and urgent care needs in real-time.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      bgColor: "#eff6ff"
    },
    {
      title: "Nurse Burnout Prevention",
      description: "Automated scheduling reduces administrative burden, ensuring better work-life balance for nursing staff.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      bgColor: "#ecfdf5"
    }
  ];

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
      <div 
        className="max-w-7xl mx-auto"
        style={{
          maxWidth: config.layout.maxWidth,
          margin: '0 auto'
        }}
      >
        {/* Header Section */}
        <div 
          className="rounded-2xl shadow-lg overflow-hidden relative mb-12"
          style={{
            background: config.colors.headerGradient,
            borderRadius: '1.5rem',
            boxShadow: config.effects.headerShadow,
            overflow: 'hidden',
            position: 'relative',
            marginBottom: '3rem',
            transform: `translateY(${isVisible ? '0' : '30px'})`,
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
          }}
        >
          <div 
            className="text-center relative"
            style={{
              position: 'relative',
              zIndex: 1,
              padding: config.layout.containerPadding
            }}
          >
            <h2 
              className="font-normal leading-tight mb-6 text-white"
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
              Everything You Need in One Platform
            </h2>
            <p 
              className="text-white/90 max-w-3xl mx-auto leading-relaxed"
              style={{
                fontSize: config.typography.descriptionSize,
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: config.typography.descriptionLineHeight,
                fontWeight: config.typography.descriptionWeight,
                fontFamily: config.typography.fontFamily,
                maxWidth: '48rem',
                marginTop: 0,
                marginRight: 'auto',
                marginBottom: config.typography.descriptionMarginBottom,
                marginLeft: 'auto'
              }}
            >
              From intelligent call handling to predictive scheduling, our comprehensive platform automates the entire patient scheduling workflow for home health agencies.
            </p>
          </div>
        </div>

        {/* Features Grid - Modern Card Design */}
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: config.layout.featureGridGap
          }}
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group cursor-pointer transition-all duration-500 hover:-translate-y-2"
              style={{
                cursor: 'pointer',
                transition: 'all 0.8s ease-out',
                transform: `translateY(${visibleFeatures[index] ? '0' : '40px'})`,
                opacity: visibleFeatures[index] ? 1 : 0,
                transitionDelay: `${0.3 + index * 0.1}s`
              }}
            >
              <div 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative"
                style={{
                  backgroundColor: 'white',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  boxShadow: config.effects.featureCardShadow,
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  height: '360px'
                }}
              >
                {/* Image Section with Gradient Overlay */}
                <div 
                  className="relative h-48 overflow-hidden"
                  style={{
                    position: 'relative',
                    height: '12rem',
                    overflow: 'hidden'
                  }}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: `url("${feature.image}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  />
                  
                  {/* Gradient overlay */}
                  <div 
                    className="absolute inset-0 opacity-60"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: feature.gradient,
                      opacity: 0.6
                    }}
                  />

                  {/* Core Feature Badge */}
                  <div 
                    className="absolute top-4 left-4"
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem'
                    }}
                  >
                    <div 
                      className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-semibold shadow-lg"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(8px)',
                        borderRadius: '9999px',
                        padding: '0.375rem 0.75rem',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: '#374151',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      Core Feature
                    </div>
                  </div>

                  {/* Floating decorative elements */}
                  <div 
                    className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white/40"
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.4)',
                      animation: 'pulse 2s ease-in-out infinite'
                    }}
                  />
                  <div 
                    className="absolute bottom-4 right-6 w-2 h-2 rounded-full bg-white/30"
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      right: '1.5rem',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      animation: 'pulse 3s ease-in-out infinite 1s'
                    }}
                  />
                </div>

                {/* Content Section */}
                <div 
                  className="p-6 relative"
                  style={{
                    padding: '1.5rem',
                    position: 'relative',
                    backgroundColor: feature.bgColor,
                    height: 'calc(100% - 12rem)'
                  }}
                >
                  {/* Subtle accent line */}
                  <div 
                    className="absolute top-0 left-6 right-6 h-0.5 opacity-20"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '1.5rem',
                      right: '1.5rem',
                      height: '2px',
                      background: feature.gradient,
                      opacity: 0.2
                    }}
                  />

                  <h3 
                    className="font-semibold mb-3 text-gray-900 group-hover:text-gray-800 transition-colors duration-300"
                    style={{
                      fontSize: config.typography.featureTitleSize,
                      fontWeight: config.typography.featureTitleWeight,
                      color: '#111827',
                      marginBottom: '0.75rem',
                      lineHeight: '1.3',
                      fontFamily: config.typography.fontFamily,
                      transition: 'color 0.3s ease-out'
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                    style={{
                      color: '#6b7280',
                      fontSize: config.typography.featureDescSize,
                      lineHeight: '1.6',
                      fontFamily: config.typography.fontFamily,
                      transition: 'color 0.3s ease-out'
                    }}
                  >
                    {feature.description}
                  </p>

                  {/* Learn more link */}
                  <div 
                    className="flex items-center mt-4 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '1rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      opacity: 0,
                      transition: 'all 0.3s ease-out',
                      transform: 'translateY(8px)'
                    }}
                  >
                    <span 
                      className="text-teal-600 mr-2"
                      style={{
                        color: '#0d9488',
                        marginRight: '0.5rem'
                      }}
                    >
                      Learn more
                    </span>
                    <svg 
                      className="w-4 h-4 text-teal-600 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      style={{
                        width: '1rem',
                        height: '1rem',
                        color: '#0d9488',
                        transition: 'transform 0.3s ease-out'
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
} 