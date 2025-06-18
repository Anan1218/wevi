'use client';

import React, { useRef, useEffect, useState } from 'react';

export default function ContentSection() {
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
    layout: {
      sectionPadding: '120px 32px',
      maxWidth: '88rem',
      containerPadding: '4rem',
      gridGap: '3rem'
    },
    colors: {
      sectionBackground: '#f8fafc',
      containerGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%)',
      cardBackground: 'white',
      textColor: '#1f2937',
      subtextColor: '#6b7280',
      accentColor: '#667eea'
    },
    typography: {
      titleSize: 'clamp(2.5rem, 4vw, 3.5rem)',
      titleWeight: '400',
      titleLineHeight: '1.1',
      subtitleSize: '1.25rem',
      cardTitleSize: '1.5rem',
      cardTitleWeight: '600',
      descriptionSize: '1rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }
  };

  const contentCards = [
    {
      icon: "📈",
      title: "Real-Time Analytics",
      description: "Monitor nurse performance, patient satisfaction scores, and operational efficiency with live dashboards designed for healthcare administrators.",
      color: "#667eea"
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level encryption, HIPAA compliance, and SOC 2 certification ensure your patient data remains secure and meets all regulatory requirements.",
      color: "#764ba2"
    },
    {
      icon: "🌐",
      title: "Seamless Integration",
      description: "Connect with existing EHR systems, calendar platforms, and communication tools. Our API-first approach ensures compatibility with your current workflow.",
      color: "#667eea"
    },
    {
      icon: "💡",
      title: "Smart Optimization",
      description: "Machine learning algorithms continuously improve scheduling efficiency, reducing travel time and maximizing patient care opportunities.",
      color: "#9333ea"
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="w-full"
      style={{
        backgroundColor: config.colors.sectionBackground,
        padding: config.layout.sectionPadding,
        width: '100%'
      }}
    >
      <div 
        className="max-w-7xl mx-auto"
        style={{
          maxWidth: config.layout.maxWidth,
          margin: '0 auto'
        }}
      >
        {/* Main Container */}
        <div 
          className="rounded-3xl shadow-2xl overflow-hidden relative"
          style={{
            background: config.colors.containerGradient,
            borderRadius: '2rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            overflow: 'hidden',
            position: 'relative',
            transform: `translateY(${isVisible ? '0' : '40px'})`,
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
          }}
        >
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)',
              backgroundSize: '50px 50px',
              opacity: 0.1,
              pointerEvents: 'none'
            }}
          />

          <div 
            style={{
              padding: config.layout.containerPadding,
              position: 'relative',
              zIndex: 1
            }}
          >
            {/* Header */}
            <div 
              className="text-center mb-16"
              style={{
                textAlign: 'center',
                marginBottom: '4rem',
                transform: `translateY(${isVisible ? '0' : '30px'})`,
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
              }}
            >
              <h2 
                style={{
                  fontSize: config.typography.titleSize,
                  fontWeight: config.typography.titleWeight,
                  color: 'white',
                  lineHeight: config.typography.titleLineHeight,
                  fontFamily: config.typography.fontFamily,
                  marginBottom: '1.5rem'
                }}
              >
                Advanced Healthcare Technology
              </h2>
              <p 
                style={{
                  fontSize: config.typography.subtitleSize,
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontFamily: config.typography.fontFamily,
                  maxWidth: '48rem',
                  margin: '0 auto'
                }}
              >
                Empowering healthcare organizations with cutting-edge tools for modern patient care management
              </p>
            </div>

            {/* Content Cards Grid */}
            <div 
              className="grid md:grid-cols-2 gap-8"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: config.layout.gridGap
              }}
            >
              {contentCards.map((card, index) => (
                <div 
                  key={index}
                  className="group"
                  style={{
                    transform: `translateY(${isVisible ? '0' : '40px'})`,
                    opacity: isVisible ? 1 : 0,
                    transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.6 + index * 0.15}s`
                  }}
                >
                  <div 
                    className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '1rem',
                      padding: '2rem',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                      transition: 'all 0.3s ease-out'
                    }}
                  >
                    {/* Icon */}
                    <div 
                      style={{
                        fontSize: '3rem',
                        marginBottom: '1.5rem',
                        transition: 'transform 0.3s ease-out'
                      }}
                      className="transition-transform duration-300 group-hover:scale-110"
                    >
                      {card.icon}
                    </div>

                    {/* Title */}
                    <h3 
                      style={{
                        fontSize: config.typography.cardTitleSize,
                        fontWeight: config.typography.cardTitleWeight,
                        color: config.colors.textColor,
                        marginBottom: '1rem',
                        fontFamily: config.typography.fontFamily
                      }}
                    >
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p 
                      style={{
                        fontSize: config.typography.descriptionSize,
                        color: config.colors.subtextColor,
                        lineHeight: '1.6',
                        fontFamily: config.typography.fontFamily
                      }}
                    >
                      {card.description}
                    </p>

                    {/* Accent Border */}
                    <div 
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(90deg, ${card.color} 0%, transparent 100%)`,
                        borderRadius: '0 0 1rem 1rem'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Stats */}
            <div 
              className="mt-16 text-center"
              style={{
                marginTop: '4rem',
                textAlign: 'center',
                transform: `translateY(${isVisible ? '0' : '30px'})`,
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1.2s'
              }}
            >
              <div 
                className="grid grid-cols-3 gap-8"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '2rem'
                }}
              >
                {[
                  { number: "50+", label: "Healthcare Partners" },
                  { number: "99.9%", label: "Uptime Guarantee" },
                  { number: "24/7", label: "Support Available" }
                ].map((stat, index) => (
                  <div key={index} style={{ color: 'white' }}>
                    <div 
                      style={{
                        fontSize: '2.5rem',
                        fontWeight: '600',
                        marginBottom: '0.5rem',
                        fontFamily: config.typography.fontFamily
                      }}
                    >
                      {stat.number}
                    </div>
                    <div 
                      style={{
                        fontSize: '1rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontFamily: config.typography.fontFamily
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 