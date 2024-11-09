export const TODO_FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed',
    PARTIAL: 'partial'
} as const

export const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL]: {
        literals: 'ToDos',
        href: `/?filter=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE]: {
        literals: 'Activos',
        href: `/?filter=${TODO_FILTERS.ACTIVE}`
    },
    [TODO_FILTERS.COMPLETED]: {
        literals: 'Completados',
        href: `/?filter=${TODO_FILTERS.COMPLETED}`
    },
} as const