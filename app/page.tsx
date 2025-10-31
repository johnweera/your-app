export default function Home() {
  const features = [
    {
      badge: "01",
      title: "Hands-on tutorials",
      description:
        "Deep dives into TypeScript, React, testing, and backend engineering with projects you can ship.",
    },
    {
      badge: "02",
      title: "Live coding sessions",
      description:
        "Weekly live builds where we debug in real time, share tactics, and tackle subscriber requests.",
    },
    {
      badge: "03",
      title: "Career playbooks",
      description:
        "Actionable guides for interviews, promotions, and growing into senior engineering roles.",
    },
  ];

  const tutorials = [
    {
      title: "Architecting a full-stack Next.js app",
      description:
        "From schema design to deployment, learn the decisions behind production-ready code.",
      length: "27 min workshop",
    },
    {
      title: "Ship faster with automated testing",
      description: "Practical testing patterns using Vitest, Playwright, and GitHub Actions.",
      length: "18 min series",
    },
    {
      title: "Level up your TypeScript ergonomics",
      description:
        "Master utility types, generics, and inference that keeps refactors painless.",
      length: "12 min quick wins",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute left-1/2 top-20 -z-10 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-indigo-500/30 blur-3xl" />

        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-lg font-semibold text-white shadow-lg shadow-indigo-500/40">
              JD
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-200">
                Programming
              </p>
              <p className="text-lg font-semibold text-white">with JohnDev</p>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#learning">
              Learn
            </a>
            <a className="transition hover:text-white" href="#curriculum">
              Tutorials
            </a>
            <a className="transition hover:text-white" href="#community">
              Community
            </a>
            <a className="transition hover:text-white" href="#newsletter">
              Updates
            </a>
            <a
              className="rounded-full border border-indigo-400/70 px-4 py-2 text-indigo-200 transition hover:border-indigo-300 hover:text-white"
              href="#newsletter"
            >
              Join now
            </a>
          </div>
        </nav>

        <section
          id="hero"
          className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 pb-24 pt-10 text-center md:text-left lg:px-12"
        >
          <div className="flex flex-col items-center gap-4 md:items-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-indigo-200">
              New
              <span className="font-normal tracking-normal text-slate-200">
                2024 roadmap released
              </span>
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Programming with JohnDev
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Level up your engineering craft with practical tutorials, live coding sessions, and career
              mentorship rooted in real product teams.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <a
              className="w-full rounded-full bg-indigo-500 px-8 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-indigo-400 md:w-auto"
              href="#community"
            >
              Join the community
            </a>
            <a
              className="w-full rounded-full border border-white/30 px-8 py-3 text-center text-sm font-semibold uppercase tracking-wide text-slate-200 transition hover:border-white hover:text-white md:w-auto"
              href="#curriculum"
            >
              View tutorials
            </a>
          </div>
        </section>

        <section id="learning" className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Build confidence faster
              </h2>
              <p className="mt-4 text-base text-slate-300">
                Each program mirrors the pace of a real product team. No filler, just skills you can apply on
                the job this week.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 transition hover:text-white"
              href="#newsletter"
            >
              Download the roadmap {"->"}
            </a>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-indigo-400/60 hover:bg-white/10"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20 text-sm font-semibold text-indigo-200">
                  {feature.badge}
                </span>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="curriculum" className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-white md:text-4xl">Latest tutorials</h3>
              <p className="text-base text-slate-300">
                Follow along step by step, fork the repos, and ship a polished feature by the end of each
                session.
              </p>
              <div className="space-y-4">
                {tutorials.map((tutorial) => (
                  <article
                    key={tutorial.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-indigo-400/60 hover:bg-white/10"
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <h4 className="text-xl font-semibold text-white">{tutorial.title}</h4>
                      <span className="inline-flex rounded-full border border-indigo-400/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-200">
                        {tutorial.length}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">{tutorial.description}</p>
                    <a
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 transition hover:text-white"
                      href="#"
                    >
                      Watch now {"->"}
                    </a>
                  </article>
                ))}
              </div>
            </div>
            <aside className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-200">
                Upcoming live
              </span>
              <h4 className="text-2xl font-semibold text-white">Build a performance budget dashboard</h4>
              <p className="text-sm leading-relaxed text-slate-300">
                Go behind the scenes on performance profiling and CI integration. Seats are limited to keep
                Q and A personal.
              </p>
              <div className="flex flex-col gap-2 text-sm text-slate-300">
                <span>Thursday 6:00 PM EST</span>
                <span>Includes repo access and project checklist</span>
              </div>
              <a
                className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-indigo-100"
                href="#community"
              >
                Reserve your spot
              </a>
            </aside>
          </div>
        </section>

        <section id="community" className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-200">
                  Community first
                </span>
                <h3 className="text-3xl font-semibold text-white md:text-4xl">
                  Learn in public with engineers who are leveling up too
                </h3>
                <p className="text-base text-slate-300">
                  Private Discord, accountability sprints, and pair-programming rooms keep you shipping with
                  momentum.
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-2xl bg-slate-950/60 p-6 shadow-lg shadow-indigo-500/20">
                <p className="text-4xl font-semibold text-white">3200+</p>
                <p className="text-sm uppercase tracking-[0.35em] text-indigo-200">Active members</p>
                <p className="text-sm leading-relaxed text-slate-300">
                  Industry engineers from startups to FAANG share wins, failures, and code reviews daily.
                </p>
                <a
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-indigo-400"
                  href="#newsletter"
                >
                  Get an invite
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="newsletter" className="mx-auto w-full max-w-5xl px-6 pb-20 lg:px-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="flex flex-col gap-6 text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-200">
                Weekly briefing
              </span>
              <h3 className="text-3xl font-semibold text-white md:text-4xl">Stay in the loop with JohnDev</h3>
              <p className="text-base text-slate-300">
                A short Monday email with shipping lessons, tool recommendations, and live session invites.
              </p>
              <form className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <input
                  className="h-12 w-full rounded-full border border-white/20 bg-slate-950/60 px-4 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  aria-label="Email address"
                />
                <button
                  className="h-12 w-full rounded-full bg-indigo-500 px-6 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-indigo-400 sm:w-auto"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-slate-500">No spam. Unsubscribe any time.</p>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-slate-950/80">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-center text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:text-left lg:px-12">
            <p>&copy; {new Date().getFullYear()} Programming with JohnDev. All rights reserved.</p>
            <div className="flex items-center justify-center gap-6 md:justify-end">
              <a className="transition hover:text-white" href="#">
                Terms
              </a>
              <a className="transition hover:text-white" href="#">
                Privacy
              </a>
              <a className="transition hover:text-white" href="#newsletter">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
