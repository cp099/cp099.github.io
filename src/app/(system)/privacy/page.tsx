import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Data protection, telemetry protocols, and privacy practices governing Chirag P Patil's Personal OS.",
};

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl animate-reveal pb-20">
      <header className="mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
          Privacy Policy
        </h1>
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_8px_rgba(100,255,218,0.6)] animate-pulse" />
          <p className="text-cyan font-mono text-xs uppercase tracking-[0.3em]">
            SYS.PROTOCOL // DATA_PROTECTION_V1.0
          </p>
        </div>
        <p className="text-white/60 font-mono text-xs mt-3">
          LAST_UPDATED: MARCH 2025 // REVISION: 1.0.4
        </p>
      </header>

      <div className="space-y-10 text-slate leading-relaxed text-sm md:text-base">
        
        {/* Section 1: Overview */}
        <section className="p-5 rounded-lg bg-white/[0.02] border border-white/5 space-y-3">
          <h2 className="text-white font-bold text-base md:text-lg flex items-center gap-2 tracking-tight">
            <span className="text-cyan font-mono text-xs">01.</span> Architectural Philosophy
          </h2>
          <p>
            Chirag P Patil’s <span className="text-white font-medium">Personal OS</span> (<code className="text-cyan text-xs">cp099.github.io</code>) is an open-architecture engineering portfolio and systems dossier. The platform is designed with minimal telemetry principles: no advertising trackers, no user fingerprinting, and no sale of personal information.
          </p>
        </section>

        {/* Section 2: Data Collection */}
        <section className="space-y-4">
          <h2 className="text-white font-bold text-base md:text-lg flex items-center gap-2 tracking-tight">
            <span className="text-cyan font-mono text-xs">02.</span> Telemetry & Information Collection
          </h2>
          <p>
            We classify information handling across three distinct boundaries:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2 text-light-slate">
            <li>
              <strong className="text-white">Active Personal Data:</strong> We do not collect names, passwords, or personal credentials through forms or user registrations. If you initiate communication via direct email (<code className="text-cyan text-xs">chiragpatil07@gmail.com</code>), your message and address are processed solely for personal correspondence.
            </li>
            <li>
              <strong className="text-white">Anonymous Web Metrics:</strong> Aggregate, de-identified telemetry (such as page views, referral pathways, session duration, and device category) may be processed via privacy-compliant analytics tools (e.g., Google Analytics 4) to evaluate system performance and documentation utility. No personally identifiable information (PII) is associated with these metrics.
            </li>
            <li>
              <strong className="text-white">Hosting Server Logs:</strong> As a statically generated application hosted on GitHub Pages, requests are processed by GitHub’s edge infrastructure (GitHub Inc. / Microsoft). GitHub may collect operational connection logs (such as originating IP address, browser user-agent, and request timestamps) under the <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">GitHub General Privacy Statement</a>.
            </li>
          </ul>
        </section>

        {/* Section 3: Cookies & Local Storage */}
        <section className="space-y-4">
          <h2 className="text-white font-bold text-base md:text-lg flex items-center gap-2 tracking-tight">
            <span className="text-cyan font-mono text-xs">03.</span> Cookies & Local Storage Usage
          </h2>
          <p>
            This system operates with zero third-party commercial advertising cookies. Client-side state persistence relies on standard browser technologies:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded border border-white/10 bg-navy/60">
              <span className="text-xs font-mono text-cyan uppercase block mb-1">Local Storage: UI State</span>
              <p className="text-xs text-white/70 leading-normal">
                Stores your interface preferences (e.g. system mode toggles, interactive terminal history, and cookie acknowledgment status) strictly on your local device.
              </p>
            </div>
            <div className="p-4 rounded border border-white/10 bg-navy/60">
              <span className="text-xs font-mono text-cyan uppercase block mb-1">Analytics Telemetry</span>
              <p className="text-xs text-white/70 leading-normal">
                Measurement cookies (if analytics is enabled) identify returning sessions anonymously without tracking you across external third-party domains.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: External Repositories & Third-Party Links */}
        <section className="space-y-4">
          <h2 className="text-white font-bold text-base md:text-lg flex items-center gap-2 tracking-tight">
            <span className="text-cyan font-mono text-xs">04.</span> External Services & Outbound Links
          </h2>
          <p>
            This system embeds links and references to external services, including:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-light-slate">
            <li>GitHub repositories (<code className="text-cyan text-xs">github.com/cp099</code>)</li>
            <li>Professional networks (<code className="text-cyan text-xs">linkedin.com/in/chiragppatil</code>)</li>
            <li>Academic and institutional entities (Christ University, Bloomberg Institute)</li>
          </ul>
          <p className="text-xs text-white/60">
            Clicking external links redirects you to external domains governed by their respective privacy terms. We assume no control over third-party data practices.
          </p>
        </section>

        {/* Section 5: Data Rights & Inquiries */}
        <section className="space-y-4">
          <h2 className="text-white font-bold text-base md:text-lg flex items-center gap-2 tracking-tight">
            <span className="text-cyan font-mono text-xs">05.</span> Your Rights & Inquiries
          </h2>
          <p>
            Depending on your jurisdiction, you have the right to request access to or deletion of any direct email communication previously exchanged with Chirag P Patil.
          </p>
          <div className="pt-2">
            <a 
              href="mailto:chiragpatil07@gmail.com"
              className="inline-flex items-center gap-2 text-cyan font-mono text-xs uppercase tracking-wider hover:text-cyan-bright transition-colors"
            >
              <span>Transmit Query: chiragpatil07@gmail.com</span>
              <span>❯</span>
            </a>
          </div>
        </section>

        {/* Navigation back */}
        <div className="pt-10 border-t border-white/10 flex items-center justify-between font-mono text-xs">
          <Link href="/" className="text-slate hover:text-cyan transition-colors">
            ❮ RETURN_TO_ROOT
          </Link>
          <Link href="/terms" className="text-cyan hover:text-cyan-bright transition-colors">
            TERMS_OF_SERVICE ❯
          </Link>
        </div>

      </div>
    </article>
  );
}
