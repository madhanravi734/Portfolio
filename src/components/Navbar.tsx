import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Inbox } from 'lucide-react';
import { getStoredMessages } from './AdminInboxModal';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenInbox: () => void;
}

export function Navbar({ onOpenResume, onOpenInbox }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Read stored messages count
    try {
      const msgs = getStoredMessages();
      setUnreadCount(msgs.filter(m => !m.read).length);
    } catch {}

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-zinc-800/80 shadow-lg shadow-black/20'
          : 'bg-zinc-950/50 backdrop-blur-sm border-zinc-800/40'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          className="text-base sm:text-lg font-bold tracking-tight text-zinc-100 hover:text-emerald-400 transition-colors whitespace-nowrap"
        >
          Madhan Ravi
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-zinc-100 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-emerald-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2.5">
          {/* Admin Messages Inbox */}
          <button
            onClick={onOpenInbox}
            className="relative p-1.5 text-zinc-400 hover:text-emerald-400 hover:bg-zinc-900 border border-transparent hover:border-zinc-800 rounded-md transition-colors"
            title="Admin Messages Inbox (Passcode Protected)"
            aria-label="Open Messages Inbox"
          >
            <Inbox className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400" />
            )}
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-zinc-100 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 rounded-md transition-colors whitespace-nowrap shadow-sm hover:border-zinc-600"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors whitespace-nowrap shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 rounded-md transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-zinc-800 px-4 py-4 space-y-2 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-zinc-300 hover:text-emerald-400 hover:bg-zinc-900/60 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInbox();
              }}
              className="flex items-center justify-center gap-2 w-full py-2 text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-md"
            >
              <Inbox className="w-4 h-4 text-emerald-400" />
              <span>Admin Message Inbox</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center gap-2 w-full py-2 text-sm font-medium text-zinc-100 bg-zinc-900 border border-zinc-700 rounded-md"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>View Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1 w-full py-2 text-sm font-medium text-zinc-950 bg-emerald-400 rounded-md font-semibold"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
