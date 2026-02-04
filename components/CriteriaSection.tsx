import React from 'react';

export const CriteriaSection: React.FC = () => {
  return (
    <section id="criteria" className="py-24 bg-terminal-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Evaluation <br/> Criteria
            </h2>
            <p className="text-gray-400 mb-8">
              We aren't looking for just a working game. We are looking for engineering excellence and adaptability.
            </p>
            <div className="p-6 border border-gray-800 bg-gray-900/30 rounded-lg">
              <blockquote className="text-lg italic text-gray-300 border-l-4 border-terminal-green pl-4">
                "You got tired of studying things you can't understand... so come build something that understands for itself."
              </blockquote>
            </div>
          </div>

          <div className="lg:col-span-3 grid gap-6">
            {[
              { title: "Autonomy", score: "40%", desc: "How well does the AI handle unexpected environmental changes without human intervention?" },
              { title: "Math Elegance", score: "30%", desc: "Does the code use vectors, dot products, and normalization instead of brittle checks?" },
              { title: "Scalability", score: "30%", desc: "How easily could this logic be applied to 100 agents? Is it performant?" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-gray-900 rounded-lg border-l-4 border-transparent hover:border-cyber-blue transition-all group">
                <div className="text-4xl font-mono font-bold text-gray-700 group-hover:text-cyber-blue transition-colors">
                  {item.score}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-mono mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};