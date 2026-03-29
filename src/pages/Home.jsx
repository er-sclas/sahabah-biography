import { Link } from "react-router-dom";
import {
  ChevronRight,
  Scroll,
  Search,
  Clock,
  Users,
} from "lucide-react";
import biographies from "../data/biographies";

export default function Home() {
  const available = biographies;
  const comingSoon = 3; // placeholder count for upcoming biographies

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800/50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sand-300/[0.03] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sand-300/20 bg-sand-300/[0.06] px-4 py-1.5 text-xs font-medium tracking-wide text-sand-300 uppercase">
            <Scroll className="h-3.5 w-3.5" />
            Authentic Biographical Accounts
          </div>
          <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Authentic
            <br />
            <span className="text-sand-300">Biographies</span>
          </h1>
          <p className="mx-auto max-w-lg text-lg leading-relaxed text-slate-400">
            Translating the biographies of the Salaf and those who followed them
            in goodness.
          </p>

          {/* Stats row */}
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-500 md:gap-12">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-sand-300/50" />
              <span>
                <span className="font-semibold text-slate-300">
                  {available.length}
                </span>{" "}
                {available.length === 1 ? "biography" : "biographies"}
              </span>
            </div>
            <div className="h-4 w-px bg-slate-800" />
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-sand-300/50" />
              <span>More coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Biography grid */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="mb-10 flex items-center gap-3">
          <h2 className="text-lg font-semibold text-white">
            All Biographies
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Available biographies */}
          {available.map((bio) => (
            <Link
              key={bio.slug}
              to={`/biography/${bio.slug}`}
              className="group relative rounded-2xl border border-slate-800/60 bg-slate-800/20 p-6 no-underline transition-all hover:border-sand-300/30 hover:bg-slate-800/40"
            >
              <div className="mb-4 flex flex-wrap gap-2">
                {bio.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-sand-300/[0.08] px-2.5 py-0.5 text-[11px] font-medium text-sand-300/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="mb-2 text-base font-semibold leading-snug text-white transition-colors group-hover:text-sand-300">
                {bio.name}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-400">
                {bio.summary}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">d. {bio.died}</span>
                <span className="flex items-center gap-1 text-xs font-medium text-sand-300/70 transition-colors group-hover:text-sand-300">
                  Read
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}

          {/* Coming soon placeholders */}
          {Array.from({ length: comingSoon }).map((_, i) => (
            <div
              key={`soon-${i}`}
              className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-800/60 p-6 text-center"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/40">
                <Scroll className="h-4 w-4 text-slate-600" />
              </div>
              <p className="text-sm font-medium text-slate-600">Coming soon</p>
              <p className="mt-1 text-xs text-slate-700">
                New biography in progress
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
