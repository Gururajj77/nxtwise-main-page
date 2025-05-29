import { ReactNode } from 'react';

export type DashboardType = 'email' | 'inventory' | 'tasks';
export type EmailPage = 'dashboard' | 'campaign-builder' | 'subscribers' | 'analytics';

export interface DashboardConfig {
  id: DashboardType;
  title: string;
  description: string;
  icon: ReactNode;
  displayName: string;
  tagline: string;
  stats: {
    label: string;
    value: string;
    change?: string;
    positive?: boolean;
  }[];
  features: string[];
  bgColor: string;
  borderColor: string;
  accentColor: string;
}
