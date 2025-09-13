import React, { useState } from 'react';
import { Target, TrendingUp, Lightbulb, Zap, Search, Filter, ChevronRight, Star, Eye, Brain } from 'lucide-react';

const NicheAnalyzer = () => {
  const [selectedNiche, setSelectedNiche] = useState('Halloween Activity Books');
  const [analysisDepth, setAnalysisDepth] = useState('deep');

  const nicheData = {
    'Halloween Activity Books': {
      mainScore: 94,
      competition: 32,
      volume: 45200,
      subNiches: [
        {
          name: 'Haunted Coloring Books',
          score: 96,
          angle: 'Therapeutic horror art for stress relief',
          competition: 28,
          volume: 12400,
          evolution: 'Add mindfulness prompts + color psychology',
          differentiator: 'Adult-focused spooky therapy'
        },
        {
          name: 'Monster Maze Collections',
          score: 92,
          angle: 'Educational monster mythology + puzzles',
          competition: 25,
          volume: 8900,
          evolution: 'Include QR codes for monster origin stories',
          differentiator: 'Learning + entertainment hybrid'
        },
        {
          name: 'Spooky Sudoku Variants',
          score: 89,
          angle: 'Halloween-themed number puzzles',
          competition: 30,
          volume: 6700,
          evolution: 'Progressive difficulty with horror storylines',
          differentiator: 'Narrative-driven puzzle progression'
        },
        {
          name: 'Ghost Story Prompts',
          score: 88,
          angle: 'Creative writing with supernatural themes',
          competition: 35,
          volume: 5200,
          evolution: 'Interactive choose-your-adventure format',
          differentiator: 'Reader becomes the storyteller'
        },
        {
          name: 'Halloween Recipe Journals',
          score: 85,
          angle: 'Spooky cooking with family activities',
          competition: 38,
          volume: 4800,
          evolution: 'Include food photography tips + social sharing',
          differentiator: 'Instagram-worthy Halloween food'
        }
      ],
      competitorGaps: [
        'Most books lack interactive elements',
        'Poor print quality in current market',
        'No adult-focused therapeutic angles',
        'Missing educational components',
        'Weak social media integration'
      ],
      evolutionOpportunities: [
        'AR integration with smartphone apps',
        'Therapeutic coloring with mindfulness guides',
        'Multi-generational family activity books',
        'Eco-friendly materials messaging',
        'International folklore integration'
      ]
    }
  };

  const currentNiche = nicheData[selectedNiche as keyof typeof nicheData];

  const competitorAnalysis = [
    {
      title: 'Halloween Fun Activity Book',
      rank: 3,
      reviews: 847,
      rating: 4.2,
      price: '$7.99',
      weakness: 'Generic design, no age targeting',
      opportunity: 'Create age-specific versions with premium design'
    },
    {
      title: 'Spooky Coloring Pages',
      rank: 7,
      reviews: 523,
      rating: 4.0,
      price: '$5.99',
      weakness: 'Low-quality paper, simple designs',
      opportunity: 'High-quality paper + complex, therapeutic designs'
    },
    {
      title: 'Monster Puzzles Collection',
      rank: 12,
      reviews: 298,
      rating: 3.8,
      price: '$8.99',
      weakness: 'Limited variety, poor instructions',
      opportunity: 'Diverse puzzle types + clear instructions + difficulty progression'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Niche Evolution Engine</h1>
          <p className="text-gray-400">Advanced sub-niche discovery and competitive evolution</p>
        </div>
        <div className="flex space-x-3">
          <select
            value={analysisDepth}
            onChange={(e) => setAnalysisDepth(e.target.value)}
            className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none"
          >
            <option value="quick">Quick Scan</option>
            <option value="deep">Deep Analysis</option>
            <option value="ai">AI Evolution</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors">
            <Brain className="w-4 h-4" />
            <span>Evolve Niche</span>
          </button>
        </div>
      </div>

      {/* Niche Overview */}
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Target className="w-8 h-8 text-emerald-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">{selectedNiche}</h2>
              <p className="text-gray-400">Primary niche analysis</p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <span className="text-2xl font-bold text-yellow-400">{currentNiche.mainScore}</span>
            <span className="text-gray-400">/100</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-1">Competition Level</div>
            <div className="text-2xl font-bold text-emerald-400 mb-2">{currentNiche.competition}%</div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-emerald-500 h-2 rounded-full" 
                style={{width: `${100 - currentNiche.competition}%`}}
              ></div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-1">Search Volume</div>
            <div className="text-2xl font-bold text-blue-400">{currentNiche.volume.toLocaleString()}</div>
            <div className="text-sm text-blue-300">monthly searches</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-1">Sub-Niches Found</div>
            <div className="text-2xl font-bold text-purple-400">{currentNiche.subNiches.length}</div>
            <div className="text-sm text-purple-300">evolution opportunities</div>
          </div>
        </div>
      </div>

      {/* Sub-Niches Evolution */}
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Evolved Sub-Niches</h3>
          <div className="text-sm text-gray-400">Ranked by profit potential</div>
        </div>

        <div className="space-y-4">
          {currentNiche.subNiches.map((subNiche, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-emerald-400 font-bold text-lg">#{index + 1}</span>
                    <h4 className="text-lg font-semibold text-white">{subNiche.name}</h4>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 font-medium">{subNiche.score}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-3">
                    <div>
                      <div className="text-sm text-gray-400">Smart Angle</div>
                      <div className="text-purple-400 font-medium">{subNiche.angle}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Competition</div>
                      <div className="text-emerald-400 font-medium">{subNiche.competition}%</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Volume</div>
                      <div className="text-blue-400 font-medium">{subNiche.volume.toLocaleString()}</div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="text-sm text-gray-400 mb-1">Evolution Strategy:</div>
                    <div className="text-white bg-purple-500/10 border border-purple-500/20 rounded p-2 text-sm">
                      {subNiche.evolution}
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="text-sm text-gray-400 mb-1">Key Differentiator:</div>
                    <div className="text-emerald-400 font-medium">{subNiche.differentiator}</div>
                  </div>
                </div>

                <div className="ml-4 flex flex-col space-y-2">
                  <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm transition-colors">
                    Generate Books
                  </button>
                  <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm transition-colors">
                    Cover Analysis
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Competitor Gap Analysis */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Market Gaps Identified</h3>
          <div className="space-y-3">
            {currentNiche.competitorGaps.map((gap, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-gray-300">{gap}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Evolution Opportunities</h3>
          <div className="space-y-3">
            {currentNiche.evolutionOpportunities.map((opp, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-gray-300">{opp}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competitor Analysis */}
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Top Competitor Analysis</h3>
        <div className="space-y-4">
          {competitorAnalysis.map((comp, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-white mb-1">{comp.title}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>Rank #{comp.rank}</span>
                    <span>{comp.reviews} reviews</span>
                    <span>⭐ {comp.rating}</span>
                    <span className="text-green-400 font-semibold">{comp.price}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Weakness</div>
                  <div className="text-red-400 text-sm">{comp.weakness}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Our Opportunity</div>
                  <div className="text-emerald-400 text-sm">{comp.opportunity}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NicheAnalyzer;