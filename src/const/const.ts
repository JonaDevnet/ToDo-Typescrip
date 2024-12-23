export const TODO_FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
} as const 

export const FILTERS_BUTTONS ={
    [TODO_FILTERS.ALL]: {
        literals: 'Todos',
        href: `/?filters=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE]: {
        literals: 'Activos',
        href: `/?filters=${TODO_FILTERS.ACTIVE}`
    },
    [TODO_FILTERS.COMPLETED]: {
        literals: 'Completados',
        href: `/?filters=${TODO_FILTERS.COMPLETED}`
    },
} as const