import React, { useState } from 'react';
import { MOCK_API_ENDPOINTS } from '../data/portfolioData';
import { Play, Check, Copy, Terminal, Shield, ArrowRight, RefreshCw } from 'lucide-react';

export function ApiPlayground() {
  const [selectedEndpointId, setSelectedEndpointId] = useState(MOCK_API_ENDPOINTS[0].id);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedResponse, setCopiedResponse] = useState(false);
  const [activeOutput, setActiveOutput] = useState(MOCK_API_ENDPOINTS[0]);

  const activeConfig = MOCK_API_ENDPOINTS.find(e => e.id === selectedEndpointId) || MOCK_API_ENDPOINTS[0];

  const handleExecuteRequest = () => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveOutput(activeConfig);
      setIsLoading(false);
    }, 250);
  };

  const handleSelectEndpoint = (id: string) => {
    setSelectedEndpointId(id);
    const chosen = MOCK_API_ENDPOINTS.find(e => e.id === id) || MOCK_API_ENDPOINTS[0];
    setActiveOutput(chosen);
  };

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(activeOutput.response, null, 2));
    setCopiedResponse(true);
    setTimeout(() => setCopiedResponse(false), 2000);
  };

  return (
    <section className="py-16 border-t border-zinc-800/60 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-zinc-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-emerald-400 font-semibold font-mono flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>Interactive Backend Playground</span>
            </div>
            <h3 className="text-2xl font-bold text-zinc-100 tracking-tight mt-1">
              Live REST API Inspector
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Inspect sample endpoints, request structures, and JSON responses engineered for Django Job Portal and MERN applications.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400 font-mono hidden sm:inline">Django REST Framework & Express</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800/80">
          {/* Left: Endpoint selector buttons */}
          <div className="lg:col-span-5 p-4 sm:p-6 space-y-3 bg-zinc-950/40">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 font-mono">
              Available Endpoints
            </p>
            <div className="space-y-2">
              {MOCK_API_ENDPOINTS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelectEndpoint(item.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-all text-xs font-mono flex flex-col gap-1.5 ${
                    selectedEndpointId === item.id
                      ? 'bg-zinc-900 border-emerald-500/60 shadow-md text-zinc-100'
                      : 'bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider">{item.project}</span>
                    <span className={`px-1.5 py-0.5 text-[10px] font-bold rounded ${
                      item.method === 'GET' ? 'bg-blue-950 text-blue-400 border border-blue-900' :
                      'bg-emerald-950 text-emerald-400 border border-emerald-900'
                    }`}>
                      {item.method}
                    </span>
                  </div>
                  <span className="truncate font-semibold text-zinc-200">{item.endpoint}</span>
                </button>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={handleExecuteRequest}
                disabled={isLoading}
                className="w-full py-2.5 px-4 text-xs font-semibold rounded-md bg-emerald-400 hover:bg-emerald-300 text-zinc-950 transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Executing Request...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Send Mock Request</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right: Response Viewer */}
          <div className="lg:col-span-7 p-4 sm:p-6 flex flex-col justify-between bg-zinc-950/80">
            <div>
              {/* Response Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500">Status:</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-400 font-bold">
                    {activeOutput.status} {activeOutput.statusText}
                  </span>
                  <span className="text-zinc-600 hidden sm:inline">·</span>
                  <span className="text-zinc-500 hidden sm:inline">Time: ~42ms</span>
                </div>

                <button
                  onClick={handleCopyJSON}
                  className="text-xs text-zinc-400 hover:text-zinc-100 flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-900 border border-zinc-800 transition-colors"
                >
                  {copiedResponse ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-zinc-400" />
                      <span>Copy JSON</span>
                    </>
                  )}
                </button>
              </div>

              {/* JSON code container */}
              <div className="mt-4 p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/80 overflow-x-auto max-h-[280px]">
                <pre className="text-xs font-mono text-zinc-300 leading-relaxed">
                  {JSON.stringify(activeOutput.response, null, 2)}
                </pre>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
              <span>Standard DRF Serializer Schema</span>
              <span>Content-Type: application/json</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
