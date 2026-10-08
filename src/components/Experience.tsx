import React from 'react';
import { WORK_EXPERIENCE, EDUCATION } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';
import { TechIcon } from './TechIcons';

export function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-zinc-800/60 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-wider text-emerald-400 font-semibold font-mono">
            Work Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight mt-1">
            Professional Experience & Education
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Industry internship experience applying Python, Django, REST APIs, and React in production workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Work Experience Timeline (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-base font-semibold text-zinc-300 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>Industry Internship</span>
            </h3>

            {WORK_EXPERIENCE.map((exp, index) => (
              <div
                key={index}
                className="relative pl-6 sm:pl-8 before:absolute before:left-2 before:top-3 before:bottom-0 before:w-px before:bg-zinc-800"
              >
                {/* Timeline node */}
                <span className="absolute left-[5px] top-2.5 w-2 h-2 rounded-full bg-emerald-400 ring-4 ring-zinc-950" />

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 sm:p-7 hover:border-zinc-700/80 transition-colors">
                  {/* Company & Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-800/80">
                    <div>
                      <h4 className="text-lg font-bold text-zinc-100">
                        {exp.role}
                      </h4>
                      <p className="text-emerald-400 font-medium text-sm">
                        {exp.company}
                      </p>
                    </div>

                    {/* Metadata - zero-pill text with separators */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{exp.duration}</span>
                      </span>
                      <span className="text-zinc-600" aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* High-level summary */}
                  <p className="text-sm text-zinc-300 my-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-2.5 my-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Key Responsibilities & Contributions:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-normal">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used (Clean unboxed tags) */}
                  <div className="pt-4 border-t border-zinc-800/80">
                    <p className="text-xs text-zinc-500 mb-2">Technologies utilized:</p>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-zinc-400 font-mono">
                      {exp.technologies.map((tech, tIdx) => (
                        <React.Fragment key={tech}>
                          <span className="hover:text-emerald-300 transition-colors flex items-center gap-1">
                            <TechIcon name={tech} className="w-3 h-3 text-emerald-500" />
                            {tech}
                          </span>
                          {tIdx < exp.technologies.length - 1 && (
                            <span className="text-zinc-700" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Education & Academic Background (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-base font-semibold text-zinc-300 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Academic Education</span>
            </h3>

            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700/80 transition-colors space-y-4"
              >
                <div>
                  <span className="text-xs font-mono text-emerald-400 font-medium">Undergraduate Degree</span>
                  <h4 className="text-lg font-bold text-zinc-100 mt-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-medium text-zinc-300 mt-0.5">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-zinc-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-zinc-500" />
                    <span>{edu.location}</span>
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80">
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {edu.summary}
                  </p>
                </div>

                <div className="pt-2 text-xs text-zinc-500 space-y-1">
                  <div className="flex items-center justify-between">
                    <span>Period</span>
                    <span className="text-zinc-300 font-mono">{edu.period}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>CGPA</span>
                    <span className="text-emerald-400 font-mono font-bold">{edu.cgpa}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Status</span>
                    <span className="text-emerald-400 font-mono">Graduated</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Recruiter quick take card */}
            <div className="bg-emerald-950/20 border border-emerald-900/50 rounded-xl p-5 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                Recruiter Quick Note
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Early-career engineer with verified 3 months full-stack internship experience and hands-on Python/Django & MERN stack project portfolio. Ready for immediate onboarding in Junior / SDE 1 roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
