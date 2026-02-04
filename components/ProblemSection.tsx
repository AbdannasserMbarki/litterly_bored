import React from 'react';
import { AlertTriangle, CheckCircle2, TerminalSquare } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-terminal-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              The Core <span className="text-error-red">Problem</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Most AI in games is "brittle". It breaks the moment you change the environment because it relies on hard-coded values—Magic Numbers. 
              <br/><br/>
              Your mission is to develop a <span className="text-terminal-green font-bold">Generalizable Agent Logic</span> that adapts dynamically to varying environments without manual tuning.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 border border-error-red/20 bg-error-red/5 rounded backdrop-blur-sm">
                <AlertTriangle className="w-6 h-6 text-error-red flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-error-red font-mono font-bold mb-1">BRITTLE LOGIC</h4>
                  <p className="text-sm text-gray-500">Requires manual updates for every map change. Breaks under stress.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border border-terminal-green/20 bg-terminal-green/5 rounded backdrop-blur-sm">
                <CheckCircle2 className="w-6 h-6 text-terminal-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-terminal-green font-mono font-bold mb-1">ADAPTIVE LOGIC</h4>
                  <p className="text-sm text-gray-500">Weighs environment relative to state. Works anywhere.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-terminal-green to-cyber-blue rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            {/* Code Comparison Board */}
            <div className="relative bg-[#0F0F12] rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
              {/* Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#1A1A1E] border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <TerminalSquare className="w-4 h-4 text-gray-400" />
                  <span className="text-xs font-mono text-gray-300">agent_logic.ts</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                </div>
              </div>
              
              <div className="p-6 font-mono text-sm leading-relaxed">
                {/* Line Numbers + Content Grid */}
                <div className="grid grid-cols-[30px_1fr] gap-4">
                  {/* Line Numbers */}
                  <div className="text-right text-gray-700 select-none flex flex-col gap-1">
                    <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                    <span className="my-4 block h-px w-full bg-transparent"></span>
                    <span>12</span><span>13</span><span>14</span><span>15</span><span>16</span>
                  </div>

                  {/* Code Content */}
                  <div className="flex flex-col gap-1">
                    {/* Bad Code Section */}
                    <div className="relative group/code transition-all duration-300">
                      <div className="absolute -left-2 top-0 bottom-0 w-1 bg-error-red/20 group-hover/code:bg-error-red rounded-full transition-colors"></div>
                      <p className="text-gray-500 mb-1">// ❌ The "Magic Number" Trap</p>
                      <div className="text-gray-300 opacity-60 group-hover/code:opacity-100 transition-opacity">
                        <span className="text-purple-400">if</span> (distance &lt; <span className="text-error-red font-bold">10</span>) {'{'}<br/>
                        &nbsp;&nbsp;<span className="text-blue-300">attack</span>();<br/>
                        {'}'}
                      </div>
                    </div>

                    <div className="h-px bg-gray-800 w-full my-6 relative">
                       <span className="absolute left-1/2 -top-3 -translate-x-1/2 bg-[#0F0F12] px-2 text-xs text-gray-600 font-mono">VS</span>
                    </div>

                    {/* Good Code Section */}
                    <div className="relative group/code transition-all duration-300">
                      <div className="absolute -left-2 top-0 bottom-0 w-1 bg-terminal-green/20 group-hover/code:bg-terminal-green rounded-full transition-colors"></div>
                      <p className="text-gray-500 mb-1">// ✅ Context-Steering</p>
                      <div className="text-gray-100">
                        <span className="text-purple-400">const</span> utility = <span className="text-yellow-200">normalize</span>(dist, range);<br/>
                        <span className="text-purple-400">if</span> (utility &gt; threshold) {'{'}<br/>
                        &nbsp;&nbsp;<span className="text-terminal-green">execute_behavior</span>(context);<br/>
                        {'}'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="px-4 py-2 bg-[#1A1A1E] border-t border-gray-700 flex justify-between items-center text-[10px] font-mono text-gray-500">
                <div className="flex gap-4">
                  <span>UTF-8</span>
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-terminal-green animate-pulse"></div>
                  <span>COMPILING...</span>
                </div>
              </div>
            </div>
            
            {/* Floating decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-terminal-green/5 rounded-full blur-3xl pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};