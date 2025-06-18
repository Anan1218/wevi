'use client';

import React from 'react';
import { useVoice } from './VoiceContext';

const HeaderSoundwaves: React.FC = () => {
  const { voiceState } = useVoice();

  return (
    <>
      {/* Left Soundwaves */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '5%',
          transform: 'translateY(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          opacity: voiceState === 'active' ? 0.6 : 0,
          transition: 'opacity 0.6s ease',
          pointerEvents: 'none',
          zIndex: 1
        }}
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={`left-${index}`}
            style={{
              width: '3px',
              height: '15px',
              backgroundColor: 'rgba(20, 184, 166, 0.4)',
              borderRadius: '1.5px',
              animation: voiceState === 'active' ? `header-wave-${index % 4} 1.8s ease-in-out infinite` : 'none',
              animationDelay: `${index * 0.08}s`,
            }}
          />
        ))}
      </div>

      {/* Right Soundwaves */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '5%',
          transform: 'translateY(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          opacity: voiceState === 'active' ? 0.6 : 0,
          transition: 'opacity 0.6s ease',
          pointerEvents: 'none',
          zIndex: 1
        }}
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={`right-${index}`}
            style={{
              width: '3px',
              height: '15px',
              backgroundColor: 'rgba(251, 113, 133, 0.4)',
              borderRadius: '1.5px',
              animation: voiceState === 'active' ? `header-wave-${(index + 2) % 4} 1.8s ease-in-out infinite` : 'none',
              animationDelay: `${index * 0.08}s`,
            }}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes header-wave-0 {
          0%, 100% { height: 8px; }
          50% { height: 25px; }
        }
        
        @keyframes header-wave-1 {
          0%, 100% { height: 12px; }
          50% { height: 30px; }
        }
        
        @keyframes header-wave-2 {
          0%, 100% { height: 6px; }
          50% { height: 20px; }
        }
        
        @keyframes header-wave-3 {
          0%, 100% { height: 10px; }
          50% { height: 28px; }
        }
      `}</style>
    </>
  );
};

export default HeaderSoundwaves; 