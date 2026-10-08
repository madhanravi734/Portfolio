import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Github, CheckCircle2, Terminal } from 'lucide-react';
import { TechIcon } from './TechIcons';
import { ProjectScreenshot } from './ProjectScreenshots';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-zinc-950/95 backdrop-blur-md px-6 py-4 border-b border-zinc-800 flex items-center justify-between z-10">
          <div>
            <h3 className="text-xl font-bold text-zinc-100">{project.name}</h3>
            <p className="text-xs text-zinc-400 mt-0.5">{project.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 rounded-md transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Project Screenshot Frame */}
          <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-lg">
            <ProjectScreenshot type={project.screenshotType} title={project.name} />
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-sm font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-sm font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-md transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono font-semibold text-emerald-400">
              Overview
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-2.5">
            <h4 className="text-xs uppercase font-mono font-semibold text-emerald-400">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono text-zinc-300 bg-zinc-900/90 border border-zinc-800 rounded-md flex items-center gap-1.5"
                >
                  <TechIcon name={tech} className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-2.5">
            <h4 className="text-xs uppercase font-mono font-semibold text-emerald-400">
              Production Features & Implementations
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-zinc-900/40 p-2.5 rounded-lg border border-zinc-800/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Details */}
          {project.architectureNotes && (
            <div className="space-y-4 pt-4 border-t border-zinc-800">
              <h4 className="text-xs uppercase font-mono font-semibold text-emerald-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>Architecture & Backend Design</span>
              </h4>

              {project.architectureNotes.roleArchitecture && (
                <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs">
                  <span className="font-semibold text-zinc-200">Role Structure: </span>
                  <span className="text-zinc-400">{project.architectureNotes.roleArchitecture}</span>
                </div>
              )}

              {project.architectureNotes.databaseDesign && (
                <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs">
                  <span className="font-semibold text-zinc-200">Database Schema: </span>
                  <span className="text-zinc-400">{project.architectureNotes.databaseDesign}</span>
                </div>
              )}

              {project.architectureNotes.endpoints && (
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-zinc-300">Sample REST Endpoints:</p>
                  <div className="space-y-1.5 font-mono text-xs">
                    {project.architectureNotes.endpoints.map((ep, idx) => (
                      <div key={idx} className="p-2 rounded bg-zinc-900/90 border border-zinc-800 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 truncate">
                          <span className={`px-1.5 py-0.5 text-[10px] font-bold rounded ${
                            ep.method === 'GET' ? 'bg-blue-950 text-blue-400 border border-blue-800' :
                            ep.method === 'POST' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' :
                            ep.method === 'PUT' ? 'bg-amber-950 text-amber-400 border border-amber-800' :
                            'bg-red-950 text-red-400 border border-red-800'
                          }`}>
                            {ep.method}
                          </span>
                          <span className="text-zinc-200 truncate">{ep.path}</span>
                        </div>
                        <span className="text-[11px] text-zinc-500 hidden sm:inline text-right">{ep.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-zinc-950 border-t border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-md transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
