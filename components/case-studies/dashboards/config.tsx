import { Mail, Pill, ListChecks } from 'lucide-react';
import { DashboardConfig } from './types';

export const dashboardConfigs: DashboardConfig[] = [
  {
    id: 'email',
    title: 'Email Marketing Platform',
    description: 'Streamline your email campaigns with our intelligent automation platform that delivers results',
    icon: <Mail className="w-5 h-5 text-blue-500" />,
    displayName: 'MailPro',
    tagline: 'Email marketing platform for digital agencies',
    stats: [
      { label: 'Open Rate', value: '24.8%', change: '+2.4%', positive: true },
      { label: 'Click Rate', value: '3.2%', change: '+0.8%', positive: true },
      { label: 'Subscribers', value: '12.4K', change: '+324', positive: true },
      { label: 'Revenue', value: '$48.2K', change: '+12%', positive: true },
    ],
    features: [
      'Automated campaign workflows',
      'Advanced A/B testing',
      'Smart subscriber segmentation',
      'Real-time performance analytics',
    ],
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    accentColor: 'text-blue-600',
  },
  {
    id: 'inventory',
    title: 'Medical Inventory System',
    description: 'Comprehensive solution for pharmacies to track medications, manage stock levels, and ensure compliance',
    icon: <Pill className="w-5 h-5 text-emerald-500" />,
    displayName: 'PharmaCare',
    tagline: 'Complete pharmacy management solution',
    stats: [
      { label: 'Total Products', value: '1,245', change: '+87 this month' },
      { label: 'Low Stock', value: '42', change: 'Needs attention', positive: false },
      { label: 'Expiring Soon', value: '18', change: 'Next 30 days', positive: false },
      { label: 'Daily Sales', value: '$3.8K', change: '+5.2%', positive: true },
    ],
    features: [
      'Real-time inventory tracking',
      'Automatic expiry alerts',
      'Supplier order management',
      'Prescription verification',
    ],
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    accentColor: 'text-emerald-600',
  },
  {
    id: 'tasks',
    title: 'Project Management Suite',
    description: 'Keep your team aligned and productive with intelligent task management and real-time collaboration',
    icon: <ListChecks className="w-5 h-5 text-violet-500" />,
    displayName: 'TaskFlow',
    tagline: 'Enterprise task and project management',
    stats: [
      { label: 'Active Projects', value: '12', change: '3 near deadline' },
      { label: 'Team Members', value: '48', change: '12 online' },
      { label: 'Completed', value: '87%', change: '+5% this week', positive: true },
      { label: 'On Track', value: '94%', change: 'Above target', positive: true },
    ],
    features: [
      'Sprint planning & tracking',
      'Resource allocation',
      'Time tracking & billing',
      'Team performance insights',
    ],
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
    accentColor: 'text-violet-600',
  },
];
