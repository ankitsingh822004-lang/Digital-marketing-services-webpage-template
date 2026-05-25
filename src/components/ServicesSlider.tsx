/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { SERVICES } from '../data';
import * as LucideIcons from 'lucide-react';
import { ChevronLeft, ChevronRight, Check, ArrowUpRight } from 'lucide-react';

interface ServicesSliderProps {
  onServiceSelect: (serviceName: string) => void;
}

export const ServicesSlider: React.FC<ServicesSliderProps> = ({ onServiceSelect }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Helper to resolve Icons dynamically
  const renderIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6" />;
    }
    return <LucideIcons.HelpCircle className="w-6 h-6" />;
  };

  const checkScrollLimit = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

      // Determine active slide index based on spacing offset
      const newIndex = Math.round(scrollLeft / 350);
      setActiveIndex(Math.min(SERVICES.length - 1, Math.max(0, newIndex)));
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollLimit);
      // Run once
      checkScrollLimit();
      window.addEventListener('resize', checkScrollLimit);
    }
    return () => {
      if (el) {
        el.removeEventListener('scroll', checkScrollLimit);
      }
      window.removeEventListener('resize', checkScrollLimit);
    };
  }, []);

  const slideLeft = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.clientWidth > 500 ? 440 : 320;
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const slideRight = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.clientWidth > 500 ? 440 : 320;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cards = container.getElementsByClassName('service-card');
      if (cards && cards[index]) {
        const offsetLeft = (cards[index] as HTMLElement).offsetLeft;
        container.scrollTo({
          left: offsetLeft - 16, // padding offset
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section id="services" className="py-20 px-4 bg-slate-900 text-white relative overflow-hidden">
      {/* Absolute ambient glow specifically behind active service */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-brand-400 bg-brand-600/10 px-3 py-1 rounded-full font-medium">
              What We Do Best
            </span>
            <h2 className="heading-display text-3xl sm:text-4xl font-bold tracking-tight text-white mt-3 mb-2">
              Our Core Digital Services
            </h2>
            <p className="text-slate-400 max-w-lg text-sm sm:text-base font-light font-sans">
              We focus on highly focused marketing techniques calibrated specifically to increase pipeline value and organic brand security.
            </p>
          </div>

          {/* Interactive Navigation Triggers */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={slideLeft}
              disabled={!canScrollLeft}
              id="slider-control-left"
              className={`p-3 rounded-full border transition-all cursor-pointer ${
                canScrollLeft
                  ? 'border-slate-700 bg-slate-800 text-white hover:bg-slate-700'
                  : 'border-slate-800 text-slate-600 cursor-not-allowed opacity-50'
              }`}
              aria-label="Scroll services left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={slideRight}
              disabled={!canScrollRight}
              id="slider-control-right"
              className={`p-3 rounded-full border transition-all cursor-pointer ${
                canScrollRight
                  ? 'border-slate-700 bg-slate-800 text-white hover:bg-slate-700'
                  : 'border-slate-800 text-slate-600 cursor-not-allowed opacity-50'
              }`}
              aria-label="Scroll services right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          id="services-carousel-track"
          className="flex overflow-x-auto scrollbar-none snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 scroll-smooth"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {SERVICES.map((srv, index) => (
            <div
              key={srv.id}
              className="service-card min-w-[290px] sm:min-w-[380px] md:min-w-[420px] max-w-[420px] bg-slate-950/85 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between snap-start hover:border-brand-500/50 transition-all duration-300 group"
            >
              <div>
                {/* Card Top Block */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 bg-brand-600/10 text-brand-400 rounded-2xl group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                    {renderIcon(srv.icon)}
                  </div>
                  <div className="text-right">
                    <span className="block text-xs font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/15 px-2.5 py-0.5 rounded-full font-medium">
                      {srv.averageRoas}
                    </span>
                    <span className="block text-[11px] text-slate-500 mt-1 font-mono">
                      {srv.turnaroundTime}
                    </span>
                  </div>
                </div>

                {/* Service Details info */}
                <h3 className="heading-display text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-brand-300 transition-colors/20">
                  {srv.title}
                </h3>
                <p className="text-brand-200 text-xs sm:text-sm font-medium mb-4 leading-normal font-sans">
                  {srv.tagline}
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-light font-sans">
                  {srv.description}
                </p>

                {/* Key Benefits lists representing deep corporate outcomes */}
                <ul className="space-y-3 mb-8">
                  {srv.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-light font-sans">
                      <div className="p-0.5 rounded bg-brand-500/10 text-brand-400 mt-0.5 flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Explicit CTA */}
              <button
                onClick={() => onServiceSelect(srv.title)}
                id={`srv-cta-${srv.id}`}
                className="w-full mt-auto py-3 px-4 bg-slate-900 border border-slate-800 hover:bg-brand-600 hover:border-brand-600 hover:text-white text-slate-300 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-slate-800 cursor-pointer"
              >
                Inquire about {srv.title}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Slide Indicators Navigation (Progress bar feel) */}
        <div className="flex justify-center items-center gap-2.5 mt-8">
          {SERVICES.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index ? 'w-10 bg-brand-500' : 'w-2.5 bg-slate-850 hover:bg-slate-700'
              }`}
              aria-label={`Go to service slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
