import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About",
  description: "Biography, architectural philosophy, systems engineering, applied finance trajectory, and leadership doctrine of Chirag P Patil.",
};

export default function AboutPage() {
  return (
    <article className="max-w-4xl animate-reveal pb-16">
      
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
          About
        </h1>
        <div className="flex flex-wrap items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_8px_rgba(100,255,218,0.7)] animate-pulse" />
          <p className="text-cyan font-mono text-xs uppercase tracking-[0.3em]">
            CHIRAG_P_PATIL // DOSSIER & ARCHITECTURAL PHILOSOPHY
          </p>
        </div>
        <p className="text-white/60 font-mono text-xs mt-2">
          LOCATION: BANGALORE, IN (BLR_IN) // STATUS: ACTIVE_BUILDER
        </p>
      </header>

      {/* Quick Specs HUD Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden mb-12 shadow-lg">
        <div className="bg-navy p-4 flex flex-col gap-1">
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/60">Institution</span>
          <span className="text-xs md:text-sm font-bold text-white tracking-tight">Christ University</span>
        </div>
        <div className="bg-navy p-4 flex flex-col gap-1">
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/60">Discipline</span>
          <span className="text-xs md:text-sm font-bold text-cyan-bright tracking-tight">Applied Finance & Analytics</span>
        </div>
        <div className="bg-navy p-4 flex flex-col gap-1">
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/60">Focus Core</span>
          <span className="text-xs md:text-sm font-bold text-white tracking-tight">Systems & Data Flow</span>
        </div>
        <div className="bg-navy p-4 flex flex-col gap-1">
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/60">North Star</span>
          <span className="text-xs md:text-sm font-bold text-cyan-bright tracking-tight">Quant Hedge Fund</span>
        </div>
      </div>

      {/* Main Narrative Content */}
      <div className="space-y-12 text-slate leading-relaxed text-sm md:text-base">
        
        {/* Section 1: Origins & System Mindset */}
        <section className="space-y-4">
          <h2 className="text-white font-bold text-lg md:text-xl flex items-center gap-3 tracking-tight">
            <span className="text-cyan font-mono text-xs">01.</span> Origins & The Systems Mindset
          </h2>
          <p>
            I’ve always been driven by an instinct to understand how complex systems operate—not just in textbook diagrams, but at the cold execution level where people, machines, and capital collide. Whether tracing how a microscopic interest rate shift ripples through an economy or debugging register states in an operating system kernel, I look for the hidden cogwheels behind the interface.
          </p>
          <p>
            To me, technology and commerce are not separate disciplines; they are mutually reinforcing computational structures. Real-world problems cannot be solved by theoretical assumptions alone—textbooks cover barely 20% of what production requires. True competence comes from building, tweaking systems under live load, and mastering the discipline to make things deterministic and clear.
          </p>
        </section>

        {/* Section 2: Low-Level Engineering & Software Builds */}
        <section className="space-y-4">
          <h2 className="text-white font-bold text-lg md:text-xl flex items-center gap-3 tracking-tight">
            <span className="text-cyan font-mono text-xs">02.</span> Systems Architecture & Engineering
          </h2>
          <p>
            My engineering work spans low-level bare-metal code, high-concurrency systems programming, and applied data analytics:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-cyan/30 transition-all flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-mono text-cyan uppercase tracking-widest block mb-1">Low-Level Kernel</span>
                <h3 className="text-white font-bold text-base mb-2">ZenithOS</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  A 32-bit x86 Protected Mode operating system built from scratch in C and Assembly. Features VESA 1280x1024 graphics, bilinear font scaling, Ring 0/3 CR3 sandboxing, 100Hz preemptive scheduling, and custom ZenithFS filesystem.
                </p>
              </div>
              <Link href="/item/zenithos" className="text-xs font-mono text-cyan hover:text-cyan-bright transition-colors inline-flex items-center gap-1 pt-2">
                <span>View Architecture</span> <span>❯</span>
              </Link>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-cyan/30 transition-all flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-mono text-cyan uppercase tracking-widest block mb-1">Systems Programming</span>
                <h3 className="text-white font-bold text-base mb-2">Siphonix</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Universal terminal media extraction engine written in Rust. Features asynchronous Tokio stream multiplexing, native QuickTime H.264/AAC transcoding, SQLite WAL download provenance, and zero-orphan process isolation.
                </p>
              </div>
              <Link href="/item/siphonix" className="text-xs font-mono text-cyan hover:text-cyan-bright transition-colors inline-flex items-center gap-1 pt-2">
                <span>View Architecture</span> <span>❯</span>
              </Link>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-cyan/30 transition-all flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-mono text-cyan uppercase tracking-widest block mb-1">Applied Data & ML</span>
                <h3 className="text-white font-bold text-base mb-2">BreatheEasy</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Urban air quality predictive platform ingesting real-time CPCB telemetry feeds. Combines Python analytics (NumPy, pandas, matplotlib) with machine learning pipelines to surface clean signals from volatile environmental data.
                </p>
              </div>
              <Link href="/item/breatheeasy" className="text-xs font-mono text-cyan hover:text-cyan-bright transition-colors inline-flex items-center gap-1 pt-2">
                <span>View Architecture</span> <span>❯</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3: Quantitative Finance & The Aspiration */}
        <section className="space-y-4">
          <h2 className="text-white font-bold text-lg md:text-xl flex items-center gap-3 tracking-tight">
            <span className="text-cyan font-mono text-xs">03.</span> Quantitative Finance & Capital Trajectory
          </h2>
          <p>
            Currently pursuing my Bachelor of Commerce in <span className="text-white font-semibold">Applied Finance and Analytics</span> at <span className="text-white font-semibold">Christ (Deemed to be University)</span>, Bangalore, I approach capital not as rows on an Excel sheet, but as systemic flow networks. Finance is the art and science of making money talk—deciphering macroeconomic cogwheels and anticipating how interconnected shocks propagate across modern balance sheets.
          </p>
          <p>
            Grounded in institutional certifications like <span className="text-white font-semibold">Bloomberg Finance Fundamentals (BFF)</span>, corporate valuation frameworks, and quantitative modeling with Python, my mindset is geared toward systematic, data-driven analysis. My ultimate aspiration is clear:
          </p>
          <div className="p-5 rounded-xl border border-cyan/20 bg-cyan/[0.03] space-y-2">
            <span className="text-[10px] font-mono text-cyan uppercase tracking-widest font-bold block">
              FINAL GOAL & ASPIRATION
            </span>
            <p className="text-base md:text-lg text-white font-semibold tracking-tight leading-snug">
              To build and operate my own Quantitative Hedge Fund — merging low-latency algorithmic systems, rigorous market micro-structure analysis, and structured computational risk frameworks.
            </p>
          </div>
        </section>

        {/* Section 4: Leadership Doctrine & Institutional Experience */}
        <section className="space-y-4">
          <h2 className="text-white font-bold text-lg md:text-xl flex items-center gap-3 tracking-tight">
            <span className="text-cyan font-mono text-xs">04.</span> Leadership Doctrine & Operational Execution
          </h2>
          <p>
            True leadership isn’t conferred by titles—it is earned through accountability, vigilance, and the collective growth of the team. Having secured and held competitive leadership positions across rigorous, cut-throat academic and student institutions, I operate by three non-negotiable principles:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10">
              <span className="text-xs font-mono text-cyan block mb-1">01 // RESPONSIBILITY</span>
              <p className="text-xs md:text-sm text-white font-medium italic">
                &ldquo;It’s not about the badge, it’s about the responsibility.&rdquo;
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10">
              <span className="text-xs font-mono text-cyan block mb-1">02 // SUBSTANCE</span>
              <p className="text-xs md:text-sm text-white font-medium italic">
                &ldquo;It’s not about the resume, it’s about the man that carries it.&rdquo;
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10">
              <span className="text-xs font-mono text-cyan block mb-1">03 // PEER TRUST</span>
              <p className="text-xs md:text-sm text-white font-medium italic">
                &ldquo;A leader is only a leader if he has peers who have accepted him.&rdquo;
              </p>
            </div>
          </div>

          <p className="pt-2">
            In logistics and institutional operations—whether serving on the <span className="text-white font-semibold">University Student Council (BYC)</span>, leading logistics as Head for <span className="text-white font-semibold">Valora (The Valuation & Finance Society)</span>, heading media and sponsorships at <span className="text-white font-semibold">CUCA</span>, training over 200+ students as a Peer Trainer at <span className="text-white font-semibold">CAPS</span>, or captaining Cauvery House at <span className="text-white font-semibold">Delhi Public School</span>—execution hinges on severe delegation and frontline calm:
          </p>

          <blockquote className="border-l-2 border-cyan pl-4 py-1 italic text-white/90 text-sm">
            &ldquo;If all aspects of an event are running smoothly to an acceptable level of efficiency, that’s a successful event. The key to serving everyone is severe delegation and vigilance: get your people to take hold of the immediate situation, stabilize it, and then go directly to the root to solve the problem. Delegation is key; no one person can do it all.&rdquo;
          </blockquote>
        </section>

        {/* Section 5: Beyond the Terminal */}
        <section className="space-y-4">
          <h2 className="text-white font-bold text-lg md:text-xl flex items-center gap-3 tracking-tight">
            <span className="text-cyan font-mono text-xs">05.</span> Beyond the Terminal
          </h2>
          <p>
            Outside of operating systems, balance sheets, and command lines, deliberate downtime is essential for clear synthesis. Cycling across Bangalore, long evening walks, unhurried conversations, and observing everyday mechanics without an immediate objective are how I reset my mental models and stay sharp.
          </p>
        </section>

        {/* Closing Axiom */}
        <div className="pt-6 border-t border-white/10">
          <blockquote className="italic text-light-slate/90 text-sm md:text-base leading-relaxed">
            &ldquo;This system exists because growth becomes clearer when it’s documented. It’s not just a showcase—it’s an immutable record of what I’m learning, building, and becoming.&rdquo;
          </blockquote>
        </div>

        {/* Navigation & CTAs */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <Link href="/work" className="inline-flex items-center gap-2 px-4 py-2 rounded bg-cyan/10 border border-cyan/30 text-cyan hover:bg-cyan hover:text-navy transition-all font-bold">
            <span>Explore Technical Builds</span> <span>❯</span>
          </Link>
          <Link href="/journey" className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white/[0.03] border border-white/10 text-white hover:border-cyan/30 hover:text-cyan transition-all">
            <span>Inspect Journey & Education</span> <span>❯</span>
          </Link>
        </div>

      </div>
    </article>
  );
}