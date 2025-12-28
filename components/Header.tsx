import React from 'react';
import { Microscope } from 'lucide-react';
import { APP_NAME } from '../constants';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-med-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-default">
          <div className="relative">
            <div className="absolute inset-0 bg-med-primary blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <Microscope className="text-med-primary relative z-10" size={28} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-sans">
            Med<span className="text-med-primary">Neo</span>Lab
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
           <a href="#" className="hover:text-white transition-colors">文档</a>
           <a href="#" className="hover:text-white transition-colors">关于</a>
           <a 
             href="mailto:contact@medneolab.com" 
             className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-all border border-white/5"
           >
             联系支持
           </a>
        </nav>
      </div>
    </header>
  );
};