import React from 'react';
import { Eye, Plus } from 'lucide-react';

interface ProjectScreenshotProps {
  type: 'job-portal' | 'chatz' | 'thinkboard';
  title: string;
}

export function ProjectScreenshot({ type, title }: ProjectScreenshotProps) {
  // 1. Django Job Portal (Exact screenshot uploaded by user)
  if (type === 'job-portal') {
    return (
      <div className="w-full h-full min-h-[220px] sm:min-h-[250px] bg-white text-zinc-900 select-none flex flex-col justify-between overflow-hidden relative font-sans shadow-inner">
        {/* Browser Top Navbar matching user's Job Portal screenshot */}
        <div className="w-full px-5 py-2.5 border-b border-slate-200 flex items-center justify-between bg-white shrink-0">
          <div className="text-base font-bold text-blue-600 tracking-tight">
            Job Portal
          </div>
          <div className="text-xs font-medium text-slate-700 hover:text-blue-600">
            Login
          </div>
        </div>

        {/* Hero Section matching user's exact uploaded screenshot */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-6 max-w-xl mx-auto my-auto space-y-2.5">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Find Your Next <span className="text-blue-600 font-extrabold">Opportunity</span>
          </h2>
          <p className="text-[11px] sm:text-xs text-slate-600 max-w-md leading-relaxed">
            Discover job opportunities, apply for positions, and connect with companies looking for talented people.
          </p>

          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-md shadow-sm">
              Create Account
            </span>
            <span className="px-4 py-1.5 text-xs font-semibold text-blue-600 bg-white border border-blue-600 rounded-md shadow-sm">
              Login
            </span>
          </div>
        </div>

        {/* Bottom subtle watermark label */}
        <div className="w-full px-4 py-1 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
          <span>django-job-portal · PostgreSQL (Neon)</span>
          <span className="text-emerald-600 font-medium">Django REST Framework</span>
        </div>
      </div>
    );
  }

  // 2. Chatz (Exact screenshot uploaded by user with Thinkboard Chat header, purple dot, testuser2)
  if (type === 'chatz') {
    return (
      <div className="w-full h-full min-h-[220px] sm:min-h-[250px] bg-[#141518] text-white select-none flex flex-col justify-center items-center px-4 py-3 relative overflow-hidden font-sans">
        {/* Thinkboard Chat Card matching user's exact uploaded screenshot with clean margin */}
        <div className="w-full max-w-[260px] bg-[#24262b] border border-[#34373e] rounded-xl p-4 shadow-2xl space-y-3 relative z-10 my-auto">
          {/* Header with purple dot and Thinkboard Chat label */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-sm" />
            <span className="text-xs font-semibold text-zinc-200">Thinkboard Chat</span>
          </div>

          <div className="space-y-2.5">
            <h3 className="text-base font-bold text-white tracking-tight">Login</h3>

            {/* Input 1: username matching screenshot "testuser2" */}
            <div className="w-full px-3 py-1.5 rounded-lg bg-[#ebf1fb] text-slate-800 text-xs font-medium border border-slate-300">
              testuser2
            </div>

            {/* Input 2: password masked dots with eye icon */}
            <div className="w-full px-3 py-1.5 rounded-lg bg-[#ebf1fb] text-slate-800 text-xs font-medium border border-slate-300 flex items-center justify-between">
              <span className="tracking-widest font-mono text-xs">••••</span>
              <Eye className="w-3.5 h-3.5 text-slate-700" />
            </div>

            {/* Login button matching user's screenshot */}
            <button className="w-full py-1.5 px-3 rounded-lg bg-[#5364f3] text-white text-xs font-semibold shadow-md">
              Login
            </button>

            {/* Subtext matching user's screenshot */}
            <div className="text-[10px] text-center text-zinc-400">
              No account? <span className="text-indigo-400 font-medium">Register</span>
            </div>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
      </div>
    );
  }

  // 3. Thinkboard — MERN Notes App (EXACT screenshot uploaded by user: ThinkBoard green logo, + New Note pill, No notes yet)
  return (
    <div className="w-full h-full min-h-[220px] sm:min-h-[250px] bg-black text-white select-none flex flex-col justify-between overflow-hidden relative font-sans border-t border-zinc-900">
      {/* Top Navbar matching exact screenshot - completely unobstructed */}
      <div className="w-full px-4 py-2.5 flex items-center justify-between bg-black shrink-0 border-b border-zinc-900/60">
        <div className="text-base font-bold text-[#22c55e] tracking-tight">
          ThinkBoard
        </div>
        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#22c55e] text-zinc-950 font-bold text-xs shadow-sm">
          <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>New Note</span>
        </div>
      </div>

      {/* Main Empty State Content matching exact screenshot */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-3 space-y-2 my-auto">
        <span className="text-[10px] text-[#22c55e]/80 font-mono tracking-wide">
          Loading Notes...
        </span>

        {/* Notebook Icon Circle */}
        <div className="w-12 h-12 rounded-full bg-[#0a2316] border border-[#166534] flex items-center justify-center text-[#22c55e] shadow-lg shadow-emerald-950/40 my-0.5">
          <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
            <path d="M6 6h10" />
            <path d="M6 10h10" />
            <path d="M6 14h10" />
            <line x1="2" y1="4" x2="6" y2="4" />
            <line x1="2" y1="8" x2="6" y2="8" />
            <line x1="2" y1="12" x2="6" y2="12" />
            <line x1="2" y1="16" x2="6" y2="16" />
          </svg>
        </div>

        {/* Headings matching exact screenshot */}
        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
          No notes yet
        </h3>
        <p className="text-[11px] text-zinc-400 max-w-xs leading-relaxed">
          Ready to organize your thoughts? Create your first note to get started on your journey.
        </p>

        {/* Green pill button matching exact screenshot */}
        <div className="pt-0.5">
          <span className="px-4 py-1.5 text-xs font-bold text-zinc-950 bg-[#22c55e] rounded-full shadow-md inline-block">
            Create Your First Note
          </span>
        </div>
      </div>

      {/* Subtle bottom tag */}
      <div className="w-full px-4 py-1 bg-zinc-950/80 border-t border-zinc-900 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
        <span>thinkboard-rho.vercel.app · MongoDB (Mongoose)</span>
        <span className="text-[#22c55e] font-medium">Upstash Redis</span>
      </div>
    </div>
  );
}
