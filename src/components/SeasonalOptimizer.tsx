import React, { useState } from 'react';
import { Calendar, TrendingUp, DollarSign, Target, Snowflake, Leaf, Sun, Flower2, Gift, Heart, Zap, AlertCircle } from 'lucide-react';

const SeasonalOptimizer = () => {
  const [selectedQuarter, setSelectedQuarter] = useState('Q4');
  const [activeHoliday, setActiveHoliday] = useState('Halloween');

  const seasonalData = {
    Q1: {
      name: 'New Year Reset',
      icon: Zap,
      color: 'emerald',
      opportunities: [
        {
          name: 'Resolution Planners',
          potential: 95,
          competition: 25,
          peak: 'Jan 1-15',
          revenue: '$45K',
          keywords: ['goal tracker', 'habit planner', 'new year journal'],
          trends: '+340% searches in January'
        },
        {
          name: 'Fitness Journals',
          potential: 88,
          competition: 35,
          peak: 'Jan 1-31',
          revenue: '$32K',
          keywords: ['workout log', 'fitness tracker', 'gym diary'],
          trends: '+280% searches post-holidays'
        },
        {
          name: 'Diet & Nutrition Guides',
          potential: 82,
          competition: 45,
          peak: 'Jan 1-Feb 14',
          revenue: '$28K',
          keywords: ['meal planner', 'calorie tracker', 'healthy recipes'],
          trends: '+250% searches in January'
        }
      ]
    },
    Q2: {
      name: 'Spring Growth',
      icon: Flower2,
      color: 'green',
      opportunities: [
        {
          name: 'Garden Planning Books',
          potential: 90,
          competition: 30,
          peak: 'Mar 15-May 30',
          revenue: '$38K',
          keywords: ['garden planner', 'plant journal', 'seed tracker'],
          trends: '+220% searches in spring'
        },
        {
          name: 'Mother\'s Day Gifts',
          potential: 85,
          competition: 40,
          peak: 'Apr 1-May 12',
          revenue: '$35K',
          keywords: ['mom journal', 'mother gift', 'family planner'],
          trends: '+300% searches before Mother\'s Day'
        }
      ]
    },
    Q3: {
      name: 'Summer & School Prep',
      icon: Sun,
      color: 'yellow',
      opportunities: [
        {
          name: 'Back to School Planners',
          potential: 87,
          competition: 38,
          peak: 'Jul 15-Sep 15',
          revenue: '$42K',
          keywords: ['student planner', 'homework tracker', 'school organizer'],
          trends: '+260% searches in August'
        },
        {
          name: 'Summer Activity Books',
          potential: 83,
          competition: 42,
          peak: 'May 15-Aug 31',
          revenue: '$30K',
          keywords: ['summer fun', 'kids activities', 'vacation planner'],
          trends: '+180% searches in summer'
        }
      ]
    },
    Q4: {
      name: 'Holiday Goldmine',
      icon: Gift,
      color: 'red',
      opportunities: [
        {
          name: 'Halloween Activity Books',
          potential: 94,
          competition: 32,
          peak: 'Sep 1-Oct 31',
          revenue: '$52K',
          keywords: ['halloween coloring', 'spooky activities', 'monster puzzles'],
          trends: '+245% searches in October'
        },
        {
          name: 'Christmas Planners',
          potential: 96,
          competition: 25,
          peak: 'Oct 1-Dec 24',
          revenue: '$68K',
          keywords: ['christmas planner', 'holiday organizer', 'gift tracker'],
          trends: '+380% searches in December'
        },
        {
          name: 'Thanksgiving Gratitude',
          potential: 91,
          competition: 28,
          peak: 'Oct 1-Nov 28',
          revenue: '$45K',
          keywords: ['gratitude journal', 'thanksgiving book', 'family memories'],
          trends: '+190% searches in November'
        },
        {
          name: 'New Year Preparation',
          potential: 89,
          competition: 30,
          peak: 'Nov 1-Dec 31',
          revenue: '$41K',
          keywords: ['year review', 'goal setting', 'planning ahead'],
          trends: '+210% searches in December'
        }
      ]
    }
  };

  const currentSeason = seasonalData[selectedQuarter as keyof typeof seasonalData];
  const SeasonIcon = currentSeason.icon;

  const holidays = {
    Halloween: { date: 'Oct 31', color: 'orange', searches: '+245%' },
    Thanksgiving: { date: 'Nov 28', color: 'amber', searches: '+190%' },
    Christmas: { date: 'Dec 25', color: 'red', searches: '+380%' },
    'New Year': { date: 'Jan 1', color: 'purple', searches: '+340%' }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Q4 Seasonal Optimizer</h1>
          <p className="text-gray-400">Maximize profits with seasonal market intelligence</p>
        </div>
        <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 flex items-center space-x-2">
          <Gift className="w-5 h-5 text-red-400" />
          <span className="text-red-400 font-medium">Holiday Peak Active</span>
        </div>
      </div>

      {/* Quarter Selection */}
      <div className="grid grid-cols-4 gap-4">
        {Object.entries(seasonalData).map(([quarter, data]) => {
          const Icon = data.icon;
          const isActive = selectedQuarter === quarter;
          return (
            <button
              key={quarter}
              onClick={() => setSelectedQuarter(quarter)}
              className={`p-6 rounded-xl border transition-all duration-200 ${
                isActive
                  ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400'
                  : 'bg-gray-900/50 border-gray-800 text-gray-400 hover:border-gray-700'
              }`}
            >
              <Icon className="w-8 h-8 mb-3 mx-auto" />
              <div className="text-lg font-semibold mb-1">{quarter}</div>
              <div className="text-sm">{data.name}</div>
            </button>
          );
        })}
      </div>

      {/* Holiday Quick Access */}
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Holiday Opportunities</h3>
        <div className="grid grid-cols-4 gap-4">
          {Object.entries(holidays).map(([holiday, data]) => (
            <button
              key={holiday}
              onClick={() => setActiveHoliday(holiday)}
              className={`p-4 rounded-lg border transition-all duration-200 ${
                activeHoliday === holiday
                  ? `bg-${data.color}-500/20 border-${data.color}-500/30 text-${data.color}-400`
                  : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:border-gray-600'
              }`}
            >
              <div className="font-semibold mb-1">{holiday}</div>
              <div className="text-sm opacity-75">{data.date}</div>
              <div className="text-xs mt-2 font-medium">{data.searches}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Seasonal Opportunities */}
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <SeasonIcon className="w-8 h-8 text-emerald-400" />
            <div>
              <h3 className="text-xl font-semibold text-white">{selectedQuarter} Opportunities</h3>
              <p className="text-gray-400">{currentSeason.name} market analysis</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-emerald-400">{currentSeason.opportunities.length}</div>
            <div className="text-sm text-gray-400">Active Niches</div>
          </div>
        </div>

        <div className="space-y-6">
          {currentSeason.opportunities.map((opp, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-semibold text-white">{opp.name}</h4>
                    <div className="flex items-center space-x-1">
                      <Target className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">{opp.potential}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-3">{opp.trends}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">{opp.revenue}</div>
                  <div className="text-sm text-gray-400">Est. Revenue</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-4">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Competition</div>
                  <div className="text-lg font-semibold text-emerald-400">{opp.competition}%</div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                    <div 
                      className="bg-emerald-500 h-2 rounded-full" 
                      style={{width: `${100 - opp.competition}%`}}
                    ></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Peak Season</div>
                  <div className="text-lg font-semibold text-purple-400">{opp.peak}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Opportunity Score</div>
                  <div className="text-lg font-semibold text-yellow-400">{opp.potential}/100</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-2">Hot Keywords:</div>
                <div className="flex flex-wrap gap-2">
                  {opp.keywords.map((keyword, kidx) => (
                    <span key={kidx} className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors">
                  Deep Analysis
                </button>
                <button className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                  Generate Books
                </button>
                <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Track Niche
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seasonal Timeline */}
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Seasonal Revenue Timeline</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-white font-semibold">October: Halloween Peak</span>
            </div>
            <div className="text-orange-400 font-bold">$52K Revenue Potential</div>
          </div>
          <div className="flex items-center justify-between p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              <span className="text-white font-semibold">November: Thanksgiving Surge</span>
            </div>
            <div className="text-amber-400 font-bold">$45K Revenue Potential</div>
          </div>
          <div className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-white font-semibold">December: Christmas Domination</span>
            </div>
            <div className="text-red-400 font-bold">$68K Revenue Potential</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalOptimizer;