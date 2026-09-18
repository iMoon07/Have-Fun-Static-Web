import type { LucideIcon } from 'lucide-react';


export interface Student {
  name: string;
  img: string;
  linkedinUrl?: string;
  role?: string;
}

export interface OwaspItem {
  id: string;
  category: string;
  cwes: number;
  prevalence: string;
  risk: 'Critical' | 'High' | 'Moderate' | 'New';
}

export interface MitreTactic {
  name: string;
  icon: LucideIcon;
  techniques: string[];
}

export interface FaqItem {
  category: string;
  q: string;
  a: string;
  talk: string;
}

export interface NavItem {
  name: string;
  id: string;
}

export interface SystemStat {
  label: string;
  value: string;
  status: 'online' | 'stable' | 'secure';
}
