import { Metadata } from 'next';
import { CaseStudyHero } from '@/components/case-studies/hero';
import { DashboardShowcase } from '@/components/case-studies/dashboard-showcase';

export const metadata: Metadata = {
  title: 'Case Studies | NxtWise Solutions',
  description: 'Explore our portfolio of custom software solutions that have transformed businesses across various industries.',
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <CaseStudyHero />
      <DashboardShowcase />
    </div>
  );
}
