"use client";

import { useState } from "react";

export default function CitationAction({ citationText }: { citationText: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(citationText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <button 
      onClick={handleCopy}
      className={`mt-3 px-4 py-2 border rounded text-[9px] font-mono uppercase tracking-widest transition-all duration-300 font-bold ${
        copied 
          ? "bg-cyan text-navy border-cyan shadow-[0_0_10px_rgba(100,255,218,0.5)]" 
          : "bg-white/[0.02] border-white/10 text-cyan-bright hover:bg-white/[0.05] hover:border-cyan/50"
      }`}
    >
      {copied ? "✓ Copied to Clipboard" : "Copy Citation String"}
    </button>
  );
}