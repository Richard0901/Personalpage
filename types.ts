import { LucideIcon } from 'lucide-react';

export interface Tool {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  color: string; // Now represents a color name like 'emerald', 'blue' instead of full class
  badge?: string;
}

export interface NavItem {
  label: string;
  href: string;
}