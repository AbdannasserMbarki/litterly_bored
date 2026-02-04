import React from 'react';
import { ArrowRight, Cpu, Code2 } from 'lucide-react';
import { GlitchTitle } from './GlitchTitle';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-terminal-green/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-cyber-blue/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span className="text-xs font-mono text-gray-300 tracking-wider">REGISTRATION OPEN</span>
        </div>

        <GlitchTitle text="THE BORED" className="text-6xl md:text-9xl text-white mb-4 font-mono" />
        
        <h2 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-terminal-green to-cyber-blue font-bold tracking-wide mb-8 uppercase">
          Beyond the Hard-Coded Mind
        </h2>

        <p className="max-w-2xl text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
          Tired of formulas without soul? It's time to pivot. Build a brain, not just a script. 
          Create logic that survives without you holding its hand.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="group relative px-8 py-4 bg-terminal-green text-black font-bold font-mono text-lg rounded-sm hover:bg-white transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfm44DJPFdqarDzeZO12Ov1JmNA_Di2yEziW6jdhVeP9D5Enw/viewform?usp=dialog">INITIATE_PROTOCOL</a> <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="px-8 py-4 bg-transparent border border-gray-700 text-white font-mono text-lg rounded-sm hover:border-terminal-green hover:text-terminal-green transition-all duration-300">
            <a href="#rules">VIEW_DOCS</a>
          </button>
        </div>

        {/* Decor elements */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50">
          <div className="flex flex-col items-center gap-2">
             <Cpu className="w-8 h-8 text-gray-200" />
             <span className="text-xs font-mono text-gray-200">DYNAMIC AGENTS</span>
          </div>
          <div className="flex flex-col items-center gap-2">
             <Code2 className="w-8 h-8 text-gray-200" />
             <span className="text-xs font-mono text-gray-200">CLEAN CODE</span>
          </div>
          <div className="flex flex-col items-center gap-2">
             <span className="text-2xl font-bold font-mono text-gray-200">2</span>
             <span className="text-xs font-mono text-gray-200">STAGES</span>
          </div>
          <div className="flex flex-col items-center gap-2">
             <span className="text-2xl font-bold font-mono text-gray-200">∞</span>
             <span className="text-xs font-mono text-gray-200">ADAPTABILITY</span>
          </div>
        </div>
      </div>
    </section>
  );
};