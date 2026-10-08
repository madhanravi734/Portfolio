import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, FileText, Github, Mail, MapPin, GraduationCap, Briefcase, ExternalLink, Code2, Terminal, Check } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const [activeCodeTab, setActiveCodeTab] = useState<'django' | 'serializer' | 'postgres'>('django');
  const [copiedCurl, setCopiedCurl] = useState(false);

  const handleCopyCurl = () => {
    navigator.clipboard.writeText(`curl -X GET https://django-job-portal-6ttmskzcb-madhanravi734.vercel.app/api/jobs/`);
    setCopiedCurl(true);
    setTimeout(() => setCopiedCurl(false), 2000);
  };

  return (
    <section id="home" className="pt-28 pb-16 sm:pt-36 sm:pb-24 max-w-6xl mx-auto px-4 sm:px-6 relative">
      {/* Background radial gradient accent */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Bio & Core Messaging */}
        <div className="lg:col-span-7 space-y-6">
          {/* Metadata banner: clean unboxed text with typographic separators */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-zinc-400 font-medium">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Chennai - 600062</span>
            </span>
            <span className="text-zinc-600" aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>BCA (CGPA: 7.8/10)</span>
            </span>
            <span className="text-zinc-600" aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Briefcase className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Full Stack Intern (Marzelet)</span>
            </span>
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-100 tracking-tight leading-[1.1]">
              MADHAN RAVI
            </h1>
            <p className="mt-2 text-xl sm:text-2xl font-semibold text-emerald-400">
              Python Backend Developer & Full Stack Developer
            </p>
          </div>

          <p className="text-base sm:text-lg text-zinc-200 font-medium leading-relaxed">
            Building reliable backend systems and modern full-stack web applications.
          </p>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
            Software developer with hands-on experience building backend systems with Python and Django,
            REST APIs, PostgreSQL, and modern full-stack applications using React.js and the MERN stack.
          </p>

          {/* Suitable roles metadata */}
          <div className="pt-1">
            <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-2">
              Open to Roles
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-300">
              {PERSONAL_INFO.suitableRoles.map((role, idx) => (
                <React.Fragment key={role}>
                  <span className="hover:text-emerald-300 transition-colors">{role}</span>
                  {idx < PERSONAL_INFO.suitableRoles.length - 1 && (
                    <span className="text-zinc-600" aria-hidden="true">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="px-5 py-2.5 text-sm font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors shadow-sm flex items-center gap-1.5"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="px-4 py-2.5 text-sm font-medium text-zinc-100 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 rounded-md transition-colors flex items-center gap-2 hover:border-zinc-500"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>View Resume</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-zinc-100 bg-zinc-900/80 hover:bg-zinc-800/80 border border-zinc-800 rounded-md transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4 text-zinc-400" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-zinc-500" />
            </a>

            <a
              href="#contact"
              className="px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-zinc-100 bg-transparent hover:bg-zinc-900 border border-zinc-800/80 rounded-md transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-zinc-400" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Developer Terminal / Code Sandbox Anchor */}
        <div className="lg:col-span-5">
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm">
            {/* Window titlebar */}
            <div className="px-4 py-3 bg-zinc-950/80 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                  backend_architecture.py
                </span>
              </div>
              <button
                onClick={handleCopyCurl}
                className="text-xs font-mono text-zinc-400 hover:text-emerald-300 flex items-center gap-1 transition-colors px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800"
                title="Copy curl command"
              >
                {copiedCurl ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Code2 className="w-3 h-3 text-zinc-400" />
                    <span>Copy curl</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Tabs */}
            <div className="flex items-center gap-1 px-3 pt-2 bg-zinc-950/40 border-b border-zinc-800/80 text-xs font-mono">
              <button
                onClick={() => setActiveCodeTab('django')}
                className={`px-3 py-1.5 rounded-t-md transition-colors ${
                  activeCodeTab === 'django'
                    ? 'bg-zinc-900 text-emerald-400 border-t border-x border-zinc-800 font-semibold'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                views.py
              </button>
              <button
                onClick={() => setActiveCodeTab('serializer')}
                className={`px-3 py-1.5 rounded-t-md transition-colors ${
                  activeCodeTab === 'serializer'
                    ? 'bg-zinc-900 text-emerald-400 border-t border-x border-zinc-800 font-semibold'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                serializers.py
              </button>
              <button
                onClick={() => setActiveCodeTab('postgres')}
                className={`px-3 py-1.5 rounded-t-md transition-colors ${
                  activeCodeTab === 'postgres'
                    ? 'bg-zinc-900 text-emerald-400 border-t border-x border-zinc-800 font-semibold'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                schema.sql
              </button>
            </div>

            {/* Code Body */}
            <div className="p-4 font-mono text-xs overflow-x-auto leading-relaxed max-h-[360px] bg-zinc-950/60">
              {activeCodeTab === 'django' && (
                <pre className="text-zinc-300">
                  <span className="text-zinc-500"># Django REST Framework ViewSet</span>{'\n'}
                  <span className="text-purple-400">from</span> rest_framework <span className="text-purple-400">import</span> viewsets, permissions, status{'\n'}
                  <span className="text-purple-400">from</span> rest_framework.response <span className="text-purple-400">import</span> Response{'\n'}
                  <span className="text-purple-400">from</span> .models <span className="text-purple-400">import</span> JobListing, Application{'\n'}
                  <span className="text-purple-400">from</span> .serializers <span className="text-purple-400">import</span> JobSerializer{'\n\n'}
                  <span className="text-blue-400">class</span> <span className="text-yellow-300">JobViewSet</span>(viewsets.ModelViewSet):{'\n'}
                  {'    '}queryset = JobListing.objects.select_related(<span className="text-emerald-300">'recruiter'</span>){'\n'}
                  {'    '}serializer_class = JobSerializer{'\n'}
                  {'    '}permission_classes = [permissions.IsAuthenticatedOrReadOnly]{'\n\n'}
                  {'    '}<span className="text-blue-400">def</span> <span className="text-yellow-300">perform_create</span>(self, serializer):{'\n'}
                  {'        '}serializer.save(recruiter=self.request.user){'\n\n'}
                  {'    '}<span className="text-blue-400">def</span> <span className="text-yellow-300">get_queryset</span>(self):{'\n'}
                  {'        '}role = self.request.query_params.get(<span className="text-emerald-300">'role'</span>){'\n'}
                  {'        '}<span className="text-purple-400">if</span> role == <span className="text-emerald-300">'candidate'</span>:{'\n'}
                  {'            '}<span className="text-purple-400">return</span> self.queryset.filter(is_active=<span className="text-cyan-400">True</span>){'\n'}
                  {'        '}<span className="text-purple-400">return</span> self.queryset
                </pre>
              )}

              {activeCodeTab === 'serializer' && (
                <pre className="text-zinc-300">
                  <span className="text-zinc-500"># DRF ModelSerializer with nested validation</span>{'\n'}
                  <span className="text-purple-400">from</span> rest_framework <span className="text-purple-400">import</span> serializers{'\n'}
                  <span className="text-purple-400">from</span> .models <span className="text-purple-400">import</span> JobListing, Application{'\n\n'}
                  <span className="text-blue-400">class</span> <span className="text-yellow-300">JobSerializer</span>(serializers.ModelSerializer):{'\n'}
                  {'    '}recruiter_name = serializers.ReadOnlyField(source=<span className="text-emerald-300">'recruiter.username'</span>){'\n'}
                  {'    '}applicant_count = serializers.IntegerField(read_only=<span className="text-cyan-400">True</span>){'\n\n'}
                  {'    '}<span className="text-blue-400">class</span> <span className="text-yellow-300">Meta</span>:{'\n'}
                  {'        '}model = JobListing{'\n'}
                  {'        '}fields = [<span className="text-emerald-300">'id'</span>, <span className="text-emerald-300">'title'</span>, <span className="text-emerald-300">'company'</span>, <span className="text-emerald-300">'location'</span>, <span className="text-emerald-300">'recruiter_name'</span>, <span className="text-emerald-300">'applicant_count'</span>]{'\n\n'}
                  {'    '}<span className="text-blue-400">def</span> <span className="text-yellow-300">validate_title</span>(self, value):{'\n'}
                  {'        '}<span className="text-purple-400">if</span> len(value.strip()) &lt; 3:{'\n'}
                  {'            '}<span className="text-purple-400">raise</span> serializers.ValidationError(<span className="text-emerald-300">"Title must be at least 3 characters."</span>){'\n'}
                  {'        '}<span className="text-purple-400">return</span> value
                </pre>
              )}

              {activeCodeTab === 'postgres' && (
                <pre className="text-zinc-300">
                  <span className="text-zinc-500">-- PostgreSQL Relational Schema</span>{'\n'}
                  <span className="text-blue-400">CREATE TABLE</span> job_listings ({'\n'}
                  {'    '}id <span className="text-yellow-300">BIGSERIAL PRIMARY KEY</span>,{'\n'}
                  {'    '}title <span className="text-yellow-300">VARCHAR(255) NOT NULL</span>,{'\n'}
                  {'    '}company <span className="text-yellow-300">VARCHAR(255) NOT NULL</span>,{'\n'}
                  {'    '}recruiter_id <span className="text-yellow-300">BIGINT REFERENCES</span> auth_user(id),{'\n'}
                  {'    '}is_active <span className="text-yellow-300">BOOLEAN DEFAULT TRUE</span>,{'\n'}
                  {'    '}created_at <span className="text-yellow-300">TIMESTAMPTZ DEFAULT NOW()</span>{'\n'}
                  );{'\n\n'}
                  <span className="text-blue-400">CREATE INDEX</span> idx_job_active <span className="text-blue-400">ON</span> job_listings(is_active);
                </pre>
              )}
            </div>

            {/* Bottom mini status bar */}
            <div className="px-4 py-2 bg-zinc-950 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Django REST Framework · PostgreSQL</span>
              </span>
              <span>Python 3.x</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
