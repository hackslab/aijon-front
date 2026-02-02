import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 p-4 font-sans text-zinc-100 selection:bg-indigo-500/30">
      <div className="relative w-full max-w-lg text-center">
        {/* Glow Effects */}
        <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-indigo-500/10 blur-[80px]"></div>
        <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-purple-500/10 blur-[80px]"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-neutral-900/50 shadow-2xl shadow-indigo-500/10 ring-1 ring-white/10 backdrop-blur-xl">
            <FileQuestion
              className="h-10 w-10 text-indigo-400"
              strokeWidth={1.5}
            />
          </div>

          <h1 className="mb-2 text-6xl font-black tracking-tight text-white sm:text-8xl">
            404
          </h1>

          <h2 className="mb-4 text-2xl font-bold text-zinc-200">
            Page Not Found
          </h2>

          <p className="mb-10 text-zinc-400 max-w-sm mx-auto leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have
            been removed, renamed, or doesn't exist.
          </p>

          <Link
            href="/"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.02] hover:shadow-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
          >
            <span className="relative z-10 flex items-center gap-2">
              Go back home
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
