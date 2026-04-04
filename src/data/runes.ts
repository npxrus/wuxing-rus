// Данные о рунах и письменности Царства Пяти Начал

export interface Rune {
  id: string;
  name: string;
  element: 'wood' | 'fire' | 'earth' | 'metal' | 'water' | 'void';
  color: string;
  meaning: string;
  magicUse: string;
  icon: string;
  isForbidden?: boolean;
}

export interface RuneCombination {
  id: string;
  combination: string;
  elements: string[];
  effect: string;
  risk: string;
  icon: string;
}

export interface ForbiddenRune {
  id: string;
  name: string;
  effect: string;
  price: string;
  detection: string;
  icon: string;
}

export interface Language {
  name: string;
  usedBy: string;
  features: string;
  icon: string;
}

export interface WritingSystem {
  name: string;
  usedFor: string;
  material: string;
  description: string;
  icon: string;
}

// Руны Дерева (зелёный цвет)
export const WOOD_RUNES: Rune[] = [
  {
    id: 'growth',
    name: 'Рост',
    element: 'wood',
    color: '#2d5a27',
    meaning: 'Рост, начало, рождение, новый цикл',
    magicUse: 'Ускорение роста растений, исцеление ран, помощь при родах',
    icon: '🌱',
  },
  {
    id: 'root',
    name: 'Корень',
    element: 'wood',
    color: '#2d5a27',
    meaning: 'Основа, предки, память, стабильность',
    magicUse: 'Общение с духами предков, укрепление связи с родом',
    icon: '🌳',
  },
  {
    id: 'leaf',
    name: 'Лист',
    element: 'wood',
    color: '#2d5a27',
    meaning: 'Жизнь, дыхание, цикл, возрождение',
    magicUse: 'Лечение болезней, очищение, продление жизни',
    icon: '🍃',
  },
  {
    id: 'forest',
    name: 'Лес',
    element: 'wood',
    color: '#2d5a27',
    meaning: 'Множество, единство, общность',
    magicUse: 'Защита деревни, объединение усилий, коллективная магия',
    icon: '🌲',
  },
  {
    id: 'seed',
    name: 'Семя',
    element: 'wood',
    color: '#2d5a27',
    meaning: 'Потенциал, будущее, надежда',
    magicUse: 'Пророчества, предвидение, раскрытие талантов',
    icon: '🌰',
  },
];

// Руны Огня (алый цвет)
export const FIRE_RUNES: Rune[] = [
  {
    id: 'spark',
    name: 'Искра',
    element: 'fire',
    color: '#c2410c',
    meaning: 'Начало огня, вспышка, вдохновение',
    magicUse: 'Зажигание огня, создание света, пробуждение страсти',
    icon: '✨',
  },
  {
    id: 'flame',
    name: 'Пламя',
    element: 'fire',
    color: '#c2410c',
    meaning: 'Горение, страсть, сила, разрушение',
    magicUse: 'Огненные стрелы, усиление удара, очищение огнём',
    icon: '🔥',
  },
  {
    id: 'heat',
    name: 'Жар',
    element: 'fire',
    color: '#c2410c',
    meaning: 'Тепло, жизнь, солнце, энергия',
    magicUse: 'Обогрев, защита от холода, солнечная магия',
    icon: '☀️',
  },
  {
    id: 'ash',
    name: 'Пепел',
    element: 'fire',
    color: '#c2410c',
    meaning: 'Конец, жертва, очищение, память',
    magicUse: 'Уничтожение проклятых предметов, поминовение',
    icon: '🌫️',
  },
  {
    id: 'forge',
    name: 'Кузница',
    element: 'fire',
    color: '#c2410c',
    meaning: 'Творение, мастерство, преобразование',
    magicUse: 'Ковка артефактов, закалка металла, создание рун',
    icon: '⚒️',
  },
];

