"use client";

import { useState, useEffect, useRef } from 'react';

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>(["CHIRAG.OS KERNEL // v1.0.0", "TYPE 'help' TO VIEW SYSTEM COMMANDS.", ""]);
  const inputRef = useRef<HTMLInputElement>(null);

  const COMMANDS: Record<string, string | (() => string)> = {
    help: "AVAILABLE: [ls] [whoami] [status] [contact] [theme] [clear] [exit]",
    ls: "ROOT: /work  /journey  /archive",
    whoami: "ENTITY: CHIRAG_P_PATIL // STATUS: SYSTEMS_BUILDER // LOC: BGL_IN",
    status: "KERNEL: V1.0.STABLE // UPTIME: 100% // INTEGRITY: VERIFIED",
    contact: "EMAIL: chiragpatil07@gmail.com",
    theme: () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      document.documentElement.setAttribute('data-theme', isLight ? 'dark' : 'light');
      return isLight ? "THEME_SWITCHED: DARK_MODE" : "THEME_SWITCHED: LIGHT_MODE";
    },
    clear: "BUFFER_CLEARED",
  };

  useEffect(() => {
    const handleToggle = () => setIsOpen(prev => !prev);
    window.addEventListener('toggle-terminal', handleToggle);
    return () => window.removeEventListener('toggle-terminal', handleToggle);
  }, []);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    if (cmd === 'clear') { setHistory([]); setInput(""); return; }
    if (cmd === 'exit') { setIsOpen(false); setInput(""); return; }

    const response = COMMANDS[cmd] ? (typeof COMMANDS[cmd] === 'function' ? (COMMANDS[cmd] as Function)() : COMMANDS[cmd]) : `ERR: COMMAND '${cmd}' NOT RECOGNIZED`;

    setHistory([...history, `❯ ${input}`, response, ""]);
    setInput("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm animate-reveal">
      <div className="w-full max-w-2xl bg-navy/90 border border-cyan/20 rounded-lg shadow-[0_0_50px_rgba(100,255,218,0.1)] overflow-hidden flex flex-col h-[50vh]">
        <div className="flex items-center justify-between px-4 py-2 border-b border-cyan/10 bg-navy/50">
          <span className="text-[9px] font-mono text-cyan/50 uppercase tracking-[0.2em]">System_Console</span>
          <button onClick={() => setIsOpen(false)} className="text-cyan/50 hover:text-white font-mono text-xs">CLOSE</button>
        </div>

        <div className="flex-grow p-6 overflow-y-auto font-mono text-xs md:text-sm text-white/70 space-y-2">
          {history.map((line, i) => (
            <div key={i} className={line.startsWith('❯') ? "text-cyan-bright" : ""}>
              {line}
            </div>
          ))}
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="text-cyan">❯</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow bg-transparent border-none outline-none text-white caret-cyan"
              autoFocus
            />
          </form>
        </div>
      </div>
    </div>
  );
}