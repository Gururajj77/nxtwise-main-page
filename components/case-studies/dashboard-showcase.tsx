'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Pill, Users, BarChart3, CheckCircle, Clock, TrendingUp, Package, Bell, Calendar, ListChecks, ExternalLink, Zap, Activity, Droplet, Shield, ClipboardCheck, Target, MoreVertical, Download, Filter, Search, ChevronDown, AlertCircle, ArrowUpRight, ArrowDownRight, Plus, Settings, RefreshCw, ChevronLeft, Edit3, Eye, Send, UserPlus, FileText, Star } from 'lucide-react';
import { EmailAnalytics, EmailCampaignBuilder, EmailDashboardPreview, EmailSubscribers } from './dashboards/email-components';

type DashboardType = 'email' | 'inventory' | 'tasks';
type EmailPage = 'dashboard' | 'campaign-builder' | 'subscribers' | 'analytics';

export function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState<DashboardType>('email');
  const [emailPage, setEmailPage] = useState<EmailPage>('dashboard');

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
            // Reset email page when switching tabs
            setEmailPage('dashboard');
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
                    {activeDashboard.id === 'inventory' && <InventoryDashboardPreview />}
                    {activeDashboard.id === 'tasks' && <TaskDashboardPreview />}
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

// Inventory Dashboard Preview - More realistic
function InventoryDashboardPreview() {
  return (
    <div className="bg-gray-50" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      {/* Dashboard Header */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h3 className="text-gray-900 text-sm md:text-base" style={{ fontWeight: 700, letterSpacing: '0.01em' }}>Inventory Management</h3>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">Last updated:</span>
              <span className="text-xs text-gray-700">2 min ago</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-xs bg-emerald-600 text-white rounded hover:bg-emerald-700 flex items-center gap-1 font-medium">
              <Plus className="w-3 h-3" />
              Add Product
            </button>
            <button className="p-1.5 border border-gray-300 hover:bg-gray-50 rounded transition-colors">
              <Filter className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="p-4 md:p-6 space-y-4">
        {/* Alert Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-amber-900" style={{ fontWeight: 600 }}>18 products expiring soon</p>
            <p className="text-xs text-amber-700 mt-0.5">Review and take action on products expiring within 30 days</p>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white p-3 rounded border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">Total Value</span>
              <TrendingUp className="w-4 h-4 text-blue-500" />
            </div>
            <p className="text-lg font-semibold text-gray-900">$124,580</p>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <ArrowUpRight className="w-3 h-3 mr-0.5" />
              5.2%
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">Total Items</span>
              <Package className="w-4 h-4 text-green-500" />
            </div>
            <p className="text-lg font-semibold text-gray-900">1,245</p>
            <p className="text-xs text-gray-500 mt-1">87 categories</p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">Low Stock</span>
              <AlertCircle className="w-4 h-4 text-amber-500" />
            </div>
            <p className="text-lg font-semibold text-gray-900">42</p>
            <p className="text-xs text-amber-600 mt-1">Need reorder</p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">Out of Stock</span>
              <AlertCircle className="w-4 h-4 text-red-500" />
            </div>
            <p className="text-lg font-semibold text-gray-900">7</p>
            <p className="text-xs text-red-600 mt-1">Critical</p>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded border shadow-sm">
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <h4 className="font-medium text-gray-900 text-sm">Stock Overview</h4>
            <div className="flex items-center gap-2">
              <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2" />
              <input 
              type="text" 
              placeholder="Search products..." 
              className="pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50"
              />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-emerald-50/50 text-xs text-gray-600 border-b border-emerald-100">
                <tr>
                  <th className="px-4 py-3 text-left font-bold">Product</th>
                  <th className="px-4 py-2 text-left font-medium">Category</th>
                  <th className="px-4 py-2 text-right font-medium">Stock</th>
                  <th className="px-4 py-2 text-right font-medium">Status</th>
                  <th className="px-4 py-2 text-center font-medium">Expiry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">
                    <div>
                      <p className="text-gray-900" style={{ fontWeight: 600 }}>Paracetamol 500mg</p>
                      <p className="text-xs text-gray-500">SKU: MED-001</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">Pain Relief</td>
                  <td className="px-4 py-3 text-sm text-right">
                    <span className="font-medium text-gray-900">124</span>
                    <span className="text-gray-500"> units</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <span className="text-xs text-green-600">Good</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-center">
                    <span className="text-gray-600">Mar 2025</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">
                    <div>
                      <p className="font-medium text-gray-900">Amoxicillin 250mg</p>
                      <p className="text-xs text-gray-500">SKU: ANT-042</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">Antibiotics</td>
                  <td className="px-4 py-3 text-sm text-right">
                    <span className="font-medium text-gray-900">42</span>
                    <span className="text-gray-500"> units</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                      <span className="text-xs text-amber-600">Low</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-center">
                    <span className="text-amber-600 font-medium">Jan 2025</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">
                    <div>
                      <p className="font-medium text-gray-900">Insulin Glargine</p>
                      <p className="text-xs text-gray-500">SKU: INS-088</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">Diabetes</td>
                  <td className="px-4 py-3 text-sm text-right">
                    <span className="font-medium text-gray-900">15</span>
                    <span className="text-gray-500"> vials</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                      <span className="text-xs text-red-600">Critical</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-center">
                    <span className="text-red-600 font-medium">Dec 2024</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// Task Dashboard Preview - More realistic
function TaskDashboardPreview() {
  return (
    <div className="bg-gray-50" style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif' }}>
      {/* Dashboard Header */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h3 className="text-gray-900 text-sm md:text-base" style={{ fontWeight: 500, letterSpacing: '-0.01em' }}>Project Overview</h3>
            <select className="text-xs border border-violet-200 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-violet-50/50 font-medium">
              <option>Current Sprint</option>
              <option>All Projects</option>
              <option>My Tasks</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-xs bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl hover:from-violet-700 hover:to-purple-700 flex items-center gap-1.5 shadow-sm font-medium">
              <Plus className="w-3.5 h-3.5" />
              New Task
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="p-4 md:p-6 space-y-4">
        {/* Sprint Progress */}
        <div className="bg-gradient-to-br from-white to-violet-50/30 rounded-2xl border border-violet-200/50 p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h4 className="text-gray-900 text-sm" style={{ fontWeight: 500 }}>Sprint 23 Progress</h4>
              <p className="text-xs text-gray-500">Ends in 4 days</p>
            </div>
            <span className="text-2xl font-bold text-violet-600">87%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-gradient-to-r from-violet-500 to-purple-600 h-3 rounded-full" style={{ width: '87%' }}></div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900">24</p>
              <p className="text-xs text-gray-500">Completed</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900">3</p>
              <p className="text-xs text-gray-500">In Progress</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900">1</p>
              <p className="text-xs text-gray-500">Blocked</p>
            </div>
          </div>
        </div>

        {/* Task Boards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl p-3 border border-gray-200/50">
            <div className="flex items-center justify-between mb-3">
              <h5 className="font-medium text-gray-700 text-sm">To Do</h5>
              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">5</span>
            </div>
            <div className="space-y-2">
              <div className="bg-white p-3 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow cursor-pointer">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-900" style={{ fontWeight: 500 }}>Update API documentation</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded">Backend</span>
                      <span className="text-xs text-gray-500">DEV-142</span>
                    </div>
                  </div>
                  <img className="w-6 h-6 rounded-full" src="https://ui-avatars.com/api/?name=JD&background=8b5cf6&color=fff&size=24" alt="JD" />
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow cursor-pointer">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Fix login validation bug</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-1.5 py-0.5 bg-red-100 text-red-700 rounded">Bug</span>
                      <span className="text-xs px-1.5 py-0.5 bg-amber-100 text-amber-700 rounded">High</span>
                    </div>
                  </div>
                  <img className="w-6 h-6 rounded-full" src="https://ui-avatars.com/api/?name=SK&background=10b981&color=fff&size=24" alt="SK" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-3">
            <div className="flex items-center justify-between mb-3">
              <h5 className="font-medium text-gray-700 text-sm">In Progress</h5>
              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">3</span>
            </div>
            <div className="space-y-2">
              <div className="bg-white p-3 rounded-lg border-2 border-violet-400 hover:shadow-sm transition-shadow cursor-pointer">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Implement user dashboard</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-1.5 py-0.5 bg-purple-100 text-purple-700 rounded">Frontend</span>
                      <span className="text-xs text-gray-500">DEV-138</span>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                        <span>Progress</span>
                        <span>65%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-violet-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                  <img className="w-6 h-6 rounded-full" src="https://ui-avatars.com/api/?name=AM&background=f59e0b&color=fff&size=24" alt="AM" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-3">
            <div className="flex items-center justify-between mb-3">
              <h5 className="font-medium text-gray-700 text-sm">Done</h5>
              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">24</span>
            </div>
            <div className="space-y-2">
              <div className="bg-white p-3 rounded-lg border border-gray-200 opacity-75 hover:shadow-sm transition-shadow cursor-pointer">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700 line-through">Setup CI/CD pipeline</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">DevOps</span>
                      <span className="text-xs text-gray-500">DEV-125</span>
                    </div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200 opacity-75 hover:shadow-sm transition-shadow cursor-pointer">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700 line-through">Database optimization</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">Backend</span>
                      <span className="text-xs text-gray-500">DEV-132</span>
                    </div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
