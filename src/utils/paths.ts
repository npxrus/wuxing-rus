// Утилита для работы с путями с учётом base

// Базовый путь из конфига (должен совпадать с astro.config.mjs)
const BASE_PATH = '/wuxing-rus/';

// Функция для добавления base к пути
export function withBase(path: string): string {
  // Убираем лишние слеши
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  // Убираем дублирование base
  if (normalizedPath.startsWith(BASE_PATH)) {
    return normalizedPath;
  }
  // Добавляем base
  return `${BASE_PATH.replace(/\/$/, '')}${normalizedPath}`;
}

// Функция для получения чистого пути (без base)
export function withoutBase(path: string): string {
  return path.replace(BASE_PATH, '/');
}

// Функция для проверки, является ли путь внутренним
export function isInternalLink(href: string): boolean {
  return href.startsWith('/') && !href.startsWith('//');
}