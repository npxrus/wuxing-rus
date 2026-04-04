// Агрегатор всех данных о существах
import { HIGHER_CREATURES } from './higher';
import { COMMON_CREATURES } from './common';
import { NAV_CREATURES } from './nav';
import { DISTORTED_CREATURES } from './distorted';
import { MONSTERS } from './monsters';

// Категории существ
export const CREATURE_CATEGORIES = {
  higher: { name: 'Высшие сущности', icon: '⭐', color: '#d4af37' },
  common: { name: 'Обычные существа', icon: '🌿', color: '#2d5a27' },
  nav: { name: 'Существа Нави', icon: '🌙', color: '#4a4a6a' },
  distorted: { name: 'Существа Искажённых Земель', icon: '🌀', color: '#8b5cf6' },
  monster: { name: 'Чудовища', icon: '👹', color: '#ef4444' },
};

// Экспорт всех существ
export { HIGHER_CREATURES, COMMON_CREATURES, NAV_CREATURES, DISTORTED_CREATURES, MONSTERS };

// Все существа вместе
export const ALL_CREATURES = [
  ...HIGHER_CREATURES,
  ...COMMON_CREATURES,
  ...NAV_CREATURES,
  ...DISTORTED_CREATURES,
  ...MONSTERS,
];