import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Activity, Filter, Search, Eye } from 'lucide-react';

const TrendsPanel = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const trends = [
    {
      keyword: 'Halloween Activity Books',
      searches: 45200,
      change: '+245%',
      competition: 'Low',
      cpc: '$0.65',
      status: 'rising',
      difficulty: 23,
      opportunity: 94
    },
    {
      keyword: 'Thanksgiving Gratitude Journal',
      searches: 32100,
      change: '+189%',
      competition: 'Medium',
      cpc: '$0.78',
      status: 'rising',
      difficulty: 35,
      opportunity: 87
    },
    {
      keyword: 'Christmas Planning Book',
      searches: 28900,
      change: '+167%',
      competition: 'Low',
      cpc: '$0.55',
      status: 'rising',
      difficulty: 28,
      opportunity: 91
    },
    {
      keyword: 'Winter Coloring Pages',
      searches: 22400,
      change: '+134%',
      competition: 'High',
      cpc: '$0.42',
      status: 'rising',
      difficulty: 65,
      opportunity: 72
    },
    {
      keyword: 'New Year Goal Tracker',
      searches: 41800,
      change: '+298%',
      competition: 'Low',
      cpc: '$0.89',
      status: 'exploding',
      difficulty: 19,
      opportunity: 96
    },
    {
      keyword: 'Holiday Recipe Collection',
      searches: 18700,
      change: '+112%',
      competition: 'Medium',
      cpc: '$0.67',
      status: 'steady',
      difficulty: 42,
      opportunity: 78
    },
    {
      keyword: 'Winter Self Care Journal',
      searches: 15300,
      change: '+156%',
      competition: 'Low',
      cpc: '$0.73',
      status: 'rising',
      difficulty: 31,
      opportunity: 85
    },
    {
      keyword: 'Christmas Kids Activities',
      searches: 33600,
      change: '+201%',
      competition: 'Medium',
      cpc: '$0.58',
      status: 'rising',
      difficulty: 38,
      opportunity: 83
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'exploding': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'rising': return 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30';
      case 'steady': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getCompetitionColor = (competition: string) => {
    switch (competition) {
      case 'Low': return 'text-emerald-400';
      case 'Medium': return 'text-yellow-400';
      case 'High': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const filteredTrends = trends.filter(trend => {
    if (filterType === 'rising' && trend.status !== 'rising' && trend.status !== 'exploding') return false;
    if (filterType === 'low-comp' && trend.competition !== 'Low') return false;
    if (searchTerm && !trend.keyword.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Live Market Trends</h1>
          <p className="text-gray-400">Real-time KDP keyword and niche analysis</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex space-x-4 items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search trends..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none"
        >
          <option value="all">All Trends</option>
          <option value="rising">Rising Only</option>
          <option value="low-comp">Low Competition</option>
        </select>

        <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors">
          <Filter className="w-4 h-4" />
          <span>Advanced Filter</span>
        </button>
      </div>

      {/* Trends Table */}
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800/50">
              <tr>
                <th className="text-left p-4 text-gray-300 font-semibold">Keyword/Niche</th>
                <th className="text-left p-4 text-gray-300 font-semibold">Monthly Searches</th>
                <th className="text-left p-4 text-gray-300 font-semibold">Trend</th>
                <th className="text-left p-4 text-gray-300 font-semibold">Competition</th>
                <th className="text-left p-4 text-gray-300 font-semibold">Status</th>
                <th className="text-left p-4 text-gray-300 font-semibold">Difficulty</th>
                <th className="text-left p-4 text-gray-300 font-semibold">Opportunity</th>
                <th className="text-left p-4 text-gray-300 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTrends.map((trend, index) => (
                <tr key={index} className="border-t border-gray-800 hover:bg-gray-800/30 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <div>
                        <div className="text-white font-medium">{trend.keyword}</div>
                        <div className="text-gray-400 text-sm">CPC: {trend.cpc}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="text-white font-semibold">{trend.searches.toLocaleString()}</div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">{trend.change}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`font-semibold ${getCompetitionColor(trend.competition)}`}>
                      {trend.competition}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(trend.status)}`}>
                      {trend.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${trend.difficulty < 30 ? 'bg-emerald-500' : trend.difficulty < 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                          style={{width: `${trend.difficulty}%`}}
                        ></div>
                      </div>
                      <span className="text-gray-400 text-sm">{trend.difficulty}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="text-lg font-bold text-emerald-400">{trend.opportunity}</div>
                      <div className="text-gray-400">/100</div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded text-white transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-emerald-600 hover:bg-emerald-700 rounded text-white transition-colors">
                        <Activity className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
          <div className="text-2xl font-bold text-emerald-400">156</div>
          <div className="text-gray-400 text-sm">Rising Trends</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
          <div className="text-2xl font-bold text-yellow-400">43</div>
          <div className="text-gray-400 text-sm">Low Competition</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
          <div className="text-2xl font-bold text-purple-400">$0.67</div>
          <div className="text-gray-400 text-sm">Avg CPC</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
          <div className="text-2xl font-bold text-red-400">12</div>
          <div className="text-gray-400 text-sm">Exploding</div>
        </div>
      </div>
    </div>
  );
};

export default TrendsPanel;