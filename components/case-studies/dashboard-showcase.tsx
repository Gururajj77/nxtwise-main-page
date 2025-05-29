'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Pill, Users, BarChart3, CheckCircle, Clock, TrendingUp, Package, Bell, Calendar, ListChecks, ExternalLink, Zap, Activity, Droplet, Shield, ClipboardCheck, Target, MoreVertical, Download, Filter, Search, ChevronDown, AlertCircle, ArrowUpRight, ArrowDownRight, Plus, Settings, RefreshCw, ChevronLeft, Edit3, Eye, Send, UserPlus, FileText, Star } from 'lucide-react';
import { EmailAnalytics, EmailCampaignBuilder, EmailDashboardPreview, EmailSubscribers } from './dashboards/email-components';
import { InventoryDashboardPreview, InventoryPage, InventoryProductDetail, InventoryReports, InventorySuppliers } from './dashboards/inventory-components';
import { TaskDashboardPreview, TasksPage, TasksProjectDetail, TasksTeam, TasksReports } from './dashboards/task-components';

type DashboardType = 'email' | 'inventory' | 'tasks';
type EmailPage = 'dashboard' | 'campaign-builder' | 'subscribers' | 'analytics';

export function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState<DashboardType>('email');
  const [emailPage, setEmailPage] = useState<EmailPage>('dashboard');
  const [inventoryPage, setInventoryPage] = useState<InventoryPage>('dashboard');
  const [tasksPage, setTasksPage] = useState<TasksPage>('dashboard');

  const dashboards = [
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

  const activeDashboard = dashboards.find(d => d.id === activeTab) || dashboards[0];

  const renderEmailContent = () => {
    switch (emailPage) {
      case 'campaign-builder':
        return <EmailCampaignBuilder onBack={() => setEmailPage('dashboard')} />;
      case 'subscribers':
        return <EmailSubscribers onBack={() => setEmailPage('dashboard')} />;
      case 'analytics':
        return <EmailAnalytics onBack={() => setEmailPage('dashboard')} />;
      default:
        return <EmailDashboardPreview onNavigate={setEmailPage} />;
    }
  };

  const renderInventoryContent = () => {
    switch (inventoryPage) {
      case 'product-detail':
        return <InventoryProductDetail onBack={() => setInventoryPage('dashboard')} />;
      case 'suppliers':
        return <InventorySuppliers onBack={() => setInventoryPage('dashboard')} />;
      case 'reports':
        return <InventoryReports onBack={() => setInventoryPage('dashboard')} />;
      default:
        return <InventoryDashboardPreview onNavigate={setInventoryPage} />;
    }
  };

  const renderTasksContent = () => {
    switch (tasksPage) {
      case 'project-detail':
        return <TasksProjectDetail onBack={() => setTasksPage('dashboard')} />;
      case 'team':
        return <TasksTeam onBack={() => setTasksPage('dashboard')} />;
      case 'reports':
        return <TasksReports onBack={() => setTasksPage('dashboard')} />;
      default:
        return <TaskDashboardPreview onNavigate={setTasksPage} />;
    }
  };

  return (
    <section id="dashboards" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Real-World Solutions</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Custom dashboards we've built for industry leaders to solve their unique challenges
          </p>
        </div>

        <Tabs 
          defaultValue="email" 
          className="w-full"
          onValueChange={(value) => {
            setActiveTab(value as DashboardType);
            setEmailPage('dashboard');
            setInventoryPage('dashboard');
            setTasksPage('dashboard');
          }}
        >
          {/* Tab Navigation */}
          <div className="flex flex-col items-center mb-8 lg:mb-12">
            <TabsList className="h-auto w-full max-w-3xl bg-slate-50/80 backdrop-blur-sm p-2 rounded-xl border border-slate-200 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
                {dashboards.map((dashboard) => (
                  <TabsTrigger 
                    key={dashboard.id} 
                    value={dashboard.id}
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary text-slate-600 hover:text-slate-900 hover:bg-slate-100/50`}
                  >
                    <span className="flex-shrink-0">{dashboard.icon}</span>
                    <span className="font-medium text-sm sm:text-base">{dashboard.displayName}</span>
                  </TabsTrigger>
                ))}
              </div>
            </TabsList>
            <p className="mt-4 text-sm md:text-base text-slate-500 text-center px-4">
              {activeDashboard.tagline}
            </p>
          </div>

          {/* Tab Content */}
          <div className={`rounded-2xl overflow-hidden transition-all duration-300 ${
            activeDashboard.id === 'email' ? 'bg-gradient-to-br from-blue-50 to-indigo-50' : 
            activeDashboard.id === 'inventory' ? 'bg-gradient-to-br from-teal-50 to-emerald-50' : 
            'bg-gradient-to-br from-violet-50 to-purple-50'
          }`}>
            <div className="p-4 md:p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                {/* Left side - Content */}
                <div className="w-full lg:w-5/12 space-y-6">
                  <div>
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium mb-4" style={{
                      backgroundColor: activeDashboard.id === 'email' ? 'rgba(99, 102, 241, 0.1)' : 
                                      activeDashboard.id === 'inventory' ? 'rgba(20, 184, 166, 0.1)' : 
                                      'rgba(139, 92, 246, 0.1)',
                      color: activeDashboard.id === 'email' ? '#4f46e5' : 
                                    activeDashboard.id === 'inventory' ? '#0d9488' : 
                                    '#7c3aed'
                    }}>
                      {activeDashboard.id === 'email' && <Zap className="w-4 h-4 mr-1.5" />}
                      {activeDashboard.id === 'inventory' && <Activity className="w-4 h-4 mr-1.5" />}
                      {activeDashboard.id === 'tasks' && <Target className="w-4 h-4 mr-1.5" />}
                      <span className="text-xs sm:text-sm">
                        {activeDashboard.id === 'email' ? 'Marketing Automation' : 
                         activeDashboard.id === 'inventory' ? 'Healthcare Tech' : 
                         'Team Productivity'}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                      {activeDashboard.title}
                    </h3>
                    <p className="text-slate-600 text-base md:text-lg">{activeDashboard.description}</p>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {activeDashboard.stats.map((stat, index) => (
                      <div key={index} className="bg-white/70 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-white/50 shadow-sm">
                        <p className="text-xs md:text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
                        <div className="flex items-baseline gap-1">
                          <span className="text-lg md:text-xl font-bold text-slate-900">{stat.value}</span>
                          {stat.change && (
                            <span className={`text-xs ${
                              stat.positive === false ? 'text-rose-600' : stat.positive ? 'text-green-600' : 'text-slate-500'
                            }`}>
                              {stat.change}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-slate-800 flex items-center text-sm md:text-base">
                      <Shield className="w-4 h-4 mr-2 text-slate-400" />
                      Core Capabilities
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {activeDashboard.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm md:text-base text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Right side - Dashboard Preview */}
                <div className="w-full lg:w-7/12 mt-6 lg:mt-0">
                  <div className="rounded-xl border border-slate-200 shadow-2xl overflow-hidden bg-white">
                    {activeDashboard.id === 'email' && renderEmailContent()}
                    {activeDashboard.id === 'inventory' && renderInventoryContent()}
                    {activeDashboard.id === 'tasks' && renderTasksContent()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}