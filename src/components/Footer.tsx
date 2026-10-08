import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Code2, FileText, Mail, ArrowUp, Inbox } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
  onOpenInbox: () => void;
}

export function Footer({ onOpenResume, onOpenInbox }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          {/* Left: Branding */}
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-lg font-bold text-zinc-100">
              {PERSONAL_INFO.name}
            </h4>
            <p className="text-xs text-zinc-400 font-medium">
              Python Backend Developer | Full Stack Developer
            </p>
            <p className="text-[11px] text-zinc-500 font-mono">
              Chennai - 600062, India · BCA Graduate
            </p>
          </div>

          {/* Center / Right: Social Links with text */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Code2 className="w-4 h-4" />
              <span>LeetCode</span>
            </a>

            <button
              onClick={onOpenResume}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>

            <button
              onClick={onOpenInbox}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              title="Admin Message Inbox"
            >
              <Inbox className="w-4 h-4" />
              <span>Inbox</span>
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Right: Scroll to top */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors flex items-center gap-1 text-xs"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-mono">
          <p>© 2026 Madhan Ravi. All rights reserved.</p>
          <p>Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
