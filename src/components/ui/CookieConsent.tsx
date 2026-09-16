"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('personal_os_consent');
      if (!consent) {
        // Subtle delay for smoother entrance after initial page mount
        const timer = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // In private browsing or environments where localStorage is restricted, keep visible false
    }
  }, []);

  const handleConsent = (preference: 'granted' | 'essential') => {
    try {
      localStorage.setItem('personal_os_consent', preference);
      window.dispatchEvent(new CustomEvent('cookie-consent-update', { detail: preference }));
    } catch {
      // Fallback
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div 
      role="region" 
      aria-label="Privacy and Cookie Consent"
      className="fixed bottom-4 right-4 left-4 sm:left-auto sm:max-w-md z-40 animate-reveal"
    >
      <div className="bg-navy/95 border border-cyan/30 rounded-xl p-4 md:p-5 shadow-[0_10px_40px_rgba(0,0,0,0.7)] backdrop-blur-md">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_8px_rgba(100,255,218,0.7)] animate-pulse" />
            <span className="text-[10px] font-mono text-cyan uppercase tracking-[0.2em] font-semibold">
              SYS.TELEMETRY // PRIVACY NOTICE
            </span>
          </div>
          <button
            onClick={() => handleConsent('essential')}
            className="text-white/40 hover:text-white font-mono text-xs p-1"
            aria-label="Dismiss cookie notice with essential settings"
          >
            ✕
          </button>
        </div>

        {/* Message Body */}
        <p className="text-xs text-white/80 leading-relaxed mb-4 font-sans">
          This terminal utilizes local storage for system preferences and anonymous telemetry to monitor reliability. Zero commercial advertising trackers or third-party ad cookies are deployed.
        </p>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-white/10 font-mono text-[11px]">
          <Link
            href="/privacy"
            className="text-white/60 hover:text-cyan underline underline-offset-4 transition-colors"
          >
            Review Protocol
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleConsent('essential')}
              className="px-3 py-1.5 rounded border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all cursor-pointer"
            >
              Essential Only
            </button>
            <button
              onClick={() => handleConsent('granted')}
              className="px-3 py-1.5 rounded bg-cyan text-navy font-bold hover:bg-cyan-bright transition-all shadow-[0_0_12px_rgba(100,255,218,0.3)] cursor-pointer"
            >
              Acknowledge
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
