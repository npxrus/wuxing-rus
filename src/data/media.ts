// Данные о книгах, комиксах и играх по миру Царства Пяти Начал

export interface MediaItem {
  id: string;
  title: string;
  type: 'book' | 'comic' | 'game' | 'rpg';
  typeName: string;
  status: 'published' | 'in-development' | 'planned' | 'coming-soon';
  statusName: string;
  description: string;
  coverImage: string;
  placeholderColor: string;
  icon: string;
  author?: string;
  artist?: string;
  developer?: string;
  year?: string;
  pages?: number;
  platform?: string[];
  links?: { name: string; url: string }[];
}

// Книги
export const BOOKS: MediaItem[] = [
  {
    id: 'book-1',
    title: 'Царство Пяти Начал: Хроники Первотворения',
    type: 'book',
    typeName: 'Книга',
    status: 'planned',
    statusName: 'В планах',
    description: 'Первая книга-энциклопедия о мире Царства Пяти Начал. Включает полное описание истории, географии, магии и существ.',
    coverImage: '',
    placeholderColor: '#2d5a27',
    icon: '📚',
    author: 'Творец Царства Пяти Начал',
    year: '2025',
    pages: 320,
  },
  {
    id: 'book-2',
    title: 'Сказания о Драконах-Хранителях',
    type: 'book',
    typeName: 'Книга',
    status: 'in-development',
    statusName: 'В разработке',
    description: 'Сборник легенд о пяти великих драконах и их подвигах. Иллюстрированное издание.',
    coverImage: '',
    placeholderColor: '#c2410c',
    icon: '📖',
    author: 'Творец Царства Пяти Начал',
    year: '2025',
    pages: 180,
  },
  {
    id: 'book-3',
    title: 'Бестиарий Царства Пяти Начал',
    type: 'book',
    typeName: 'Книга',
    status: 'planned',
    statusName: 'В планах',
    description: 'Полный каталог существ, духов и чудовищ с иллюстрациями и описаниями повадок.',
    coverImage: '',
    placeholderColor: '#b45309',
    icon: '🐉',
    author: 'Творец Царства Пяти Начал',
    pages: 240,
  },
];

// Комиксы
export const COMICS: MediaItem[] = [
  {
    id: 'comic-1',
    title: 'Вещий Кудеяр: Поиск Жемчужины',
    type: 'comic',
    typeName: 'Комикс',
    status: 'in-development',
    statusName: 'В разработке',
    description: 'История о величайшем волхве современности, который отправляется на поиски Пятой Жемчужины Начал.',
    coverImage: '',
    placeholderColor: '#78716c',
    icon: '🎨',
    artist: 'Художник (пока неизвестен)',
    pages: 48,
  },
  {
    id: 'comic-2',
    title: 'Дети Тумана',
    type: 'comic',
    typeName: 'Комикс',
    status: 'planned',
    statusName: 'В планах',
    description: 'Графическая новелла о ведуньях Туманных Озёр и их борьбе за справедливость.',
    coverImage: '',
    placeholderColor: '#1e40af',
    icon: '🌫️',
    pages: 32,
  },
  {
    id: 'comic-3',
    title: 'Железный Путь',
    type: 'comic',
    typeName: 'Комикс',
    status: 'planned',
    statusName: 'В планах',
    description: 'История о князе Светозаре и его стремлении объединить княжества под властью Металла.',
    coverImage: '',
    placeholderColor: '#78716c',
    icon: '⚔️',
    pages: 40,
  },
];

// Игры
export const GAMES: MediaItem[] = [
  {
    id: 'game-1',
    title: 'Царство Пяти Начал: Равновесие',
    type: 'game',
    typeName: 'Видеоигра',
    status: 'planned',
    statusName: 'В планах',
    description: 'RPG в открытом мире, где игрок выбирает своё Начало и путешествует по пяти княжествам, сражаясь с Теневым Драконом.',
    coverImage: '',
    placeholderColor: '#d4af37',
    icon: '🎮',
    developer: 'Ищется студия-разработчик',
    platform: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
  },
  {
    id: 'game-2',
    title: 'Настольная игра: Путь Начал',
    type: 'game',
    typeName: 'Настольная игра',
    status: 'in-development',
    statusName: 'В разработке',
    description: 'Кооперативная настольная игра, где игроки объединяются для поиска Жемчужин Начал.',
    coverImage: '',
    placeholderColor: '#2d5a27',
    icon: '🎲',
    developer: 'Творец Царства Пяти Начал',
  },
  {
    id: 'game-3',
    title: 'Карточная игра: Битва Начал',
    type: 'game',
    typeName: 'Карточная игра',
    status: 'planned',
    statusName: 'В планах',
    description: 'Коллекционная карточная игра, где игроки сражаются армиями из существ и магией стихий.',
    coverImage: '',
    placeholderColor: '#c2410c',
    icon: '🃏',
  },
];

// RPG-материалы
export const RPG_MATERIALS: MediaItem[] = [
  {
    id: 'rpg-1',
    title: 'Книга правил: Царство Пяти Начал',
    type: 'rpg',
    typeName: 'RPG',
    status: 'coming-soon',
    statusName: 'Скоро',
    description: 'Полное руководство для проведения кампаний в мире Царства Пяти Начал по системе D&D 5e.',
    coverImage: '',
    placeholderColor: '#d4af37',
    icon: '📜',
    author: 'Творец Царства Пяти Начал',
    pages: 200,
  },
  {
    id: 'rpg-2',
    title: 'Стартовый набор: Приключение в Зелёных Рощах',
    type: 'rpg',
    typeName: 'RPG',
    status: 'planned',
    statusName: 'В планах',
    description: 'Набор для начинающих: правила, готовые персонажи и сценарий для первой сессии.',
    coverImage: '',
    placeholderColor: '#2d5a27',
    icon: '🎲',
  },
  {
    id: 'rpg-3',
    title: 'Бестиарий для НРИ',
    type: 'rpg',
    typeName: 'RPG',
    status: 'planned',
    statusName: 'В планах',
    description: 'Расширенный бестиарий с блоками существ для использования в настольных ролевых играх.',
    coverImage: '',
    placeholderColor: '#b45309',
    icon: '🐉',
    pages: 120,
  },
];

// Все медиа
export const ALL_MEDIA = [...BOOKS, ...COMICS, ...GAMES, ...RPG_MATERIALS];

// Типы медиа для фильтрации
export const MEDIA_TYPES = [
  { id: 'all', name: 'Все', icon: '📚' },
  { id: 'book', name: 'Книги', icon: '📖' },
  { id: 'comic', name: 'Комиксы', icon: '🎨' },
  { id: 'game', name: 'Игры', icon: '🎮' },
  { id: 'rpg', name: 'RPG', icon: '🎲' },
];

// Статусы для фильтрации
export const MEDIA_STATUSES = [
  { id: 'all', name: 'Все', icon: '🔍' },
  { id: 'published', name: 'Опубликовано', icon: '✅' },
  { id: 'coming-soon', name: 'Скоро', icon: '⏳' },
  { id: 'in-development', name: 'В разработке', icon: '⚒️' },
  { id: 'planned', name: 'В планах', icon: '📋' },
];