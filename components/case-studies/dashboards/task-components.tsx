import { Plus, ChevronLeft, CheckCircle, MoreVertical, Users, BarChart3, Calendar, Clock, TrendingUp, UserPlus, Download } from 'lucide-react';

export type TasksPage = 'dashboard' | 'project-detail' | 'team' | 'reports';

export function TaskDashboardPreview({ onNavigate }: { onNavigate: (page: TasksPage) => void }) {
  return (
    <div className="bg-gray-50 h-[600px]" style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif' }}>
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h3 className="text-gray-900 text-base font-medium">Project Overview</h3>
            <select className="text-xs border border-violet-200 rounded-xl px-3 py-1.5 bg-violet-50/50">
              <option>Current Sprint</option>
              <option>All Projects</option>
            </select>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-xs bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl">
              <Plus className="w-3 h-3 mr-1" />
              New Task
            </button>
            <button onClick={() => onNavigate('team')} className="px-3 py-1.5 text-xs border rounded-xl">Team</button>
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        {/* Sprint Progress */}
        <div className="bg-gradient-to-br from-white to-violet-50/30 rounded-2xl border p-4">
          <div className="flex justify-between mb-3">
            <div>
              <h4 className="text-gray-900 font-medium">Sprint 23 Progress</h4>
              <p className="text-xs text-gray-500">Ends in 4 days</p>
            </div>
            <span className="text-2xl font-bold text-violet-600">87%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-gradient-to-r from-violet-500 to-purple-600 h-3 rounded-full" style={{ width: '87%' }}></div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4 text-center">
            <div>
              <p className="text-lg font-bold text-gray-900">24</p>
              <p className="text-xs text-gray-500">Completed</p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">3</p>
              <p className="text-xs text-gray-500">In Progress</p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">1</p>
              <p className="text-xs text-gray-500">Blocked</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-1 bg-white rounded-lg p-1 border">
          <button className="px-3 py-2 text-xs bg-violet-100 text-violet-700 rounded">Projects</button>
          <button onClick={() => onNavigate('team')} className="px-3 py-2 text-xs">Team</button>
          <button onClick={() => onNavigate('reports')} className="px-3 py-2 text-xs">Reports</button>
        </div>

        {/* Task Boards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-100 rounded-xl p-3">
            <div className="flex justify-between mb-3">
              <h5 className="font-medium text-gray-700 text-sm">To Do</h5>
              <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">5</span>
            </div>
            <div className="space-y-2">
              <div className="bg-white p-3 rounded-lg border cursor-pointer">
                <p className="text-sm font-medium">Update API documentation</p>
                <div className="flex gap-2 mt-1">
                  <span className="text-xs px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded">Backend</span>
                  <span className="text-xs text-gray-500">DEV-142</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-3">
            <div className="flex justify-between mb-3">
              <h5 className="font-medium text-gray-700 text-sm">In Progress</h5>
              <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">3</span>
            </div>
            <div className="space-y-2">
              <div className="bg-white p-3 rounded-lg border-2 border-violet-400 cursor-pointer" onClick={() => onNavigate('project-detail')}>
                <p className="text-sm font-medium">Implement user dashboard</p>
                <div className="flex gap-2 mt-1">
                  <span className="text-xs px-1.5 py-0.5 bg-purple-100 text-purple-700 rounded">Frontend</span>
                  <span className="text-xs text-gray-500">DEV-138</span>
                </div>
                <div className="mt-2">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-violet-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-3">
            <div className="flex justify-between mb-3">
              <h5 className="font-medium text-gray-700 text-sm">Done</h5>
              <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">24</span>
            </div>
            <div className="space-y-2">
              <div className="bg-white p-3 rounded-lg border opacity-75">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700 line-through">Setup CI/CD pipeline</p>
                    <span className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">DevOps</span>
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

export function TasksProjectDetail({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-gray-50 h-[600px]">
      <div className="bg-white border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div>
              <h3 className="font-semibold">User Dashboard Implementation</h3>
              <p className="text-xs text-gray-500">DEV-138 • Frontend Team</p>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="px-2 py-1 text-xs bg-violet-100 text-violet-700 rounded-full">In Progress</span>
            <button className="p-2 hover:bg-gray-100 rounded">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Progress */}
        <div className="bg-white rounded-lg border p-4">
          <div className="flex justify-between mb-3">
            <h4 className="font-medium">Progress Overview</h4>
            <span className="text-lg font-bold text-violet-600">65%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div className="bg-violet-500 h-2 rounded-full" style={{ width: '65%' }}></div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <p className="font-medium">8</p>
              <p className="text-xs text-gray-500">Completed</p>
            </div>
            <div>
              <p className="font-medium">3</p>
              <p className="text-xs text-gray-500">In Progress</p>
            </div>
            <div>
              <p className="font-medium">2</p>
              <p className="text-xs text-gray-500">Remaining</p>
            </div>
          </div>
        </div>

        {/* Task Details */}
        <div className="bg-white rounded-lg border p-4">
          <h4 className="font-medium mb-3">Task Details</h4>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-500">Description</label>
              <p className="text-sm">Create a responsive user dashboard with analytics widgets and user profile management.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500">Assignee</label>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-xs text-white">AM</div>
                  <span className="text-sm">Alex Morgan</span>
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-500">Due Date</label>
                <p className="text-sm">Dec 25, 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg border p-4">
          <h4 className="font-medium mb-3">Recent Activity</h4>
          <div className="space-y-2">
            <div className="flex gap-3 p-2 bg-blue-50 rounded">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm">Progress updated to 65%</p>
                <p className="text-xs text-gray-500">2 hours ago by Alex Morgan</p>
              </div>
            </div>
            <div className="flex gap-3 p-2 bg-green-50 rounded">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm">Completed user profile component</p>
                <p className="text-xs text-gray-500">1 day ago by Alex Morgan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TasksTeam({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-gray-50 h-[600px]">
      <div className="bg-white border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <h3 className="font-semibold">Team Overview</h3>
          </div>
          <button className="px-3 py-1.5 text-xs bg-violet-600 text-white rounded">
            <UserPlus className="w-3 h-3 mr-1" />
            Add Member
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Team Stats */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border text-center">
            <p className="text-2xl font-bold">48</p>
            <p className="text-sm text-gray-500">Team Members</p>
          </div>
          <div className="bg-white p-4 rounded-lg border text-center">
            <p className="text-2xl font-bold text-green-600">12</p>
            <p className="text-sm text-gray-500">Online Now</p>
          </div>
          <div className="bg-white p-4 rounded-lg border text-center">
            <p className="text-2xl font-bold text-violet-600">6</p>
            <p className="text-sm text-gray-500">Active Projects</p>
          </div>
          <div className="bg-white p-4 rounded-lg border text-center">
            <p className="text-2xl font-bold text-blue-600">94%</p>
            <p className="text-sm text-gray-500">Productivity</p>
          </div>
        </div>

        {/* Team Members */}
        <div className="bg-white rounded-lg border">
          <div className="px-4 py-3 border-b">
            <h4 className="font-medium">Team Members</h4>
          </div>
          <div className="divide-y">
            <div className="p-4 flex justify-between hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-medium">AM</div>
                <div>
                  <p className="font-medium">Alex Morgan</p>
                  <p className="text-sm text-gray-500">Frontend Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-medium">3 active tasks</p>
                  <p className="text-xs text-gray-500">87% completion rate</p>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="p-4 flex justify-between hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-medium">SK</div>
                <div>
                  <p className="font-medium">Sarah Kim</p>
                  <p className="text-sm text-gray-500">Backend Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-medium">2 active tasks</p>
                  <p className="text-xs text-gray-500">92% completion rate</p>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="p-4 flex justify-between hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center text-white font-medium">JD</div>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-gray-500">DevOps Engineer</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-medium">1 active task</p>
                  <p className="text-xs text-gray-500">95% completion rate</p>
                </div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TasksReports({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-gray-50 h-[600px]">
      <div className="bg-white border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <h3 className="font-semibold">Project Reports</h3>
          </div>
          <div className="flex gap-2">
            <select className="px-3 py-1.5 text-xs border rounded">
              <option>This Sprint</option>
              <option>Last 30 Days</option>
            </select>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Performance Metrics */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-sm text-gray-500">Sprint Velocity</p>
            <p className="text-2xl font-bold">42</p>
            <p className="text-xs text-green-600">+8% vs last sprint</p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-sm text-gray-500">Burndown Rate</p>
            <p className="text-2xl font-bold text-violet-600">87%</p>
            <p className="text-xs text-violet-600">On track</p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-sm text-gray-500">Avg Resolution Time</p>
            <p className="text-2xl font-bold">2.3d</p>
            <p className="text-xs text-green-600">-0.5d vs last sprint</p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-sm text-gray-500">Code Review Time</p>
            <p className="text-2xl font-bold">4.2h</p>
            <p className="text-xs text-green-600">-1.1h vs last sprint</p>
          </div>
        </div>

        {/* Project Status */}
        <div className="bg-white rounded-lg border p-4">
          <h4 className="font-medium mb-3">Project Status Overview</h4>
          <div className="space-y-3">
            <div className="flex justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium">E-commerce Platform</p>
                <p className="text-xs text-gray-500">12 tasks • 3 team members</p>
              </div>
              <div className="text-right">
                <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">On Track</span>
                <p className="text-xs text-gray-500 mt-1">95% complete</p>
              </div>
            </div>
            <div className="flex justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="font-medium">Mobile App Redesign</p>
                <p className="text-xs text-gray-500">8 tasks • 2 team members</p>
              </div>
              <div className="text-right">
                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">In Progress</span>
                <p className="text-xs text-gray-500 mt-1">65% complete</p>
              </div>
            </div>
            <div className="flex justify-between p-3 bg-amber-50 rounded-lg">
              <div>
                <p className="font-medium">API Integration</p>
                <p className="text-xs text-gray-500">5 tasks • 2 team members</p>
              </div>
              <div className="text-right">
                <span className="px-2 py-1 text-xs bg-amber-100 text-amber-800 rounded-full">At Risk</span>
                <p className="text-xs text-gray-500 mt-1">40% complete</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Performance */}
        <div className="bg-white rounded-lg border p-4">
          <h4 className="font-medium mb-3">Team Performance</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Frontend Team</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
                <span className="text-sm font-medium">92%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Backend Team</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
                <span className="text-sm font-medium">88%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">DevOps Team</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <span className="text-sm font-medium">95%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}