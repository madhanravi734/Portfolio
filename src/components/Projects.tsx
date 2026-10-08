import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ExternalLink, Github, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { TechIcon } from './TechIcons';
import { ProjectModal } from './ProjectModal';
import { ProjectScreenshot } from './ProjectScreenshots';

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'python' | 'mern'>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects (3)' },
    { id: 'python', label: 'Python & Django' },
    { id: 'mern', label: 'MERN Stack' }
  ];

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 border-t border-zinc-800/60 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-emerald-400 font-semibold font-mono">
              Featured Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight mt-1">
              Production Projects & Live Applications
            </h2>
            <p className="text-sm text-zinc-400 mt-2">
              Authentic applications engineered by Madhan Ravi with live deployed links, GitHub repositories, and verified full-stack architectures.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-lg text-xs">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-3 py-1.5 font-medium rounded-md transition-all whitespace-nowrap ${
                  selectedFilter === tab.id
                    ? 'bg-zinc-800 text-zinc-100 shadow-sm border border-zinc-700/80'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid (Clean 3-project layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isDjango = project.id === 'django-job-portal';

            return (
              <div
                key={project.id}
                className={`group bg-zinc-900/50 border rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-200 ${
                  isDjango
                    ? 'border-emerald-500/50 shadow-xl shadow-emerald-950/20'
                    : 'border-zinc-800 hover:border-zinc-700/80 hover:shadow-lg hover:shadow-black/30'
                }`}
              >
                <div>
                  {/* Clean Top Header above screenshot — NO overlapping badges covering screenshot content */}
                  <div className="px-4 py-2.5 bg-zinc-950 border-b border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-400 font-medium">
                      {project.category === 'python' ? 'Python / Django' : 'MERN Stack'}
                    </span>
                    {project.liveDemoUrl && (
                      <span className="text-emerald-400 flex items-center gap-1.5 font-medium text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live Demo</span>
                      </span>
                    )}
                  </div>

                  {/* Real Project Screenshot Frame — 100% Unobstructed */}
                  <div className="relative aspect-[16/10] bg-zinc-950 overflow-hidden border-b border-zinc-800/80 flex items-center justify-center">
                    <ProjectScreenshot type={project.screenshotType} title={project.name} />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1 font-medium line-clamp-1">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key features bullet points */}
                    <div className="space-y-1.5 pt-1">
                      <p className="text-xs font-semibold text-zinc-400 font-mono">Key Highlights:</p>
                      <ul className="space-y-1 text-xs text-zinc-300">
                        {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-1.5">
                            <span className="text-emerald-400 font-bold shrink-0">›</span>
                            <span className="line-clamp-2">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack badges */}
                    <div className="pt-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[10px] font-mono text-zinc-300 bg-zinc-950 border border-zinc-800 rounded flex items-center gap-1"
                          >
                            <TechIcon name={tech} className="w-3 h-3 text-emerald-400" />
                            <span>{tech}</span>
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="text-[10px] text-zinc-500 font-mono">
                            +{project.technologies.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions Bar */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1.5 text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors flex items-center gap-1 shadow-sm"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 text-xs font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-md transition-colors flex items-center gap-1.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    </div>

                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="text-xs font-mono text-zinc-400 hover:text-emerald-400 flex items-center gap-1 transition-colors py-1"
                    >
                      <span>Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
}
