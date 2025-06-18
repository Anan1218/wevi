'use client';

import React from 'react';
import AIHealthMockup from '@/components/AIHealthMockup';
import ResultsSection from '@/components/ResultsSection';
import TalkToWevi from '@/components/TalkToWevi';
import WhyWeviSection from '@/components/WhyWeviSection';
import NurseFocusSection from '@/components/NurseFocusSection';
import FeaturesSection from '@/components/FeaturesSection';
import SecuritySection from '@/components/SecuritySection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';


export default function Home() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  // Add smooth scroll behavior and initial load animation
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Trigger fade-in animation immediately - much faster
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      clearTimeout(timer);
    };
  }, []);

  // CUSTOMIZATION VARIABLES - Adjust these to change sizing and spacing
  const config = {
    // Title sizing
    titleSize: {
      min: '2rem',    // Minimum title size
      responsive: '8vw', // Responsive scaling
      max: '4.65rem'       // Maximum title size
    },
    
    // Spacing and padding
    spacing: {
      containerPadding: '2rem',      // Left/right padding of main container        // Top padding from navbar - much smaller
      titleMarginBottom: '1.3rem',  // Space below title
      descMarginBottom: '2.5rem',   // Space below description
      buttonGap: '1rem',            // Gap between buttons
      sectionGap: '0rem'            // Gap below button section
    },
    
    // Content sizing
    content: {
      maxWidth: '900px',           // Max width of content container
      descriptionSize: '1.2rem',   // Description font size
      buttonPadding: '0.9rem 2rem', // Button padding
      buttonFontSize: '1rem'      // Button font size
    }
  };
  return (
    <div className="min-h-screen relative w-full overflow-x-hidden" style={{ width: '100%', overflowX: 'hidden' }}>
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.015
          }}
        />
        
        {/* Floating Orbs */}
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse-slow"
          style={{
            position: 'absolute',
            top: '25%',
            right: '25%',
            width: '24rem',
            height: '24rem',
            backgroundColor: 'rgba(20, 184, 166, 0.05)',
            borderRadius: '50%',
            filter: 'blur(3rem)',
            zIndex: 1
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse-slow"
          style={{
            position: 'absolute',
            bottom: '25%',
            left: '25%',
            width: '20rem',
            height: '20rem',
            backgroundColor: 'rgba(249, 115, 22, 0.05)',
            borderRadius: '50%',
            filter: 'blur(3rem)',
            zIndex: 1,
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div 
          className="min-h-screen flex items-center justify-center w-full px-4"
          style={{
            minHeight: '90vh',
            paddingLeft: 'clamp(1rem, 4vw, 2rem)',
            paddingRight: 'clamp(1rem, 4vw, 2rem)',
            paddingTop: '3rem',
            width: '100%',
            position: 'relative'
          }}
        >

          <div 
            className="w-full mx-auto text-center"
            style={{
              maxWidth: config.content.maxWidth,
              width: '100%'
            }}
          >
            {/* Main Heading */}
            <h1 
              style={{
                fontSize: `clamp(${config.titleSize.min}, ${config.titleSize.responsive}, ${config.titleSize.max})`,
                lineHeight: '1.25',
                fontWeight: '300',
                color: '#1a1a1a',
                marginBottom: config.spacing.titleMarginBottom,
                letterSpacing: '-0.01em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                transform: `translateY(${isLoaded ? '0' : '30px'})`,
                opacity: isLoaded ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
              }}
            >
              Automated patient scheduling that works around the clock <span style={{ 
  fontSize: '0.7em',
  display: 'inline-block',
  animation: 'spin 5s linear infinite'
}}>🕐</span>
            </h1>
            
            {/* Description */}
            <p 
              className="text-slate-600 max-w-4xl mx-auto mb-8"
              style={{
                fontSize: config.content.descriptionSize,
                lineHeight: '1.5',
                fontWeight: '400',
                marginBottom: config.spacing.descMarginBottom,
                color: '#1d2938',
                transform: `translateY(${isLoaded ? '0' : '30px'})`,
                opacity: isLoaded ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
              }}
            >
              WeviHealth&apos;s AI assistant handles patient calls 24/7, schedules appointments through natural conversation, and automatically syncs with your calendar system — eliminating scheduling overhead and reducing missed appointments.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-row items-center justify-center"
              style={{
                gap: config.spacing.buttonGap,
                marginBottom: '2rem',
                transform: `translateY(${isLoaded ? '0' : '30px'})`,
                opacity: isLoaded ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
              }}
            >
              <TalkToWevi />
            </div>
          </div>
        </div>
      </div>

      {/* AI Health Tools Mockup Section */}
      <div className="transition-all duration-700 ease-out">
        <AIHealthMockup />
      </div>
      
      {/* Results Section */}
      <div className="transition-all duration-700 ease-out">
        <ResultsSection />
      </div>
      
      {/* Why WeviHealth Section - White */}
      <div className="transition-all duration-700 ease-out">
        <WhyWeviSection />
      </div>
      
      {/* Nurse Focus Section */}
      <div className="transition-all duration-700 ease-out">
        <NurseFocusSection />
      </div>
      
      {/* Features Section */}
      <div className="transition-all duration-700 ease-out">
        <FeaturesSection />
      </div>
      
      {/* Security Section - White */}
      <div className="transition-all duration-700 ease-out">
        <SecuritySection />
      </div>
      
      {/* CTA Section */}
      <div className="transition-all duration-700 ease-out">
        <CTASection />
      </div>
      
      {/* Footer */}
      <div className="transition-all duration-700 ease-out">
        <Footer />
      </div>

      {/* CSS Animation for spinning clock */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
