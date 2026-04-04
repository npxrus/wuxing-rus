// Уровни опасности существ
import type { DangerLevel } from '@types/creature.types';

export const DANGER_LEVELS: Record<DangerLevel, { name: string; color: string; icon: string }> = {
  none: { name: 'Нет', color: '#6b7280', icon: '🛡️' },
  low: { name: 'Низкая', color: '#22c55e', icon: '⚠️' },
  medium: { name: 'Средняя', color: '#eab308', icon: '⚡' },
  high: { name: 'Высокая', color: '#f97316', icon: '🔥' },
  'very-high': { name: 'Очень высокая', color: '#ef4444', icon: '💀' },
  abyss: { name: 'Бездна', color: '#8b5cf6', icon: '🌀' },
};

export const DANGER_LEVELS_LIST: { value: DangerLevel; name: string; icon: string }[] = [
  { value: 'none', name: 'Нет', icon: '🛡️' },
  { value: 'low', name: 'Низкая', icon: '⚠️' },
  { value: 'medium', name: 'Средняя', icon: '⚡' },
  { value: 'high', name: 'Высокая', icon: '🔥' },
  { value: 'very-high', name: 'Очень высокая', icon: '💀' },
  { value: 'abyss', name: 'Бездна', icon: '🌀' },
];