import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Code2, ExternalLink, RefreshCw, CheckCircle2, Award, TrendingUp, Check, Flame, Calendar } from 'lucide-react';

interface LeetCodeStats {
  username: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  submissionsPastYear: number;
  totalActiveDays: number;
  maxStreak: number;
  recentAC: string;
  ranking: string;
  location: string;
}

export function LeetCodeWidget() {
  // Verified exact stats from user's LeetCode profile screenshot
  const [stats, setStats] = useState<LeetCodeStats>({
    username: 'Madhan_ravi',
    totalSolved: 5,
    totalQuestions: 4073,
    easySolved: 3,
    totalEasy: 969,
    mediumSolved: 2,
    totalMedium: 2124,
    hardSolved: 0,
    totalHard: 980,
    submissionsPastYear: 9,
    totalActiveDays: 5,
    maxStreak: 3,
    recentAC: '3Sum',
    ranking: '~5,000,000',
    location: 'India'
  });
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>('Verified Profile Data');

  const fetchLiveStats = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://leetcode-stats-api.herokuapp.com/Madhan_ravi', {
        headers: { Accept: 'application/json' }
      });
      if (response.ok) {
        const data = await response.json();
        if (data.status === 'success' && typeof data.totalSolved === 'number') {
          setStats(prev => ({
            ...prev,
            totalSolved: data.totalSolved,
            easySolved: data.easySolved ?? prev.easySolved,
            mediumSolved: data.mediumSolved ?? prev.mediumSolved,
            hardSolved: data.hardSolved ?? prev.hardSolved,
            ranking: data.ranking ? `~${data.ranking.toLocaleString()}` : prev.ranking
          }));
          setLastUpdated('Updated just now');
        }
      }
    } catch {
      setLastUpdated('Verified Profile Data');
    } finally {
      setLoading(false);
    }
  };

  const easyPercent = Math.min(100, Math.round((stats.easySolved / stats.totalEasy) * 100)) || 1;
  const medPercent = Math.min(100, Math.round((stats.mediumSolved / stats.totalMedium) * 100)) || 1;

  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-7 space-y-6 shadow-xl backdrop-blur-sm relative overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-800/80">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-zinc-100">
                LeetCode Problem Solving
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
                @{stats.username}
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              Active problem solving practice in algorithms and data structures.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={fetchLiveStats}
            disabled={loading}
            className="p-1.5 rounded-md bg-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700 transition-colors border border-zinc-700 text-xs flex items-center gap-1 disabled:opacity-50"
            title="Refresh LeetCode stats"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-amber-400' : ''}`} />
            <span className="text-[11px] font-mono hidden sm:inline">Sync</span>
          </button>

          <a
            href={PERSONAL_INFO.leetcode}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-md bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <span>View Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main 4-Column Card Grid (Restored to previous style with exact stats from user's image) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* Total Solved Card */}
        <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex flex-col justify-between">
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Total Solved</span>
          <div className="mt-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-zinc-100 font-mono">
              {stats.totalSolved}
            </span>
            <span className="text-xs text-zinc-500 font-mono ml-1">/ {stats.totalQuestions}</span>
          </div>
          <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 mt-2">
            <CheckCircle2 className="w-3 h-3" />
            <span>Active DSA Focus</span>
          </div>
        </div>

        {/* Easy Solved Card */}
        <div className="p-4 rounded-xl bg-zinc-950/70 border border-emerald-950/60 flex flex-col justify-between">
          <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">Easy</span>
          <div className="mt-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
              {stats.easySolved}
            </span>
            <span className="text-xs text-zinc-500 font-mono ml-1">/ {stats.totalEasy}</span>
          </div>
          <div className="w-full bg-zinc-800 rounded-full h-1.5 mt-2 overflow-hidden">
            <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: `${Math.max(10, easyPercent)}%` }} />
          </div>
        </div>

        {/* Medium Solved Card */}
        <div className="p-4 rounded-xl bg-zinc-950/70 border border-amber-950/60 flex flex-col justify-between">
          <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">Medium</span>
          <div className="mt-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">
              {stats.mediumSolved}
            </span>
            <span className="text-xs text-zinc-500 font-mono ml-1">/ {stats.totalMedium}</span>
          </div>
          <div className="w-full bg-zinc-800 rounded-full h-1.5 mt-2 overflow-hidden">
            <div className="bg-amber-400 h-1.5 rounded-full" style={{ width: `${Math.max(10, medPercent)}%` }} />
          </div>
        </div>

        {/* Hard Solved Card */}
        <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800 flex flex-col justify-between">
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Hard</span>
          <div className="mt-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-zinc-400 font-mono">
              {stats.hardSolved}
            </span>
            <span className="text-xs text-zinc-500 font-mono ml-1">/ {stats.totalHard}</span>
          </div>
          <div className="w-full bg-zinc-800 rounded-full h-1.5 mt-2 overflow-hidden">
            <div className="bg-rose-400 h-1.5 rounded-full" style={{ width: `0%` }} />
          </div>
        </div>
      </div>

      {/* Profile Details & Metadata row from user's screenshot */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
        <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800/80 text-xs">
          <span className="text-[10px] text-zinc-500 font-mono block">Recent Accepted</span>
          <span className="font-semibold text-emerald-400 font-mono flex items-center gap-1 mt-0.5">
            <Check className="w-3 h-3" />
            <span>{stats.recentAC}</span>
          </span>
        </div>
        <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800/80 text-xs">
          <span className="text-[10px] text-zinc-500 font-mono block">Submissions (Year)</span>
          <span className="font-semibold text-zinc-200 font-mono mt-0.5 block">{stats.submissionsPastYear} submissions</span>
        </div>
        <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800/80 text-xs">
          <span className="text-[10px] text-zinc-500 font-mono block">Active Days</span>
          <span className="font-semibold text-zinc-200 font-mono mt-0.5 block">{stats.totalActiveDays} days (streak: {stats.maxStreak})</span>
        </div>
        <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800/80 text-xs">
          <span className="text-[10px] text-zinc-500 font-mono block">Global Rank</span>
          <span className="font-semibold text-zinc-200 font-mono mt-0.5 block">{stats.ranking}</span>
        </div>
      </div>

      {/* Bottom status note */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-zinc-400 font-mono border-t border-zinc-800/80">
        <div className="flex items-center gap-2">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>Profile: <strong className="text-zinc-200">{stats.username} ({stats.location})</strong></span>
        </div>

        <span className="text-[11px] text-zinc-500">
          {lastUpdated}
        </span>
      </div>
    </div>
  );
}
