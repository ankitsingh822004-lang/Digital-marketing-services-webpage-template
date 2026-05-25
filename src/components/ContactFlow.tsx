/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LeadSubmission } from '../types';
import { Mail, Phone, MapPin, Send, CheckCircle, Database, HelpCircle, Loader2, Sparkles, User, Building2, MessageSquare, Trash2 } from 'lucide-react';

interface ContactFlowProps {
  preselectedService?: string;
}

export const ContactFlow: React.FC<ContactFlowProps> = ({ preselectedService = '' }) => {
  // Form Input States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [serviceInterest, setServiceInterest] = useState(preselectedService);
  const [monthlyBudget, setMonthlyBudget] = useState('₹45,000 - ₹90,000');
  const [customMessage, setCustomMessage] = useState('');

  // Status & Validation states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [savedSubmissions, setSavedSubmissions] = useState<LeadSubmission[]>([]);

  // FAQ Accordion Toggles
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Sync preselected service changes from sliders
  useEffect(() => {
    if (preselectedService) {
      setServiceInterest(preselectedService);
    }
  }, [preselectedService]);

  // Load existing test submissions from localStorage to simulate real database logic
  useEffect(() => {
    const list = localStorage.getItem('lead_submissions');
    if (list) {
      try {
        setSavedSubmissions(JSON.parse(list));
      } catch (e) {
        console.error('Failed mock loading');
      }
    }
  }, []);

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic Validation audits
    if (!name.trim()) return setErrorMessage('Please enter your full name.');
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return setErrorMessage('Please present a valid corporate email address.');
    }
    if (!phone.trim() || phone.length < 10) {
      return setErrorMessage('Please submit a complete 10-digit mobile number.');
    }
    if (!businessName.trim()) return setErrorMessage('Please mention your company or business entity name.');
    if (!serviceInterest) return setErrorMessage('Please choose a core marketing target service.');

    // Simulate Network Latency to handle submitting animation
    setIsSubmitting(true);
    setTimeout(() => {
      const newSubmission: LeadSubmission = {
        id: 'lead_' + Math.random().toString(36).substr(2, 9),
        name,
        email,
        phone,
        businessName,
        serviceInterest,
        monthlyBudget,
        customMessage: customMessage.trim() || 'No custom instruction presented.',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit' }),
        status: 'new'
      };

      const updatedList = [newSubmission, ...savedSubmissions];
      setSavedSubmissions(updatedList);
      localStorage.setItem('lead_submissions', JSON.stringify(updatedList));

      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset critical input fields
      setName('');
      setEmail('');
      setPhone('');
      setBusinessName('');
      setCustomMessage('');
    }, 1800);
  };

  const clearFormSuccess = () => {
    setIsSuccess(false);
  };

  const deleteSubmissionRecord = (id: string) => {
    const fresh = savedSubmissions.filter(s => s.id !== id);
    setSavedSubmissions(fresh);
    localStorage.setItem('lead_submissions', JSON.stringify(fresh));
  };

  const faqs = [
    {
      q: 'Do you sign non-disclosure agreements (NDAs) before auditing?',
      a: 'Absolutely. We respect corporate IP. If your legal compliance team requires standard bilateral NDAs, we execute them electronically prior to opening any search consoles or ad dashboards.'
    },
    {
      q: 'How is the 18% Goods and Services Tax (GST) accounted for?',
      a: 'We are a fully registered tax-compliant business. Every invoice includes a formal invoice breakdown detailing tax margins. When you present your company’s GSTIN, you claim 18% Input Tax Credit during monthly filings.'
    },
    {
      q: 'What concrete actions happen after I queue my audit application?',
      a: 'Our principal strategist personally structures a competitor gap matrix and inspects crawling indices. Within 2 business hours, you will receive an invitation to calendar a video mapping alignment call.'
    },
    {
      q: 'Can we transition or customize services mid-contract?',
      a: 'Yes. Growth Engine and Revenue Accelerator retainers provide structural roll-over flexibility. You can deploy capital towards technical search optimization or content assets depending on performance data.'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-50 border-b border-slate-100">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Sales FAQ & Value messaging (Left) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full font-medium">
                Inquiry Pipeline
              </span>
              <h2 className="heading-display text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mt-3 mb-4">
                Let’s Scale Your Business Mathematically
              </h2>
              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                Submit your current marketing goals below. We don’t pitch generic decks. We run high-integrity competitor data diagnostics to show exactly where your budget is slipping.
              </p>
            </div>

            {/* Quick trust assurances list */}
            <div className="space-y-4 border-l-2 border-slate-200 pl-4 py-1">
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-800">2-Hour Principal Response</h4>
                <p className="text-slate-500 text-xs">Direct review with our senior channel strategist.</p>
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-800">Zero obligation diagnostics</h4>
                <p className="text-slate-500 text-xs">A comprehensive structural dashboard audit, absolutely free of charge.</p>
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-800">100% Secure & Compliant</h4>
                <p className="text-slate-500 text-xs font-light">Custom commercial NDAs signed electronically on demand.</p>
              </div>
            </div>

            {/* Conversion FAQ accordion to secure high-commitment clicks */}
            <div className="pt-6">
              <h3 className="font-semibold text-sm uppercase font-mono tracking-wider text-neutral-500 mb-4 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-neutral-400" />
                Frequently Account Queries
              </h3>
              
              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="border border-slate-200/60 rounded-xl overflow-hidden bg-white shadow-xs">
                      <button
                        onClick={() => handleFaqToggle(idx)}
                        className="w-full text-left p-4 focus:outline-none flex justify-between items-center bg-white hover:bg-slate-50/50 cursor-pointer"
                      >
                        <span className="font-bold text-xs sm:text-sm text-slate-800 pr-4">
                          {faq.q}
                        </span>
                        <span className="text-brand-600 font-bold font-mono text-xs">{isOpen ? '−' : '+'}</span>
                      </button>
                      
                      {isOpen && (
                        <div className="p-4 pt-1 bg-white border-t border-slate-100 text-xs text-slate-500 leading-relaxed font-sans">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Core Interactive Lead Form Block (Right) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

            {isSuccess ? (
              /* pristine dynamic checkout feedback checkmark */
              <div id="contact-success-panel" className="text-center py-12 px-4 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-200">
                  <CheckCircle className="w-10 h-10" />
                </div>
                
                <h3 className="heading-display text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                  Inquiry Queued Successfully!
                </h3>
                <p className="text-neutral-500 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-8">
                  We have mapped your selected campaign metrics. Our principal accounts director will deliver your custom marketing gap diagnostics roadmap via email or phone in less than two business hours.
                </p>

                <div className="bg-neutral-50 border border-neutral-200 p-4 rounded-xl text-left max-w-sm mx-auto text-xs space-y-2 mb-8">
                  <div className="font-semibold text-[10px] uppercase font-mono tracking-widest text-[#555] mb-2">Summary details:</div>
                  <div className="flex justify-between text-neutral-600"><span>Firm Name:</span> <span className="font-mono text-neutral-900 font-semibold">Active</span></div>
                  <div className="flex justify-between text-neutral-600"><span>Target Channel:</span> <span className="font-mono text-neutral-900 font-semibold">{serviceInterest}</span></div>
                  <div className="flex justify-between text-neutral-600"><span>Planned Cap:</span> <span className="font-mono text-neutral-900 font-semibold">{monthlyBudget}</span></div>
                </div>

                <button
                  onClick={clearFormSuccess}
                  className="px-6 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer"
                >
                  Submit Another Lead Profile
                </button>
              </div>
            ) : (
              /* Standard high-converting active input form */
              <form onSubmit={handleInquirySubmit} id="marketing-lead-form" className="space-y-6">
                <div>
                  <h3 className="heading-display text-lg font-extrabold text-slate-900">
                    Apply for a Free Marketing Audit
                  </h3>
                  <p className="text-slate-505 text-xs font-light">
                    Every audit is custom-crafted by senior humans—not AI generation templates.
                  </p>
                </div>

                {errorMessage && (
                  <div id="form-error-banner" className="p-3 text-xs bg-rose-50 border-l-4 border-rose-500 text-rose-700 font-medium rounded">
                    {errorMessage}
                  </div>
                )}

                {/* Name / Business email side-by-side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label id="lbl-name" className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5" htmlFor="field-name">
                      <User className="w-3.5 h-3.5 text-neutral-400" />
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="field-name"
                      placeholder=" Vikram Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-xs sm:text-sm px-4 py-3 border border-slate-200 hover:border-slate-300 rounded-xl bg-slate-50 focus:bg-white transition-all focus:outline-brand-600 focus:ring-1 focus:ring-brand-500"
                      required
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label id="lbl-email" className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5" htmlFor="field-email">
                      <Mail className="w-3.5 h-3.5 text-neutral-400" />
                      Corporate Email Address
                    </label>
                    <input
                      type="email"
                      id="field-email"
                      placeholder=" vikram@abcbrands.co"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs sm:text-sm px-4 py-3 border border-slate-200 hover:border-slate-300 rounded-xl bg-slate-50 focus:bg-white transition-all focus:outline-brand-600 focus:ring-1 focus:ring-brand-500"
                      required
                    />
                  </div>
                </div>

                {/* Mobile / Company details side-by-side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label id="lbl-phone" className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5" htmlFor="field-phone">
                      <Phone className="w-3.5 h-3.5 text-neutral-400" />
                      Mobile Contact Number
                    </label>
                    <input
                      type="tel"
                      id="field-phone"
                      placeholder=" 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs sm:text-sm px-4 py-3 border border-slate-200 hover:border-slate-300 rounded-xl bg-slate-50 focus:bg-white transition-all focus:outline-brand-600 focus:ring-1 focus:ring-brand-500"
                      required
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label id="lbl-company" className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5" htmlFor="field-company">
                      <Building2 className="w-3.5 h-3.5 text-neutral-400" />
                      Company / Business Entity
                    </label>
                    <input
                      type="text"
                      id="field-company"
                      placeholder=" ABC Retail Services"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full text-xs sm:text-sm px-4 py-3 border border-slate-200 hover:border-slate-300 rounded-xl bg-slate-50 focus:bg-white transition-all focus:outline-brand-600 focus:ring-1 focus:ring-brand-500"
                      required
                    />
                  </div>
                </div>

                {/* Target Strategy Channel / Budget Allocations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label id="lbl-service" className="text-xs font-semibold text-neutral-700" htmlFor="field-service">
                      Desired Core Service Allocation
                    </label>
                    <select
                      id="field-service"
                      value={serviceInterest}
                      onChange={(e) => setServiceInterest(e.target.value)}
                      className="w-full text-xs sm:text-sm px-4 py-3 border border-slate-200 hover:border-slate-300 rounded-xl bg-slate-50 focus:bg-white cursor-pointer"
                      required
                    >
                      <option value="" disabled>Choose core channel target...</option>
                      <option value="Search Engine Optimization">Search Engine Optimization (SEO)</option>
                      <option value="High-Performance Paid Advertising">Paid Advertising (Meta/Google Adwords)</option>
                      <option value="Social Media Growth & Marketing">Social Media Growth & Marketing</option>
                      <option value="Omnichannel Brand Strategy & Identity">Omnichannel Brand Strategy & Identity</option>
                      <option value="Content Creation & Copywriting">Content Creation & Copywriting</option>
                    </select>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label id="lbl-budget" className="text-xs font-semibold text-neutral-700" htmlFor="field-budget">
                      Estimated Monthly Marketing Cap
                    </label>
                    <select
                      id="field-budget"
                      value={monthlyBudget}
                      onChange={(e) => setMonthlyBudget(e.target.value)}
                      className="w-full text-xs sm:text-sm px-4 py-3 border border-slate-200 hover:border-slate-300 rounded-xl bg-slate-50 focus:bg-white cursor-pointer"
                    >
                      <option value="₹15,000 - ₹45,000">₹15,000 - ₹45,000 / month</option>
                      <option value="₹45,000 - ₹90,000">₹45,000 - ₹90,000 / month (Recommended)</option>
                      <option value="₹90,000 - ₹2,50,000">₹90,000 - ₹2,50,000 / month</option>
                      <option value="₹2,50,000+">Above ₹2,50,000 / month (Enterprise Retainer)</option>
                    </select>
                  </div>
                </div>

                {/* Custom target goals / message */}
                <div className="space-y-1.5 text-left">
                  <label id="lbl-goals" className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5" htmlFor="field-goals">
                    <MessageSquare className="w-3.5 h-3.5 text-neutral-400" />
                    Growth Gaps & Specific Instructions (Optional)
                  </label>
                  <textarea
                    id="field-goals"
                    rows={3}
                    placeholder="Tell us about your competitors, current CAC values, or specific organic flatlines..."
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="w-full text-xs sm:text-sm px-4 py-3 border border-slate-200 hover:border-slate-300 rounded-xl bg-slate-50 focus:bg-white transition-all focus:outline-brand-600 focus:ring-1 focus:ring-brand-500"
                  />
                </div>

                {/* Submission button with loading state */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="submit-enquiry"
                  className="w-full py-4 px-6 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-full shadow-lg shadow-brand-600/10 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:bg-slate-350 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      Diagnosing compete metadata variables...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Queue Audit Application
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Live Client CRM panel - Highly tactical developer evaluation asset to showcase database retention logic in local storage */}
        {savedSubmissions.length > 0 && (
          <div id="simulated-crm-dashboard" className="mt-16 bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-850 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-brand-500/10 text-brand-400 rounded-lg">
                  <Database className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">Interactive Client CRM Pipeline</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-mono">In-browser simulated ledger storage synced via LocalStorage.</p>
                </div>
              </div>
              <button
                onClick={() => {
                  localStorage.removeItem('lead_submissions');
                  setSavedSubmissions([]);
                }}
                className="text-slate-400 hover:text-rose-450 text-xs font-semibold flex items-center gap-1.5 border border-slate-800 hover:border-rose-900 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Flush Simulated CRM
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedSubmissions.map((lead) => (
                <div key={lead.id} className="bg-slate-950 border border-slate-850 rounded-2xl p-4 flex flex-col justify-between text-xs space-y-3 relative group">
                  <button
                    onClick={() => deleteSubmissionRecord(lead.id)}
                    className="absolute top-2 right-2 text-slate-600 hover:text-rose-450 opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                    title="Delete simulated ticket"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="space-y-1.5 font-sans">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-xs lowercase truncate max-w-[130px]">{lead.name}</span>
                      <span className="font-mono text-[9px] text-[#22c55e] bg-emerald-500/10 px-2 py-0.5 rounded-full font-bold">ACTIVE LEAD</span>
                    </div>
                    <div className="text-[11px] text-brand-300 font-semibold">{lead.businessName}</div>
                    <div className="text-slate-400 text-[11px] font-mono select-all font-light">{lead.email} | {lead.phone}</div>
                    <div className="space-y-1 border-t border-slate-850 pt-2 text-[11px]">
                      <div className="flex justify-between text-slate-500">
                        <span>Target:</span>
                        <span className="font-bold text-slate-300 max-w-[140px] truncate">{lead.serviceInterest}</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Cost cap:</span>
                        <span className="font-bold text-slate-300">{lead.monthlyBudget}</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-850 text-[10px] text-slate-500 italic truncate max-w-[280px]">
                    "{lead.customMessage}"
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
