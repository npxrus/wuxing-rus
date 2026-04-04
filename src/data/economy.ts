// Данные об экономике и ресурсах Царства Пяти Начал

export interface Resource {
  id: string;
  name: string;
  principality: string;
  element: 'wood' | 'fire' | 'earth' | 'metal' | 'water';
  description: string;
  location: string;
  icon: string;
}

export interface TradeRoute {
  id: string;
  name: string;
  connects: string[];
  length: string;
  dangers: string[];
  goods: string[];
  icon: string;
}

export interface Currency {
  name: string;
  units: {
    name: string;
    size: string;
    value: string;
    icon: string;
  }[];
}

export interface Tax {
  estate: string;
  rate: string;
  form: string;
  icon: string;
}

export interface Craft {
  principality: string;
  craft: string;
  famousMasters: string;
  icon: string;
  element: 'wood' | 'fire' | 'earth' | 'metal' | 'water';
}

export interface EconomicCrime {
  crime: string;
  punishment: string;
  icon: string;
}

// Ресурсы по княжествам
export const RESOURCES: Resource[] = [
  // Зелёные Рощи
  {
    id: 'herbs',
    name: 'Целебные травы',
    principality: 'Зелёные Рощи',
    element: 'wood',
    description: 'Редкие травы, растущие только в Долине Рун. Используются для лечения и ритуалов.',
    location: 'Долина Рун',
    icon: '🌿',
  },
  {
    id: 'wood',
    name: 'Древесина Мирового Дуба',
    principality: 'Зелёные Рощи',
    element: 'wood',
    description: 'Священная древесина, из которой делают посохи волхвов и рунические амулеты.',
    location: 'Священная Роща',
    icon: '🌳',
  },
  {
    id: 'honey',
    name: 'Мёд',
    principality: 'Зелёные Рощи',
    element: 'wood',
    description: 'Целебный мёд диких пчёл. Используется в обрядах и как лекарство.',
    location: 'Лесные пасеки',
    icon: '🍯',
  },
  // Пылающие Степи
  {
    id: 'horses',
    name: 'Степные кони',
    principality: 'Пылающие Степи',
    element: 'fire',
    description: 'Быстрые и выносливые кони, лучшие в Царстве. Основная ценность степняков.',
    location: 'Табуны по всей степи',
    icon: '🐎',
  },
  {
    id: 'obsidian',
    name: 'Вулканическое стекло',
    principality: 'Пылающие Степи',
    element: 'fire',
    description: 'Острое как лезвие стекло. Используется для ритуальных ножей и украшений.',
    location: 'Кратеры вулканов',
    icon: '🪨',
  },
  {
    id: 'sulfur',
    name: 'Сера',
    principality: 'Пылающие Степи',
    element: 'fire',
    description: 'Используется в алхимии и для создания огненных амулетов.',
    location: 'Вулканические плато',
    icon: '⚗️',
  },
  // Великие Холмы
  {
    id: 'grain',
    name: 'Зерно',
    principality: 'Великие Холмы',
    element: 'earth',
    description: 'Основная пища Царства. Великие Холмы кормят все княжества.',
    location: 'Поля Золотого Колоса',
    icon: '🌾',
  },
  {
    id: 'clay',
    name: 'Глина',
    principality: 'Великие Холмы',
    element: 'earth',
    description: 'Качественная глина для гончарных изделий и строительства.',
    location: 'Берега рек',
    icon: '🏺',
  },
  {
    id: 'wool',
    name: 'Шерсть',
    principality: 'Великие Холмы',
    element: 'earth',
    description: 'Тёплая шерсть горных овец. Идёт на одежду и налоги.',
    location: 'Пастбища холмов',
    icon: '🐑',
  },
  // Железные Горы
  {
    id: 'iron',
    name: 'Железо',
    principality: 'Железные Горы',
    element: 'metal',
    description: 'Основной металл для оружия и инструментов. Главное богатство княжества.',
    location: 'Рудник Вечного Лезвия',
    icon: '⚒️',
  },
  {
    id: 'silver',
    name: 'Серебро',
    principality: 'Железные Горы',
    element: 'metal',
    description: 'Используется для амулетов против теней и как платёжное средство.',
    location: 'Глубинные шахты',
    icon: '🥈',
  },
  {
    id: 'meteorite',
    name: 'Метеоритное железо',
    principality: 'Железные Горы',
    element: 'metal',
    description: 'Редчайший металл, упавший со звёзд. Из него куют легендарное оружие.',
    location: 'Кратер Падшей Звезды',
    icon: '⭐',
  },
  // Туманные Озёра
  {
    id: 'pearls',
    name: 'Речной жемчуг',
    principality: 'Туманные Озёра',
    element: 'water',
    description: 'Главная валюта Царства. Добывается в раковинах туманных озёр.',
    location: 'Озёра по всему княжеству',
    icon: '⚪',
  },
  {
    id: 'fish',
    name: 'Рыба',
    principality: 'Туманные Озёра',
    element: 'water',
    description: 'Основная пища жителей Озёр. Поставляется во все княжества.',
    location: 'Реки и озёра',
    icon: '🐟',
  },
  {
    id: 'salt',
    name: 'Соль',
    principality: 'Туманные Озёра',
    element: 'water',
    description: 'Незаменимый продукт для сохранения пищи. Добывается из соляных озёр.',
    location: 'Соляные озёра',
    icon: '🧂',
  },
];

