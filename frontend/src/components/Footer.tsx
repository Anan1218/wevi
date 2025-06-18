import React from 'react';

export default function Footer() {
  const config = {
    // Layout configuration
    layout: {
      sectionPadding: '60px 32px 40px 32px',  // Footer padding
      maxWidth: '88rem',                      // Max width of content
      columnGap: '4rem',                      // Gap between columns
    },
    
    // Background and colors
    colors: {
      backgroundColor: '#1f2937',             // Dark gray background
      textColor: '#d1d5db',                   // Light gray text
      linkColor: '#9ca3af',                   // Slightly darker gray for links
      linkHoverColor: '#14b8a6',              // Teal on hover
      accentColor: '#f97316',                 // Orange accent
      borderColor: '#374151',                 // Border color
    },
    
    // Typography
    typography: {
      headingSize: '1rem',                    // Column heading size
      headingWeight: '600',                   // Column heading weight
      linkSize: '0.875rem',                   // Link font size
      linkWeight: '400',                      // Link font weight
      companySize: '1.125rem',                // Company name size
      companyWeight: '700',                   // Company name weight
      taglineSize: '0.875rem',                // Tagline size
      
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }
  };

  const footerLinks = {
    platform: {
      title: "Platform",
      links: [
        "AI Scheduling Assistant",
        "Smart Call Handling", 
        "Route Optimization",
        "Analytics Dashboard",
        "Mobile App",
        "API Integration"
      ]
    },
    solutions: {
      title: "Solutions",
      links: [
        "Home Health Agencies",
        "Hospice Care",
        "Private Duty Nursing",
        "Skilled Nursing",
        "Physical Therapy",
        "Nurse Burnout Prevention"
      ]
    },
    resources: {
      title: "Resources",
      links: [
        "Documentation",
        "Case Studies",
        "Blog",
        "Webinars",
        "Support Center",
        "Status Page"
      ]
    },
    company: {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Press Kit",
        "Contact",
        "Privacy Policy",
        "Terms of Service"
      ]
    }
  };

  return (
    <footer 
      className="w-full"
      style={{
        backgroundColor: config.colors.backgroundColor,
        padding: config.layout.sectionPadding,
        borderTop: `1px solid ${config.colors.borderColor}`
      }}
    >
      <div 
        className="max-w-7xl mx-auto"
        style={{
          maxWidth: config.layout.maxWidth,
          margin: '0 auto'
        }}
      >
        {/* Main Footer Content */}
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}
        >
          {/* Company Info */}
          <div 
            className="lg:col-span-1"
            style={{
              gridColumn: 'span 1'
            }}
          >
            <div className="mb-6">
              <h3 
                className="font-bold mb-3"
                style={{
                  fontSize: config.typography.companySize,
                  fontWeight: config.typography.companyWeight,
                  color: 'white',
                  marginBottom: '0.75rem',
                  fontFamily: config.typography.fontFamily
                }}
              >
                WeviHealth
              </h3>
              <p 
                className="text-gray-400 text-sm leading-relaxed"
                style={{
                  color: '#9ca3af',
                  fontSize: '0.875rem',
                  lineHeight: '1.6',
                  fontFamily: config.typography.fontFamily
                }}
              >
                We&apos;re revolutionizing home health scheduling with AI-powered automation that puts patient care first. Join healthcare providers across the country who trust WeviHealth to streamline their operations.
              </p>
              
              {/* Newsletter Signup */}
              <div>
                <p 
                  className="text-sm mb-3"
                  style={{
                    fontSize: '0.875rem',
                    color: config.colors.accentColor,
                    fontWeight: '500',
                    marginBottom: '0.75rem'
                  }}
                >
                  Healthcare moves fast
                </p>
                <p 
                  className="text-sm mb-4"
                  style={{
                    fontSize: '0.875rem',
                    color: config.colors.textColor,
                    marginBottom: '1rem'
                  }}
                >
                  We&apos;ll keep you up to date with the latest.
                </p>
                <div 
                  className="flex"
                  style={{
                    display: 'flex',
                    gap: '0.5rem'
                  }}
                >
                  <input
                    type="email"
                    placeholder="Business Email*"
                    className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 text-sm"
                    style={{
                      flex: 1,
                      padding: '0.5rem 0.75rem',
                      backgroundColor: '#374151',
                      border: '1px solid #4b5563',
                      borderRadius: '0.5rem',
                      color: 'white',
                      fontSize: '0.875rem'
                    }}
                  />
                  <button
                    className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#0d9488',
                      color: 'white',
                      borderRadius: '0.5rem',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      transition: 'background-color 0.2s'
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 
                className="font-semibold mb-4"
                style={{
                  fontSize: config.typography.headingSize,
                  fontWeight: config.typography.headingWeight,
                  color: config.colors.textColor,
                  marginBottom: '1rem',
                  fontFamily: config.typography.fontFamily,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {section.title}
              </h4>
              <ul>
                {section.links.map((link, index) => (
                  <li key={index} className="mb-3">
                    <a
                      href="#"
                      className="transition-colors duration-200 hover:text-teal-400"
                      style={{
                        fontSize: config.typography.linkSize,
                        fontWeight: config.typography.linkWeight,
                        color: config.colors.linkColor,
                        textDecoration: 'none',
                        transition: 'color 0.2s ease-out',
                        fontFamily: config.typography.fontFamily
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div 
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center"
          style={{
            paddingTop: '2rem',
            borderTop: `1px solid ${config.colors.borderColor}`,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <div 
            className="text-sm"
            style={{
              fontSize: '0.875rem',
              color: config.colors.linkColor,
              fontFamily: config.typography.fontFamily
            }}
          >
            © 2024 WeviHealth. All rights reserved.
          </div>
          
          <div 
            className="flex space-x-6"
            style={{
              display: 'flex',
              gap: '1.5rem'
            }}
          >
            {['Privacy', 'Terms', 'HIPAA Compliance', 'Security'].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-sm transition-colors duration-200 hover:text-teal-400"
                style={{
                  fontSize: '0.875rem',
                  color: config.colors.linkColor,
                  textDecoration: 'none',
                  transition: 'color 0.2s ease-out',
                  fontFamily: config.typography.fontFamily
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 