import React from 'react';
import { TAGLINE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-12 md:pt-48 md:pb-20 text-center px-4">
      {/* Background Decor Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-med-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs font-medium text-med-primary mb-4 animate-fadeIn shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-med-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-med-primary"></span>
          </span>
          系统运行正常
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
          加速您的 <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-med-primary to-blue-500 dark:to-blue-400">
            医学研究
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
          {TAGLINE}。专为优化从构思到发表的每一个学术工作流程而设计的智能工具套件。
        </p>
      </div>
    </div>
  );
};