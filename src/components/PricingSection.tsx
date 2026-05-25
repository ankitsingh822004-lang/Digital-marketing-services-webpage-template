/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PRICING_PLANS } from '../data';
import { PricingPlan } from '../types';
import { Check, HelpCircle, Info, Calculator, Percent } from 'lucide-react';

interface PricingSectionProps {
  onPlanSelect: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onPlanSelect }) => {
  const [showGstBreakdown, setShowGstBreakdown] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'plans' | 'matrix'>('plans');

  // Interactive Custom GST calculator state representing user's custom budget allocation input
  const [customRangeBudget, setCustomRangeBudget] = useState<number>(50000);

  // Helper formatting currency
  const formatINR = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateFullGst = (base: number) => {
    const tax = base * 0.18;
    const total = base + tax;
    return { tax, total };
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-slate-50 border-b border-slate-100">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs uppercase font-mono tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full font-medium">
            Financial Transparency
          </span>
          <h2 className="heading-display text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mt-3 mb-4">
            Structured Marketing Retainers
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto text-sm sm:text-base">
            Honest base rates mapped directly to tangible resource allocation. No hidden retainers, fully compliant with Indian 18% GST invoices.
          </p>

          {/* Tab Selection */}
          <div className="inline-flex p-1.5 bg-slate-200/60 rounded-xl mt-8 border border-slate-100">
            <button
              onClick={() => setActiveTab('plans')}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'plans'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Strategic Plans
            </button>
            <button
              onClick={() => setActiveTab('matrix')}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'matrix'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Side-by-Side Matrix
            </button>
          </div>
        </div>

        {/* GST Invoice Verification Banner with interactive toggle */}
        <div className="mb-12 p-4 rounded-xl bg-indigo-50 border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2.5 bg-indigo-500/10 text-indigo-600 rounded-lg">
              <Percent className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-xs sm:text-sm text-neutral-900">
                Are you a corporate business entity?
              </h4>
              <p className="text-neutral-500 text-xs mt-0.5 leading-normal">
                Provide your corporate GSTIN during checkout to declare full input tax credit on our 18% GST invoices.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2.5 bg-white px-3 py-1.5 rounded-lg shadow-xs border border-indigo-100/50">
            <span className="text-xs font-semibold text-neutral-600">Breakdown GST</span>
            <button
              onClick={() => setShowGstBreakdown(!showGstBreakdown)}
              className={`w-11 h-6 rounded-full transition-colors relative focus:outline-none cursor-pointer ${
                showGstBreakdown ? 'bg-brand-600' : 'bg-neutral-300'
              }`}
              aria-label="Toggle GST details"
            >
              <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                showGstBreakdown ? 'translate-x-5' : 'translate-x-0'
              }`} />
            </button>
          </div>
        </div>

        {activeTab === 'plans' ? (
          /* Cards Grid layout */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {PRICING_PLANS.map((plan) => {
              const { tax, total } = calculateFullGst(plan.basePrice);
              const isPopular = plan.badge === 'Best Value';

              return (
                <div
                  key={plan.id}
                  id={`pricing-card-${plan.id}`}
                  className={`flex flex-col justify-between rounded-3xl p-6 transition-all duration-300 relative ${
                    isPopular
                      ? 'bg-slate-900 text-white shadow-xl ring-2 ring-brand-500 scale-[1.02] md:scale-[1.04] lg:scale-[1.02] z-10'
                      : 'bg-white text-slate-900 border border-slate-200/60 shadow-sm hover:shadow-md'
                  }`}
                >
                  {isPopular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-[10px] uppercase font-mono px-3 py-1 rounded-full font-bold tracking-wider">
                      {plan.badge}
                    </span>
                  )}

                  <div>
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="heading-display text-lg font-bold">
                        {plan.name}
                      </h3>
                      <p className={`text-xs mt-1.5 ${isPopular ? 'text-neutral-400' : 'text-neutral-500'}`}>
                        {plan.tagline}
                      </p>
                    </div>

                    {/* Cost Block */}
                    <div className={`mb-6 pb-6 border-b flex flex-col justify-start ${isPopular ? 'border-slate-800' : 'border-slate-100'}`}>
                      {plan.isCustom ? (
                        <div>
                          <div className="text-3xl font-extrabold heading-display">Bespoke</div>
                          <span className="text-xs uppercase font-mono font-medium text-neutral-500 tracking-wider">
                            By RETAINER retainer
                          </span>
                        </div>
                      ) : (
                        <div>
                          <div className="text-2xl sm:text-3xl font-extrabold heading-display flex items-baseline gap-1">
                            {formatINR(showGstBreakdown ? plan.basePrice : total)}
                            <span className={`text-xs font-normal ${isPopular ? 'text-neutral-400' : 'text-neutral-500'}`}>
                              /mo
                            </span>
                          </div>
                          
                          {/* Compliant GST information */}
                          {showGstBreakdown && (
                            <div className="mt-2 space-y-1">
                              <div className="flex justify-between text-[11px] font-mono text-neutral-400">
                                <span>Base Retainer:</span>
                                <span>{formatINR(plan.basePrice)}</span>
                              </div>
                              <div className="flex justify-between text-[11px] font-mono text-emerald-400">
                                <span>+18% GST:</span>
                                <span>{formatINR(tax)}</span>
                              </div>
                              <div className="flex justify-between text-[11px] font-mono text-brand-300 font-semibold pt-1 border-t border-neutral-800/30">
                                <span>Invoice Gross:</span>
                                <span>{formatINR(total)}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Plan features lists */}
                    <ul className="space-y-3.5 mb-8">
                      {plan.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className={`flex items-start gap-2.5 text-xs ${
                            feat.included
                              ? 'text-neutral-505'
                              : 'text-neutral-400 line-through opacity-40'
                          }`}
                        >
                          <Check className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                            feat.included
                              ? (isPopular ? 'text-brand-400' : 'text-brand-600')
                              : 'text-neutral-300'
                          }`} />
                          <span className={isPopular && feat.included ? 'text-neutral-200' : 'text-neutral-700'}>
                            {feat.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Explicit plan CTAs */}
                  <button
                    onClick={() => onPlanSelect(plan.name)}
                    id={`plan-cta-${plan.id}`}
                    className={`w-full py-3 px-4 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                      isPopular
                        ? 'bg-brand-600 hover:bg-brand-500 text-white shadow-md shadow-brand-600/15'
                        : 'bg-neutral-950 hover:bg-neutral-800 text-white'
                    }`}
                  >
                    {plan.isCustom ? 'Initiate Retainer Setup' : `Activate ${plan.name}`}
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          /* Side-by-Side Detailed comparison matrix layout */
          <div className="overflow-x-auto border border-slate-100 rounded-3xl bg-white shadow-xl">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-900 text-white font-mono text-[11px] tracking-wider uppercase border-b border-slate-800">
                  <th className="p-4 sm:p-5 w-1/4">Deliverables & Features</th>
                  {PRICING_PLANS.map((plan) => (
                    <th key={plan.id} className="p-4 sm:p-5 text-center">
                      <div className="font-bold font-sans text-xs sm:text-sm">{plan.name}</div>
                      <div className="text-[10px] text-slate-400 lowercase mt-0.5 font-light">
                        {plan.isCustom ? 'Custom Retainer' : `${formatINR(plan.basePrice)}/mo`}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                <tr>
                  <td className="p-4 text-slate-800 font-bold bg-slate-50/50">Dedicated Manager</td>
                  {PRICING_PLANS.map((p) => (
                    <td key={p.id} className="p-4 text-center text-slate-600 font-mono text-xs">
                      {p.comparisonMatrix.dedicatedManager}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-slate-800 font-bold bg-slate-50/50">Updates & Reports</td>
                  {PRICING_PLANS.map((p) => (
                    <td key={p.id} className="p-4 text-center text-slate-600 font-mono text-xs">
                      {p.comparisonMatrix.weeklyUpdates}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-slate-800 font-bold bg-slate-50/50">Ad Spend Limit Cap</td>
                  {PRICING_PLANS.map((p) => (
                    <td key={p.id} className="p-4 text-center text-slate-600 font-mono text-xs">
                      {p.comparisonMatrix.adBudgetCap}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-slate-800 font-bold bg-slate-50/50">Search Engine Tuning</td>
                  {PRICING_PLANS.map((p) => (
                    <td key={p.id} className="p-4 text-center text-slate-600 font-mono text-xs">
                      {p.comparisonMatrix.seoFocus}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-slate-800 font-bold bg-slate-50/50">Strategy Sessions</td>
                  {PRICING_PLANS.map((p) => (
                    <td key={p.id} className="p-4 text-center text-slate-600 font-mono text-xs">
                      {p.comparisonMatrix.strategySessions}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-slate-800 font-bold bg-slate-50/50">Advanced Conversion APIs</td>
                  {PRICING_PLANS.map((p) => (
                    <td key={p.id} className="p-4 text-center text-slate-600 font-mono text-xs">
                      {p.comparisonMatrix.apiIntegration}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-slate-800 font-bold bg-slate-50/50">Design Deliverables</td>
                  {PRICING_PLANS.map((p) => (
                    <td key={p.id} className="p-4 text-center text-slate-600 font-mono text-xs">
                      {p.comparisonMatrix.customCreatives}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Dynamic GST Tax Compliance live interactive visual box - Great for user interactive requirement */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-xl max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left max-w-md">
              <div className="flex items-center gap-2 text-brand-600 font-bold font-mono text-xs uppercase">
                <Calculator className="w-4 h-4" />
                Live GST Compliance Planner
              </div>
              <h3 className="heading-display text-lg sm:text-xl font-extrabold text-slate-900 mt-2">
                Estimate Your Total Retainer Budget
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-normal font-sans">
                Drag the interactive slider to balance your ideal monthly marketing budget base line. We instantly compute custom service limits and compute 18% GST.
              </p>
            </div>

            <div className="flex-1 w-full flex flex-col gap-4">
              <div className="flex justify-between items-center text-xs font-bold text-slate-750">
                <span>Base Ad/Strategy Budget</span>
                <span className="font-mono text-brand-600 text-sm font-bold">{formatINR(customRangeBudget)}</span>
              </div>
              
              <input
                type="range"
                min="10000"
                max="300000"
                step="5000"
                value={customRangeBudget}
                onChange={(e) => setCustomRangeBudget(Number(e.target.value))}
                id="live-gst-slider"
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
              />

              <div className="grid grid-cols-3 gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center text-xs mt-2">
                <div>
                  <div className="text-slate-500 text-[10px] uppercase font-mono">Service base</div>
                  <div className="font-bold text-slate-900 font-mono mt-0.5">{formatINR(customRangeBudget)}</div>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px] uppercase font-mono">18% GST Tax</div>
                  <div className="font-bold text-orange-600 font-mono mt-0.5">{formatINR(customRangeBudget * 0.18)}</div>
                </div>
                <div>
                  <div className="text-brand-600 text-[10px] uppercase font-mono font-bold">Total Retainer</div>
                  <div className="font-extrabold text-brand-700 font-mono mt-0.5">{formatINR(customRangeBudget * 1.18)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
