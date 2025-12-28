import React from 'react';
import { YEAR, APP_NAME } from '../constants';
import { Github, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-med-950 mt-auto relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © {YEAR} {APP_NAME}. 保留所有权利。
          </div>
          
          <div className="flex items-center gap-6">
             <a href="#" className="text-slate-400 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white transition-colors">
               <Github size={20} />
             </a>
             <a href="#" className="text-slate-400 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white transition-colors">
               <Twitter size={20} />
             </a>
             <a href="mailto:contact@medneolab.com" className="text-slate-400 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white transition-colors">
               <Mail size={20} />
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};