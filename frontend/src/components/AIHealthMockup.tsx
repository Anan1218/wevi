'use client';

import React, { useRef, useEffect, useState } from 'react';

export default function AIHealthMockup() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [messagesVisible, setMessagesVisible] = useState<boolean[]>([false, false, false]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Trigger animation at the same time as header
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Start with header

    // Animate messages one by one - gentler timing
    const messageTimers = [
      setTimeout(() => setMessagesVisible(prev => [true, ...prev.slice(1)]), 2000),
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessagesVisible(prev => [prev[0], true, prev[2]]);
        }, 1500);
      }, 3000),
      setTimeout(() => setMessagesVisible(prev => [...prev.slice(0, 2), true]), 5500)
    ];

    return () => {
      clearTimeout(timer);
      messageTimers.forEach(clearTimeout);
    };
  }, []);
  // CUSTOMIZATION VARIABLES - Adjust these to change all styling and spacing
  const config = {
    // Section layout
    layout: {
      sectionPadding: '0px 32px',          // Removed top padding (was 5px), keeping only horizontal padding
      maxWidth: '88rem',                   // Max width of content
      containerPadding: '2.5rem',          // Reduced inner container padding from 4rem to 2.5rem
      gridGap: '4rem',                     // Gap between left and right columns
      contentGap: '2rem'                   // Gap between content elements
    },
    
    // Background and colors
    colors: {
      sectionBackground: 'white',                                                    // Section background
      containerGradient: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #0f766e 100%)', // Main container gradient
      chatHeaderGradient: 'linear-gradient(135deg, #fb7185 0%, #f97316 100%)',      // Chat header gradient
      userMessageGradient: 'linear-gradient(135deg, #fb7185 0%, #f97316 100%)',     // User message bubble gradient
      buttonBackground: 'white',                                                     // Button background
      buttonTextColor: '#0d9488',                                                    // Button text color
      avatarTextColor: '#f97316'                                                     // Avatar text color
    },
    
    // Typography
    typography: {
      // Main title
      titleSize: 'clamp(3rem, 5vw, 4rem)',               // Title font size
      titleWeight: '300',                                  // Title font weight (300 = light)
      titleLineHeight: '1.05',                            // Title line height
      titleLetterSpacing: '-0.02em',                      // Title letter spacing
      titleMarginBottom: '1.5rem',                        // Space below title
      
      // Description
      descriptionSize: '1.25rem',                         // Description font size
      descriptionWeight: '400',                           // Description font weight
      descriptionLineHeight: '1.5',                       // Description line height
      descriptionMarginBottom: '2rem',                    // Space below description
      
      // Feature items
      featureGap: '1.5rem',                              // Gap between feature items
      featureTitleSize: '1.125rem',                      // Feature title font size
      featureTitleWeight: '600',                         // Feature title font weight
      
      // Button
      buttonPadding: '1rem 2rem',                        // Button padding
      buttonFontSize: '1.125rem',                        // Button font size
      buttonFontWeight: '600',                           // Button font weight
      
      // Font family for all text
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    
    // Chat interface
    chat: {
      containerMaxWidth: '28rem',                        // Chat container max width
      containerBorderRadius: '1.5rem',                   // Chat container border radius
      headerPadding: '1rem 1.5rem',                      // Header padding
      messagesHeight: '24rem',                           // Messages area height
      messagesPadding: '1.5rem',                         // Messages padding
      messageGap: '1rem',                                // Gap between messages
      messagePadding: '0.75rem 1rem',                    // Individual message padding
      messageBorderRadius: '1rem',                       // Message border radius
      messageMaxWidth: '20rem'                           // Message max width
    },
    
    // Shadows and effects
    effects: {
      containerShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',  // Main container shadow
      chatShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', // Chat shadow
      buttonShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'        // Button shadow
    },
    
    // Map texture overlay
    mapOverlay: {
      enabled: true,                    // Whether to show the map texture overlay
      opacity: 0.04,                    // Opacity of the overlay (0-1) - subtle background texture
      color: '#ffffff',                 // Color of the map lines
      strokeWidth: 1.2,                 // Width of the triangle lines - made thicker
      patternSize: 120                  // Size of the pattern repeat - made larger
    }
  };
      return (
    <div 
      ref={sectionRef}
      className="min-h-screen py-12 lg:py-20 px-4 w-full overflow-x-hidden"
      style={{
        minHeight: '100vh',
        backgroundColor: config.colors.sectionBackground,
        padding: '3rem 1rem',
        width: '100%',
        overflowX: 'hidden'
      }}
    >
      <div 
        className="max-w-7xl mx-auto"
        style={{
          maxWidth: config.layout.maxWidth,
          margin: '0 auto',
          width: '100%'
        }}
      >
        {/* Teal Rounded Container */}
        <div 
          className="rounded-3xl shadow-2xl overflow-hidden relative"
          style={{
            background: config.colors.containerGradient,
            borderRadius: '1.5rem',
            boxShadow: config.effects.containerShadow,
            overflow: 'hidden',
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            position: 'relative',
            transform: `translateY(${isVisible ? '0' : '40px'})`,
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
            width: '100%'
          }}
        >
          {/* Map Texture Overlay */}
          {config.mapOverlay.enabled && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: config.mapOverlay.opacity,
                pointerEvents: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='${config.mapOverlay.patternSize}' height='${config.mapOverlay.patternSize}' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='triangle-pattern' x='0' y='0' width='${config.mapOverlay.patternSize}' height='${config.mapOverlay.patternSize}' patternUnits='userSpaceOnUse'%3E%3Cg stroke='${encodeURIComponent(config.mapOverlay.color)}' stroke-width='${config.mapOverlay.strokeWidth}' fill='none'%3E%3C!-- Large triangles --%3E%3Cpolygon points='20,10 40,50 0,50'/%3E%3Cpolygon points='80,10 100,50 60,50'/%3E%3Cpolygon points='20,70 40,110 0,110'/%3E%3Cpolygon points='80,70 100,110 60,110'/%3E%3C!-- Medium triangles --%3E%3Cpolygon points='50,25 65,50 35,50'/%3E%3Cpolygon points='110,25 125,50 95,50'/%3E%3Cpolygon points='50,85 65,110 35,110'/%3E%3Cpolygon points='110,85 125,110 95,110'/%3E%3C!-- Small triangles --%3E%3Cpolygon points='15,30 25,45 5,45'/%3E%3Cpolygon points='75,30 85,45 65,45'/%3E%3Cpolygon points='15,90 25,105 5,105'/%3E%3Cpolygon points='75,90 85,105 65,105'/%3E%3C!-- Inverted triangles for variety --%3E%3Cpolygon points='40,5 60,5 50,25'/%3E%3Cpolygon points='100,5 120,5 110,25'/%3E%3Cpolygon points='40,65 60,65 50,85'/%3E%3Cpolygon points='100,65 120,65 110,85'/%3E%3C!-- Connecting triangle lines --%3E%3Cline x1='30' y1='30' x2='50' y2='37'/%3E%3Cline x1='70' y1='30' x2='90' y2='37'/%3E%3Cline x1='30' y1='90' x2='50' y2='97'/%3E%3Cline x1='70' y1='90' x2='90' y2='97'/%3E%3Cline x1='50' y1='15' x2='50' y2='35'/%3E%3Cline x1='110' y1='15' x2='110' y2='35'/%3E%3Cline x1='50' y1='75' x2='50' y2='95'/%3E%3Cline x1='110' y1='75' x2='110' y2='95'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23triangle-pattern)'/%3E%3C/svg%3E")`,
                backgroundSize: `${config.mapOverlay.patternSize}px ${config.mapOverlay.patternSize}px`,
                backgroundRepeat: 'repeat'
              }}
            />
          )}
          <div 
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative"
            style={{
              display: 'grid',
              gap: 'clamp(2rem, 4vw, 4rem)',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1,
              width: '100%'
            }}
          >
            
            {/* Left side - Content */}
            <div 
              className="space-y-8"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: config.layout.contentGap,
                transform: `translateX(${isVisible ? '0' : '-30px'})`,
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
              }}
            >
              <div>
                <h2 
                  className="text-5xl lg:text-6xl font-light text-white mb-6 leading-tight"
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
                  AI Scheduling Assistant
                </h2>
                <p 
                  className="text-xl text-white/90 mb-8 leading-relaxed"
                  style={{
                    fontSize: config.typography.descriptionSize,
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: config.typography.descriptionMarginBottom,
                    lineHeight: config.typography.descriptionLineHeight,
                    fontWeight: config.typography.descriptionWeight,
                    fontFamily: config.typography.fontFamily
                  }}
                >
                  Smart phone assistant that handles patient calls and automatically schedules appointments in your calendar
                </p>
              </div>

              <div 
                className="space-y-6"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: config.typography.featureGap
                }}
              >
                {[
                  {
                    title: "AI Phone Call Handling",
                    description: "Natural conversation AI that answers patient calls and schedules appointments 24/7"
                  },
                  {
                    title: "Automatic Calendar Sync", 
                    description: "Real-time integration with your calendar system for instant appointment updates"
                  },
                  {
                    title: "Smart Scheduling Logic",
                    description: "Intelligent appointment optimization considering provider availability and patient preferences"
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem'
                    }}
                  >
                    <div 
                      className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      style={{
                        width: '2rem',
                        height: '2rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '0.25rem'
                      }}
                    >
                      <div 
                        className="w-4 h-4 bg-white rounded-full"
                        style={{
                          width: '1rem',
                          height: '1rem',
                          backgroundColor: 'white',
                          borderRadius: '50%'
                        }}
                      ></div>
                    </div>
                    <div>
                      <h3 
                        className="text-lg font-semibold text-white mb-2"
                        style={{
                          fontSize: config.typography.featureTitleSize,
                          fontWeight: config.typography.featureTitleWeight,
                          color: 'white',
                          marginBottom: '0.5rem',
                          fontFamily: config.typography.fontFamily
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p 
                        className="text-white/80"
                        style={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          lineHeight: '1.5'
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                className="bg-white hover:bg-gray-50 text-teal-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center space-x-2 shadow-lg"
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
                  transition: 'all 0.2s',
                  fontFamily: config.typography.fontFamily
                }}
              >
                <span>Get Started</span>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Right side - Chat Interface */}
            <div 
              className="relative"
              style={{
                position: 'relative',
                transform: `translateX(${isVisible ? '0' : '30px'}) scale(${isVisible ? '1' : '0.95'})`,
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
              }}
            >
              <div 
                className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-md mx-auto"
                style={{
                  backgroundColor: 'white',
                  borderRadius: config.chat.containerBorderRadius,
                  boxShadow: config.effects.chatShadow,
                  overflow: 'hidden',
                  maxWidth: config.chat.containerMaxWidth,
                  margin: '0 auto'
                }}
              >
                {/* Chat Header */}
                <div 
                  className="bg-teal-600 px-6 py-4 border-b"
                  style={{
                    background: config.colors.chatHeaderGradient,
                    padding: config.chat.headerPadding,
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div 
                    className="flex items-center space-x-3"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}
                  >
                    <div 
                      className="flex space-x-1"
                      style={{
                        display: 'flex',
                        gap: '0.25rem'
                      }}
                    >
                      <div 
                        className="w-3 h-3 bg-red-500 rounded-full"
                        style={{
                          width: '0.75rem',
                          height: '0.75rem',
                          backgroundColor: '#ef4444',
                          borderRadius: '50%'
                        }}
                      ></div>
                      <div 
                        className="w-3 h-3 bg-yellow-500 rounded-full"
                        style={{
                          width: '0.75rem',
                          height: '0.75rem',
                          backgroundColor: '#eab308',
                          borderRadius: '50%'
                        }}
                      ></div>
                      <div 
                        className="w-3 h-3 bg-green-500 rounded-full"
                        style={{
                          width: '0.75rem',
                          height: '0.75rem',
                          backgroundColor: '#22c55e',
                          borderRadius: '50%'
                        }}
                      ></div>
                    </div>
                    <div 
                      className="flex items-center space-x-2"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <div 
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                        style={{
                          width: '2rem',
                          height: '2rem',
                          backgroundColor: 'white',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <span 
                          className="text-sm font-semibold"
                          style={{
                            color: config.colors.avatarTextColor,
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            fontFamily: config.typography.fontFamily
                          }}
                        >
                          W
                        </span>
                      </div>
                      <div>
                        <div 
                          className="font-semibold text-white"
                          style={{
                            fontWeight: '600',
                            color: 'white'
                          }}
                        >
                          WeviHealth
                        </div>
                        <div 
                          className="text-xs text-white/80"
                          style={{
                            fontSize: '0.75rem',
                            color: 'rgba(255, 255, 255, 0.8)'
                          }}
                        >
                          AI Scheduling Assistant
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div 
                  className="h-96 p-6 overflow-y-auto space-y-4 bg-white"
                  style={{
                    height: config.chat.messagesHeight,
                    padding: config.chat.messagesPadding,
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: config.chat.messageGap,
                    backgroundColor: 'white'
                  }}
                >
                  {/* User Message - Animated */}
                  <div 
                    className="flex justify-end"
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      transform: `translateX(${messagesVisible[0] ? '0' : '30px'}) scale(${messagesVisible[0] ? '1' : '0.95'})`,
                      opacity: messagesVisible[0] ? 1 : 0,
                      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <div 
                      className="bg-teal-500 text-white px-4 py-3 rounded-2xl rounded-tr-md max-w-xs"
                      style={{
                        background: config.colors.userMessageGradient,
                        color: 'white',
                        padding: config.chat.messagePadding,
                        borderRadius: config.chat.messageBorderRadius,
                        borderTopRightRadius: '0.375rem',
                        maxWidth: config.chat.messageMaxWidth
                      }}
                    >
                      <p 
                        className="text-sm"
                        style={{
                          fontSize: '0.875rem'
                        }}
                      >
                        I need to schedule a follow-up appointment for next week. What times are available?
                      </p>
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div 
                      className="flex justify-start"
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        transform: 'translateX(0)',
                        opacity: 1,
                        transition: 'all 0.3s ease-out'
                      }}
                    >
                      <div 
                        className="bg-teal-50 px-4 py-3 rounded-2xl rounded-tl-md"
                        style={{
                          backgroundColor: '#f0fdfa',
                          padding: '0.75rem 1rem',
                          borderRadius: '1rem',
                          borderTopLeftRadius: '0.375rem'
                        }}
                      >
                        <div className="flex items-center space-x-1">
                          <div className="typing-dots">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* AI Response - Animated */}
                  <div 
                    className="flex justify-start"
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      transform: `translateX(${messagesVisible[1] ? '0' : '-30px'}) scale(${messagesVisible[1] ? '1' : '0.95'})`,
                      opacity: messagesVisible[1] ? 1 : 0,
                      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <div 
                      className="bg-teal-50 px-4 py-3 rounded-2xl rounded-tl-md max-w-xs"
                      style={{
                        backgroundColor: '#f0fdfa',
                        color: '#1e293b',
                        padding: '0.75rem 1rem',
                        borderRadius: '1rem',
                        borderTopLeftRadius: '0.375rem',
                        maxWidth: '20rem'
                      }}
                    >
                      <div 
                        className="flex items-center space-x-2 mb-2"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          marginBottom: '0.5rem'
                        }}
                      >
                        <span 
                          className="text-xs font-medium text-teal-600"
                          style={{
                            fontSize: '0.75rem',
                            color: '#0d9488',
                            fontWeight: '500'
                          }}
                        >
                          AI
                        </span>
                        <span 
                          className="text-xs text-teal-500"
                          style={{
                            fontSize: '0.75rem',
                            color: '#14b8a6'
                          }}
                        >
                          9:16 AM
                        </span>
                      </div>
                      <p 
                        className="text-sm mb-3"
                        style={{
                          fontSize: '0.875rem',
                          marginBottom: '0.75rem'
                        }}
                      >
                        I found several available slots for next week:
                      </p>
                      <div 
                        className="space-y-2"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.5rem'
                        }}
                      >
                        <div 
                          className="flex items-center space-x-2"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}
                        >
                          <div 
                            className="w-2 h-2 bg-teal-400 rounded-full"
                            style={{
                              width: '0.5rem',
                              height: '0.5rem',
                              backgroundColor: '#2dd4bf',
                              borderRadius: '50%'
                            }}
                          ></div>
                          <span 
                            className="text-xs"
                            style={{
                              fontSize: '0.75rem'
                            }}
                          >
                            Tuesday 10:00 AM - Dr. Smith
                          </span>
                        </div>
                        <div 
                          className="flex items-center space-x-2"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}
                        >
                          <div 
                            className="w-2 h-2 bg-teal-500 rounded-full"
                            style={{
                              width: '0.5rem',
                              height: '0.5rem',
                              backgroundColor: '#14b8a6',
                              borderRadius: '50%'
                            }}
                          ></div>
                          <span 
                            className="text-xs"
                            style={{
                              fontSize: '0.75rem'
                            }}
                          >
                            Wednesday 2:30 PM - Dr. Johnson
                          </span>
                        </div>
                        <div 
                          className="flex items-center space-x-2"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}
                        >
                          <div 
                            className="w-2 h-2 bg-teal-600 rounded-full"
                            style={{
                              width: '0.5rem',
                              height: '0.5rem',
                              backgroundColor: '#0d9488',
                              borderRadius: '50%'
                            }}
                          ></div>
                          <span 
                            className="text-xs"
                            style={{
                              fontSize: '0.75rem'
                            }}
                          >
                            Friday 11:15 AM - Dr. Wilson
                          </span>
                        </div>
                      </div>
                      <p 
                        className="text-xs mt-3 text-teal-600"
                        style={{
                          fontSize: '0.75rem',
                          marginTop: '0.75rem',
                          color: '#0d9488'
                        }}
                      >
                        Would you like me to book one of these for you?
                      </p>
                    </div>
                  </div>

                  {/* Calendar Integration Notification - Animated */}
                  <div 
                    className="flex justify-center"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      transform: `translateY(${messagesVisible[2] ? '0' : '20px'}) scale(${messagesVisible[2] ? '1' : '0.95'})`,
                      opacity: messagesVisible[2] ? 1 : 0,
                      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <div 
                      className="bg-teal-50 border border-teal-200 px-4 py-2 rounded-full flex items-center space-x-2"
                      style={{
                        backgroundColor: '#f0fdfa',
                        border: '1px solid #99f6e4',
                        padding: '0.5rem 1rem',
                        borderRadius: '9999px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        animation: messagesVisible[2] ? 'slideInScale 0.6s ease-out' : 'none'
                      }}
                    >
                      <div 
                        className="w-2 h-2 bg-teal-400 rounded-full"
                        style={{
                          width: '0.5rem',
                          height: '0.5rem',
                          backgroundColor: '#2dd4bf',
                          borderRadius: '50%',
                          animation: messagesVisible[2] ? 'pulse 2s infinite' : 'none'
                        }}
                      ></div>
                      <span 
                        className="text-xs text-teal-700 font-medium"
                        style={{
                          fontSize: '0.75rem',
                          color: '#0f766e',
                          fontWeight: '500'
                        }}
                      >
                        📅 Calendar syncing automatically...
                      </span>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div 
                  className="px-6 py-4 border-t bg-teal-50"
                  style={{
                    padding: '1rem 1.5rem',
                    borderTop: '1px solid #ccfdf7',
                    backgroundColor: '#f0fdfa'
                  }}
                >
                  <div 
                    className="flex items-center space-x-3"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}
                  >
                    <input 
                      type="text" 
                      placeholder="Ask about your appointments..."
                      className="flex-1 bg-white border border-teal-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      style={{
                        flex: 1,
                        backgroundColor: 'white',
                        border: '1px solid #99f6e4',
                        borderRadius: '9999px',
                        padding: '0.5rem 1rem',
                        fontSize: '0.875rem'
                      }}
                    />
                    <button 
                      className="bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600 transition-colors"
                      style={{
                        backgroundColor: '#14b8a6',
                        color: 'white',
                        padding: '0.5rem',
                        borderRadius: '50%',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style>{`
        /* Keep side by side layout on all screen sizes */
        .grid.lg\\:grid-cols-2 {
          grid-template-columns: 1fr 1fr;
          gap: clamp(1rem, 4vw, 4rem);
        }
        
        /* Desktop adjustments */
        @media (min-width: 1024px) {
          .grid.lg\\:grid-cols-2 {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }
          
          /* Move content higher on desktop */
          .min-h-screen.py-12.lg\\:py-20 {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }
        }
        
        /* Mobile adjustments - keep side by side but adjust sizing */
        @media (max-width: 1023px) {
          /* Add more vertical space on mobile */
          .min-h-screen.py-12.lg\\:py-20 {
            padding-top: 4rem !important;
            padding-bottom: 4rem !important;
          }
          
          /* Adjust mobile container padding - more vertical space */
          .rounded-3xl {
            padding: 2rem 1rem !important;
          }
          
          /* Ensure chat interface is properly sized on mobile */
          .max-w-md {
            max-width: 100% !important;
            width: 100% !important;
          }
          
          /* Fix mobile text sizing */
          .text-5xl.lg\\:text-6xl {
            font-size: 1.875rem !important;
            line-height: 1.1 !important;
          }
          
          .text-xl.lg\\:text-2xl {
            font-size: 1rem !important;
            line-height: 1.4 !important;
          }
        }
        
        .typing-dots {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .typing-dots .dot {
          width: 6px;
          height: 6px;
          background-color: #14b8a6;
          border-radius: 50%;
          animation: typingBounce 1.4s infinite ease-in-out;
        }
        
        .typing-dots .dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-dots .dot:nth-child(2) { animation-delay: -0.16s; }
        .typing-dots .dot:nth-child(3) { animation-delay: 0s; }
        
        @keyframes typingBounce {
          0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
        
        @keyframes slideInScale {
          0% {
            transform: scale(0.3) translateY(20px);
            opacity: 0;
          }
          50% {
            transform: scale(1.1) translateY(-5px);
            opacity: 0.8;
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
} 