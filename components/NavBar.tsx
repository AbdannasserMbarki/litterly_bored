import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

export const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'The Problem', href: '#problem' },
    { name: 'Rules', href: '#rules' },
    { name: 'Q&A', href: '#qa' },
    { name: 'Criteria', href: '#criteria' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-terminal-black/90 backdrop-blur-md border-terminal-green/20' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Terminal className="h-6 w-6 text-terminal-green" />
            <span className="font-mono font-bold text-white tracking-tighter">A&A_PRESENTS</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-mono text-sm text-gray-400 hover:text-terminal-green transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-terminal-green/10 border border-terminal-green/50 text-terminal-green px-4 py-1.5 rounded text-sm font-mono hover:bg-terminal-green hover:text-black transition-all duration-300">
                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfm44DJPFdqarDzeZO12Ov1JmNA_Di2yEziW6jdhVeP9D5Enw/viewform?usp=dialog">REGISTER_NOW()</a>
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-terminal-black border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};