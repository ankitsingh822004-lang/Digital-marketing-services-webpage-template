/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { PainPointsSection } from './components/PainPointsSection';
import { ServicesSlider } from './components/ServicesSlider';
import { PricingSection } from './components/PricingSection';
import { TrustSection } from './components/TrustSection';
import { ContactFlow } from './components/ContactFlow';
import { Menu, X, ArrowUp, Zap, Sparkles, AlertCircle, Percent } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedServiceInterest, setSelectedServiceInterest] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // Active navigation section highlight state
  const [activeSection, setActiveSection] = useState('hero');

  const navMenuItems = [
    { label: 'Overview', href: '#hero', id: 'hero' },
    { label: 'Gaps', href: '#pain-points', id: 'pain-points' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Retainers', href: '#pricing', id: 'pricing' },
    { label: 'Trust & Case Studies', href: '#trust', id: 'trust' },
    { label: 'Audit Desk', href: '#contact', id: 'contact' }
  ];

  const handleScroll = () => {
    // Show back to top trigger
    setShowScrollTop(window.scrollY > 500);

    // Scan element positions to update active header nav highlight
    const scrollPosition = window.scrollY + 120;
    for (const item of navMenuItems) {
      const el = document.getElementById(item.id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(item.id);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bridge navigation scrolling and option pre-selection
  const routeToContactForm = (serviceName: string) => {
    setSelectedServiceInterest(serviceName);
    
    // Display interactive pre-selection confirmation toast
    setToastMessage(`Selected: "${serviceName}" retainer strategy. Complete profile below.`);
    setTimeout(() => setToastMessage(''), 4500);

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const routePlanToContactForm = (planName: string) => {
    let serviceMap = 'High-Performance Paid Advertising'; // default fallback
    if (planName.includes('Kickstart')) {
      serviceMap = 'Omnichannel Brand Strategy & Identity';
    } else if (planName.includes('Growth')) {
      serviceMap = 'High-Performance Paid Advertising';
    } else if (planName.includes('Accelerator')) {
      serviceMap = 'Search Engine Optimization';
    } else if (planName.includes('Infinity')) {
      serviceMap = 'Search Engine Optimization'; // Custom
    }

    routeToContactForm(serviceMap);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans select-text">
      
      {/* Sticky Top Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 text-slate-800 transition-all duration-200">
        <div className="w-full max-w-6xl mx-auto px-4 h-18 flex items-center justify-between">
          
          {/* Authentic corporate logo format */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white font-black heading-display shadow-md shadow-brand-600/10 group-hover:bg-brand-500 transition-colors">
              <Zap className="w-4 h-4 fill-white" />
            </div>
            <div>
              <span className="font-bold tracking-tight text-base sm:text-lg heading-display text-slate-900">
                ApexMedia
              </span>
              <span className="block text-[9px] text-[#475569] tracking-wider uppercase font-mono font-bold leading-none mt-0.5">
                Direct Analytics
              </span>
            </div>
          </a>

          {/* Desktop Nav Actions */}
          <nav className="hidden lg:flex items-center gap-1">
            {navMenuItems.map((item) => {
              const ipActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all ${
                    ipActive
                      ? 'text-brand-600 bg-slate-100'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Conversion CTA in main header */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contact"
              id="header-cta"
              className="px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold tracking-wide rounded-full shadow-md shadow-brand-500/10 transition-all cursor-pointer"
            >
              Get Free Audit
            </a>
          </div>

          {/* Hamburger menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="p-2 text-slate-500 hover:text-slate-950 lg:hidden cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Collapsing Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div id="drawer-menu-panel" className="lg:hidden border-t border-slate-100 bg-white px-4 py-6 space-y-4 animate-fade-in text-left shadow-xl">
            <div className="flex flex-col gap-2">
              {navMenuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-bold tracking-wide block ${
                    activeSection === item.id
                      ? 'text-brand-600 bg-slate-100'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <div className="pt-4 border-t border-slate-100 flex justify-stretch border-dashed">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold rounded-full cursor-pointer shadow-lg shadow-brand-600/10"
              >
                Inquire Strategy Call
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Single Page Sections Order */}
      <main className="flex-1">
        <HeroSection onCtaClick={() => routeToContactForm('Search Engine Optimization')} />
        <PainPointsSection />
        <ServicesSlider onServiceSelect={routeToContactForm} />
        <PricingSection onPlanSelect={routePlanToContactForm} />
        <TrustSection />
        <ContactFlow preselectedService={selectedServiceInterest} />
      </main>

      {/* Interactive sticky Selection Confirmations Toast */}
      {toastMessage && (
        <div id="service-redirect-toast" className="fixed bottom-6 right-6 z-50 p-4 bg-neutral-950 border border-brand-500 text-white rounded-xl shadow-2xl flex items-center gap-3 animate-slide-in max-w-sm">
          <div className="p-2 bg-brand-600/20 text-brand-400 rounded-lg">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold font-sans">Campaign Mapped!</div>
            <div className="text-[11px] text-neutral-400 mt-0.5 leading-tight">{toastMessage}</div>
          </div>
        </div>
      )}

      {/* Floating Back to Top control bubble */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          id="back-to-top"
          className="fixed bottom-6 left-6 z-40 p-3 bg-white border border-neutral-200 text-neutral-800 hover:text-brand-600 hover:border-brand-500 rounded-full shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
          aria-label="Scroll back top"
        >
          <ArrowUp className="w-5 h-5 animate-pulse" />
        </button>
      )}

      {/* Static compliant Footer matching Indian Tax structure details */}
      <footer className="bg-slate-950 text-slate-500 border-t border-slate-900 text-xs py-12 px-6">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-6 h-6 rounded-lg bg-slate-900 flex items-center justify-center text-white font-black text-xs font-mono">
                AM
              </div>
              <span className="font-bold text-slate-400 tracking-wide">ApexMedia Digital Group</span>
            </div>
            <p className="max-w-md font-light text-slate-500 text-[11px] leading-relaxed">
              Standard commercial registration tax directives apply. Active GST invoices detailing corporate credits are automatically filed through certified billing software.
            </p>
          </div>

          <div className="space-y-1.5 md:text-right font-sans">
            <div className="text-[11px] font-mono text-slate-400 flex items-center justify-center md:justify-end gap-1.5">
              <Percent className="w-3.5 h-3.5 text-brand-400" />
              Corporate GSTIN: 27AABCA1234F1Z0 | 18% Tax Eligible
            </div>
            <div className="text-[11px] text-slate-500 leading-normal font-sans">
              © 2026 ApexMedia Retainers. All rights reserved. Managed globally.
            </div>
            <div className="text-[10px] text-slate-600 font-mono">
              Crafted for Digital Marketing Web & Product Assignment.
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
