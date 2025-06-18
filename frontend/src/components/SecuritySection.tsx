'use client';

import React from 'react';

export default function SecuritySection() {
  const config = {
    // Layout configuration
    layout: {
      sectionPadding: '60px 32px 120px 32px', // Increased top padding from 40px to 60px
      maxWidth: '88rem',                     // Max width of content
      contentGap: '4rem'                     // Gap between content sections
    },
    
    // Colors
    colors: {
      backgroundColor: 'white',              // White background
      textColor: '#1f2937',                  // Dark gray text
      subtextColor: '#6b7280',               // Medium gray subtext
      accentColor: '#0d9488',                // Teal accent
      checkmarkColor: '#10b981',             // Green checkmark
    },
    
    // Typography
    typography: {
      titleSize: 'clamp(2rem, 4vw, 2.75rem)',   // Responsive title size
      titleWeight: '400',                        // Light title weight
      titleLineHeight: '1.3',                   // Line height
      titleLetterSpacing: '-0.02em',            // Slight negative spacing
      
      optionTitleSize: '1.125rem',              // Option title size
      optionTitleWeight: '600',                 // Option title weight
      
      descriptionSize: '1rem',                  // Description size
      descriptionLineHeight: '1.6',            // Description line height
      
      linkSize: '1rem',                         // Link size
      linkWeight: '500',                        // Link weight
      
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }
  };

  const securityOptions = [
    {
      title: "HIPAA-Compliant SaaS",
      description: "Fully managed cloud solution with SOC 2 Type II certification, encrypted data at rest and in transit, and comprehensive audit logging for regulatory compliance."
    },
    {
      title: "Business Associate Agreement", 
      description: "Complete BAA coverage with liability protection, data breach notification protocols, and compliance with all HIPAA Privacy and Security Rules."
    },
    {
      title: "Role-Based Access Controls",
      description: "Granular permissions for administrators, nurses, and clinical staff with multi-factor authentication and session management for secure access."
    },
    {
      title: "Data Backup & Recovery",
      description: "Automated daily backups with 99.9% uptime SLA, disaster recovery protocols, and geographic redundancy to protect critical patient scheduling data."
    }
  ];

  return (
    <div 
      className="w-full relative overflow-hidden"
      style={{
        backgroundColor: config.colors.backgroundColor,
        padding: config.layout.sectionPadding,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        className="max-w-7xl mx-auto relative z-10"
        style={{
          maxWidth: config.layout.maxWidth,
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: config.layout.contentGap,
            alignItems: 'center'
          }}
        >
          {/* Left Column - Title */}
          <div>
            <h2 
              style={{
                fontSize: config.typography.titleSize,
                fontWeight: config.typography.titleWeight,
                color: config.colors.textColor,
                lineHeight: config.typography.titleLineHeight,
                letterSpacing: config.typography.titleLetterSpacing,
                fontFamily: config.typography.fontFamily
              }}
            >
              Enterprise-grade security and compliance options for healthcare organizations
            </h2>
          </div>

          {/* Right Column - Options */}
          <div 
            className="space-y-6"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
          >
            {securityOptions.map((option, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}
              >
                {/* Checkmark Icon */}
                <div 
                  className="flex-shrink-0 mt-1"
                  style={{
                    flexShrink: 0,
                    marginTop: '0.25rem'
                  }}
                >
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{
                      width: '1.5rem',
                      height: '1.5rem',
                      borderRadius: '50%',
                      backgroundColor: config.colors.checkmarkColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <svg 
                      className="w-4 h-4 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      style={{
                        width: '1rem',
                        height: '1rem',
                        color: 'white'
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 
                    className="font-semibold mb-2"
                    style={{
                      fontSize: config.typography.optionTitleSize,
                      fontWeight: config.typography.optionTitleWeight,
                      color: config.colors.textColor,
                      marginBottom: '0.5rem',
                      fontFamily: config.typography.fontFamily
                    }}
                  >
                    {option.title}
                  </h3>
                  <p 
                    style={{
                      fontSize: config.typography.descriptionSize,
                      color: config.colors.subtextColor,
                      lineHeight: config.typography.descriptionLineHeight,
                      fontFamily: config.typography.fontFamily
                    }}
                  >
                    {option.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Learn More Link */}
            <div 
              className="pt-4"
              style={{
                paddingTop: '1rem'
              }}
            >
              <a
                href="#"
                className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-700"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: config.colors.accentColor,
                  textDecoration: 'none',
                  fontSize: config.typography.linkSize,
                  fontWeight: config.typography.linkWeight,
                  fontFamily: config.typography.fontFamily,
                  borderBottom: '1px solid currentColor',
                  paddingBottom: '2px'
                }}
              >
                <span>View security documentation</span>
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{
                    width: '1rem',
                    height: '1rem'
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 