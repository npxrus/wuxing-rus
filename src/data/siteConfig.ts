// Конфигурация сайта - меняется в одном месте
import { withBase } from "@/utils/paths";

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

// Базовый URL для продакшена
export const SITE_URL = `https://${SITE_CONFIG.githubUsername}.github.io/${SITE_CONFIG.githubRepo}/`;

// Навигация по сайту
export const NAVIGATION: { title: string; href: string; icon: string }[] = [
  { title: 'Главная', href: withBase('/'), icon: '🏠' },
  { title: 'Мир', href: withBase('/world'), icon: '🌍' },
  { title: 'Княжества', href: withBase('/principalities'), icon: '🏰' },
  { title: 'Существа', href: withBase('/creatures'), icon: '🐉' },
  { title: 'Магия', href: withBase('/magic'), icon: '✨' },
  { title: 'Артефакты', href: withBase('/artifacts'), icon: '⚔️' },
  { title: 'Календарь', href: withBase('/calendar'), icon: '📅' },
  { title: 'Галерея', href: withBase('/gallery'), icon: '🖼️' },
];