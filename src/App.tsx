import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { ApiPlayground } from './components/ApiPlayground';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { AdminInboxModal } from './components/AdminInboxModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isInboxOpen, setIsInboxOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Top Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenInbox={() => setIsInboxOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <ApiPlayground />
        <Contact
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenInbox={() => setIsInboxOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenInbox={() => setIsInboxOpen(true)}
      />

      {/* Interactive Official Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Protected Admin Message Inbox */}
      <AdminInboxModal
        isOpen={isInboxOpen}
        onClose={() => setIsInboxOpen(false)}
      />
    </div>
  );
}