// Торговые пути
export const TRADE_ROUTES: TradeRoute[] = [
  {
    id: 'great-circle',
    name: 'Великий Круг',
    connects: ['Все княжества'],
    length: '~2000 км',
    dangers: ['Разбойники', 'Перекосы Начал', 'Плохая погода'],
    goods: ['Все виды товаров'],
    icon: '🔄',
  },
  {
    id: 'grain-road',
    name: 'Хлебный путь',
    connects: ['Великие Холмы', 'Туманные Озёра'],
    length: '300 км',
    dangers: ['Топь-матери', 'Болотные огни'],
    goods: ['Зерно', 'Глина', 'Шерсть → Рыба', 'Соль', 'Жемчуг'],
    icon: '🌾',
  },
  {
    id: 'ore-road',
    name: 'Рудный путь',
    connects: ['Железные Горы', 'Великие Холмы'],
    length: '400 км',
    dangers: ['Оползни', 'Каменные големы', 'Ржавая чума'],
    goods: ['Железо', 'Серебро → Зерно', 'Глина'],
    icon: '⛏️',
  },
  {
    id: 'steppe-road',
    name: 'Степной тракт',
    connects: ['Пылающие Степи', 'Зелёные Рощи'],
    length: '350 км',
    dangers: ['Пепельные духи', 'Блуждающий огонь', 'Кочевники-разбойники'],
    goods: ['Кони', 'Обсидиан → Лес', 'Мёд', 'Травы'],
    icon: '🏜️',
  },
  {
    id: 'forest-road',
    name: 'Лесная тропа',
    connects: ['Зелёные Рощи', 'Великие Холмы'],
    length: '250 км',
    dangers: ['Корневые черви', 'Гниющий лес', 'Лешие'],
    goods: ['Травы', 'Мёд → Зерно', 'Глина'],
    icon: '🌲',
  },
];

// Запрещённые товары
export const FORBIDDEN_GOODS = [
  { name: 'Осколки метеоритного железа', reason: 'Могут быть использованы для тёмных ритуалов' },
  { name: 'Живые ветви Мирового Дуба', reason: 'Нарушает связь между мирами' },
  { name: 'Вода из Источника Начал', reason: 'Слишком сильный магический потенциал' },
  { name: 'Амулеты с искажением', reason: 'Питают Теневого Дракона' },
  { name: 'Руны Тёмного Пути', reason: 'Запрещены Великим Советом' },
];

// Денежная система
export const CURRENCY: Currency = {
  name: 'Жемчужная система',
  units: [
    { name: 'Крошка', size: '1-2 мм', value: '1 краюха хлеба', icon: '⚪' },
    { name: 'Жемчужина малая', size: '5-7 мм', value: '10 краюх хлеба', icon: '⚪' },
    { name: 'Жемчужина большая', size: '10-12 мм', value: '100 краюх хлеба', icon: '⚪' },
    { name: 'Княжеская жемчужина', size: '15+ мм', value: '1000 краюх хлеба', icon: '⚪' },
    { name: 'Серебряная пластина', size: '20 г', value: '500 краюх хлеба', icon: '🥈' },
  ],
};

// Налоги и повинности
export const TAXES: Tax[] = [
  { estate: 'Волхвы', rate: 'Нет', form: '—', icon: '🔮' },
  { estate: 'Князья', rate: 'Нет', form: '—', icon: '👑' },
  { estate: 'Богатыри', rate: 'Нет', form: 'Службой', icon: '⚔️' },
  { estate: 'Кузнецы', rate: '10% дохода', form: 'Изделиями или металлом', icon: '⚒️' },
  { estate: 'Ведуньи', rate: '5% трав', form: 'Травами', icon: '🌿' },
  { estate: 'Торговые люди', rate: '20% прибыли', form: 'Жемчугом', icon: '💰' },
  { estate: 'Ремесленники', rate: '10% изделий', form: 'Товаром', icon: '🏺' },
  { estate: 'Земледельцы', rate: '20% урожая', form: 'Зерном', icon: '🌾' },
  { estate: 'Смерды', rate: 'Оброк', form: 'Натурой', icon: '🏠' },
  { estate: 'Холопы', rate: 'Весь труд', form: 'Работой', icon: '⛓️' },
];

// Производство и ремёсла
export const CRAFTS: Craft[] = [
  { principality: 'Зелёные Рощи', craft: 'Травничество, резьба по дереву', famousMasters: 'Резчики рун', icon: '🌿', element: 'wood' },
  { principality: 'Пылающие Степи', craft: 'Кожевничество, оружейничество', famousMasters: 'Шорники', icon: '🔥', element: 'fire' },
  { principality: 'Великие Холмы', craft: 'Гончарство, ткачество', famousMasters: 'Гончары-обрядовики', icon: '⛰️', element: 'earth' },
  { principality: 'Железные Горы', craft: 'Кузнечное дело, алхимия', famousMasters: 'Алхимики-рудознатцы', icon: '⚔️', element: 'metal' },
  { principality: 'Туманные Озёра', craft: 'Солеварение, лодочное дело', famousMasters: 'Плетельщики сетей', icon: '💧', element: 'water' },
];

// Экономические преступления
export const ECONOMIC_CRIMES: EconomicCrime[] = [
  { crime: 'Подделка жемчуга', punishment: 'Отсечение руки', icon: '⚪' },
  { crime: 'Утайка налога (более 30%)', punishment: 'Год холопом', icon: '📋' },
  { crime: 'Порча чужого товара', punishment: 'Штраф в тройном размере', icon: '💔' },
  { crime: 'Торговля запрещённым товаром', punishment: 'Изгнание из княжества', icon: '🚫' },
  { crime: 'Ростовщичество (более 50% годовых)', punishment: 'Штраф + лишение права торговать', icon: '📈' },
];