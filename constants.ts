import { Filter, BarChart2, BookOpen, Search, FileText } from 'lucide-react';
import { Tool } from './types';

export const TOOLS: Tool[] = [
  {
    id: 'search',
    title: '学术检索生成器',
    description: '瞬间构建适用于 PubMed 和 Web of Science 等数据库的复杂且语法完美的搜索查询。',
    url: 'https://scholarsearch-gen.pages.dev/',
    icon: Search,
    color: 'amber',
    badge: 'Utility'
  },
  {
    id: 'journal',
    title: '期刊选择器',
    description: 'AI 辅助匹配系统，为您找到最适合的期刊，优化影响力与录用率。',
    url: 'https://journal-selector.pages.dev/',
    icon: BookOpen,
    color: 'purple'
  },
  {
    id: 'splitter',
    title: 'Context Splitter AI',
    description: '为大语言模型准备数据。智能分割长文本与CSV文件，轻松适配上下文窗口。',
    url: 'https://context-splitter.pages.dev/',
    icon: FileText,
    color: 'indigo'
  },
  {
    id: 'strategy',
    title: '学术战略大师',
    description: '深度分析研究领域的战略布局，揭示趋势、空白及创新机遇。',
    url: 'https://strategic-analysis-of-research-fields.pages.dev/',
    icon: BarChart2,
    color: 'blue'
  },
  {
    id: 'filter',
    title: '学术方向筛选',
    description: '利用高级过滤标准系统化缩小研究课题范围，识别高潜力学术方向。',
    url: 'https://academic-direction-filter.pages.dev/',
    icon: Filter,
    color: 'emerald',
    badge: 'Core Tool'
  }
];

export const APP_NAME = "MedNeoLab";
export const TAGLINE = "下一代学术研究套件";
export const YEAR = new Date().getFullYear();