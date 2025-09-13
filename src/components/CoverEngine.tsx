import React, { useState } from 'react';
import { Palette, Eye, Download, Zap, Image, Layers, Sparkles, Target, TrendingUp, Settings } from 'lucide-react';

const CoverEngine = () => {
  const [selectedNiche, setSelectedNiche] = useState('Halloween Activity Books');
  const [designMode, setDesignMode] = useState('auto');
  const [analysisResults, setAnalysisResults] = useState(true);

  const coverAnalysis = {
    dominantColors: [
      { color: '#FF6B35', name: 'Halloween Orange', usage: '68%' },
      { color: '#2E2E2E', name: 'Dark Gray/Black', usage: '45%' },
      { color: '#8E44AD', name: 'Purple/Violet', usage: '32%' },
      { color: '#F1C40F', name: 'Golden Yellow', usage: '28%' },
      { color: '#E74C3C', name: 'Blood Red', usage: '25%' }
    ],
    topPatterns: [
      {
        name: 'Spooky Silhouettes',
        usage: '78%',
        conversion: '+34%',
        description: 'Black silhouettes against colored backgrounds'
      },
      {
        name: 'Cartoon Style',
        usage: '65%',
        conversion: '+28%',
        description: 'Friendly, non-scary cartoon characters'
      },
      {
        name: 'Hand-drawn Elements',
        usage: '52%',
        conversion: '+22%',
        description: 'Sketchy, artistic hand-drawn style'
      },
      {
        name: 'Bold Typography',
        usage: '71%',
        conversion: '+31%',
        description: 'Large, playful fonts with effects'
      }
    ],
    topFonts: [
      'Creepy/Horror Display Fonts (43%)',
      'Bold Sans-Serif (38%)',
      'Hand-lettered Style (29%)',
      'Playful Script (25%)'
    ],
    layoutTrends: [
      'Central character focus (67%)',
      'Border decorations (54%)',
      'Asymmetrical layouts (43%)',
      'Multiple activity previews (38%)'
    ]
  };

  const generatedDesigns = [
    {
      id: 1,
      title: 'Haunted Coloring Adventure',
      style: 'Cartoon + Bold Typography',
      colors: ['#FF6B35', '#2E2E2E', '#8E44AD'],
      score: 94,
      elements: ['Friendly ghost', 'Halloween border', 'Preview thumbnails'],
      predicted: '+45% CTR'
    },
    {
      id: 2,
      title: 'Spooky Activity Collection',
      style: 'Silhouette + Gradient',
      colors: ['#E74C3C', '#2E2E2E', '#F1C40F'],
      score: 91,
      elements: ['Castle silhouette', 'Activity icons', 'Glow effects'],
      predicted: '+38% CTR'
    },
    {
      id: 3,
      title: 'Monster Puzzle Party',
      style: 'Hand-drawn + Textured',
      colors: ['#8E44AD', '#FF6B35', '#2E2E2E'],
      score: 88,
      elements: ['Cute monsters', 'Puzzle pieces', 'Hand-lettered title'],
      predicted: '+42% CTR'
    },
    {
      id: 4,
      title: 'Halloween Fun Zone',
      style: 'Modern + Clean',
      colors: ['#FF6B35', '#F1C40F', '#2E2E2E'],
      score: 85,
      elements: ['Geometric shapes', 'Modern icons', 'Clean layout'],
      predicted: '+35% CTR'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Cover Design Engine</h1>
          <p className="text-gray-400">AI-powered cover analysis and generation system</p>
        </div>
        <div className="flex space-x-3">
          <select
            value={designMode}
            onChange={(e) => setDesignMode(e.target.value)}
            className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none"
          >
            <option value="auto">Auto Generation</option>
            <option value="manual">Manual Design</option>
            <option value="hybrid">Hybrid Mode</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors">
            <Sparkles className="w-4 h-4" />
            <span>Generate Covers</span>
          </button>
        </div>
      </div>

      {/* Market Analysis Results */}
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Market Pattern Analysis</h2>
          <div className="text-sm text-gray-400">Based on top 100 bestsellers in niche</div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Color Analysis */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Dominant Color Palette</h3>
            <div className="space-y-3">
              {coverAnalysis.dominantColors.map((color, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div 
                    className="w-8 h-8 rounded-full border border-gray-600"
                    style={{ backgroundColor: color.color }}
                  ></div>
                  <div className="flex-1">
                    <div className="text-white font-medium">{color.name}</div>
                    <div className="text-gray-400 text-sm">Used in {color.usage} of bestsellers</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pattern Analysis */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">High-Converting Patterns</h3>
            <div className="space-y-4">
              {coverAnalysis.topPatterns.map((pattern, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-medium">{pattern.name}</h4>
                    <span className="text-emerald-400 font-semibold">{pattern.conversion}</span>
                  </div>
                  <div className="text-gray-400 text-sm mb-2">{pattern.description}</div>
                  <div className="text-purple-400 text-sm">Usage: {pattern.usage}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Typography & Layout Insights */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Typography Trends</h3>
          <div className="space-y-3">
            {coverAnalysis.topFonts.map((font, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <div className="text-gray-300">{font}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Layout Patterns</h3>
          <div className="space-y-3">
            {coverAnalysis.layoutTrends.map((layout, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div className="text-gray-300">{layout}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Generated Designs */}
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">AI-Generated Designs</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm transition-colors">
              Regenerate All
            </button>
            <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm transition-colors">
              Download Pack
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {generatedDesigns.map((design) => (
            <div key={design.id} className="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{design.title}</h4>
                  <div className="text-gray-400 text-sm">{design.style}</div>
                </div>
                <div className="flex items-center space-x-1">
                  <Target className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">{design.score}</span>
                </div>
              </div>

              {/* Mock Cover Preview */}
              <div className="bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg p-6 mb-4 text-center text-white font-bold text-lg">
                COVER PREVIEW
                <div className="text-sm font-normal mt-2 opacity-75">
                  {design.title}
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-2">Color Palette:</div>
                <div className="flex space-x-2">
                  {design.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded border border-gray-600"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-2">Key Elements:</div>
                <div className="flex flex-wrap gap-2">
                  {design.elements.map((element, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-blue-400 text-xs">
                      {element}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-1">Predicted Performance:</div>
                <div className="text-emerald-400 font-semibold">{design.predicted}</div>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-sm transition-colors flex items-center justify-center space-x-1">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
                <button className="flex-1 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm transition-colors flex items-center justify-center space-x-1">
                  <Settings className="w-4 h-4" />
                  <span>Customize</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Design Specifications */}
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Print-Ready Specifications</h3>
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-emerald-400 mb-1">8.5" × 11"</div>
            <div className="text-gray-400 text-sm">Standard Size</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-1">300 DPI</div>
            <div className="text-gray-400 text-sm">Print Quality</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400 mb-1">0.125"</div>
            <div className="text-gray-400 text-sm">Bleed Area</div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
          <div className="text-blue-400 font-semibold mb-2">📁 Export Includes:</div>
          <div className="text-gray-300 text-sm">
            • High-resolution PNG/PDF files • Print-ready with bleeds • RGB and CMYK versions • 
            Editable source files • Font licensing info • Color codes reference
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverEngine;