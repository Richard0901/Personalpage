import { LucideIcon } from 'lucide-react';

export interface Tool {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  color: string;
  badge?: string;
}

export interface NavItem {
  label: string;
  href: string;
}