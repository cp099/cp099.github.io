import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms of service, intellectual property parameters, and code usage guidelines for Chirag P Patil's Personal OS.",
};

export default function TermsPage() {
  return (
    <article className="max-w-3xl animate-reveal pb-20">
      <header className="mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
          Terms & Conditions
        </h1>
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_8px_rgba(100,255,218,0.6)] animate-pulse" />
          <p className="text-cyan font-mono text-xs uppercase tracking-[0.3em]">
            SYS.PROTOCOL // TERMS_OF_SERVICE_V1.0
          </p>
        </div>
        <p className="text-white/60 font-mono text-xs mt-3">
          LAST_UPDATED: MARCH 2025 // JURISDICTION: BENGALURU, INDIA
        </p>
      </header>

      <div className="space-y-10 text-slate leading-relaxed text-sm md:text-base">
        
        {/* Section 1: Agreement */}
        <section className="p-5 rounded-lg bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-white font-bold text-base md:text-lg flex items-center gap-2 tracking-tight">
            <span className="text-cyan font-mono text-xs">01.</span> Acceptance of System Terms
          </h2>
          <p>
            By accessing or interacting with this digital terminal (<code className="text-cyan text-xs">cp099.github.io</code>), you acknowledge and agree to comply with these terms, notices, and conditions. If you do not agree to these terms, you should terminate your session and discontinue access immediately.
          </p>
        </section>

        {/* Section 2: Intellectual Property */}
        <section className="space-y-4">
          <h2 className="text-white font-bold text-base md:text-lg flex items-center gap-2 tracking-tight">
            <span className="text-cyan font-mono text-xs">02.</span> Intellectual Property & Code Licensing
          </h2>
          <p>
            The contents of this terminal represent an individual portfolio of technical systems, research, and leadership dossiers:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2 text-light-slate">
            <li>
              <strong className="text-white">Portfolio Architecture & Content:</strong> The design layout, custom theme tokens, curated text dossiers, and visual identity of <code className="text-cyan text-xs">CHIRAG.OS</code> are the intellectual property of Chirag P Patil, protected under applicable copyright laws.
            </li>
            <li>
              <strong className="text-white">Open Source Builds:</strong> Open-source projects linked herein (such as <code className="text-cyan text-xs">ZenithOS</code>, <code className="text-cyan text-xs">Siphonix</code>, <code className="text-cyan text-xs">BreatheEasy</code>, and related repositories) are individually licensed under their respective repository licenses (e.g. MIT, Apache 2.0, or GNU GPL) hosted on GitHub. Consult each specific repository for explicit license terms.
            </li>
            <li>
              <strong className="text-white">Third-Party Assets:</strong> Brand trademarks, institutional seals (e.g., Christ University, Bloomberg, CAPS, Valora), and library copyrights remain the property of their respective legal owners.
            </li>
          </ul>
        </section>

        {/* Section 3: Permitted Use & Attribution */}
        <section className="space-y-4">
          <h2 className="text-white font-bold text-base md:text-lg flex items-center gap-2 tracking-tight">
            <span className="text-cyan font-mono text-xs">03.</span> Permitted Use & Attribution Guidelines
          </h2>
          <p>
            You are granted a non-exclusive, revocable license to access, view, and inspect this website for personal, educational, and professional evaluation purposes, subject to the following limitations:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2 text-light-slate">
            <li>You may cite, quote, or reference architectural write-ups and project case studies provided clear attribution and an active hyperlink back to <code className="text-cyan text-xs">cp099.github.io</code> are included.</li>
            <li>You may not impersonate Chirag P Patil, reproduce proprietary project dossiers wholesale for fraudulent commercial gain, or misrepresent authorship of referenced works.</li>
            <li>Automated data scraping that degrades system stability or circumvents standard rate limits is prohibited.</li>
          </ul>
        </section>

        {/* Section 4: Disclaimers */}
        <section className="space-y-4">
          <h2 className="text-white font-bold text-base md:text-lg flex items-center gap-2 tracking-tight">
            <span className="text-cyan font-mono text-xs">04.</span> Financial & Technical Disclaimers
          </h2>
          <div className="p-4 rounded border border-white/10 bg-navy/60 space-y-2 text-xs text-white/80 leading-relaxed">
            <p>
              <strong className="text-cyan uppercase tracking-wider block mb-1">NOT FINANCIAL ADVICE:</strong>
              Any financial models, quantitative analytics discussions, accounting interpretations, or market commentaries presented on this website are exclusively for academic, research, and portfolio demonstration purposes. None of the content constitutes investment, trading, accounting, or legal counsel.
            </p>
            <p>
              <strong className="text-cyan uppercase tracking-wider block mb-1">SOFTWARE AS-IS:</strong>
              All code snippets, algorithms, and system demonstrations are provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis without warranties of any kind, whether express or implied.
            </p>
          </div>
        </section>

        {/* Section 5: Limitation of Liability */}
        <section className="space-y-4">
          <h2 className="text-white font-bold text-base md:text-lg flex items-center gap-2 tracking-tight">
            <span className="text-cyan font-mono text-xs">05.</span> Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by applicable law, in no event shall Chirag P Patil be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from your access to or inability to use this platform, any third-party links, or any reliance placed upon code snippets or analyses published here.
          </p>
        </section>

        {/* Section 6: Jurisdiction */}
        <section className="space-y-4">
          <h2 className="text-white font-bold text-base md:text-lg flex items-center gap-2 tracking-tight">
            <span className="text-cyan font-mono text-xs">06.</span> Governing Law & Inquiries
          </h2>
          <p>
            These Terms & Conditions shall be governed by and construed in accordance with the laws of Bengaluru, Karnataka, India.
          </p>
          <div className="pt-2">
            <a 
              href="mailto:chiragpatil07@gmail.com"
              className="inline-flex items-center gap-2 text-cyan font-mono text-xs uppercase tracking-wider hover:text-cyan-bright transition-colors"
            >
              <span>Legal Communication: chiragpatil07@gmail.com</span>
              <span>❯</span>
            </a>
          </div>
        </section>

        {/* Navigation back */}
        <div className="pt-10 border-t border-white/10 flex items-center justify-between font-mono text-xs">
          <Link href="/privacy" className="text-slate hover:text-cyan transition-colors">
            ❮ PRIVACY_POLICY
          </Link>
          <Link href="/" className="text-cyan hover:text-cyan-bright transition-colors">
            SYSTEM_ROOT ❯
          </Link>
        </div>

      </div>
    </article>
  );
}
