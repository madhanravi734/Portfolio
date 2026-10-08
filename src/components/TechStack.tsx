import React, { useState } from 'react';
import { TECH_STACK_CATEGORIES } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import { Layers, Database, Server, Wrench, ShieldCheck, Check } from 'lucide-react';

export function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'Backend Development', label: 'Backend' },
    { id: 'Frontend Engineering', label: 'Frontend' },
    { id: 'Databases & Storage', label: 'Databases' },
    { id: 'DevOps & Developer Tools', label: 'DevOps & Tools' },
    { id: 'Core Concepts & Practices', label: 'Core Concepts' }
  ];

  const filteredCategories = selectedCategory === 'all'
    ? TECH_STACK_CATEGORIES
    : TECH_STACK_CATEGORIES.filter(c => c.title === selectedCategory);

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Backend Development':
        return Server;
      case 'Frontend Engineering':
        return Layers;
      case 'Databases & Storage':
        return Database;
      case 'DevOps & Developer Tools':
        return Wrench;
      default:
        return ShieldCheck;
    }
  };

  return (
    <section id="tech-stack" className="py-20 border-t border-zinc-800/60 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-emerald-400 font-semibold font-mono">
              Skills & Stack
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight mt-1">
              Complete Technical Stack
            </h2>
            <p className="text-sm text-zinc-400 mt-2">
              Pragmatic tools and frameworks used across backend APIs, relational databases, and full-stack applications.
            </p>
          </div>

          {/* Interactive filter controls - allowed per frontend-design skill */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-lg text-xs">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 font-medium rounded-md transition-all whitespace-nowrap ${
                  selectedCategory === tab.id
                    ? 'bg-zinc-800 text-zinc-100 shadow-sm border border-zinc-700/80'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const CatIcon = getCategoryIcon(category.title);
            const isBackend = category.title === 'Backend Development';

            return (
              <div
                key={category.title}
                className={`bg-zinc-900/40 border rounded-xl p-6 transition-all ${
                  isBackend
                    ? 'border-emerald-500/40 bg-zinc-900/60 shadow-lg shadow-emerald-950/20'
                    : 'border-zinc-800 hover:border-zinc-700/80'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-zinc-800/80">
                  <div className={`p-2 rounded-md ${isBackend ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/50' : 'bg-zinc-950 text-zinc-300 border border-zinc-800'}`}>
                    <CatIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
                      <span>{category.title}</span>
                      {isBackend && (
                        <span className="text-[10px] font-mono text-emerald-400 font-normal">Primary</span>
                      )}
                    </h3>
                    <p className="text-[11px] text-zinc-400 leading-tight mt-0.5 line-clamp-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills list */}
                <div className="grid grid-cols-2 gap-2.5 pt-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-lg bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 flex items-center gap-2.5 transition-colors group"
                    >
                      <div className="text-zinc-400 group-hover:text-emerald-400 transition-colors">
                        <TechIcon name={skill.name} className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-medium text-zinc-200 group-hover:text-zinc-100 truncate">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Backend & Full Stack Competency Note */}
        <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
          <div className="flex items-center gap-2 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-semibold text-zinc-200">Architecture Specialization:</span>
            <span>REST API design with Python/Django & DRF, PostgreSQL schemas, and React integration.</span>
          </div>
          <span className="font-mono text-zinc-500 whitespace-nowrap">Production Ready · Clean Code</span>
        </div>
      </div>
    </section>
  );
}
