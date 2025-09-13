import React, { useState, useEffect } from 'react';
import { TrendingUp, RefreshCw, Target, Calendar, BookOpen, Palette, Download, ChevronRight, BarChart3, Eye, DollarSign, Star } from 'lucide-react';
import TrendsPanel from './components/TrendsPanel';
import SeasonalOptimizer from './components/SeasonalOptimizer';
import NicheAnalyzer from './components/NicheAnalyzer';
import CoverEngine from './components/CoverEngine';
import BookGenerator from './components/BookGenerator';
import Dashboard from './components/Dashboard';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLastUpdate(new Date());
    setIsRefreshing(false);
  };

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'trends', label: 'Live Trends', icon: TrendingUp },
    { id: 'seasonal', label: 'Q4 Optimizer', icon: Calendar },
    { id: 'niches', label: 'Niche Evolution', icon: Target },
    { id: 'covers', label: 'Cover Engine', icon: Palette },
    { id: 'generator', label: 'Book Factory', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900/50 backdrop-blur-xl border-r border-gray-800">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">KDP Dominator</h1>
                <p className="text-xs text-gray-400">Market Intelligence</p>
              </div>
            </div>

            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-600 text-white rounded-lg transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span>{isRefreshing ? 'Updating...' : 'Refresh Data'}</span>
              </button>
              <p className="text-xs text-gray-400 mt-2 text-center">
                Last update: {lastUpdate.toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-8">
            {activeTab === 'dashboard' && <Dashboard />}
            {activeTab === 'trends' && <TrendsPanel />}
            {activeTab === 'seasonal' && <SeasonalOptimizer />}
            {activeTab === 'niches' && <NicheAnalyzer />}
            {activeTab === 'covers' && <CoverEngine />}
            {activeTab === 'generator' && <BookGenerator />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;