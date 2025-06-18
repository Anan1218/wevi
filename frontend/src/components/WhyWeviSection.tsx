'use client';

import React from 'react';

export default function WhyWeviSection() {
  const config = {
    // Layout configuration
    layout: {
      sectionPadding: '20px 32px 120px 32px', // Increased bottom padding from 80px to 100px
      maxWidth: '88rem',                     // Max width of content
      contentGap: '3rem'                     // Gap between content sections
    },
    
    // Colors
    colors: {
      backgroundColor: '#f8fafc',            // Light gray background
      textColor: '#1f2937',                  // Dark gray text
      subtextColor: '#6b7280'                // Medium gray subtext
    },
    
    // Typography
    typography: {
      titleSize: 'clamp(2rem, 4vw, 2.75rem)',   // Responsive title size
      titleWeight: '400',                        // Light title weight
      titleLineHeight: '1.3',                   // Line height
      titleLetterSpacing: '-0.02em',            // Slight negative spacing
      
      pillarTitleSize: '1.25rem',               // Pillar title size
      pillarTitleWeight: '600',                 // Pillar title weight
      
      descriptionSize: '1rem',                  // Description size
      descriptionLineHeight: '1.6',            // Description line height
      
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }
  };

  const pillars = [
    {
      icon: "📋",
      title: "Clinical Workflow Integration",
      description: "Seamlessly integrates with OASIS assessments, care plan schedules, and Medicare documentation requirements. Understands skilled nursing visit frequencies and therapy protocols."
    },
    {
      icon: "🎯",
      title: "Specialized Scheduling Logic",
      description: "Handles complex home health scenarios: geographic territories, nurse specializations, patient acuity levels, and regulatory visit timing requirements that generic tools miss."
    },
    {
      icon: "📊",
      title: "Outcomes-Driven Analytics",
      description: "Track nurse productivity, patient satisfaction scores, missed visit rates, and compliance metrics with dashboards designed for home health administrators."
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
        className="max-w-7xl mx-auto text-center relative z-10"
        style={{
          maxWidth: config.layout.maxWidth,
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10
        }}
      >
        <h2 
          className="mb-16"
          style={{
            fontSize: config.typography.titleSize,
            fontWeight: config.typography.titleWeight,
            color: config.colors.textColor,
            lineHeight: config.typography.titleLineHeight,
            letterSpacing: config.typography.titleLetterSpacing,
            fontFamily: config.typography.fontFamily,
            marginBottom: '4rem'
          }}
        >
          Built specifically for the complexities<br/>
          of home health operations
        </h2>

        <div 
          className="grid md:grid-cols-3 gap-12"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem'
          }}
        >
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="text-center"
              style={{
                textAlign: 'center'
              }}
            >
              <div 
                className="text-4xl mb-6"
                style={{
                  fontSize: '2.5rem',
                  marginBottom: '1.5rem'
                }}
              >
                {pillar.icon}
              </div>

              <h3 
                className="mb-4"
                style={{
                  fontSize: config.typography.pillarTitleSize,
                  fontWeight: config.typography.pillarTitleWeight,
                  color: config.colors.textColor,
                  marginBottom: '1rem',
                  fontFamily: config.typography.fontFamily
                }}
              >
                {pillar.title}
              </h3>

              <p 
                style={{
                  fontSize: config.typography.descriptionSize,
                  color: config.colors.subtextColor,
                  lineHeight: config.typography.descriptionLineHeight,
                  fontFamily: config.typography.fontFamily
                }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 