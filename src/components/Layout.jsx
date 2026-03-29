import { Link, Outlet } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col">
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#0F172A]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2.5 no-underline">
            <BookOpen className="h-5 w-5 text-sand-300" />
            <span className="text-sm font-semibold tracking-wide text-slate-100">
              Authentic Biographies
            </span>
          </Link>
        </div>
      </header>

      <div className="flex-1">
        <Outlet />
      </div>

      <footer className="border-t border-slate-800/60 py-8">
        <div className="mx-auto max-w-[72ch] px-6 text-center">
          <p className="text-xs text-slate-500">
            Authentic Biographies &middot; Translating the biographies of the Salaf and those who followed them in goodness
          </p>
        </div>
      </footer>
    </div>
  );
}
