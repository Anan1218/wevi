'use client';

import React, { useState, useEffect } from 'react';

interface TalkToWeviProps {
  className?: string;
  style?: React.CSSProperties;
}

type VoiceState = 'idle' | 'active';

const TalkToWevi: React.FC<TalkToWeviProps> = ({ className, style }) => {
  const [voiceState, setVoiceState] = useState<VoiceState>('idle');
  const [waveBarCount, setWaveBarCount] = useState(28);

  // Messages for different states
  const stateMessages = {
    idle: 'Give it a try',
    active: 'Press to Stop'
  };

  // Handle responsive wave bar count
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width < 768) {
        setWaveBarCount(15);
      } else if (width < 1024) {
        setWaveBarCount(20);
      } else {
        setWaveBarCount(28);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const toggleVoice = () => {
    if (voiceState === 'idle') {
      setVoiceState('active');
    } else {
      setVoiceState('idle');
    }
  };

  const handleClick = () => {
    toggleVoice();
  };

  return (
    <div className={className} style={style}>
      

      {/* Animated Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: voiceState === 'active' ? '400px' : '300px',
          height: voiceState === 'active' ? '400px' : '300px',
          borderRadius: '50%',
          background: voiceState === 'active'
            ? 'radial-gradient(circle, rgba(20, 184, 166, 0.08) 0%, rgba(20, 184, 166, 0.03) 40%, transparent 70%)'
            : 'transparent',
          transition: 'all 0.6s ease',
          opacity: voiceState === 'active' ? 1 : 0,
          animation: voiceState === 'active' ? 'pulse-glow 3s ease-in-out infinite' : 'none',
          pointerEvents: 'none',
          zIndex: -2
        }}
      />

      {/* Container with Waves */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(10px, 3vw, 20px)',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}
      >
        {/* Left Side Wavelength Animation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            opacity: voiceState === 'active' ? 1 : 0,
            transition: 'opacity 0.6s ease',
            pointerEvents: 'none',
            minWidth: 'clamp(120px, 20vw, 200px)',
            justifyContent: 'flex-end'
          }}
        >
          {Array.from({ length: waveBarCount }).map((_, index) => {
            const colors = [
              '#fb7185', '#f97316', '#ea580c', '#f59e0b', '#eab308', 
              '#a3a3a3', '#6b7280', '#14b8a6', '#0f766e', '#059669',
              '#0891b2', '#0369a1', '#1e40af', '#6b7280', '#a3a3a3',
              '#ea580c', '#f97316', '#fb7185'
            ];
            const waveAnimation = voiceState === 'active' ? `big-wave-${index % 4}` : 'none';
            const animationDelay = `${index * 0.08}s`;
            
            return (
              <div
                key={`left-${index}`}
                style={{
                  width: '2px',
                  height: '15px',
                  backgroundColor: colors[index % colors.length],
                  borderRadius: '1px',
                  animationName: waveAnimation !== 'none' ? waveAnimation : undefined,
                  animationDuration: waveAnimation !== 'none' ? '1.2s' : undefined,
                  animationTimingFunction: waveAnimation !== 'none' ? 'ease-in-out' : undefined,
                  animationIterationCount: waveAnimation !== 'none' ? 'infinite' : undefined,
                  animationDelay: waveAnimation !== 'none' ? animationDelay : undefined,
                  opacity: 0.8
                }}
              />
            );
          })}
        </div>

        {/* Outer Ring */}
        <div
          style={{
            position: 'relative',
            borderRadius: '9999px',
            padding: '12px',
            background: 'transparent',
            border: voiceState === 'idle' 
              ? '1px solid rgba(251, 113, 133, 0.3)'
              : '1px solid rgba(20, 184, 166, 0.5)',
            boxShadow: voiceState === 'idle'
              ? '0 8px 25px -5px rgba(251, 113, 133, 0.15), 0 4px 6px -2px rgba(251, 113, 133, 0.1)'
              : '0 12px 30px -8px rgba(20, 184, 166, 0.3), 0 6px 12px -4px rgba(20, 184, 166, 0.2)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: voiceState === 'active' ? 'scale(1.02)' : 'scale(1)',
          }}
        >
        {/* Main Voice Button */}
        <button 
          onClick={handleClick}
          style={{
            background: voiceState === 'idle' 
              ? 'linear-gradient(135deg, #fb7185 0%, #f97316 100%)'
              : 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)',
            color: 'white',
            padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)',
            fontSize: 'clamp(0.875rem, 2vw, 1rem)',
            borderRadius: '9999px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: 'none',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(0.5rem, 1.5vw, 0.75rem)',
            minWidth: 'clamp(180px, 30vw, 220px)',
            maxWidth: '300px',
            justifyContent: 'center',
            flexShrink: 0,
            position: 'relative',
            overflow: 'hidden',
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.transform = 'scale(1)';
          }}
      >
        {/* Icon and Content */}
        {voiceState === 'idle' ? (
          // IDLE STATE: Microphone icon + text
          <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
            </svg>
            <span>{stateMessages[voiceState]}</span>
          </>
        ) : (
          // ACTIVE STATE: Just text, no sound bars
          <span style={{ textAlign: 'center' }}>{stateMessages[voiceState]}</span>
        )}
        </button>
        </div>

        {/* Right Side Wavelength Animation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            opacity: voiceState === 'active' ? 1 : 0,
            transition: 'opacity 0.6s ease',
            pointerEvents: 'none',
            minWidth: 'clamp(120px, 20vw, 200px)',
            justifyContent: 'flex-start'
          }}
        >
          {Array.from({ length: waveBarCount }).map((_, index) => {
            const colors = [
              '#fb7185', '#f97316', '#ea580c', '#f59e0b', '#eab308', 
              '#a3a3a3', '#6b7280', '#14b8a6', '#0f766e', '#059669',
              '#0891b2', '#0369a1', '#1e40af', '#6b7280', '#a3a3a3',
              '#ea580c', '#f97316', '#fb7185'
            ];
            const waveAnimation = voiceState === 'active' ? `big-wave-${(index + 2) % 4}` : 'none';
            const animationDelay = `${(index + 4) * 0.08}s`;
            
            return (
              <div
                key={`right-${index}`}
                style={{
                  width: '2px',
                  height: '15px',
                  backgroundColor: colors[index % colors.length],
                  borderRadius: '1px',
                  animationName: waveAnimation !== 'none' ? waveAnimation : undefined,
                  animationDuration: waveAnimation !== 'none' ? '1.2s' : undefined,
                  animationTimingFunction: waveAnimation !== 'none' ? 'ease-in-out' : undefined,
                  animationIterationCount: waveAnimation !== 'none' ? 'infinite' : undefined,
                  animationDelay: waveAnimation !== 'none' ? animationDelay : undefined,
                  opacity: 0.8
                }}
              />
            );
          })}
        </div>
      </div>



      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.95); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes slideIn {
          0% { opacity: 0; transform: translateY(-10px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.8;
          }
        }
        
        @keyframes big-wave-0 {
          0%, 100% { height: 15px; transform: scaleY(1); }
          50% { height: 35px; transform: scaleY(1.1); }
        }
        
        @keyframes big-wave-1 {
          0%, 100% { height: 20px; transform: scaleY(1); }
          50% { height: 45px; transform: scaleY(1.2); }
        }
        
        @keyframes big-wave-2 {
          0%, 100% { height: 12px; transform: scaleY(1); }
          50% { height: 30px; transform: scaleY(1.05); }
        }
        
        @keyframes big-wave-3 {
          0%, 100% { height: 18px; transform: scaleY(1); }
          50% { height: 40px; transform: scaleY(1.15); }
        }
      `}</style>
    </div>
  );
};

export default TalkToWevi; 