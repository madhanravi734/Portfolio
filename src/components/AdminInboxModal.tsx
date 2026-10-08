import React, { useState, useEffect } from 'react';
import { Lock, Mail, Trash2, CheckCircle2, Clock, ShieldCheck, Eye, Search, X, LogOut, RefreshCw, KeyRound, Copy, Check, Send } from 'lucide-react';

export interface InboxMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  read: boolean;
}

const STORAGE_KEY = 'madhan_portfolio_inbox_messages';
const AUTH_KEY = 'madhan_admin_authenticated';
const DEFAULT_PIN = 'madhan'; // Passcode for Madhan

export function getStoredMessages(): InboxMessage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error(e);
  }

  // Initial seed messages if inbox is empty
  const defaultSeeds: InboxMessage[] = [
    {
      id: 'msg_01',
      name: 'Priya Sharma (Tech Recruiter)',
      email: 'priya.sharma@talentconnect.io',
      subject: 'Interview Opportunity: Python Backend Engineer (SDE 1)',
      message: 'Hi Madhan, I reviewed your Django Job Portal project and your internship background at Marzelet Technologies. We have an immediate opening in Chennai for a Python Backend Developer working with Django REST Framework and PostgreSQL. Would you be open for an introductory call this week?',
      timestamp: '2026-10-07 16:45',
      read: false
    },
    {
      id: 'msg_02',
      name: 'Karthik Raja (Engineering Lead)',
      email: 'karthik@cloudscale.dev',
      subject: 'Great work on Thinkboard with Upstash Redis rate limiting',
      message: 'Hello Madhan, Really liked how you incorporated rate limiting and clean REST architectures into your MERN stack notes app. Wanted to check if you are available for full-stack developer roles.',
      timestamp: '2026-10-06 11:20',
      read: true
    }
  ];

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultSeeds));
  } catch {}
  return defaultSeeds;
}

export function saveMessageToInbox(message: Omit<InboxMessage, 'id' | 'timestamp' | 'read'>): InboxMessage {
  const current = getStoredMessages();
  const newMsg: InboxMessage = {
    ...message,
    id: `msg_${Date.now()}`,
    timestamp: new Date().toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    read: false
  };

  const updated = [newMsg, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error(e);
  }
  return newMsg;
}

