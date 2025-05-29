import { Mail, Plus, Settings, ExternalLink, Target, TrendingUp, ArrowUpRight, ChevronLeft, Send, Eye, Edit3, UserPlus, Download, Search, Star, AlertCircle } from 'lucide-react';
import { EmailPage } from './types';

export function EmailDashboardPreview({ onNavigate }: { onNavigate: (page: EmailPage) => void }) {
  return (
    <div className="bg-gray-50" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif' }}>
      {/* Dashboard Header */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h3 className="text-gray-900 text-sm md:text-base" style={{ fontWeight: 600, letterSpacing: '-0.025em' }}>Campaign Dashboard</h3>
            <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Live</span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => onNavigate('campaign-builder')}
              className="px-3 py-1.5 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-1 font-medium"
            >
              <Plus className="w-3 h-3" />
              New Campaign
            </button>
            <button className="p-2 hover:bg-blue-50 rounded-full transition-colors">
              <Settings className="w-4 h-4 text-blue-600" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="p-4 md:p-6 space-y-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-3 rounded-xl border border-blue-200/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-blue-700 font-medium">Sent</span>
              <Mail className="w-4 h-4 text-blue-600" />
            </div>
            <p className="text-lg font-bold text-blue-900">48,392</p>
            <p className="text-xs text-blue-600 flex items-center mt-1 font-medium">
              <ArrowUpRight className="w-3 h-3 mr-0.5" />
              12.5%
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-3 rounded-xl border border-green-200/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-green-700 font-medium">Opened</span>
              <ExternalLink className="w-4 h-4 text-green-600" />
            </div>
            <p className="text-lg font-bold text-green-900">12,003</p>
            <p className="text-xs text-green-600 flex items-center mt-1 font-medium">
              <ArrowUpRight className="w-3 h-3 mr-0.5" />
              8.3%
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-3 rounded-xl border border-purple-200/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-purple-700 font-medium">Clicked</span>
              <Target className="w-4 h-4 text-purple-600" />
            </div>
            <p className="text-lg font-bold text-purple-900">1,549</p>
            <p className="text-xs text-purple-600 flex items-center mt-1 font-medium">
              <ArrowUpRight className="w-3 h-3 mr-0.5" />
              5.7%
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 p-3 rounded-xl border border-indigo-200/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-indigo-700 font-medium">Converted</span>
              <TrendingUp className="w-4 h-4 text-indigo-600" />
            </div>
            <p className="text-lg font-bold text-indigo-900">342</p>
            <p className="text-xs text-indigo-600 flex items-center mt-1 font-medium">
              <ArrowUpRight className="w-3 h-3 mr-0.5" />
              22.1%
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 bg-white rounded-lg p-1 border border-gray-200">
          <button className="px-3 py-2 text-xs bg-blue-100 text-blue-700 rounded font-medium">Campaigns</button>
          <button 
            onClick={() => onNavigate('subscribers')}
            className="px-3 py-2 text-xs text-gray-600 hover:bg-gray-100 rounded font-medium"
          >
            Subscribers
          </button>
          <button 
            onClick={() => onNavigate('analytics')}
            className="px-3 py-2 text-xs text-gray-600 hover:bg-gray-100 rounded font-medium"
          >
            Analytics
          </button>
        </div>

        {/* Recent Campaigns Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <h4 className="font-medium text-gray-900 text-sm">Recent Campaigns</h4>
            <button 
              onClick={() => onNavigate('analytics')}
              className="text-xs text-blue-600 hover:text-blue-700 font-semibold"
            > 
              View all →
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-50/50 text-xs text-gray-600">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Campaign</th>
                  <th className="px-4 py-2 text-left font-medium">Status</th>
                  <th className="px-4 py-2 text-right font-medium">Sent</th>
                  <th className="px-4 py-2 text-right font-medium">Open Rate</th>
                  <th className="px-4 py-2 text-right font-medium">CTR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">
                    <div>
                      <p className="text-gray-900" style={{ fontWeight: 500 }}>Summer Sale 2024</p>
                      <p className="text-xs text-gray-500">Sent 2 hours ago</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500 text-white">
                    Active
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-right text-gray-900">12,450</td>
                  <td className="px-4 py-3 text-sm text-right">
                    <span className="text-green-600">28.4%</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-right">
                    <span className="text-green-600">3.8%</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">
                    <div>
                      <p className="font-medium text-gray-900">Product Launch</p>
                      <p className="text-xs text-gray-500">Sent yesterday</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-right text-gray-900">8,234</td>
                  <td className="px-4 py-3 text-sm text-right">
                    <span className="text-green-600">32.1%</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-right">
                    <span className="text-green-600">4.2%</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">
                    <div>
                      <p className="font-medium text-gray-900">Weekly Newsletter</p>
                      <p className="text-xs text-gray-500">Sent 3 days ago</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Completed
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-right text-gray-900">15,708</td>
                  <td className="px-4 py-3 text-sm text-right">
                    <span className="text-gray-600">22.7%</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-right">
                    <span className="text-gray-600">2.1%</span>
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

export function EmailCampaignBuilder({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-gray-50 h-[600px]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <h3 className="text-gray-900 text-base font-semibold">Campaign Builder</h3>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-xs border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
              Save Draft
            </button>
            <button className="px-3 py-1.5 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-1">
              <Send className="w-3 h-3" />
              Send Campaign
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Campaign Details */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h4 className="font-medium text-gray-900 mb-3">Campaign Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Campaign Name</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Black Friday Sale 2024"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Subject Line</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="🔥 Black Friday: Up to 70% Off Everything!"
              />
            </div>
          </div>
        </div>

        {/* Email Editor */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-gray-900">Email Content</h4>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded text-xs">
                <Eye className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded text-xs">
                <Edit3 className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="bg-gray-50 rounded border-2 border-dashed border-gray-300 h-64 flex items-center justify-center">
            <div className="text-center">
              <Mail className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Drag & drop email template or start from scratch</p>
              <button className="mt-2 px-4 py-2 text-xs bg-blue-600 text-white rounded hover:bg-blue-700">
                Choose Template
              </button>
            </div>
          </div>
        </div>

        {/* Audience Selection */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h4 className="font-medium text-gray-900 mb-3">Audience</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded border border-blue-200">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="rounded" checked readOnly />
                <div>
                  <p className="text-sm font-medium text-gray-900">All Subscribers</p>
                  <p className="text-xs text-gray-500">12,450 subscribers</p>
                </div>
              </div>
              <span className="text-xs text-blue-600 font-medium">Selected</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-200">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="rounded" />
                <div>
                  <p className="text-sm font-medium text-gray-900">VIP Customers</p>
                  <p className="text-xs text-gray-500">2,340 subscribers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EmailSubscribers({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-gray-50 h-[600px]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <h3 className="text-gray-900 text-base font-semibold">Subscriber Management</h3>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-1">
              <UserPlus className="w-3 h-3" />
              Add Subscriber
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Download className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-sm text-gray-500">Total Subscribers</p>
            <p className="text-2xl font-bold text-gray-900">12,450</p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-sm text-gray-500">Active</p>
            <p className="text-2xl font-bold text-green-600">11,200</p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-sm text-gray-500">Unsubscribed</p>
            <p className="text-2xl font-bold text-red-600">1,250</p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-sm text-gray-500">Growth Rate</p>
            <p className="text-2xl font-bold text-blue-600">+5.2%</p>
          </div>
        </div>

        {/* Subscriber List */}
        <div className="bg-white rounded-lg border">
          <div className="px-4 py-3 border-b flex items-center justify-between">
            <h4 className="font-medium text-gray-900">Subscribers</h4>
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search subscribers..." 
                className="pl-2 pr-3 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 text-xs text-gray-600">
                <tr>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Joined</th>
                  <th className="px-4 py-3 text-left">Engagement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">sarah.wilson@email.com</td>
                  <td className="px-4 py-3 text-sm text-gray-900">Sarah Wilson</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Active</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">Dec 15, 2024</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span className="text-xs text-gray-600">High</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">mike.johnson@email.com</td>
                  <td className="px-4 py-3 text-sm text-gray-900">Mike Johnson</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Active</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">Nov 28, 2024</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-gray-300" />
                      <span className="text-xs text-gray-600">Medium</span>
                    </div>
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

export function EmailAnalytics({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-gray-50 h-[600px]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <h3 className="text-gray-900 text-base font-semibold">Email Analytics</h3>
          </div>
          <div className="flex items-center gap-2">
            <select className="px-3 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>This year</option>
            </select>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Download className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Performance Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-500">Avg Open Rate</p>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">24.8%</p>
            <p className="text-xs text-green-600">+2.4% vs last month</p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-500">Avg Click Rate</p>
              <Target className="w-4 h-4 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">3.2%</p>
            <p className="text-xs text-blue-600">+0.8% vs last month</p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-500">Bounce Rate</p>
              <AlertCircle className="w-4 h-4 text-red-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">2.1%</p>
            <p className="text-xs text-green-600">-0.3% vs last month</p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-500">Revenue</p>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">$48.2K</p>
            <p className="text-xs text-green-600">+12% vs last month</p>
          </div>
        </div>

        {/* Top Performing Campaigns */}
        <div className="bg-white rounded-lg border">
          <div className="px-4 py-3 border-b">
            <h4 className="font-medium text-gray-900">Top Performing Campaigns</h4>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Black Friday Sale</p>
                <p className="text-xs text-gray-500">Sent Nov 25, 2024</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-green-600">42.3% Open Rate</p>
                <p className="text-xs text-gray-500">$12,450 Revenue</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Product Launch</p>
                <p className="text-xs text-gray-500">Sent Dec 1, 2024</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-blue-600">38.7% Open Rate</p>
                <p className="text-xs text-gray-500">$8,920 Revenue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