// Руны Земли (жёлтый цвет)
export const EARTH_RUNES: Rune[] = [
  {
    id: 'hill',
    name: 'Холм',
    element: 'earth',
    color: '#b45309',
    meaning: 'Подъём, стабильность, защита',
    magicUse: 'Поднятие земляных стен, укрепление построек',
    icon: '⛰️',
  },
  {
    id: 'stone',
    name: 'Камень',
    element: 'earth',
    color: '#b45309',
    meaning: 'Твёрдость, постоянство, вечность',
    magicUse: 'Защита от магии, создание големов, укрепление тела',
    icon: '🪨',
  },
  {
    id: 'field',
    name: 'Нива',
    element: 'earth',
    color: '#b45309',
    meaning: 'Плодородие, урожай, изобилие',
    magicUse: 'Удвоение урожая, благословение полей, плодородие скота',
    icon: '🌾',
  },
  {
    id: 'cave',
    name: 'Пещера',
    element: 'earth',
    color: '#b45309',
    meaning: 'Глубина, тайна, сокрытие',
    magicUse: 'Хранение тайн, создание убежищ, поиск подземелий',
    icon: '🏔️',
  },
  {
    id: 'grave',
    name: 'Могила',
    element: 'earth',
    color: '#b45309',
    meaning: 'Смерть, покой, завершение',
    magicUse: 'Изгнание неупокоенных, защита кладбищ, упокоение душ',
    icon: '🪦',
  },
];

// Руны Металла (белый/серебряный цвет)
export const METAL_RUNES: Rune[] = [
  {
    id: 'ore',
    name: 'Руда',
    element: 'metal',
    color: '#78716c',
    meaning: 'Скрытое богатство, потенциал, поиск',
    magicUse: 'Поиск металлов, обнаружение сокровищ, нахождение руды',
    icon: '⛏️',
  },
  {
    id: 'blade',
    name: 'Клинок',
    element: 'metal',
    color: '#78716c',
    meaning: 'Острота, истина, справедливость',
    magicUse: 'Зачарование оружия, усиление удара, правосудие',
    icon: '⚔️',
  },
  {
    id: 'shield',
    name: 'Щит',
    element: 'metal',
    color: '#78716c',
    meaning: 'Защита, граница, отражение',
    magicUse: 'Магическая броня, отражение стрел, защита от проклятий',
    icon: '🛡️',
  },
  {
    id: 'mirror',
    name: 'Зеркало',
    element: 'metal',
    color: '#78716c',
    meaning: 'Отражение, истина, самопознание',
    magicUse: 'Разоблачение лжи, отражение заклинаний, видение сути',
    icon: '🪞',
  },
  {
    id: 'smith',
    name: 'Кузнец',
    element: 'metal',
    color: '#78716c',
    meaning: 'Мастерство, точность, создание',
    magicUse: 'Создание артефактов, рунная гравировка, алхимия',
    icon: '🔨',
  },
];

// Руны Воды (чёрный/синий цвет)
export const WATER_RUNES: Rune[] = [
  {
    id: 'drop',
    name: 'Капля',
    element: 'water',
    color: '#1e40af',
    meaning: 'Начало, чистота, источник',
    magicUse: 'Создание воды, очищение, лечение отравлений',
    icon: '💧',
  },
  {
    id: 'wave',
    name: 'Волна',
    element: 'water',
    color: '#1e40af',
    meaning: 'Движение, перемена, поток',
    magicUse: 'Телепортация через воду, управление течением, создание волн',
    icon: '🌊',
  },
  {
    id: 'depth',
    name: 'Глубь',
    element: 'water',
    color: '#1e40af',
    meaning: 'Тайна, подсознание, мудрость',
    magicUse: 'Гадание, видение снов, проникновение в тайны',
    icon: '🌙',
  },
  {
    id: 'mist',
    name: 'Туман',
    element: 'water',
    color: '#1e40af',
    meaning: 'Скрытость, загадка, неопределённость',
    magicUse: 'Создание тумана, сокрытие, запутывание следов',
    icon: '🌫️',
  },
  {
    id: 'moon',
    name: 'Луна',
    element: 'water',
    color: '#1e40af',
    meaning: 'Цикл, женское начало, интуиция',
    magicUse: 'Обряды в Ночь Зеркальной Луны, женская магия, предсказания',
    icon: '🌙',
  },
];

