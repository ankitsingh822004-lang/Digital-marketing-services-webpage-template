/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PAIN_POINTS } from '../data';
import { AlertCircle, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

export const PainPointsSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(PAIN_POINTS[0].id);

  const activePainPoint = PAIN_POINTS.find(p => p.id === activeId) || PAIN_POINTS[0];

  return (
    <section id="pain-points" className="py-20 px-4 bg-white border-b border-neutral-200">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full font-medium">
            Critical Realities
          </span>
          <h2 className="heading-display text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mt-3 mb-4">
            Are You Experiencing These Growth Gaps?
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto text-sm sm:text-base">
            Inefficient marketing isn't just frustrating—it is directly leaking capital that should be funding your business's market expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* List of Problems / Pain points Selection (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {PAIN_POINTS.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  id={`pain-btn-${item.id}`}
                  onClick={() => setActiveId(item.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 cursor-pointer ${
                    isActive
                      ? 'bg-brand-600 border-brand-700 text-white shadow-lg shadow-brand-600/10 translate-x-2'
                      : 'bg-slate-50 border-slate-200/60 text-slate-800 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className={`p-2 rounded-lg mt-0.5 ${isActive ? 'bg-brand-600/30 text-brand-400' : 'bg-neutral-200 text-neutral-600'}`}>
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base leading-tight">
                      {item.title}
                    </h3>
                    <p className={`text-xs mt-1 line-clamp-1 ${isActive ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {item.description}
                    </p>
                  </div>
                  <ChevronRight className={`w-5 h-5 self-center flex-shrink-0 transition-transform ${isActive ? 'text-brand-400 translate-x-1' : 'text-neutral-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Interactive Deep-Dive Solutions Showcase (Right) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 bg-white border border-slate-100 rounded-3xl relative overflow-hidden shadow-xl shadow-slate-200/40">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase mb-4">
                <span>Diagnostic Deep-Dive</span>
                <span>/</span>
                <span className="text-rose-600 font-medium">Issue Identified</span>
              </div>
              
              <h3 className="heading-display text-xl sm:text-2xl font-bold text-neutral-900 mb-4">
                {activePainPoint.title}
              </h3>
              
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                {activePainPoint.description}
              </p>

              <div className="space-y-4">
                {/* The Unfiltered Cause */}
                <div id="diagnosed-cause" className="p-4 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-950">
                  <div className="flex items-center gap-2 font-semibold text-xs uppercase tracking-wide text-orange-850 mb-1.5">
                    <HelpCircle className="w-4 h-4 text-orange-600" />
                    How this usually happens (The Growth Sink)
                  </div>
                  <p className="text-xs sm:text-sm text-orange-900 leading-relaxed">
                    {activePainPoint.problemScenario}
                  </p>
                </div>

                {/* The Outcome engineered Solution */}
                <div id="diagnosed-solution" className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/60 text-emerald-950">
                  <div className="flex items-center gap-2 font-semibold text-xs uppercase tracking-wide text-emerald-850 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Our Engineered Strategic Redirect
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                    {activePainPoint.solutionOutcome}
                  </p>
                </div>
              </div>
            </div>

            {/* Micro-CTA aligning with the problem to move customer downwards */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-200/80">
              <div className="text-xs text-neutral-500 text-center sm:text-left">
                Want to run code diagnostic diagnostics on your real funnel?
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs text-brand-600 font-semibold hover:text-brand-700 transition-colors"
              >
                Schedule Diagnostic Audit
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
