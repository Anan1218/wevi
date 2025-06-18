import React from 'react';

export default function CTASection() {
  const config = {
    // Layout configuration
    layout: {
      sectionPadding: '80px 32px 100px 32px', // Section padding
      maxWidth: '88rem',                      // Max width of content
      contentPadding: '4rem',                 // Inner content padding
    },
    
    // Background and colors
    colors: {
      backgroundGradient: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #0f766e 100%)', // Teal gradient with different shades
      buttonBackground: 'white',                                                            // White button
      buttonTextColor: '#0d9488',                                                          // Teal button text
      accentOrange: '#f97316',                                                             // Orange accent
      accentPink: '#fb7185',                                                               // Pink accent
    },
    
    // Typography
    typography: {
      titleSize: 'clamp(2.5rem, 5vw, 4rem)',          // Large responsive title
      titleWeight: '300',                             // Light font weight
      titleLineHeight: '1.1',                         // Tight line height
      titleLetterSpacing: '-0.02em',                  // Slight negative letter spacing
      
      buttonPadding: '1rem 2.5rem',                   // Button padding
      buttonFontSize: '1.125rem',                     // Button font size
      buttonFontWeight: '600',                        // Button font weight
      
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    
    // Effects
    effects: {
      buttonShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      shapeShadow: '0 20px 40px -10px rgba(249, 115, 22, 0.3)'
    }
  };

  return (
    <div 
      className="w-full relative overflow-hidden"
      style={{
        background: config.colors.backgroundGradient,
        padding: config.layout.sectionPadding,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Abstract Shapes */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 opacity-80"
        style={{
          position: 'absolute',
          top: '-5rem',
          right: '-8rem',
          width: '32rem',
          height: '32rem',
          opacity: 0.8,
          zIndex: 1
        }}
      >
        {/* Large gradient blob */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            position: 'absolute',
            top: '2rem',
            right: '2rem',
            width: '24rem',
            height: '24rem',
            borderRadius: '50% 30% 70% 40%',
            background: 'linear-gradient(135deg, #f97316 0%, #fb7185 50%, #fbbf24 100%)',
            boxShadow: config.effects.shapeShadow,
            animation: 'float 8s ease-in-out infinite',
            transform: 'rotate(0deg)'
          }}
        />
        
        {/* Medium gradient blob */}
        <div 
          className="absolute"
          style={{
            position: 'absolute',
            top: '8rem',
            right: '10rem',
            width: '16rem',
            height: '16rem',
            borderRadius: '60% 40% 30% 70%',
            background: 'linear-gradient(225deg, #fb7185 0%, #f97316 60%, #ea580c 100%)',
            opacity: 0.9,
            animation: 'float 6s ease-in-out infinite reverse',
            transform: 'rotate(45deg)'
          }}
        />
        
        {/* Small accent blob */}
        <div 
          className="absolute"
          style={{
            position: 'absolute',
            top: '4rem',
            right: '20rem',
            width: '8rem',
            height: '8rem',
            borderRadius: '40% 60% 70% 30%',
            background: 'linear-gradient(315deg, #fbbf24 0%, #f97316 100%)',
            opacity: 0.7,
            animation: 'float 4s ease-in-out infinite',
            transform: 'rotate(90deg)'
          }}
        />
      </div>

      {/* Content Container */}
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
          className="max-w-4xl"
          style={{
            maxWidth: '56rem'
          }}
        >
          <h2 
            className="text-white font-light leading-tight mb-12"
            style={{
              fontSize: config.typography.titleSize,
              fontWeight: config.typography.titleWeight,
              color: 'white',
              lineHeight: config.typography.titleLineHeight,
              letterSpacing: config.typography.titleLetterSpacing,
              fontFamily: config.typography.fontFamily,
              marginBottom: '3rem'
            }}
          >
            Ready to transform your home health scheduling?
          </h2>
          
          <button 
            className="bg-white hover:bg-gray-50 text-teal-700 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-3 shadow-lg hover:shadow-xl hover:scale-105 group"
            style={{
              backgroundColor: config.colors.buttonBackground,
              color: config.colors.buttonTextColor,
              padding: config.typography.buttonPadding,
              borderRadius: '9999px',
              fontWeight: config.typography.buttonFontWeight,
              fontSize: config.typography.buttonFontSize,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: config.effects.buttonShadow,
              transition: 'all 0.3s ease-out',
              fontFamily: config.typography.fontFamily
            }}
          >
            <span>Request a Demo</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{
                width: '1.25rem',
                height: '1.25rem',
                transition: 'transform 0.3s ease-out'
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-20px) rotate(5deg); 
          }
          66% { 
            transform: translateY(10px) rotate(-3deg); 
          }
        }
      `}</style>
    </div>
  );
} 