import React, { useEffect, useState } from 'react';
import { X, Printer, Download, Copy, Check, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RESUME_URL = '/Madhan_Ravi_Resume.pdf';

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
    window.open(RESUME_URL, '_blank', 'noopener,noreferrer');
  };

  const handleCopyText = async () => {
    try {
      const text = `Madhan Ravi

Python Backend Developer & Full Stack Developer

Chennai, India

GitHub: https://github.com/madhanravi734
LinkedIn: https://linkedin.com/in/madhanravi
LeetCode: https://leetcode.com/u/Madhan_ravi

Resume:
${window.location.origin}${RESUME_URL}`;

      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy resume information:', error);
    }
  };

  const handleDownloadPdf = () => {
    const link = document.createElement('a');

    link.href = RESUME_URL;
    link.download = 'Madhan_Ravi_Resume.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
                  viewMode === 'pdf'
                    ? 'bg-zinc-800 text-zinc-100 shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                PDF Sheet View
              </button>

              <button
                onClick={() => setViewMode('dark')}
                className={`px-2.5 py-1 rounded-md transition-all font-mono text-[11px] ${
                  viewMode === 'dark'
                    ? 'bg-zinc-800 text-zinc-100 shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Dark Theme
              </button>

            </div>
          </div>

          <div className="flex items-center gap-2">

            {/* Copy Resume Info */}
            <button
              onClick={handleCopyText}
              className="px-2.5 py-1.5 text-xs text-zinc-300 hover:text-zinc-100 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors flex items-center gap-1.5 border border-zinc-700"
              title="Copy resume information"
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

            {/* Download Actual PDF */}
            <button
              onClick={handleDownloadPdf}
              className="px-2.5 py-1.5 text-xs text-zinc-300 hover:text-zinc-100 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors flex items-center gap-1.5 border border-zinc-700"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5 text-zinc-400" />
              <span className="hidden sm:inline">Download PDF</span>
            </button>

            {/* Open PDF for Print / Save */}
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors flex items-center gap-1.5 shadow-sm"
              title="Open PDF for printing or saving"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-md transition-colors ml-1"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>

          </div>
        </div>

        {/* Resume Content */}
        <div className="p-3 sm:p-6 overflow-y-auto flex-1 bg-zinc-950/80">

          {viewMode === 'pdf' ? (

            /* ACTUAL RESUME PDF */
            <div className="bg-white rounded-lg max-w-3xl mx-auto shadow-2xl overflow-hidden border border-zinc-300 h-[65vh] sm:h-[72vh]">

              <iframe
                src={RESUME_URL}
                title="Madhan Ravi Resume"
                className="w-full h-full border-0"
              />

            </div>

          ) : (

            /* DARK THEME VIEW */
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 sm:p-8 max-w-3xl mx-auto space-y-6 text-zinc-200 text-xs sm:text-sm">

              <div className="border-b border-zinc-800 pb-4">

                <h2 className="text-2xl font-bold text-zinc-100">
                  MADHAN RAVI
                </h2>

                <p className="text-emerald-400 font-medium">
                  Python Backend Developer & Full Stack Developer
                </p>

                <p className="text-xs text-zinc-400 mt-1 font-mono">
                  Chennai, India
                </p>

              </div>

              <div className="space-y-2">

                <h3 className="text-xs font-bold text-emerald-400 uppercase font-mono">
                  Professional Summary
                </h3>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  Python backend and full-stack developer with hands-on
                  experience building applications using Python, Django,
                  Django REST Framework, React.js, Node.js, Express.js,
                  PostgreSQL, and MongoDB.
                </p>

              </div>

              <div className="space-y-2">

                <h3 className="text-xs font-bold text-emerald-400 uppercase font-mono">
                  Experience
                </h3>

                <div className="space-y-1">

                  <div className="flex justify-between font-bold text-zinc-100">
                    <span>
                      Full Stack Developer Intern — Marzelet Technologies
                    </span>

                    <span className="font-mono text-zinc-400 font-normal">
                      3 Months
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400">
                    Chennai, Tamil Nadu
                  </p>

                  <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300 pt-1">

                    <li>
                      Developed full-stack web application functionality
                      using Python, Django and React.js.
                    </li>

                    <li>
                      Built and integrated REST APIs using Django REST
                      Framework.
                    </li>

                    <li>
                      Worked with PostgreSQL for backend data management.
                    </li>

                    <li>
                      Developed reusable React.js components and debugged
                      frontend/backend integration issues.
                    </li>

                  </ul>

                </div>

              </div>

              <div className="space-y-2">

                <h3 className="text-xs font-bold text-emerald-400 uppercase font-mono">
                  Projects
                </h3>

                <div className="space-y-3">

                  <div>
                    <p className="font-bold text-zinc-100">
                      Chatz — MERN Chat Application
                    </p>

                    <p className="text-xs text-zinc-400">
                      MongoDB • Express.js • React.js • Node.js
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-zinc-100">
                      Django Job Portal
                    </p>

                    <p className="text-xs text-zinc-400">
                      Python • Django • DRF • PostgreSQL • Docker
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-zinc-100">
                      Thinkboard — MERN Notes Application
                    </p>

                    <p className="text-xs text-zinc-400">
                      MongoDB • Express.js • React.js • Node.js
                    </p>
                  </div>

                </div>

              </div>

              <div className="space-y-2">

                <h3 className="text-xs font-bold text-emerald-400 uppercase font-mono">
                  Education
                </h3>

                <div className="flex justify-between text-xs">

                  <div>
                    <p className="font-bold text-zinc-100">
                      Bachelor of Computer Application (BCA)
                    </p>

                    <p className="text-zinc-400">
                      Sindhi College of Arts and Science
                    </p>
                  </div>

                  <span className="font-mono text-zinc-400">
                    2021 - 2024
                  </span>

                </div>

              </div>

            </div>
          )}

        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-3 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500 font-mono">

          <span>
            Madhan Ravi — Verified Official Resume
          </span>

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