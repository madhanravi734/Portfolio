import React from 'react';
import { ABOUT_TEXT, PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, Database, Server, Layers, CheckCircle2 } from 'lucide-react';
import { LeetCodeWidget } from './LeetCodeWidget';

export function About() {
  const coreStrengths = [
    {
      title: "Backend & RESTful Architecture",
      desc: "Structuring clean Django REST Framework and Express APIs with proper status codes, payload validation, and JWT authentication.",
      icon: Server
    },
    {
      title: "Relational & Document Databases",
      desc: "Schema modeling and query integration using PostgreSQL (Neon) for relational structures and MongoDB for document collections.",
      icon: Database
    },
    {
      title: "Full-Stack System Integration",
      desc: "Connecting React.js and Next.js frontends to backend services, handling asynchronous states, and resolving cross-stack integration bugs.",
      icon: Layers
    },
    {
      title: "Developer Workflow & Tooling",
      desc: "Version control with Git/GitHub, containerization with Docker & Docker Compose, and rigorous endpoint testing using Postman.",
      icon: Terminal
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-zinc-800/60 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="space-y-12">
        {/* Top Split: Narrative & Profile Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Section Header */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs uppercase tracking-wider text-emerald-400 font-semibold font-mono">
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
              Pragmatic Engineering & Real Development Experience
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Focused on reliable server-side architecture, relational database integrity, and practical full-stack applications.
            </p>

            {/* Quick Profile Summary - Zero-pill discipline */}
            <div className="pt-4 border-t border-zinc-800/80 space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-center justify-between py-1 border-b border-zinc-900">
                <span className="text-zinc-500">Degree</span>
                <span className="text-zinc-200 font-medium">BCA (Bachelor of Computer Application)</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-zinc-900">
                <span className="text-zinc-500">College</span>
                <span className="text-zinc-200 font-medium">Sindhi College of Arts & Science</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-zinc-900">
                <span className="text-zinc-500">Academic CGPA</span>
                <span className="text-emerald-400 font-mono font-bold">{PERSONAL_INFO.cgpa}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-zinc-900">
                <span className="text-zinc-500">Location</span>
                <span className="text-zinc-200 font-medium">Chennai - 600062, India</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-zinc-900">
                <span className="text-zinc-500">Experience</span>
                <span className="text-zinc-200 font-medium">Marzelet Info Technology (Intern)</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-zinc-500">Core Focus</span>
                <span className="text-emerald-400 font-medium">Python, Django, PostgreSQL, React</span>
              </div>
            </div>
          </div>

          {/* Right side narrative + core technical strengths */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-6 sm:p-8 space-y-5">
              <p className="text-base text-zinc-200 leading-relaxed">
                {ABOUT_TEXT.intro}
              </p>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {ABOUT_TEXT.mission}
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {ABOUT_TEXT.workEthic}
              </p>
            </div>

            {/* Strengths grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreStrengths.map((strength) => {
                const Icon = strength.icon;
                return (
                  <div
                    key={strength.title}
                    className="p-5 rounded-lg bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="p-2 rounded-md bg-zinc-950 border border-zinc-800 text-emerald-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-semibold text-zinc-200">
                        {strength.title}
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {strength.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Live LeetCode Solved Stats Widget on About Page */}
        <div className="pt-4">
          <LeetCodeWidget />
        </div>
      </div>
    </section>
  );
}
