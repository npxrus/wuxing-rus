// Конфигурация сайта
import { withBase } from '@utils/paths';

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

export const SITE_URL = `https://${SITE_CONFIG.githubUsername}.github.io/${SITE_CONFIG.githubRepo}/`;

// ВСЯ навигация в одном списке (для гамбургер-меню)
export const ALL_NAVIGATION = [
  { title: 'Главная', href: withBase('/'), icon: '🏠' },
  { title: 'Мир', href: withBase('/world'), icon: '🌍' },
  { title: 'Карта', href: withBase('/map'), icon: '🗺️'},
  { title: 'Княжества', href: withBase('/principalities'), icon: '🏰' },
  { title: 'Существа', href: withBase('/creatures'), icon: '🐉' },
  { title: 'Магия', href: withBase('/magic'), icon: '✨' },
  { title: 'Артефакты', href: withBase('/artifacts'), icon: '⚔️' },
  { title: 'Календарь', href: withBase('/calendar'), icon: '📅' },
  { title: 'История', href: withBase('/history'), icon: '📜' },
  { title: 'Политика', href: withBase('/politics'), icon: '🏛️' },
  { title: 'Экономика', href: withBase('/economy'), icon: '💰' },
  { title: 'Общество', href: withBase('/society'), icon: '👥' },
  { title: 'Руны', href: withBase('/runes'), icon: '🔣' },
  { title: 'Опасности', href: withBase('/dangers'), icon: '⚠️' },
  { title: 'Персонажи', href: withBase('/heroes'), icon: '👥' },
  { title: 'Медиа', href: withBase('/media'), icon: '📚' },
  { title: 'Галерея', href: withBase('/gallery'), icon: '🖼️' },
];