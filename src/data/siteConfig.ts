// Конфигурация сайта - меняется в одном месте

export const SITE_CONFIG = {
  title: 'Царство Пяти Начал',
  shortTitle: 'У-Син-Русь',
  description: 'Энциклопедия мира, где переплелись славянская мифология и китайская философия пяти стихий',
  author: 'Творец Царства Пяти Начал',
  language: 'ru',
  year: new Date().getFullYear(),
  githubRepo: 'wuxing-rus',
  githubUsername: 'npxrus',
} as const;

// Навигация по сайту
export const NAVIGATION: { title: string; href: string; icon: string }[] = [
  { title: 'Главная', href: '/', icon: '🏠' },
  { title: 'Мир', href: '/world', icon: '🌍' },
  { title: 'Княжества', href: '/principalities', icon: '🏰' },
  { title: 'Существа', href: '/creatures', icon: '🐉' },
  { title: 'Магия', href: '/magic', icon: '✨' },
  { title: 'Артефакты', href: '/artifacts', icon: '⚔️' },
  { title: 'Календарь', href: '/calendar', icon: '📅' },
  { title: 'Галерея', href: '/gallery', icon: '🖼️' },
];

// Цветовая схема (для CSS-переменных)
export const THEME_COLORS = {
  bg: {
    primary: '#0a0a0a',
    secondary: '#1a1a1a',
    card: '#2a2a2a',
  },
  text: {
    primary: '#e5e5e5',
    secondary: '#a3a3a3',
    accent: '#fbbf24',
  },
  elements: {
    wood: '#2d5a27',
    fire: '#c2410c',
    earth: '#b45309',
    metal: '#78716c',
    water: '#1e40af',
  },
};

// Базовый URL для продакшена
export const SITE_URL = `https://${SITE_CONFIG.githubUsername}.github.io/${SITE_CONFIG.githubRepo}/`;