import React from 'react';
import { Download, ShieldAlert, Gavel, Clock } from 'lucide-react';

export const RulesSection: React.FC = () => {
  
  const handleDownload = () => {
    const rulesContent = `THE BORED GAME JAM - OFFICIAL RULES
-----------------------------------
1. NO MAGIC NUMBERS
   - Do not use hard-coded values for logic decisions (e.g., if x > 5).
   - Use normalized values (0.0 to 1.0) relative to the environment.

2. ASSETS
   - You may use pre-made assets for visuals/audio.
   - All LOGIC code must be written during the jam.

3. SUBMISSION FORMAT
   - Executable build (Web/Windows).
   - Source code link (GitHub/GitLab).
   - A short video (max 2 min) explaining your agent's logic.

4. THEME
   - "ADAPT OR DIE". Your agent must survive in changing environments.

5. TEAMS
   - teams.(mention only the leader name)
   - Solo devs.

6. DEADLINE
   - Submissions close strictly at the countdown end.


   _________global game discription_____________________


   A&A Presents: "THE BORED" Game Jam
The Challenge: Beyond the Hard-Coded Mind
Overview You’re tired of studying formulas you don't understand and solving equations that have no "soul." It’s time to pivot from passive learning to active engineering. "THE BORED" Game Jam isn't just about making a character move—it’s about building a "brain" that can survive without you holding its hand.

The Core Problem Most AI in games is "brittle"—it breaks the moment you change the environment because it relies on hard-coded values (Magic Numbers). Your mission is to develop a Generalizable Agent Logic that adapts dynamically to varying environments without manual tuning.

Technical Specifications
1. The "No-Magic" Constraint
The AI must function with minimal hard-coded parameters.

Avoid: if (distance < 10) { attack(); }

Embrace: Normalized utility scores, context-steering, or fuzzy logic where the AI weighs its environment relative to its current state.

2. Environmental Adaptability
Your logic will be tested across two distinct stages:

Stage 1: A controlled environment to prove the base logic works.

Stage 2: A "chaos" environment with different scales, obstacles, and layouts.

Requirement: The exact same script must navigate both stages successfully. No "if stage == 2" hacks allowed.

3. The "Clean Code" Mandate
In true engineering fashion, the how is as important as the what.

Optimization: The logic must be lightweight and performant.

Documentation: Every line must be justifiable. If a piece of code exists, it must serve a logical purpose in the agent's decision-making tree.

Originality: No "copy-pasta" from GitHub or Stack Overflow. We are looking for structural integrity, not just functional results.

Evaluation Criteria
Autonomy: How well does the AI handle unexpected environmental changes?

Mathematical Elegance: Does the code use vectors, dot products, or normalization rather than "hard" distance checks?

Scalability: How easily could this logic be applied to 100 agents instead of just one?

"You got tired of studying things you can't understand... so come build something that understands for itself."
`;
    const element = document.createElement("a");
    const file = new Blob([rulesContent], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "TheBored_Rules.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="rules" className="py-24 bg-[#080808] border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Protocol <span className="text-terminal-green">Rules</span>
            </h2>
            <p className="text-gray-400">Adherence to the protocol is mandatory. Deviations result in nullification.</p>
          </div>
          
          <button 
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:border-terminal-green text-white font-mono rounded-sm transition-all group"
          >
            <Download className="w-4 h-4 group-hover:text-terminal-green" />
            DOWNLOAD_RULES.TXT
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              icon: <ShieldAlert className="w-6 h-6 text-error-red" />, 
              title: "NO MAGIC NUMBERS", 
              text: "Hard-coded integers for logic checks are strictly prohibited. Use dynamic evaluation."
            },
            { 
              icon: <Gavel className="w-6 h-6 text-cyber-blue" />, 
              title: "ORIGINAL LOGIC", 
              text: "Visual assets can be imported, but the decision-making brain must be written during the jam."
            },
            { 
              icon: <Clock className="w-6 h-6 text-terminal-green" />, 
              title: "HARD DEADLINE", 
              text: "Submissions close automatically. No grace period. Manage your time scope effectively."
            }
          ].map((rule, idx) => (
            <div key={idx} className="p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:bg-gray-900 transition-colors">
              <div className="mb-4">{rule.icon}</div>
              <h3 className="text-lg font-bold font-mono text-white mb-2">{rule.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{rule.text}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-terminal-green/5 border border-terminal-green/20 rounded text-center">
            <p className="text-terminal-green font-mono text-sm">
                // SYSTEM NOTE: VIOLATION OF RULE #1 WILL RESULT IN IMMEDIATE DISQUALIFICATION
            </p>
        </div>
      </div>
    </section>
  );
};