import React from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SpecsSection } from './components/SpecsSection';
import { RulesSection } from './components/RulesSection';
import { QASection } from './components/QASection';
import { CriteriaSection } from './components/CriteriaSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-terminal-black text-gray-200 min-h-screen selection:bg-terminal-green selection:text-black">
      <NavBar />
      <main>
        <Hero />
        <ProblemSection />
        <RulesSection />
        <SpecsSection />
        <QASection />
        <CriteriaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;