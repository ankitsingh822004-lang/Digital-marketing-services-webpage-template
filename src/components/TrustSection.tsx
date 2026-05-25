/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TESTIMONIALS, CASE_STUDIES, BRAND_LOGOS } from '../data';
import { Quote, Sparkles, Building2, TrendingUp, Calendar, ArrowRight, Eye, CheckCircle } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedCaseStudy, setExpandedCaseStudy] = useState<string | null>(null);

  // Available categories for filtering testimonials
  const categories = ['All', 'Paid Ads', 'SEO', 'Social Growth', 'Branding'];

  const filteredTestimonials = activeCategory === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === activeCategory);

  const toggleCaseStudy = (id: string) => {
    setExpandedCaseStudy(expandedCaseStudy === id ? null : id);
  };

  return (
    <section id="trust" className="py-20 px-4 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        {/* Logos Bar showcasing verified corporate partners */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[#64748b] mb-8">
            Empowering Growth Vectors Across Premium Verticals
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-65 grayscale hover:grayscale-0 transition-all duration-300">
            {BRAND_LOGOS.map((logo, idx) => (
              <div key={idx} className="flex items-center gap-2 select-none group">
                <div className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center font-bold text-xs text-neutral-300 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  {logo.initials}
                </div>
                <span className="text-sm font-semibold tracking-wide text-slate-400 group-hover:text-white transition-colors">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Global Statistics Highlights dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-slate-900/60 border border-slate-800 rounded-3xl mb-20 text-center shadow-xl">
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold heading-display text-brand-400">₹4.8 Cr+</div>
            <div className="text-xs text-neutral-400 font-mono mt-1 uppercase tracking-wider">Paid Ad Spend Managed</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold heading-display text-white">45+ Brands</div>
            <div className="text-xs text-neutral-400 font-mono mt-1 uppercase tracking-wider">Actively Scaled</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold heading-display text-emerald-400">4.3x Avg</div>
            <div className="text-xs text-neutral-400 font-mono mt-1 uppercase tracking-wider">Direct Media ROAS</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold heading-display text-white">100% Retained</div>
            <div className="text-xs text-neutral-400 font-mono mt-1 uppercase tracking-wider">Post-Audit Contracts</div>
          </div>
        </div>

        {/* Testimonials Block with Category Filter switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-4 lg:sticky lg:top-8">
            <span className="text-xs uppercase font-mono tracking-widest text-brand-400 bg-brand-600/10 px-3 py-1 rounded-full font-medium">
              Verified Client Voice
            </span>
            <h2 className="heading-display text-3xl font-bold tracking-tight text-white mt-3 mb-4">
              Results That Write Back
            </h2>
            <p className="text-neutral-400 text-sm font-light mb-8 leading-relaxed">
              Read transparent business stories directly from marketing leaders across high-scale software, diagnostics, and e-commerce spaces.
            </p>

            {/* Live Filter switches */}
            <div id="testimonial-filters" className="flex flex-wrap lg:flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg text-left transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-brand-600 text-white translate-x-1 shadow-sm'
                      : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTestimonials.length > 0 ? (
              filteredTestimonials.map((test) => (
                <div
                  key={test.id}
                  id={`testimonial-card-${test.id}`}
                  className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between hover:border-brand-500/30 transition-all duration-350"
                >
                  <div>
                    <Quote className="w-8 h-8 text-brand-500/20 mb-4" />
                    <p className="text-neutral-300 text-xs sm:text-sm italic leading-relaxed mb-6">
                      "{test.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">{test.author}</div>
                      <div className="text-xs text-neutral-400 font-light">{test.role}, <span className="font-medium text-brand-400">{test.company}</span></div>
                    </div>
                    <div className="text-right">
                      <div className="text-base sm:text-lg font-mono font-extrabold text-emerald-400">{test.statResult}</div>
                      <div className="text-[9px] text-neutral-500 uppercase tracking-wider font-mono">{test.statLabel}</div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center py-10 text-neutral-500 text-sm">
                No testimonials in this category matching current selection.
              </div>
            )}
          </div>
        </div>

        {/* Case Studies Detailed Modules */}
        <div>
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full font-medium">
              Proven Performance
            </span>
            <h2 className="heading-display text-3xl font-bold tracking-tight text-white mt-3 mb-2">
              Performance Case Inquiries
            </h2>
            <p className="text-neutral-400 text-sm font-light max-w-lg mx-auto">
              Real company diagnostics. Explore the mechanics of how we structure channels to bring tangible returns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs) => {
              const isExpanded = expandedCaseStudy === cs.id;
              return (
                <div
                  key={cs.id}
                  id={`case-card-${cs.id}`}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isExpanded
                      ? 'bg-neutral-900 border-brand-500 shadow-lg'
                      : 'bg-neutral-900/45 border-neutral-850 hover:border-neutral-800'
                  }`}
                >
                  <div>
                    {/* Header meta */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider text-brand-300 uppercase bg-brand-500/10 px-2.5 py-0.5 rounded-full font-medium">
                        <Building2 className="w-3 h-3" />
                        {cs.industry}
                      </span>
                      <span className="text-[10px] text-neutral-500 font-mono flex items-center gap-1">
                        <Calendar className="w-3 w-3" />
                        {cs.yearsActive}
                      </span>
                    </div>

                    <h3 className="heading-display text-lg font-bold text-white mb-3">
                      {cs.clientName}
                    </h3>

                    {/* Prominent metric always shown */}
                    <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-extrabold text-emerald-400 font-mono tracking-tight">
                          {cs.growthMetric}
                        </div>
                        <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono mt-0.5">
                          {cs.growthLabel}
                        </div>
                      </div>
                      <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Expandable Case details */}
                    {isExpanded && (
                      <div className="mt-4 space-y-4 pt-4 border-t border-neutral-800/60 animate-fade-in text-xs sm:text-sm">
                        <div>
                          <h4 className="text-rose-400 font-bold uppercase text-[10px] font-mono tracking-wide mb-1 flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5" />
                            The Underwhelming Situation
                          </h4>
                          <p className="text-neutral-400 leading-relaxed font-light">
                            {cs.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-emerald-400 font-bold uppercase text-[10px] font-mono tracking-wide mb-1 flex items-center gap-1">
                            <CheckCircle className="w-3.5 h-3.5" />
                            Tactical Engineering Shift
                          </h4>
                          <p className="text-neutral-300 leading-relaxed font-light">
                            {cs.solution}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Expansion selector trigger button */}
                  <button
                    onClick={() => toggleCaseStudy(cs.id)}
                    className="w-full mt-6 py-2 px-3 bg-neutral-950 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>{isExpanded ? 'Hide Strategic Outline' : 'Reveal Strategic Outline'}</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
