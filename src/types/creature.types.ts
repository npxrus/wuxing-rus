// Типы для существ

export type DangerLevel = 'none' | 'low' | 'medium' | 'high' | 'very-high' | 'abyss';

export interface Creature {
  id: string;
  name: string;
  category: 'higher' | 'common' | 'nav' | 'distorted' | 'monster';
  categoryName: string;
  element?: 'wood' | 'fire' | 'earth' | 'metal' | 'water';
  description: string;
  appearance: string;
  habitat: string;
  abilities: string[];
  behavior: string;
  interaction: string;
  size?: string;
  dangerLevel: DangerLevel;
  traces?: string;
  sounds?: string;
  smell?: string;
  tamable?: boolean;
  tameMethod?: string;
  tameReward?: string;
  imagePlaceholder: string;
  icon: string;
  quote?: string;
}