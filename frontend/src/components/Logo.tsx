'use client';

import Image from 'next/image';
import React from 'react';

export default function Logo() {
  return (
    <div 
      className="flex items-center"
      style={
        {
          '--logo-spacing': '5px',
          '--logo-vertical-offset': '-2px',
          '--logo-size': '32px',
          '--text-size': '20px'
        } as React.CSSProperties
      }
    >
      {/* Logo Image */}
      <Image
        src="/logo.png"
        alt="WeviHealth Logo"
        width={32}
        height={32}
        style={{ 
          marginRight: 'var(--logo-spacing)',
          transform: 'translateY(var(--logo-vertical-offset))',
          width: 'var(--logo-size)',
          height: 'var(--logo-size)'
        }}
      />
      
      {/* Company Name */}
      <span 
        className="font-semibold text-gray-900 tracking-tight"
        style={{
          fontSize: 'var(--text-size)'
        }}
      >
        WeviHealth
      </span>
    </div>
  );
} 