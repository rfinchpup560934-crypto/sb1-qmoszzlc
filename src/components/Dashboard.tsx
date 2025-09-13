import React from 'react';
import { TrendingUp, Target, DollarSign, Calendar, AlertTriangle, Star } from 'lucide-react';

const Dashboard = () => {
  const topNiches = [
    {
      name: 'Halloween Activity Books',
      competition: 32,
      sales: 8420,
      trend: '+45%',
      score: 94,
      reason: 'Seasonal peak + low saturated sub-niches',
      subNiches: ['Haunted Coloring', 'Spooky Puzzles', 'Monster Mazes']
    },
    {
      name: 'Gratitude Journals',
      competition: 28,
      sales: 12100,
      trend: '+38%',
      score: 91,
      reason: 'Thanksgiving surge + evergreen appeal',
      subNiches: ['Family Gratitude', 'Daily Reflection', 'Mindful Thanks']
    },
    {
      name: 'Christmas Planners',
      competition: 25,
      sales: 15200,
      trend: '+52%',
      score: 89,
      reason: 'Q4 preparation + recurring buyers',
      subNiches: ['Gift Planning', 'Menu Organization', 'Budget Tracking']
    },
    {
      name: 'Winter Recipe Collections',
      competition: 35,
      sales: 9800,
      trend: '+31%',
      score: 87,
      reason: 'Comfort food season + visual appeal',
      subNiches: ['Slow Cooker', 'Hot Beverages', 'Baking Basics']
    },
    {
      name: 'New Year Goal Planners',
      competition: 22,
      sales: 18500,
      trend: '+67%',
      score: 95,
      reason: 'Resolution season + productivity trend',
      subNiches: ['Habit Tracking', 'Vision Boards', 'Monthly Reviews']
    }
  ];

  const metrics = [
    { label: 'Active Niches', value: '2,847', change: '+12%', icon: Target, color: 'text-emerald-400' },
    { label: 'Avg Competition', value: '29%', change: '-5%', icon: TrendingUp, color: 'text-blue-400' },
    { label: 'Market Value', value: '$3.2M', change: '+23%', icon: DollarSign, color: 'text-yellow-400' },
    { label: 'Q4 Opportunities', value: '156', change: '+89%', icon: Calendar, color: 'text-purple-400' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Market Intelligence Dashboard</h1>
          <p className="text-gray-400">Real-time KDP market analysis and opportunity detection</p>
        </div>
        <div className="bg-amber-500/20 border border-amber-500/30 rounded-lg p-3 flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <span className="text-amber-400 font-medium">Q4 Peak Season Active</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-6 h-6 ${metric.color}`} />
                <span className={`text-sm font-medium ${metric.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                  {metric.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </div>
          );
        })}
      </div>

      {/* Top Opportunities */}
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Top 5 Market Opportunities</h2>
          <div className="text-sm text-gray-400">Weighted: 60% Competition, 40% Sales</div>
        </div>

        <div className="space-y-4">
          {topNiches.map((niche, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-emerald-400 font-bold text-lg">#{index + 1}</span>
                      <h3 className="text-lg font-semibold text-white">{niche.name}</h3>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 font-medium">{niche.score}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-3">
                    <div className="text-center">
                      <div className="text-sm text-gray-400">Competition</div>
                      <div className="text-emerald-400 font-semibold">{niche.competition}%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-400">Monthly Sales</div>
                      <div className="text-blue-400 font-semibold">{niche.sales.toLocaleString()}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-400">Trend</div>
                      <div className="text-purple-400 font-semibold">{niche.trend}</div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="text-sm text-gray-400 mb-1">Why it wins:</div>
                    <div className="text-white">{niche.reason}</div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-400 mb-2">Top Sub-Niches:</div>
                    <div className="flex flex-wrap gap-2">
                      {niche.subNiches.map((subNiche, subIndex) => (
                        <span key={subIndex} className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm">
                          {subNiche}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="ml-4 flex flex-col space-y-2">
                  <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm transition-colors">
                    Analyze Deep
                  </button>
                  <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm transition-colors">
                    Generate Books
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Market Heat Map</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Activity Books</span>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Journals</span>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{width: '72%'}}></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Planners</span>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{width: '68%'}}></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Cookbooks</span>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '45%'}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Seasonal Intelligence</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Current Season</span>
              <span className="text-orange-400 font-semibold">Q4 Holiday Peak</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Next Opportunity</span>
              <span className="text-purple-400 font-semibold">New Year Planning</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Market Saturation</span>
              <span className="text-emerald-400 font-semibold">Low (32%)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Profit Window</span>
              <span className="text-yellow-400 font-semibold">8 weeks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;