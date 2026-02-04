import React from 'react';
import { Ban, Layers, FileCode } from 'lucide-react';

export const SpecsSection: React.FC = () => {
  const specs = [
    {
      icon: <Ban className="w-8 h-8 text-cyber-blue" />,
      title: 'The "No-Magic" Constraint',
      desc: 'The AI must function with minimal hard-coded parameters. Avoid direct value checks. Embrace normalized utility scores and fuzzy logic.',
      highlight: 'No hard distance checks.'
    },
    {
      icon: <Layers className="w-8 h-8 text-terminal-green" />,
      title: 'Environmental Adaptability',
      desc: 'Tested across two stages: Controlled Proof vs. Chaos Environment. The exact same script must navigate both successfully.',
      highlight: 'No "if stage == 2" hacks.'
    },
    {
      icon: <FileCode className="w-8 h-8 text-purple-400" />,
      title: 'The "Clean Code" Mandate',
      desc: 'Every line must be justifiable. Optimization is key. Logic must be lightweight and documented. Structural integrity over copy-pasta.',
      highlight: 'Justify every line.'
    }
  ];

  return (
    <section id="specs" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
        {/* Grid Background Overlay */}
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical <span className="text-gray-600">Specs</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Strict constraints breed creativity. Adhere to these three pillars to qualify.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <div key={index} className="group relative bg-gray-900/50 border border-gray-800 hover:border-terminal-green/50 p-8 rounded-lg transition-all duration-300 hover:bg-gray-900/80 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent group-hover:via-terminal-green transition-all duration-500"></div>
              
              <div className="mb-6 p-3 bg-gray-800 rounded-lg inline-block group-hover:bg-gray-700 transition-colors">
                {spec.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-terminal-green transition-colors font-mono">
                {index + 1}. {spec.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                {spec.desc}
              </p>

              <div className="inline-block px-3 py-1 bg-gray-800 rounded border border-gray-700 text-xs font-mono text-gray-300">
                &lt; {spec.highlight} /&gt;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};