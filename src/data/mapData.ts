// Данные для интерактивной карты

export interface MapRegion {
  id: string;
  name: string;
  element: 'wood' | 'fire' | 'earth' | 'metal' | 'water';
  description: string;
  capital: string;
  keyLocations: string[];
  coordinates: { x: number; y: number }; // для SVG
  path: string; // SVG path
  color: string;
  icon: string;
}

export interface MapLocation {
  id: string;
  name: string;
  type: 'capital' | 'city' | 'sacred' | 'danger';
  region: string;
  description: string;
  coordinates: { x: number; y: number };
  icon: string;
}

// Регионы (княжества)
export const MAP_REGIONS: MapRegion[] = [
  {
    id: 'wood',
    name: 'Зелёные Рощи',
    element: 'wood',
    description: 'Густые леса с гигантскими деревьями, дома-гнёзда в кронах, целебные травы',
    capital: 'Город Шепчущих Ветвей',
    keyLocations: ['Священная Роща', 'Долина Рун', 'Лес Вечных Сумерек'],
    coordinates: { x: 650, y: 150 },
    path: 'M580,120 Q620,80 680,90 Q720,100 730,140 Q740,180 700,210 Q660,230 620,220 Q580,200 570,160 Z',
    color: '#2d5a27',
    icon: '🌿',
  },
  {
    id: 'fire',
    name: 'Пылающие Степи',
    element: 'fire',
    description: 'Бескрайние степи, вулканические плато, горячие источники',
    capital: 'Курган Огненного Ветра',
    keyLocations: ['Город Пепельных Костров', 'Кузница Дракона', 'Кровавая Пустошь'],
    coordinates: { x: 650, y: 450 },
    path: 'M580,400 Q620,380 680,390 Q720,400 740,440 Q750,480 710,510 Q670,530 610,510 Q570,490 560,450 Z',
    color: '#c2410c',
    icon: '🔥',
  },
  {
    id: 'earth',
    name: 'Великие Холмы',
    element: 'earth',
    description: 'Круглые холмы, пшеничные поля, подземные города',
    capital: 'Каменный Круг',
    keyLocations: ['Поля Золотого Колоса', 'Пещеры Предков', 'Храм Урожая'],
    coordinates: { x: 450, y: 300 },
    path: 'M380,260 Q420,240 480,250 Q530,260 540,300 Q550,340 510,360 Q460,380 400,360 Q360,340 350,300 Z',
    color: '#b45309',
    icon: '⛰️',
  },
  {
    id: 'metal',
    name: 'Железные Горы',
    element: 'metal',
    description: 'Острые горные хребты, висячие мосты, подземные кузницы',
    capital: 'Город Стальных Утёсов',
    keyLocations: ['Небесная Кузня', 'Рудник Вечного Лезвия', 'Кузница Звёзд'],
    coordinates: { x: 800, y: 280 },
    path: 'M740,250 Q780,230 830,240 Q860,250 870,290 Q880,330 850,360 Q810,380 770,360 Q740,340 730,300 Z',
    color: '#78716c',
    icon: '⚔️',
  },
  {
    id: 'water',
    name: 'Туманные Озёра',
    element: 'water',
    description: 'Система озёр и каналов, плавучие деревни, туманные долины',
    capital: 'Дворец Тумана',
    keyLocations: ['Остров Зеркальной Луны', 'Река Смородина', 'Гавань Забытых Кораблей'],
    coordinates: { x: 300, y: 350 },
    path: 'M220,300 Q260,280 310,290 Q350,300 360,340 Q370,380 340,410 Q300,430 250,420 Q210,400 200,360 Z',
    color: '#1e40af',
    icon: '💧',
  },
];

// Ключевые места на карте
export const MAP_LOCATIONS: MapLocation[] = [
  // Столицы
  { id: 'capital-wood', name: 'Город Шепчущих Ветвей', type: 'capital', region: 'wood', description: 'Столица Зелёных Рощей, город в кронах деревьев', coordinates: { x: 640, y: 160 }, icon: '🏛️' },
  { id: 'capital-fire', name: 'Курган Огненного Ветра', type: 'capital', region: 'fire', description: 'Столица Пылающих Степей, святилище огня', coordinates: { x: 640, y: 440 }, icon: '🏛️' },
  { id: 'capital-earth', name: 'Каменный Круг', type: 'capital', region: 'earth', description: 'Столица Великих Холмов, место ритуалов', coordinates: { x: 460, y: 300 }, icon: '🏛️' },
  { id: 'capital-metal', name: 'Город Стальных Утёсов', type: 'capital', region: 'metal', description: 'Столица Железных Гор, крепость в скалах', coordinates: { x: 810, y: 280 }, icon: '🏛️' },
  { id: 'capital-water', name: 'Дворец Тумана', type: 'capital', region: 'water', description: 'Столица Туманных Озёр, дворец из полупрозрачного камня', coordinates: { x: 290, y: 350 }, icon: '🏛️' },
  
  // Священные места
  { id: 'world-tree', name: 'Мировой Дуб', type: 'sacred', region: 'earth', description: 'Центр мироздания, соединяющий Правь, Явь и Навь', coordinates: { x: 520, y: 280 }, icon: '🌳' },
  { id: 'source', name: 'Источник Начал', type: 'sacred', region: 'earth', description: 'У корней Мирового Дуба, источник магической силы', coordinates: { x: 530, y: 290 }, icon: '💎' },
  { id: 'sacred-grove', name: 'Священная Роща', type: 'sacred', region: 'wood', description: 'Роща древних дубов с рунами', coordinates: { x: 600, y: 180 }, icon: '🌲' },
  { id: 'rune-valley', name: 'Долина Рун', type: 'sacred', region: 'wood', description: 'Каменные стелы с символами стихий', coordinates: { x: 670, y: 200 }, icon: '🔣' },
  
  // Города
  { id: 'ash-city', name: 'Город Пепельных Костров', type: 'city', region: 'fire', description: 'Город кочевников у подножия вулкана', coordinates: { x: 680, y: 470 }, icon: '🏠' },
  { id: 'steel-city', name: 'Город Стальных Утёсов', type: 'city', region: 'metal', description: 'Город-крепость в горах', coordinates: { x: 790, y: 260 }, icon: '🏰' },
  
  // Опасные места
  { id: 'distorted-lands', name: 'Искажённые Земли', type: 'danger', region: 'metal', description: 'Место заточения Теневого Дракона, законы реальности нарушены', coordinates: { x: 880, y: 350 }, icon: '🌀' },
  { id: 'smorodina', name: 'Река Смородина', type: 'danger', region: 'water', description: 'Граница между Явью и Навью', coordinates: { x: 220, y: 400 }, icon: '🌊' },
];

// Центр карты
export const MAP_CENTER = { x: 550, y: 350 };
export const MAP_VIEWBOX = "0 0 1000 600";