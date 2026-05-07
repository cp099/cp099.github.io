export default function AboutPage() {
  return (
    <article className="max-w-3xl animate-reveal pb-20">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4 tracking-tighter">About</h1>
        <p className="text-cyan font-mono text-xs uppercase tracking-[0.3em]">CHIRAG_P_PATIL // BIOGRAPHY</p>
      </header>

      <div className="space-y-8 text-slate leading-8 text-base">
        <section>
          <h2 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Origins</h2>
          <p>
            I’ve always been drawn to understanding how things work—not just in theory, but in practice. That curiosity has taken me through building projects, working with teams, and being part of experiences where structure, people, and execution all come together.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Professional Trajectory</h2>
          <p>
            Over time, this has grown into working across both technology and commerce. I build projects like <span className="text-white font-medium">BreatheEasy</span> and explore system design, while also spending time understanding how financial systems operate and are structured. It’s less about choosing one path and more about understanding how these worlds connect.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Leadership & School</h2>
          <p>
            A big part of my journey has also been through school—taking up roles where I’ve had to lead, organise, and work closely with people. Whether it’s mentoring, managing events, or coordinating teams, those experiences have shaped how I think and work just as much as any technical project.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Beyond the Terminal</h2>
          <p>
            Outside of all this, I value time away from structured work. Cycling, long walks, conversations, and just observing things quietly play a big role in how I reset and think better.
          </p>
        </section>

        <blockquote className="italic text-light-slate/90 pt-8 border-t border-white/5 border-b border-white/5 py-6">
          "This system exists because I believe growth becomes clearer when it’s documented. It’s not just a showcase—it’s a space that reflects what I’m learning, building, and becoming."
        </blockquote>
      </div>
    </article>
  );
}