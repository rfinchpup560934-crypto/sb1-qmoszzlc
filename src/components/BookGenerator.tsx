import React, { useState } from 'react';
import { BookOpen, Zap, Download, Settings, Target, FileText, Image, Search, CheckCircle, Clock, Sparkles } from 'lucide-react';

const BookGenerator = () => {
  const [generationMode, setGenerationMode] = useState('auto');
  const [selectedNiche, setSelectedNiche] = useState('Halloween Activity Books');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState(0);

  const generateBooks = async () => {
    setIsGenerating(true);
    const steps = [
      'Analyzing niche trends...',
      'Generating book concepts...',
      'Creating cover designs...',
      'Building interior content...',
      'Optimizing SEO metadata...',
      'Finalizing KDP packages...'
    ];

    for (let i = 0; i < steps.length; i++) {
      setGenerationStep(i);
      await new Promise(resolve => setTimeout(resolve, 1500));
    }
    
    setIsGenerating(false);
    setGenerationStep(0);
  };

  const generatedBooks = [
    {
      id: 1,
      title: 'Haunted Coloring Adventures: 50 Spooky Pages for Halloween Fun',
      subtitle: 'Premium Activity Book with Therapeutic Designs for All Ages',
      niche: 'Halloween Coloring',
      score: 96,
      keywords: ['halloween coloring book', 'spooky activities', 'adult coloring', 'kids halloween', 'therapeutic art'],
      description: 'Transform your Halloween season with 50 beautifully crafted coloring pages featuring friendly ghosts, magical pumpkins, and enchanting scenes. Perfect for stress relief and family bonding.',
      pages: 108,
      price: '$8.97',
      competition: 28,
      salesPotential: '$45K',
      status: 'Ready for Upload'
    },
    {
      id: 2,
      title: 'Monster Maze Madness: Brain-Boosting Puzzles for Halloween',
      subtitle: 'Educational Monster Mythology with Progressive Difficulty Levels',
      niche: 'Halloween Puzzles',
      score: 92,
      keywords: ['halloween puzzles', 'monster mazes', 'brain games', 'educational activities', 'kids puzzles'],
      description: 'Challenge your mind with 75 progressively difficult mazes featuring legendary monsters from around the world. Each puzzle includes fascinating mythology facts.',
      pages: 156,
      price: '$9.97',
      competition: 25,
      salesPotential: '$38K',
      status: 'Ready for Upload'
    },
    {
      id: 3,
      title: 'Spooky Sudoku Collection: Halloween Number Puzzles with Stories',
      subtitle: 'Narrative-Driven Puzzle Experience for Horror Lovers',
      niche: 'Halloween Sudoku',
      score: 89,
      keywords: ['halloween sudoku', 'spooky puzzles', 'number games', 'brain training', 'puzzle book'],
      description: 'Experience Sudoku like never before with spine-tingling stories that unfold as you solve each puzzle. 100 puzzles with varying difficulty levels.',
      pages: 124,
      price: '$7.97',
      competition: 30,
      salesPotential: '$32K',
      status: 'Ready for Upload'
    },
    {
      id: 4,
      title: 'Ghost Story Writing Prompts: Create Your Own Supernatural Tales',
      subtitle: 'Interactive Creative Writing with Choose-Your-Adventure Elements',
      niche: 'Halloween Writing',
      score: 88,
      keywords: ['writing prompts', 'ghost stories', 'creative writing', 'halloween journal', 'storytelling'],
      description: 'Unleash your creativity with 200+ supernatural writing prompts and interactive story elements. Perfect for aspiring writers and Halloween enthusiasts.',
      pages: 142,
      price: '$8.47',
      competition: 35,
      salesPotential: '$28K',
      status: 'Ready for Upload'
    },
    {
      id: 5,
      title: 'Halloween Recipe & Memory Journal: Spooky Cooking Adventures',
      subtitle: 'Instagram-Worthy Halloween Food with Photography Tips',
      niche: 'Halloween Recipes',
      score: 85,
      keywords: ['halloween recipes', 'spooky cooking', 'food journal', 'family activities', 'holiday cooking'],
      description: 'Create magical Halloween memories with 50+ spooky recipes, photography tips, and space for family memories. Perfect for social media sharing.',
      pages: 118,
      price: '$9.47',
      competition: 38,
      salesPotential: '$25K',
      status: 'Ready for Upload'
    }
  ];

  const generationSteps = [
    'Analyzing niche trends...',
    'Generating book concepts...',
    'Creating cover designs...',
    'Building interior content...',
    'Optimizing SEO metadata...',
    'Finalizing KDP packages...'
  ];

  const seoOptimization = {
    primaryKeywords: ['halloween activity book', 'spooky coloring pages', 'kids halloween crafts'],
    longTailKeywords: ['halloween coloring book for adults', 'spooky maze puzzles for kids', 'therapeutic halloween art'],
    categories: [
      'Books > Children\'s Books > Activities, Crafts & Games > Activity Books',
      'Books > Arts & Photography > Drawing > Coloring Books for Grown-Ups',
      'Books > Children\'s Books > Holidays & Celebrations > Halloween'
    ],
    backendKeywords: ['halloween', 'spooky', 'activity', 'coloring', 'puzzles', 'kids', 'adult', 'crafts', 'october', 'pumpkin', 'ghost', 'monster', 'therapeutic', 'stress relief', 'family fun']
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Book Factory</h1>
          <p className="text-gray-400">One-click KDP book generation with full optimization</p>
        </div>
        <div className="flex space-x-3">
          <select
            value={generationMode}
            onChange={(e) => setGenerationMode(e.target.value)}
            className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none"
          >
            <option value="auto">Auto Generation</option>
            <option value="custom">Custom Settings</option>
            <option value="batch">Batch Mode</option>
          </select>
          <button
            onClick={generateBooks}
            disabled={isGenerating}
            className="flex items-center space-x-2 px-6 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-600 text-white rounded-lg transition-colors"
          >
            <Sparkles className={`w-5 h-5 ${isGenerating ? 'animate-pulse' : ''}`} />
            <span>{isGenerating ? 'Generating...' : 'Generate 10 Books'}</span>
          </button>
        </div>
      </div>

      {/* Generation Progress */}
      {isGenerating && (
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="w-6 h-6 text-emerald-400 animate-spin" />
            <h3 className="text-xl font-semibold text-white">Generating Your Book Empire</h3>
          </div>
          
          <div className="space-y-3">
            {generationSteps.map((step, index) => (
              <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${
                index === generationStep 
                  ? 'bg-emerald-500/20 border border-emerald-500/30' 
                  : index < generationStep 
                    ? 'bg-green-500/10 border border-green-500/20'
                    : 'bg-gray-800/30 border border-gray-700'
              }`}>
                {index < generationStep ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : index === generationStep ? (
                  <div className="w-5 h-5 border-2 border-emerald-400 rounded-full animate-spin border-t-transparent"></div>
                ) : (
                  <div className="w-5 h-5 border-2 border-gray-600 rounded-full"></div>
                )}
                <span className={`${
                  index <= generationStep ? 'text-white' : 'text-gray-400'
                }`}>{step}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SEO Optimization Panel */}
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-6">SEO Optimization Engine</h3>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Primary Keywords</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {seoOptimization.primaryKeywords.map((keyword, index) => (
                <span key={index} className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm">
                  {keyword}
                </span>
              ))}
            </div>
            
            <h4 className="text-lg font-semibold text-white mb-3">Long-tail Keywords</h4>
            <div className="flex flex-wrap gap-2">
              {seoOptimization.longTailKeywords.map((keyword, index) => (
                <span key={index} className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Optimized Categories</h4>
            <div className="space-y-2 mb-4">
              {seoOptimization.categories.map((category, index) => (
                <div key={index} className="text-gray-300 text-sm p-2 bg-blue-500/10 border border-blue-500/20 rounded">
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-lg font-semibold text-white mb-3">Backend Keywords (Auto-Generated)</h4>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
            <div className="text-gray-300 text-sm">
              {seoOptimization.backendKeywords.join(' • ')}
            </div>
          </div>
        </div>
      </div>

      {/* Generated Books */}
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Generated Book Collection</h2>
          <div className="text-sm text-gray-400">Ready for KDP upload • Total potential: $168K</div>
        </div>

        <div className="space-y-6">
          {generatedBooks.map((book) => (
            <div key={book.id} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-semibold text-white">{book.title}</h4>
                    <div className="flex items-center space-x-1">
                      <Target className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 font-semibold">{book.score}</span>
                    </div>
                    <span className="px-2 py-1 bg-green-500/20 border border-green-500/30 rounded text-green-400 text-xs">
                      {book.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{book.subtitle}</p>
                  <p className="text-gray-300 text-sm mb-3">{book.description}</p>
                </div>
                <div className="ml-6 text-right">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">{book.price}</div>
                  <div className="text-sm text-gray-400">Suggested Price</div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-sm text-gray-400">Pages</div>
                  <div className="text-lg font-semibold text-white">{book.pages}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-400">Competition</div>
                  <div className="text-lg font-semibold text-emerald-400">{book.competition}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-400">Sales Potential</div>
                  <div className="text-lg font-semibold text-purple-400">{book.salesPotential}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-400">Niche</div>
                  <div className="text-lg font-semibold text-blue-400">{book.niche}</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-2">Optimized Keywords:</div>
                <div className="flex flex-wrap gap-2">
                  {book.keywords.map((keyword, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-blue-400 text-xs">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Download Package</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                  <FileText className="w-4 h-4" />
                  <span>Preview Interior</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  <Image className="w-4 h-4" />
                  <span>View Cover</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors">
                  <Settings className="w-4 h-4" />
                  <span>Customize</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Export & Upload Options</h3>
        
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center">
            <BookOpen className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <div className="text-lg font-semibold text-white mb-2">Complete KDP Package</div>
            <div className="text-gray-400 text-sm">Cover + Interior + Metadata</div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center">
            <FileText className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-lg font-semibold text-white mb-2">Print-Ready Files</div>
            <div className="text-gray-400 text-sm">High-res PDF with bleeds</div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center">
            <Search className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-lg font-semibold text-white mb-2">SEO Metadata</div>
            <div className="text-gray-400 text-sm">Keywords + Categories + Description</div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
          <div className="text-emerald-400 font-semibold mb-2">📦 Each Package Includes:</div>
          <div className="text-gray-300 text-sm">
            • High-resolution cover (PNG/PDF) • Print-ready interior (PDF) • KDP metadata template • 
            Keyword research report • Marketing copy suggestions • Royalty calculator • Upload checklist
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookGenerator;