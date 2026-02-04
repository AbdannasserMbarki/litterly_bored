import React from 'react';
import { HelpCircle } from 'lucide-react';

export const QASection: React.FC = () => {
  const qa = [
    {
      q: "What does 'A&A' stand for?",
      a: "Ahmed & Abdannasser. The organizers. We focus on building systems that can think for themselves."
    },
    {
      q: "Can I use Unity/Unreal/Godot?",
      a: "Yes. The engine doesn't matter. The constraint is on *how* you write your agent's behavior scripts, not the rendering engine."
    },
    {
      q: "Is this for beginners?",
      a: "It's for anyone willing to break bad habits. If you rely on 'if (dist < 5)' checks, this will be a challenge. If you know vector math, you'll thrive."
    },
    {
      q: "How is 'Elegance' judged?",
      a: "We look at your code. Is it a 500-line nested if-else mess? Or is it a 50-line utility scoring system? Less is more."
    }
  ];

  return (
    <section id="qa" className="py-24 bg-terminal-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
           <HelpCircle className="w-8 h-8 text-gray-500" />
           <h2 className="text-3xl md:text-4xl font-bold text-white">
             A&A <span className="text-gray-600">/ Q&A</span>
           </h2>
        </div>

        <div className="space-y-6">
          {qa.map((item, idx) => (
            <div key={idx} className="group border-b border-gray-800 pb-6 last:border-0 hover:border-gray-700 transition-colors">
              <h3 className="text-lg font-mono font-bold text-gray-200 mb-3 group-hover:text-terminal-green transition-colors">
                <span className="text-terminal-green mr-2">//</span>
                {item.q}
              </h3>
              <p className="text-gray-400 pl-6 leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};