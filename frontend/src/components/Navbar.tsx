'use client';

import Link from 'next/link';
import Logo from './Logo';
import React from 'react';

export default function Navbar() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .nav-desktop-only {
              display: none !important;
            }
            .signin-desktop-only {
              display: none !important;
            }
            .mobile-nav-spacing {
              padding-left: 20px !important;
              padding-right: 0px !important;
            }
            .mobile-right-section {
              gap: 0 !important;
              margin-right: 20px !important;
            }
            .mobile-logo {
              font-size: 18px !important;
            }
            .mobile-demo-btn {
              font-size: 14px !important;
              padding: 10px 18px !important;
            }
          }
        `
      }} />
      
      <nav 
        className="fixed w-full z-50 top-0 bg-white/95 backdrop-blur-md border-b border-slate-200/20"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.2)'
        }}
      >
        <div className="max-w-[1400px] mx-auto px-2 md:px-8">
          <div className="flex items-center justify-between h-[72px] mobile-nav-spacing">
          {/* Logo */}
          <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-normal tracking-tight mobile-logo">
              <Logo />
            </Link>
          </div>

          {/* Main Navigation */}
            <div className="nav-desktop-only flex items-center justify-center flex-1">
            <div className="flex items-center" style={{ gap: '40px' }}>
                <Link href="/platform" className="text-[15px] text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Platform
              </Link>
                <Link href="/solutions" className="text-[15px] text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Solutions
              </Link>
                <Link href="/research" className="text-[15px] text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Research
              </Link>
                <Link href="/resources" className="text-[15px] text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Resources
              </Link>
                <Link href="/company" className="text-[15px] text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Company
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-shrink-0">
              <div className="flex items-center mobile-right-section" style={{ gap: '20px' }}>
                <Link href="/signin" className="signin-desktop-only text-[15px] text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Sign in
              </Link>
              <Link 
                href="/request-demo"
                  className="mobile-demo-btn bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all duration-200 text-[15px] font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                style={{
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.2s ease'
                }}
              >
                Request a demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
} 