import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, Printer, Download, Copy, Check, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'pdf' | 'dark'>('pdf');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const generatePlainTextResume = () => {
    return `Madhan Ravi
Chennai - 600062 | 9003140522 | madhanravi734@gmail.com
github.com/madhanravi734 | linkedin.com/in/madhanravi | leetcode.com/u/Madhan_ravi

SUMMARY
Full-stack developer with hands-on experience shipping production features across React.js, Next.js, TypeScript, the MERN stack (MongoDB, Express.js, Node.js), Django, and PostgreSQL. Builds REST APIs with JWT authentication, role-based permissions, and rate limiting, and deploys full applications live using Vercel, Render, and Neon PostgreSQL.

TECHNICAL SKILLS
Languages: JavaScript, TypeScript, Python, SQL, Java, HTML/CSS
Frontend: React.js, Next.js, Tailwind CSS
Backend: Node.js, Express.js, Django, Django REST Framework, PyQt5
Databases: MongoDB (Mongoose), PostgreSQL (Neon), SQLite
Cloud & DevOps: Vercel, Render, Docker, Docker Compose, Upstash Redis
Tools & Practices: Git, GitHub, Postman, Swagger/OpenAPI, JWT Auth, REST API Design, Rate Limiting
Core Concepts: OOP, Data Structures & Algorithms, CRUD Architecture, Role-Based Access Control

EXPERIENCE
Full Stack Developer Intern (July 2026 - Present)
Marzelet Info Technology Pvt Ltd — Chennai, Tamil Nadu
• Built and shipped production-facing UI components using React.js, Next.js, TypeScript, and Tailwind CSS, working directly within a live codebase under senior engineer review.
• Designed and implemented RESTful APIs using Python, Django, and Django REST Framework to connect frontend and backend systems for live product features.
• Queried, modeled, and persisted application data in PostgreSQL, contributing to schema design decisions for new features.
• Debugged issues spanning frontend, backend, and API layers, improving reliability of production-grade code before release.
• Collaborated using Git-based version control and team code-review workflows, following industry-standard software engineering practices.

PROJECTS
Thinkboard - MERN Notes App (September 2026)
MongoDB, Express.js, React.js, Node.js, Upstash Redis | GitHub: https://github.com/madhanravi734/Thinkboard | Live Demo: https://thinkboard-rho.vercel.app/
• Built a full-stack MERN note-taking app enabling users to create, edit, and delete notes in real time, with a REST API built on Express.js and Node.js backed by MongoDB and Mongoose.
• Prevented API abuse and protected backend stability by implementing request rate limiting with Upstash Redis across all note endpoints.
• Delivered a fully responsive UI and deployed the application live on Vercel, making the project independently testable without local setup.

Django Job Portal (August - September 2026)
Python, Django, DRF, PostgreSQL (Neon), Docker, Postman, HTML/CSS | GitHub: https://github.com/madhanravi734/django-job-portal | Live Demo: https://django-job-portal-6ttmskzcb-madhanravi734.vercel.app/
• Eliminated duplicate and unauthorized job applications by enforcing database-level uniqueness constraints and ownership checks, across a role-based portal spanning 4 core Django apps (profiles, postings, applications, resumes).
• Secured and scaled the API layer by implementing JWT authentication and role-based permissions across all endpoints, adding pagination, search, filtering, and ordering; validated every endpoint using Postman before release.
• Enabled one-command environment setup and consistent deployments by containerizing the full stack with Docker and Docker Compose, and shipped interactive Swagger/OpenAPI + ReDoc API documentation; later made the project publicly testable end-to-end by deploying to Vercel with a Neon serverless PostgreSQL database.

EDUCATION
Bachelor of Computer Application (Oct 2021 - May 2024)
Sindhi College of Arts and Science | CGPA: 7.8/10 — Chennai, Tamil Nadu
`;
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(generatePlainTextResume());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    const element = document.createElement("a");
    const file = new Blob([generatePlainTextResume()], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Madhan_Ravi_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-4xl w-full max-h-[94vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="px-5 py-3.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <h3 className="text-sm sm:text-base font-bold text-zinc-100 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Resume — Madhan Ravi</span>
            </h3>

            {/* View Mode Toggle */}
            <div className="flex items-center p-0.5 bg-zinc-950 rounded-lg border border-zinc-800 text-xs">
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-2.5 py-1 rounded-md transition-all font-mono text-[11px] ${
                  viewMode === 'pdf' ? 'bg-zinc-800 text-zinc-100 shadow-sm' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                PDF Sheet View
              </button>
              <button
                onClick={() => setViewMode('dark')}
                className={`px-2.5 py-1 rounded-md transition-all font-mono text-[11px] ${
                  viewMode === 'dark' ? 'bg-zinc-800 text-zinc-100 shadow-sm' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Dark Theme
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-2.5 py-1.5 text-xs text-zinc-300 hover:text-zinc-100 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors flex items-center gap-1.5 border border-zinc-700"
              title="Copy plain text for job applications"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadTxt}
              className="px-2.5 py-1.5 text-xs text-zinc-300 hover:text-zinc-100 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors flex items-center gap-1.5 border border-zinc-700"
              title="Download Resume as Text file"
            >
              <Download className="w-3.5 h-3.5 text-zinc-400" />
              <span className="hidden sm:inline">Download TXT</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors flex items-center gap-1.5 shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-md transition-colors ml-1"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Container */}
        <div className="p-3 sm:p-6 overflow-y-auto flex-1 bg-zinc-950/80">
          {viewMode === 'pdf' ? (
            /* EXACT PDF REPLICA VIEW (Matches user's uploaded PDF) */
            <div className="bg-white text-zinc-900 rounded-lg p-6 sm:p-10 max-w-3xl mx-auto shadow-2xl font-sans text-xs sm:text-[13px] leading-normal border border-zinc-300 select-text">
              {/* Header */}
              <div className="text-center space-y-1.5 pb-4 border-b border-zinc-800">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight">
                  Madhan Ravi
                </h1>
                <div className="text-xs text-zinc-700 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
                  <span>Chennai - 600062</span>
                  <span>|</span>
                  <span className="font-medium">9003140522</span>
                  <span>|</span>
                  <a href="mailto:madhanravi734@gmail.com" className="text-blue-700 hover:underline">
                    madhanravi734@gmail.com
                  </a>
                </div>
                <div className="text-xs text-zinc-600 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
                  <a href="https://github.com/madhanravi734" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                    github.com/madhanravi734
                  </a>
                  <span>|</span>
                  <a href="https://linkedin.com/in/madhanravi" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                    linkedin.com/in/madhanravi
                  </a>
                  <span>|</span>
                  <a href="https://leetcode.com/u/Madhan_ravi" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                    leetcode.com/u/Madhan_ravi
                  </a>
                </div>
              </div>

              {/* SUMMARY */}
              <div className="pt-3 space-y-1">
                <h2 className="text-xs font-bold uppercase tracking-wider text-blue-950 border-b border-zinc-800 pb-0.5">
                  SUMMARY
                </h2>
                <p className="text-zinc-800 leading-relaxed text-justify">
                  Full-stack developer with hands-on experience shipping production features across React.js, Next.js, TypeScript, the MERN stack (MongoDB, Express.js, Node.js), Django, and PostgreSQL. Builds REST APIs with JWT authentication, role-based permissions, and rate limiting, and deploys full applications live using Vercel, Render, and Neon PostgreSQL.
                </p>
              </div>

              {/* TECHNICAL SKILLS */}
              <div className="pt-3 space-y-1">
                <h2 className="text-xs font-bold uppercase tracking-wider text-blue-950 border-b border-zinc-800 pb-0.5">
                  TECHNICAL SKILLS
                </h2>
                <div className="space-y-0.5 text-zinc-800">
                  <p><strong className="text-zinc-950">Languages:</strong> JavaScript, TypeScript, Python, SQL, Java, HTML/CSS</p>
                  <p><strong className="text-zinc-950">Frontend:</strong> React.js, Next.js, Tailwind CSS</p>
                  <p><strong className="text-zinc-950">Backend:</strong> Node.js, Express.js, Django, Django REST Framework, PyQt5</p>
                  <p><strong className="text-zinc-950">Databases:</strong> MongoDB (Mongoose), PostgreSQL (Neon), SQLite</p>
                  <p><strong className="text-zinc-950">Cloud & DevOps:</strong> Vercel, Render, Docker, Docker Compose, Upstash Redis</p>
                  <p><strong className="text-zinc-950">Tools & Practices:</strong> Git, GitHub, Postman, Swagger/OpenAPI, JWT Auth, REST API Design, Rate Limiting</p>
                  <p><strong className="text-zinc-950">Core Concepts:</strong> OOP, Data Structures & Algorithms, CRUD Architecture, Role-Based Access Control</p>
                </div>
              </div>

              {/* EXPERIENCE */}
              <div className="pt-3 space-y-1.5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-blue-950 border-b border-zinc-800 pb-0.5">
                  EXPERIENCE
                </h2>
                <div className="space-y-1">
                  <div className="flex items-center justify-between font-bold text-zinc-950">
                    <span>Full Stack Developer Intern</span>
                    <span className="font-normal text-zinc-700 italic">July 2026 - Present</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-700 italic">
                    <span>Marzelet Info Technology Pvt Ltd</span>
                    <span>Chennai, Tamil Nadu</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-zinc-800 text-justify pt-0.5">
                    <li>Built and shipped production-facing UI components using React.js, Next.js, TypeScript, and Tailwind CSS, working directly within a live codebase under senior engineer review.</li>
                    <li>Designed and implemented RESTful APIs using Python, Django, and Django REST Framework to connect frontend and backend systems for live product features.</li>
                    <li>Queried, modeled, and persisted application data in PostgreSQL, contributing to schema design decisions for new features.</li>
                    <li>Debugged issues spanning frontend, backend, and API layers, improving reliability of production-grade code before release.</li>
                    <li>Collaborated using Git-based version control and team code-review workflows, following industry-standard software engineering practices.</li>
                  </ul>
                </div>
              </div>

              {/* PROJECTS */}
              <div className="pt-3 space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-blue-950 border-b border-zinc-800 pb-0.5">
                  PROJECTS
                </h2>

                {/* Thinkboard */}
                <div className="space-y-0.5">
                  <div className="flex items-center justify-between font-bold text-zinc-950">
                    <span>Thinkboard - MERN Notes App</span>
                    <span className="font-normal text-zinc-700 italic">September 2026</span>
                  </div>
                  <div className="text-zinc-700 text-xs flex items-center gap-1.5 font-mono">
                    <span>MongoDB, Express.js, React.js, Node.js, Upstash Redis</span>
                    <span>|</span>
                    <a href="https://github.com/madhanravi734/Thinkboard" target="_blank" rel="noreferrer" className="text-blue-700 underline">GitHub</a>
                    <span>|</span>
                    <a href="https://thinkboard-rho.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-700 underline">Live Demo</a>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-0.5 text-zinc-800 text-justify pt-0.5">
                    <li>Built a full-stack MERN note-taking app enabling users to create, edit, and delete notes in real time, with a REST API built on Express.js and Node.js backed by MongoDB and Mongoose.</li>
                    <li>Prevented API abuse and protected backend stability by implementing request rate limiting with Upstash Redis across all note endpoints.</li>
                    <li>Delivered a fully responsive UI and deployed the application live on Vercel, making the project independently testable without local setup.</li>
                  </ul>
                </div>

                {/* Django Job Portal */}
                <div className="space-y-0.5 pt-1">
                  <div className="flex items-center justify-between font-bold text-zinc-950">
                    <span>Django Job Portal</span>
                    <span className="font-normal text-zinc-700 italic">August - September 2026</span>
                  </div>
                  <div className="text-zinc-700 text-xs flex items-center gap-1.5 font-mono">
                    <span>Python, Django, DRF, PostgreSQL (Neon), Docker, Postman, HTML/CSS</span>
                    <span>|</span>
                    <a href="https://github.com/madhanravi734/django-job-portal" target="_blank" rel="noreferrer" className="text-blue-700 underline">GitHub</a>
                    <span>|</span>
                    <a href="https://django-job-portal-6ttmskzcb-madhanravi734.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-700 underline">Live Demo</a>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-0.5 text-zinc-800 text-justify pt-0.5">
                    <li>Eliminated duplicate and unauthorized job applications by enforcing database-level uniqueness constraints and ownership checks, across a role-based portal spanning 4 core Django apps (profiles, postings, applications, resumes).</li>
                    <li>Secured and scaled the API layer by implementing JWT authentication and role-based permissions across all endpoints, adding pagination, search, filtering, and ordering; validated every endpoint using Postman before release.</li>
                    <li>Enabled one-command environment setup and consistent deployments by containerizing the full stack with Docker and Docker Compose, and shipped interactive Swagger/OpenAPI + ReDoc API documentation; later made the project publicly testable end-to-end by deploying to Vercel with a Neon serverless PostgreSQL database.</li>
                  </ul>
                </div>
              </div>

              {/* EDUCATION */}
              <div className="pt-3 space-y-1">
                <h2 className="text-xs font-bold uppercase tracking-wider text-blue-950 border-b border-zinc-800 pb-0.5">
                  EDUCATION
                </h2>
                <div className="flex items-center justify-between font-bold text-zinc-950">
                  <span>Bachelor of Computer Application</span>
                  <span className="font-normal text-zinc-700 italic">Oct 2021 - May 2024</span>
                </div>
                <div className="flex items-center justify-between text-zinc-700">
                  <span>Sindhi College of Arts and Science | CGPA: 7.8/10</span>
                  <span className="italic">Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>
          ) : (
            /* DARK THEME RESUME VIEW */
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 sm:p-8 max-w-3xl mx-auto space-y-6 text-zinc-200 text-xs sm:text-sm">
              <div className="border-b border-zinc-800 pb-4">
                <h2 className="text-2xl font-bold text-zinc-100">MADHAN RAVI</h2>
                <p className="text-emerald-400 font-medium">Python Backend Developer & Full Stack Developer</p>
                <p className="text-xs text-zinc-400 mt-1 font-mono">
                  Chennai - 600062 | 9003140522 | madhanravi734@gmail.com
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-bold text-emerald-400 uppercase font-mono">Professional Summary</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Full-stack developer with hands-on experience shipping production features across React.js, Next.js, TypeScript, the MERN stack, Django, and PostgreSQL. Builds REST APIs with JWT auth, role-based permissions, and rate limiting with Upstash Redis and Neon PostgreSQL.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-bold text-emerald-400 uppercase font-mono">Experience</h3>
                <div className="space-y-1">
                  <div className="flex justify-between font-bold text-zinc-100">
                    <span>Full Stack Developer Intern — Marzelet Info Technology Pvt Ltd</span>
                    <span className="font-mono text-zinc-400 font-normal">July 2026 - Present</span>
                  </div>
                  <p className="text-xs text-zinc-400">Chennai, Tamil Nadu</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300 pt-1">
                    <li>Built production-facing UI components using React.js, Next.js, TypeScript, and Tailwind CSS.</li>
                    <li>Designed and implemented RESTful APIs using Python, Django, and DRF.</li>
                    <li>Queried, modeled, and persisted application data in PostgreSQL.</li>
                    <li>Collaborated using Git-based version control and team code-review workflows.</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-bold text-emerald-400 uppercase font-mono">Education</h3>
                <div className="flex justify-between text-xs">
                  <div>
                    <p className="font-bold text-zinc-100">Bachelor of Computer Application (BCA)</p>
                    <p className="text-zinc-400">Sindhi College of Arts and Science | CGPA: 7.8/10</p>
                  </div>
                  <span className="font-mono text-zinc-400">Oct 2021 - May 2024</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-3 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500 font-mono">
          <span>Madhan Ravi — Verified Official Resume</span>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-100 underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
