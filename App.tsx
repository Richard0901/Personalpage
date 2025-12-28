import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ToolCard } from './components/ToolCard';
import { Footer } from './components/Footer';
import { TOOLS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-med-950 text-slate-900 dark:text-slate-200 font-sans selection:bg-med-primary/20 selection:text-med-primary flex flex-col grid-bg transition-colors duration-300">
      <Header />
      
      <main className="flex-grow max-w-7xl mx-auto px-6 pb-24 w-full relative">
        <Hero />
        
        <section className="relative z-10 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOOLS.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))}
          </div>
        </section>

        {/* Decorative Section Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent my-24 transition-colors duration-300"></div>

        <section className="text-center relative z-10 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 transition-colors duration-300">为什么选择 MedNeoLab？</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 transition-colors duration-300">
            我们致力于弥合复杂数据科学与医学学术之间的鸿沟。我们的工具由研究人员打造，服务于研究人员，
            助您从繁琐的行政事务中解脱，将更多时间用于突破性的科学发现。
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;