// Пустые руны (для гаданий)
export const VOID_RUNES: Rune[] = [
  {
    id: 'wind',
    name: 'Ветер',
    element: 'void',
    color: '#6b7280',
    meaning: 'Неопределённость, свобода, перемены',
    magicUse: 'Гадания, предсказания, призыв ветра',
    icon: '💨',
  },
  {
    id: 'fate',
    name: 'Судьба',
    element: 'void',
    color: '#6b7280',
    meaning: 'Предопределение, неизбежность, рок',
    magicUse: 'Видение судьбы, пророчества, кармическая магия',
    icon: '🎲',
  },
  {
    id: 'shadow',
    name: 'Тень',
    element: 'void',
    color: '#6b7280',
    meaning: 'Опасность, Теневой Дракон, тьма',
    magicUse: 'Предупреждение об опасности, защита от теней',
    icon: '🌑',
  },
  {
    id: 'imbalance',
    name: 'Перекос',
    element: 'void',
    color: '#6b7280',
    meaning: 'Хаос, искажение, нарушение',
    magicUse: 'Обнаружение перекоса, восстановление равновесия',
    icon: '🌀',
  },
  {
    id: 'unity',
    name: 'Единство',
    element: 'void',
    color: '#6b7280',
    meaning: 'Совершенство, гармония, целостность',
    magicUse: 'Восстановление равновесия, исцеление души, просветление',
    icon: '☯',
  },
];

// Комбинации рун
export const RUNE_COMBINATIONS: RuneCombination[] = [
  {
    id: 'comb-1',
    combination: 'Рост + Капля',
    elements: ['Дерево', 'Вода'],
    effect: 'Мгновенное прорастание семян, ускоренный рост растений',
    risk: 'Засуха вокруг, истощение почвы',
    icon: '🌱💧',
  },
  {
    id: 'comb-2',
    combination: 'Пламя + Кузница',
    elements: ['Огонь', 'Металл'],
    effect: 'Ковка без горна, создание оружия из воздуха',
    risk: 'Маг может сгореть, потеря контроля',
    icon: '🔥⚒️',
  },
  {
    id: 'comb-3',
    combination: 'Холм + Камень',
    elements: ['Земля', 'Земля'],
    effect: 'Нерушимая стена, поднятие гор',
    risk: 'Земля трескается, разрушение почвы',
    icon: '⛰️🪨',
  },
  {
    id: 'comb-4',
    combination: 'Волна + Туман',
    elements: ['Вода', 'Вода'],
    effect: 'Телепортация (до 100 км) через водную гладь',
    risk: 'Застрять в тумане, потеряться между мирами',
    icon: '🌊🌫️',
  },
  {
    id: 'comb-5',
    combination: 'Клинок + Зеркало',
    elements: ['Металл', 'Металл'],
    effect: 'Отражение заклинаний, создание магического щита',
    risk: 'Проклятие на мага, обратный удар',
    icon: '⚔️🪞',
  },
  {
    id: 'comb-6',
    combination: 'Корень + Могила',
    elements: ['Дерево', 'Земля'],
    effect: 'Общение с умершими, упокоение душ',
    risk: 'Привлечение неупокоенных',
    icon: '🌳🪦',
  },
  {
    id: 'comb-7',
    combination: 'Искра + Пепел',
    elements: ['Огонь', 'Огонь'],
    effect: 'Очищение проклятых предметов, уничтожение тёмной магии',
    risk: 'Потеря памяти, выгорание',
    icon: '✨🌫️',
  },
];

