import React from 'react';
import { Microscope, Sun, Moon } from 'lucide-react';
import { APP_NAME } from '../constants';
import { useTheme } from '../ThemeContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-med-950/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-default">
          <div className="relative">
            <div className="absolute inset-0 bg-med-primary blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <Microscope className="text-med-primary relative z-10" size={28} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white font-sans transition-colors duration-300">
            Med<span className="text-med-primary">Neo</span>Lab
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
             <a href="#" className="hover:text-med-primary dark:hover:text-white transition-colors">文档</a>
             <a href="#" className="hover:text-med-primary dark:hover:text-white transition-colors">关于</a>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <a 
               href="mailto:contact@medneolab.com" 
               className="hidden md:block px-4 py-2 rounded-lg bg-slate-900 dark:bg-white/5 hover:bg-med-primary dark:hover:bg-white/10 text-white transition-all border border-transparent dark:border-white/5 text-sm font-medium"
             >
               联系支持
             </a>
          </div>
        </div>
      </div>
    </header>
  );
};