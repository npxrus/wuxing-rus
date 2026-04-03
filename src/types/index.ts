// Тип для стихий
export type ElementType = 'wood' | 'fire' | 'earth' | 'metal' | 'water';

// Цвета и названия стихий для отображения
export const ElementMeta: Record<ElementType, {name: string, color: string, season: string}> = {
    wood: { name: 'Дерево', color: '#2d5a27', season: 'Зелёный' },
    fire: { name: 'Огонь', color: '#c2410c', season: 'Алый' },
    earth: { name: 'Земля', color: '#b45309', season: 'Золотой' },
    metal: { name: 'Металл', color: '#78716c', season: 'Белый' },
    water: { name: 'Вода', color: '#1e40af', season: 'Чёрный' },
};

// Тип для княжества
export interface Principality {
    id: string;
    name: string;
    element: ElementType;
    landscape: string;
    architecture: string;
    keyLocations: string[];
    description: string;
    imagePlaceholder: string;
}

// Тип для существа
export interface Creature {
    id: string;
    name: string;
    category: 'higher' | 'common';
    description: string;
    size?: string;
    appearance: string;
    habitat: string;
    imagePlaceholder: string;
}

// Тип для артефакта
export interface Artifact {
    id: string;
    name: string;
    properties: string;
    location: string;
    description: string;
}

// Тип для магической касты
export interface MagicCaste {
    name: string;
    learningMethod: string;
    imagePlaceholder: string;
}

// Тип для этапа обучения
export interface TrainingStage {
    name: string;
    ageRange: string;
    description: string;
}

// Тип для праздника
export interface Holiday {
    name: string;
    season: string;
    description: string;
}

// Тип для раздела навигации
export interface NavItem {
    title: string;
    href: string;
    icon?: string;
}