// Запрещённые руны (Тёмный Путь)
export const FORBIDDEN_RUNES: ForbiddenRune[] = [
  {
    id: 'blood',
    name: 'Кровь',
    effect: 'Усиление магии за счёт чужой крови. Позволяет многократно усилить любое заклинание.',
    price: 'Кровь жертвы, нарушение воли, безумие',
    detection: 'Светится фиолетовым, шевелится на камне',
    icon: '🩸',
  },
  {
    id: 'dead',
    name: 'Мёртвый',
    effect: 'Подъём мёртвых, создание неупокоенных слуг',
    price: 'Гниение заживо, потеря души',
    detection: 'Холодная на ощупь, пахнет гнилью',
    icon: '💀',
  },
  {
    id: 'distortion',
    name: 'Искажение',
    effect: 'Изменение законов природы в ограниченной области',
    price: 'Питание Теневого Дракона, разрушение реальности',
    detection: 'Искажает пространство вокруг, рябит в глазах',
    icon: '🌀',
  },
  {
    id: 'devourer',
    name: 'Пожиратель',
    effect: 'Отнять магический дар у другого мага и присвоить его силу',
    price: 'Перекос всех стихий, превращение в пустотелого',
    detection: 'Тянется к другим магам, светится красным',
    icon: '👹',
  },
  {
    id: 'gate',
    name: 'Врата',
    effect: 'Открыть путь в Навь, призвать Тёмного Царя',
    price: 'Смерть призывателя, маг становится вратами',
    detection: 'Фиолетовое свечение, холод, шёпот',
    icon: '🚪',
  },
];

// Языки и наречия
export const LANGUAGES: Language[] = [
  {
    name: 'Лесное наречие',
    usedBy: 'Зелёные Рощи',
    features: 'Ближе к древнему языку, много метафор',
    icon: '🌿',
  },
  {
    name: 'Степной говор',
    usedBy: 'Пылающие Степи',
    features: 'Сильный акцент, короткие фразы',
    icon: '🔥',
  },
  {
    name: 'Межевой язык',
    usedBy: 'Великие Холмы',
    features: 'Торговый язык, все понимают, много заимствований',
    icon: '⛰️',
  },
  {
    name: 'Рудный язык',
    usedBy: 'Железные Горы',
    features: 'Очень грубый, короткие слова',
    icon: '⚔️',
  },
  {
    name: 'Водное наречие',
    usedBy: 'Туманные Озёра',
    features: 'Медленная речь, тягучие гласные',
    icon: '💧',
  },
  {
    name: 'Рунический язык',
    usedBy: 'Волхвы',
    features: 'Древний язык Драконов (мёртвый), 25 рун',
    icon: '🔮',
  },
];

// Письменность
export const WRITING_SYSTEMS: WritingSystem[] = [
  {
    name: 'Берестяная грамота',
    usedFor: 'Повседневная переписка, торговля, договоры',
    material: 'Берёста, уголь',
    description: '32 буквы, пишут слева направо. Знаки препинания: точка (.), крест (†) — конец фразы, две черты (‖) — конец текста.',
    icon: '📜',
  },
  {
    name: 'Руническая вязь',
    usedFor: 'Магические тексты, заклинания, пророчества',
    material: 'Древесина Мирового Дуба, металл, камень',
    description: '25 основных рун, можно комбинировать. Активируется кровью или жертвой.',
    icon: '🔣',
  },
  {
    name: 'Узелковое письмо',
    usedFor: 'Памятки для неграмотных, счёт товаров',
    material: 'Верёвка с узлами',
    description: 'Разные узлы обозначают разные числа и понятия. Используется купцами.',
    icon: '🪢',
  },
];

// Этапы обучения рунам
export const RUNE_TRAINING_STAGES = [
  { stage: 'Знакомство', age: '5-7 лет', description: 'Названия и формы 25 рун' },
  { stage: 'Чтение', age: '7-10 лет', description: 'Значение рун, комбинации' },
  { stage: 'Начертание', age: '10-12 лет', description: 'Как правильно чертить руну' },
  { stage: 'Активация', age: '12-14 лет', description: 'Активация руны, цена магии' },
  { stage: 'Вязь', age: '14-20 лет', description: 'Комбинации из 2-3 рун' },
  { stage: 'Мастерство', age: '20+ лет', description: 'Сложные вязи, новые руны' },
  { stage: 'Мудрость', age: '40+ лет', description: 'Пустые руны, пророчества' },
];

// Все руны вместе
export const ALL_RUNES = [...WOOD_RUNES, ...FIRE_RUNES, ...EARTH_RUNES, ...METAL_RUNES, ...WATER_RUNES, ...VOID_RUNES];