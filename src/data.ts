/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PainPoint, Service, PricingPlan, Testimonial, CaseStudy } from './types';

export const PAIN_POINTS: PainPoint[] = [
  {
    id: 'budget-leak',
    title: 'Ad Budget Wastage & Poor Quality Leads',
    description: 'You are pouring thousands into search and social ads, but your inbox is filled with spam, under-qualified inquiries, or absolute silence.',
    problemScenario: 'Relying on generic automated ad recommendations, targeting overly broad audiences, and missing conversion tracking configuration.',
    solutionOutcome: 'Direct-response audience mapping, rigorous structural negative keywords setup, and precise multi-source conversion-event attribution.'
  },
  {
    id: 'organic-flatline',
    title: 'Flatlined Organic Growth & Decreased SEO Visibility',
    description: 'Google updates have tanked your rankings. You produce steady blog articles, but the traffic needle does not budge and competitors are ranking above.',
    problemScenario: 'Writing content for search engine bots rather than solving target problems, bloated site speeds, and outdated technical markup.',
    solutionOutcome: 'Semantic intent matching, technical Core Web Vitals optimization, and building authoritative product-focused link vectors.'
  },
  {
    id: 'brand-clutter',
    title: 'Fragmented Brand Identity & Inconsistent Positioning',
    description: 'Your services are premium, but your visual content feels disconnected, outdated, and fails to command high-ticket, high-trust corporate clients.',
    problemScenario: 'No unified style guide, conflicting typography across presentations, and confusing value propositions on landing pages.',
    solutionOutcome: 'High-contrast design design systems, uniform typography rules, precise brand messaging guides, and cohesive marketing templates.'
  },
  {
    id: 'retention-leak',
    title: 'High Turn Rate & Lost Pipeline Engagement',
    description: 'Acquiring initial traffic is fine, but visitors bounce quickly without looking around and early leads vanish without ever transforming into buyers.',
    problemScenario: 'A complete lack of remarketing triggers, missing tailored email drip workflows, and confusing navigation pipelines.',
    solutionOutcome: 'Behavioral-based audience remarketing, dynamic interactive visual lead tools, and multi-stage retention campaigns.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    tagline: 'Dominate intent-driven customer searches.',
    description: 'Move beyond keyword stuffing. We construct a multi-tiered search network strategy encompassing modern topical authority mapping, code-level schema performance optimization, and premium organic acquisition.',
    benefits: [
      'Topical cluster schema engineering & absolute crawling efficiency',
      'High-velocity structural page performance (Core Web Vitals)',
      'Intent-optimized buyer guide indexing and competitor gap mining'
    ],
    icon: 'Search',
    averageRoas: '4.8x Avg ROAS',
    turnaroundTime: 'First results in 45-60 days'
  },
  {
    id: 'paid-ads',
    title: 'High-Performance Paid Advertising',
    tagline: 'Predictable buyer pipelines, scaled scientifically.',
    description: 'Maximize your advertising yield. We design, track, and optimize full-funnel high-scale campaigns across Google, Meta, and LinkedIn, protecting you from wasted ad spend with constant multivariate testing.',
    benefits: [
      'Hyper-granular behavioral pixel placement & tag setup',
      'Ad creative cycles designed specifically for conversion and scroll-stop',
      'Rigorous daily budget allocation auditing to avoid decay'
    ],
    icon: 'TrendingUp',
    averageRoas: '5.2x Avg ROAS',
    turnaroundTime: 'Active in 7-10 working days'
  },
  {
    id: 'social',
    title: 'Social Media Growth & Marketing',
    tagline: 'Cultivate a loyal community that drives customer actions.',
    description: 'Transform passive scrolling into active brand allegiance. We direct multi-channel social positioning to cultivate organic reach, community retention, and active social listening mechanisms.',
    benefits: [
      'Platform-native vertical asset creation (Instagram Reels, YouTube Shorts)',
      'In-cycle community building & high-intent direct message hooks',
      'Targeted industry influencer co-promotional scaling networks'
    ],
    icon: 'Share2',
    averageRoas: '3.1x Avg ROAS',
    turnaroundTime: 'Initial traction in 15 days'
  },
  {
    id: 'branding',
    title: 'Omnichannel Brand Strategy & Identity',
    tagline: 'Command high-ticket prices with unmatched brand authority.',
    description: 'Position your business as a premium market category leader. We engineer complete visual architectures, positioning maps, style playbooks, and asset frameworks that build credibility instantly.',
    benefits: [
      'Engineered vector corporate logo configurations & design systems',
      'Positioning maps, competitive distinctiveness matrix, & voice rules',
      'Custom styled marketing asset templates for uniform scaling'
    ],
    icon: 'Award',
    averageRoas: 'Long-term Pipeline Value',
    turnaroundTime: 'Fully completed in 3-4 weeks'
  },
  {
    id: 'content',
    title: 'Content Creation & Copywriting',
    tagline: 'Sales copy engineered for conversion and psychological resonance.',
    description: 'Words that write checks. We craft premium copy for customer landing pages, informative whitepapers, corporate newsletters, and highly specialized micro-content to guide the buyer lifecycle.',
    benefits: [
      'Frictionless whitepaper creation with high opt-in response',
      'High-click email newsletter sequences optimized for open rates',
      'High-converting product landing pages backed by user testing'
    ],
    icon: 'FileText',
    averageRoas: '4.2x Avg ROAS',
    turnaroundTime: 'Flexible delivery schedules'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'kickstart',
    name: 'Brand Kickstart',
    basePrice: 19999,
    isCustom: false,
    frequency: 'month',
    gstPercentage: 18,
    tagline: 'Ideal for growing startups needing core digital marketing systems.',
    features: [
      { text: 'Core SEO Audit & Performance Outline', included: true },
      { text: 'Paid Ad Setup (1 Platform: Meta or Google)', included: true },
      { text: 'Monthly Active Budget limit: up to ₹50,000', included: true },
      { text: '4 Custom Designed Social Media Posts/mo', included: true },
      { text: 'Standard Multi-Platform Monthly Progress Report', included: true },
      { text: 'Dedicated Account Manager', included: false },
      { text: 'Bi-Weekly Strategy Alignments & Custom Audits', included: false },
      { text: 'Advanced API Tracking & Multi-Funnel Flow Integration', included: false }
    ],
    comparisonMatrix: {
      dedicatedManager: 'Shared Support Line',
      weeklyUpdates: 'Monthly Progress Reports',
      adBudgetCap: '₹50,000 / month max',
      seoFocus: 'Basic Audit (Keywords only)',
      strategySessions: 'Quarterly',
      apiIntegration: 'No',
      customCreatives: '4 per month'
    }
  },
  {
    id: 'growth',
    name: 'Growth Engine',
    basePrice: 44999,
    isCustom: false,
    frequency: 'month',
    gstPercentage: 18,
    badge: 'Best Value',
    tagline: 'Our signature system designed for rapid competitive expansion.',
    features: [
      { text: 'Full SEO On-Page/Off-Page topical planning', included: true },
      { text: 'Multivariate Ads Setup (2 Platforms: Meta & Google)', included: true },
      { text: 'Monthly Active Budget limit: up to ₹2,00,000', included: true },
      { text: '12 Custom Designed Social Media Graphics/Reels', included: true },
      { text: 'Bi-Weekly Strategy Alignments & Custom Audits', included: true },
      { text: 'Dedicated Project Manager & Account Strategist', included: true },
      { text: 'Custom Competitor Intel Audit', included: true },
      { text: 'Advanced API Tracking & Multi-Funnel Flow Integration', included: false }
    ],
    comparisonMatrix: {
      dedicatedManager: 'Dedicated PM + Strategist',
      weeklyUpdates: 'Bi-Weekly Detailed Report & Call',
      adBudgetCap: '₹2,00,000 / month max',
      seoFocus: 'Topical Authority Plan + 5 content outlines/mo',
      strategySessions: 'Bi-Weekly Video Calls',
      apiIntegration: 'Base Meta API / Google Tags',
      customCreatives: '12 per month (inc. 4 video formats)'
    }
  },
  {
    id: 'accelerator',
    name: 'Revenue Accelerator',
    basePrice: 89999,
    isCustom: false,
    frequency: 'month',
    gstPercentage: 18,
    tagline: 'Aggressive growth system backed by extensive testing and support.',
    features: [
      { text: 'Complete Topical Authority & Technical SEO Mapping', included: true },
      { text: 'Omnichannel Ad Campaigns (Meta, Google, & LinkedIn)', included: true },
      { text: 'Monthly Active Budget limit: up to ₹10,00,000', included: true },
      { text: '24 Multi-Platform Social Posts & Vertical Video Clips', included: true },
      { text: 'Weekly Real-time Reporting Dashboard & Slack Sync', included: true },
      { text: 'Dedicated Lead Strategist with Call Support', included: true },
      { text: 'Landing Page copywriting & structural conversion testing', included: true },
      { text: 'Advanced API Tracking & Multi-Funnel Flow Integration', included: true }
    ],
    comparisonMatrix: {
      dedicatedManager: 'Lead Strategist + Creative Director',
      weeklyUpdates: 'Weekly Reports + Slack Workspace Integration',
      adBudgetCap: '₹10,00,000 / month max',
      seoFocus: 'Enterprise Mapping + 12 comprehensive articles/mo',
      strategySessions: 'Weekly Tactical Sync',
      apiIntegration: 'Full Conversions API / Server Tagging',
      customCreatives: '24 per month (inc. 8 interactive assets)'
    }
  },
  {
    id: 'enterprise',
    name: 'Infinity Enterprise',
    basePrice: 0,
    isCustom: true,
    frequency: 'custom',
    gstPercentage: 18,
    tagline: 'Bespoke marketing architecture for global market domination.',
    features: [
      { text: 'Unlimited SEO Topical Development & Authority Work', included: true },
      { text: 'Global Search/Social Multi-Geo Campaigns (No Budget Cap)', included: true },
      { text: 'Personal Web-to-Lead CRM Integration Architecture', included: true },
      { text: 'Complete branding audit, custom styles & graphic system', included: true },
      { text: 'Instant Hot-Line Call Support & Hourly Slack Response', included: true },
      { text: 'On-demand custom funnel engineering & landing web design', included: true },
      { text: 'Advanced Server-to-Server attribution pipelines & warehousing', included: true },
      { text: 'Quarterly board-level presentation & planning assets', included: true }
    ],
    comparisonMatrix: {
      dedicatedManager: 'Complete Retainer Agency Team',
      weeklyUpdates: 'Realtime Live Dashboard + Daily Slack Sync',
      adBudgetCap: 'Unlimited Ad Budgets Managed',
      seoFocus: 'Continuous Competitive Defense & Expansion',
      strategySessions: 'On-Demand Integration Sync',
      apiIntegration: 'Serverless Pipeline & ERP syncing',
      customCreatives: 'Unlimited creative requests'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: "Our marketing systems were completely siloed before we started using this digital blueprint. Within three months of running the Growth Engine campaign, our lead volume doubled while our cost per acquisition plummeted by 42%. Truly world-class tactical work.",
    author: "Rohan Advani",
    role: "Chief Marketing Officer",
    company: "Ascent Retail Group",
    statResult: "+148%",
    statLabel: "Lead Rate Increase",
    category: "Paid Ads"
  },
  {
    id: 't-2',
    quote: "Securing topical authorization in modern search engines was a dream for us. The SEO strategy mapped with product-focused buyer intent brought massive organic search traffic. Our sales pipeline is now heavily driven by search queries with high conversion intent.",
    author: "Dr. Amara Sen",
    role: "Founder & CEO",
    company: "MedVitals Diagnostics",
    statResult: "84,000+",
    statLabel: "Monthly Organic Impressions",
    category: "SEO"
  },
  {
    id: 't-3',
    quote: "We were highly skeptical about social media bringing real corporate SaaS leads. Their direct message funnel strategy paired with targeted LinkedIn newsletters unlocked relationships with Fortune 500 company representatives in just over 60 business days.",
    author: "Kabir Mehta",
    role: "Director of Business Growth",
    company: "ZetaStream Logistics",
    statResult: "12x",
    statLabel: "Sovereign Account ROI",
    category: "Social Growth"
  },
  {
    id: 't-4',
    quote: "The branding guide and asset library they built gave our internal team the confidence to execute quickly. Our presentation formatting is uniform, and we command premium prices with full clarity. The design system felt premium from day one.",
    author: "Shreya Nair",
    role: "Head of Communications",
    company: "Asteria Workspace Labs",
    statResult: "100%",
    statLabel: "Consistent Touchpoints",
    category: "Branding"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'c-1',
    clientName: 'Prism Tech Solutions',
    industry: 'B2B Software as a Service',
    challenge: 'Struggling with a generic ad pipeline running ₹3.5,000/day CAC with search terms that triggered non-commercial inquiries.',
    solution: 'Designed strict negative matching hierarchies, built server-side Meta Conversions API tracking, and custom interactive ROI calculator forms on ad landing pages.',
    growthMetric: '210% Drop',
    growthLabel: 'In Total Cost per Acquisition (CAC)',
    yearsActive: 'Collaborated for 3.5 Years'
  },
  {
    id: 'c-2',
    clientName: 'Aether Retail Brands',
    industry: 'Premium E-Commerce',
    challenge: 'Highly dependent on paid social platforms during seasonality, resulting in heavy price wars and low organic margins.',
    solution: 'Constructed an on-page semantic outline, localized buyer keyword targeting, optimized cumulative layout content layout layout, and secured authority link injections.',
    growthMetric: '₹34 Lakhs',
    growthLabel: 'Additional Revenue from Direct SEO Search',
    yearsActive: 'Collaborated for 2 Years'
  },
  {
    id: 'c-3',
    clientName: 'Vertex Health Networks',
    industry: 'Multi-Location Care Networks',
    challenge: 'A fragmented set of regional identities which confuse new patients, resulting in high brand churn and leakage rates.',
    solution: 'Restructured physical location tags across Maps, normalized all corporate visuals, launched high-empathy paciente case interviews, and localized geo-targeted Meta Ads.',
    growthMetric: '8.4x',
    growthLabel: 'Inbound Patient Booking Intake Coefficient',
    yearsActive: 'Collaborated for 1.2 Years'
  }
];

export const BRAND_LOGOS = [
  { name: 'Prism Tech Systems', initials: 'PT' },
  { name: 'Aether Retail Brands', initials: 'AR' },
  { name: 'Apex Finance Systems', initials: 'AF' },
  { name: 'Vertex Care Networks', initials: 'VC' },
  { name: 'Ascent Enterprise SaaS', initials: 'AE' }
];
