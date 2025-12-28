import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
  index: number;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, index }) => {
  const Icon = tool.icon;

  return (
    <a 
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col p-6 rounded-2xl glass-card transition-all duration-300 hover:scale-[1.02] hover:bg-slate-50/80 dark:hover:bg-slate-800/60 hover:shadow-xl hover:shadow-med-primary/10 overflow-hidden"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className={`p-3 rounded-xl bg-slate-100 dark:bg-slate-900/50 ring-1 ring-slate-200 dark:ring-white/10 text-${tool.color}-600 dark:text-${tool.color}-400 group-hover:ring-${tool.color}-500/50 transition-all duration-300`}>
          <Icon size={24} />
        </div>
        <ArrowUpRight className="text-slate-400 dark:text-slate-500 group-hover:text-med-primary transition-colors duration-300" size={20} />
      </div>

      <div className="relative z-10 flex-1">
        <div className="flex items-center gap-2 mb-2">
           <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 group-hover:text-med-primary transition-colors duration-300">
            {tool.title}
          </h3>
          {tool.badge && (
            <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-200 dark:text-slate-900 dark:bg-slate-200 rounded-full">
              {tool.badge}
            </span>
          )}
        </div>
       
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors">
          {tool.description}
        </p>
      </div>

      <div className="mt-auto relative z-10 pt-4 border-t border-slate-200 dark:border-white/5">
        <span className="text-xs font-mono text-slate-500 group-hover:text-med-primary/80 transition-colors flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          {tool.url.replace('https://', '')}
        </span>
      </div>
    </a>
  );
};