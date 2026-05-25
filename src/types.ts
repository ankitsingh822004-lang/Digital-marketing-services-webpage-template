/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PainPoint {
  id: string;
  title: string;
  description: string;
  problemScenario: string;
  solutionOutcome: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  icon: string; // Name of Lucide icon to render dynamically
  averageRoas: string;
  turnaroundTime: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  basePrice: number; // monthly base in INR
  isCustom: boolean;
  frequency: string;
  gstPercentage: number;
  badge?: string;
  tagline: string;
  features: {
    text: string;
    included: boolean;
  }[];
  comparisonMatrix: {
    [key: string]: string | boolean;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  statResult: string;
  statLabel: string;
  category: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  growthMetric: string;
  growthLabel: string;
  yearsActive: string;
}

export interface LeadSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  businessName: string;
  serviceInterest: string;
  monthlyBudget: string;
  customMessage: string;
  timestamp: string;
  status: 'new' | 'contacted';
}
