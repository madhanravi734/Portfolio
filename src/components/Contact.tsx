import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { saveMessageToInbox } from './AdminInboxModal';
import { Mail, Github, Linkedin, ExternalLink, Copy, Check, Send, FileText, MapPin, Inbox, ShieldCheck } from 'lucide-react';

interface ContactProps {
  onOpenResume: () => void;
  onOpenInbox: () => void;
}

export function Contact({ onOpenResume, onOpenInbox }: ContactProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Save to local inbox storage for Madhan's Admin Inbox
    saveMessageToInbox({
      name: formData.name || 'Anonymous Recruiter',
      email: formData.email,
      subject: formData.subject || 'Portfolio Inquiry',
      message: formData.message
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedStatus('Message delivered to Madhan Ravi\'s inbox! Preparing mail client...');

      // Also open mailto client
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || `Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 400);
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-800/60 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-emerald-400 font-semibold font-mono">
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight mt-1">
              Let's build something together.
            </h2>
            <p className="text-sm text-zinc-400 mt-2">
              I am currently open to opportunities as a Junior Python Backend Developer, Software Engineer, or Full Stack Developer.
              Whether you have an open role, an engineering query, or would like to discuss my projects, feel free to reach out.
            </p>
          </div>

          {/* Discreet Admin Inbox Button */}
          <button
            onClick={onOpenInbox}
            className="self-start md:self-auto px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-emerald-400 text-xs font-mono flex items-center gap-2 transition-colors"
            title="Open Message Inbox (Passcode Protected)"
          >
            <Inbox className="w-3.5 h-3.5 text-emerald-400" />
            <span>Message Inbox (Admin)</span>
          </button>
        </div>

        {/* Top Developer & Social Links Cards - Highly visible */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Email Card */}
          <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 uppercase">Direct Email</span>
                <Mail className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-sm font-semibold text-zinc-100 mt-2 truncate">
                {PERSONAL_INFO.email}
              </p>
              <p className="text-xs text-zinc-400 mt-0.5">Primary recruiter channel</p>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={handleCopyEmail}
                className="flex-1 py-1.5 px-3 text-xs font-medium text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded transition-colors flex items-center justify-center gap-1.5 border border-zinc-700/80"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="py-1.5 px-3 text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded transition-colors"
              >
                Mail
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 uppercase">GitHub Profile</span>
                <Github className="w-4 h-4 text-zinc-300" />
              </div>
              <p className="text-sm font-semibold text-zinc-100 mt-2">
                madhanravi734
              </p>
              <p className="text-xs text-zinc-400 mt-0.5">Django, MERN & Backend repositories</p>
            </div>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="w-full py-1.5 px-3 text-xs font-medium text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded transition-colors flex items-center justify-center gap-1.5 border border-zinc-700/80"
            >
              <span>View GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 uppercase">LinkedIn Profile</span>
                <Linkedin className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-sm font-semibold text-zinc-100 mt-2 truncate">
                madhanravi
              </p>
              <p className="text-xs text-zinc-400 mt-0.5">Professional network & connections</p>
            </div>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-full py-1.5 px-3 text-xs font-medium text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded transition-colors flex items-center justify-center gap-1.5 border border-zinc-700/80"
            >
              <span>View LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>

          {/* LeetCode Card */}
          <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 uppercase">LeetCode Profile</span>
                <span className="text-xs font-mono text-amber-400 font-bold">5 Solved</span>
              </div>
              <p className="text-sm font-semibold text-zinc-100 mt-2">
                Madhan_ravi
              </p>
              <p className="text-xs text-zinc-400 mt-0.5">Problem solving & algorithms</p>
            </div>
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noreferrer"
              className="w-full py-1.5 px-3 text-xs font-medium text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded transition-colors flex items-center justify-center gap-1.5 border border-zinc-700/80"
            >
              <span>View LeetCode</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>
        </div>

        {/* Resume Callout Bar */}
        <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-zinc-100">
                Candidate Resume (Official PDF Format)
              </h4>
              <p className="text-xs text-zinc-400">
                Includes full CGPA (7.8/10), Marzelet Info Technology internship bullet points, Upstash Redis & Neon PostgreSQL projects.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>

        {/* Contact Form & Location info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-zinc-100 mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Recruiters or hiring managers can leave a note below. Submissions are saved to the local admin inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="contact-name" className="text-xs font-mono text-zinc-400">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins (Recruiter)"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-zinc-950 border border-zinc-800 rounded-md text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="contact-email" className="text-xs font-mono text-zinc-400">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-zinc-950 border border-zinc-800 rounded-md text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-subject" className="text-xs font-mono text-zinc-400">Subject / Role Opportunity</label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="e.g. Junior Python Backend Developer Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-zinc-950 border border-zinc-800 rounded-md text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-message" className="text-xs font-mono text-zinc-400">Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Hello Madhan, we came across your Python and full-stack projects..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-zinc-950 border border-zinc-800 rounded-md text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 resize-none"
                />
              </div>

              {submittedStatus && (
                <div className="p-3 rounded bg-emerald-950/60 border border-emerald-800/80 text-xs text-emerald-300">
                  {submittedStatus}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 px-4 text-xs font-semibold rounded-md bg-emerald-400 hover:bg-emerald-300 text-zinc-950 transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

          {/* Quick hiring availability card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 space-y-4">
              <h4 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono">
                Location & Availability
              </h4>

              <div className="space-y-3 text-xs text-zinc-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-zinc-100">Location:</p>
                    <p className="text-zinc-400">Chennai - 600062, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-zinc-100">Contact Number:</p>
                    <p className="text-zinc-400 font-mono">+91 9003140522</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-zinc-100">Work Preferences:</p>
                    <p className="text-zinc-400">In-Office (Chennai), Hybrid, or Remote roles</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-zinc-100">Notice Period / Availability:</p>
                    <p className="text-emerald-400 font-mono">Immediate Joiner</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 space-y-2">
              <p className="font-semibold text-zinc-200">For Quick Inquiries:</p>
              <p>
                Direct emails to <span className="text-emerald-400 font-mono">madhanravi734@gmail.com</span> or calls to <span className="text-emerald-400 font-mono">+91 9003140522</span> receive prompt responses within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
