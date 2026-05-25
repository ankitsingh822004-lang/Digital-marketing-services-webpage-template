/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, ChevronRight, BarChart3, Target, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center bg-slate-50 text-slate-900 overflow-hidden py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      {/* Decorative modern layout grids */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      {/* Absolute decorative ambient glow blobs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT PANEL: Branding proposition & Core headlines */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Ambient status trigger badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50/85 border border-indigo-100/80 text-brand-700 text-xs font-semibold animate-fade-in shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Now Booking Retainers for Q3/Q4 2026</span>
            </div>

            {/* Premium displayed display typography */}
            <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Scale Your Brand with Precision{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">
                Data
              </span>
              <span> & Flow.</span>
            </h1>

            {/* Strategic subtitle explanation */}
            <p className="text-sm sm:text-base md:text-lg text-slate-500 font-light leading-relaxed max-w-xl">
              Stop bleeding advertising budgets on empty clicks. We deploy verified target architectures, technical search optimization, and creative scroll-stoppers that convert visitors into signed accounts.
            </p>

            {/* Double buttons CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2">
              <button
                onClick={onCtaClick}
                id="hero-cta-primary"
                className="px-6 py-3.5 bg-brand-600 hover:bg-brand-500 active:bg-brand-700 text-white font-bold rounded-full shadow-lg shadow-brand-500/20 transition-all flex items-center justify-center gap-2 group cursor-pointer text-xs sm:text-sm"
              >
                Request Free Marketing Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="#pricing"
                id="hero-cta-secondary"
                className="px-6 py-3.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900 font-bold rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm shadow-xs"
              >
                Explore Pricing Retainers
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Grouped client faces block */}
            <div className="flex items-center gap-3 pt-6 border-t border-slate-100 w-full sm:w-auto">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center font-bold text-[9px] text-slate-600">RA</div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center font-bold text-[9px] text-slate-600">AS</div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400 flex items-center justify-center font-bold text-[9px] text-slate-600">KM</div>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-600">Trusted by over 45+ enterprise accounts</p>
                <p className="text-[10px] text-slate-400 font-mono">India Tax Compliant 18% GST Invoices Included</p>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: High fidelity visual dashboard container (Split Layout highlight) */}
          <div className="lg:col-span-5 w-full flex flex-col gap-4">
            <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col gap-6">
              
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                  <span className="text-[11px] font-bold font-mono tracking-wider text-slate-400 uppercase">Interactive Score Tracker</span>
                </div>
                <span className="text-xs font-mono font-bold text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full">LIVE FEED</span>
              </div>

              {/* Stat Card 1 */}
              <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-4 hover:bg-slate-100/75 transition-colors border border-slate-100/50">
                <div className="p-3 bg-brand-500/10 text-brand-600 rounded-xl">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-800 tracking-tight">4.3x Avg</div>
                  <div className="text-xs text-slate-400 font-mono uppercase">Verified Paid Media ROAS</div>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-4 hover:bg-slate-100/75 transition-colors border border-slate-100/50">
                <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-xl">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-800 tracking-tight">128% Lift</div>
                  <div className="text-xs text-slate-400 font-mono uppercase">Average Organic Traffic Growth</div>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-4 hover:bg-slate-100/75 transition-colors border border-slate-100/50">
                <div className="p-3 bg-indigo-500/10 text-indigo-600 rounded-xl">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-800 tracking-tight">100% Tax Legal</div>
                  <div className="text-xs text-slate-400 font-mono uppercase">Full GST-Invoicing Cleared</div>
                </div>
              </div>

              <div className="text-center pt-2 text-[10px] text-slate-400 flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                Performance metrics audited against real customer databases.
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

