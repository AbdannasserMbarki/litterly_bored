import React from 'react';

interface GlitchTitleProps {
  text: string;
  className?: string;
}

export const GlitchTitle: React.FC<GlitchTitleProps> = ({ text, className = '' }) => {
  return (
    <div className={`relative inline-block group ${className}`}>
      <h1 className="relative z-10 font-bold tracking-tighter">
        {text}
      </h1>
      <h1 className="absolute top-0 left-0 -z-10 w-full h-full text-cyber-blue opacity-50 translate-x-[2px] group-hover:animate-glitch">
        
      </h1>
      <h1 className="absolute top-0 left-0 -z-10 w-full h-full text-error-red opacity-50 -translate-x-[2px] group-hover:animate-glitch" style={{ animationDirection: 'reverse' }}>
        
      </h1>
    </div>
  );
};