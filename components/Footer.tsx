import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#050505] border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 text-sm font-mono">
          © {new Date().getFullYear()} A&A PRESENTS. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-8">
          <a target="_blank" href="https://github.com/AbdannasserMbarki" className="text-gray-500 hover:text-terminal-green text-sm font-mono transition-colors">GITHUB</a>
          <a target="_blank" href="https://discord.gg/4TzEt7ta" className="text-gray-500 hover:text-terminal-green text-sm font-mono transition-colors">DISCORD</a>
          <a href="#" className="text-gray-500 hover:text-terminal-green text-sm font-mono transition-colors">RULES</a>
        </div>
      </div>
    </footer>
  );
};