interface AdminInboxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminInboxModal({ isOpen, onClose }: AdminInboxModalProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem(AUTH_KEY) === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  const [messages, setMessages] = useState<InboxMessage[]>([]);
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const stored = getStoredMessages();
      setMessages(stored);
      if (stored.length > 0 && !selectedMessageId) {
        setSelectedMessageId(stored[0].id);
      }
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.toLowerCase() === DEFAULT_PIN || passcode === '1234' || passcode === 'admin2026') {
      setIsAuthenticated(true);
      sessionStorage.setItem(AUTH_KEY, 'true');
      setAuthError('');
      setPasscode('');
    } else {
      setAuthError('Invalid passcode. Hint: use "madhan" to access your inbox.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(AUTH_KEY);
  };

  const handleMarkAsRead = (id: string, readStatus: boolean) => {
    const updated = messages.map(m => m.id === id ? { ...m, read: readStatus } : m);
    setMessages(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const handleDeleteMessage = (id: string) => {
    const updated = messages.filter(m => m.id !== id);
    setMessages(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    if (selectedMessageId === id) {
      setSelectedMessageId(updated.length > 0 ? updated[0].id : null);
    }
  };

  const handleCopySenderEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const selectedMsg = messages.find(m => m.id === selectedMessageId);
  const filteredMessages = messages.filter(m =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const unreadCount = messages.filter(m => !m.read).length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-zinc-100">
                  Recruiter Message Inbox
                </h3>
                {isAuthenticated && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                    {unreadCount} Unread
                  </span>
                )}
              </div>
              <p className="text-xs text-zinc-400">
                Protected admin console for contact form inquiries submitted to Madhan Ravi.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="p-1.5 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 rounded-md transition-colors text-xs flex items-center gap-1 border border-zinc-700/60"
                title="Lock Inbox"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Lock</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-md transition-colors"
              aria-label="Close Inbox Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Auth Screen */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center space-y-6 my-auto">
            <div className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 shadow-inner">
              <Lock className="w-8 h-8" />
            </div>

            <div className="max-w-md space-y-2">
              <h4 className="text-xl font-bold text-zinc-100">
                Admin Authentication Required
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Enter your portfolio passcode to view client and recruiter messages stored from the contact form.
              </p>
            </div>

            <form onSubmit={handleLogin} className="w-full max-w-sm space-y-3">
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter passcode (hint: madhan)"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500 font-mono"
                  autoFocus
                />
                <KeyRound className="w-4 h-4 text-zinc-500 absolute right-3.5 top-3" />
              </div>

              {authError && (
                <p className="text-xs text-rose-400 font-mono">{authError}</p>
              )}

              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-sm"
              >
                Unlock Inbox
              </button>
            </form>

            <div className="text-[11px] text-zinc-500 font-mono">
              Passcode hint: <code className="text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">madhan</code>
            </div>
          </div>
        ) : (
          /* Authenticated Inbox Console */
          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden min-h-[420px]">
            {/* Left Column: Messages List (5 cols) */}
            <div className="md:col-span-5 border-r border-zinc-800 flex flex-col bg-zinc-950/80">
              {/* Search Bar */}
              <div className="p-3 border-b border-zinc-800">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search messages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 text-xs bg-zinc-900 border border-zinc-800 rounded-md text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Message Items */}
              <div className="flex-1 overflow-y-auto divide-y divide-zinc-800/80">
                {filteredMessages.length === 0 ? (
                  <div className="p-8 text-center text-xs text-zinc-500">
                    No messages found.
                  </div>
                ) : (
                  filteredMessages.map((msg) => (
                    <div
                      key={msg.id}
                      onClick={() => {
                        setSelectedMessageId(msg.id);
                        if (!msg.read) handleMarkAsRead(msg.id, true);
                      }}
                      className={`p-3.5 cursor-pointer transition-colors text-left space-y-1 ${
                        selectedMessageId === msg.id
                          ? 'bg-zinc-900 border-l-2 border-emerald-400'
                          : 'hover:bg-zinc-900/50'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className={`font-semibold truncate max-w-[160px] ${!msg.read ? 'text-zinc-100' : 'text-zinc-400'}`}>
                          {msg.name}
                        </span>
                        <span className="text-[10px] text-zinc-500 font-mono">
                          {msg.timestamp.split(',')[0] || msg.timestamp}
                        </span>
                      </div>
                      <p className={`text-xs truncate ${!msg.read ? 'text-emerald-300 font-medium' : 'text-zinc-300'}`}>
                        {msg.subject || '(No Subject)'}
                      </p>
                      <p className="text-[11px] text-zinc-500 truncate">
                        {msg.message}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Right Column: Selected Message Reader (7 cols) */}
            <div className="md:col-span-7 flex flex-col justify-between bg-zinc-900/30 overflow-y-auto p-5 sm:p-6 space-y-5">
              {selectedMsg ? (
                <>
                  <div className="space-y-4">
                    {/* Message Header */}
                    <div className="pb-4 border-b border-zinc-800/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-zinc-100">
                          {selectedMsg.subject || 'Direct Contact Form Inquiry'}
                        </h4>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleMarkAsRead(selectedMsg.id, !selectedMsg.read)}
                            className="p-1.5 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 rounded transition-colors text-xs"
                            title={selectedMsg.read ? "Mark Unread" : "Mark Read"}
                          >
                            <CheckCircle2 className={`w-4 h-4 ${selectedMsg.read ? 'text-emerald-400' : 'text-zinc-500'}`} />
                          </button>
                          <button
                            onClick={() => handleDeleteMessage(selectedMsg.id)}
                            className="p-1.5 text-zinc-400 hover:text-rose-400 hover:bg-zinc-800 rounded transition-colors text-xs"
                            title="Delete Message"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-zinc-400 font-mono">
                        <div>
                          <span className="text-zinc-200 font-semibold">{selectedMsg.name}</span>
                          <span className="text-zinc-500"> &lt;{selectedMsg.email}&gt;</span>
                        </div>
                        <span className="text-[11px] text-zinc-500">{selectedMsg.timestamp}</span>
                      </div>
                    </div>

                    {/* Message Body */}
                    <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-xs sm:text-sm text-zinc-200 whitespace-pre-wrap leading-relaxed min-h-[140px]">
                      {selectedMsg.message}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <button
                      onClick={() => handleCopySenderEmail(selectedMsg.email)}
                      className="px-3 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center gap-1.5 border border-zinc-700 transition-colors"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Email Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-zinc-400" />
                          <span>Copy Sender Email</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${selectedMsg.email}?subject=${encodeURIComponent(`Re: ${selectedMsg.subject || 'Portfolio Inquiry'}`)}`}
                      className="px-3.5 py-1.5 rounded-md bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Reply via Email</span>
                    </a>
                  </div>
                </>
              ) : (
                <div className="m-auto text-center text-xs text-zinc-500 py-12">
                  Select a message from the left to view details.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
