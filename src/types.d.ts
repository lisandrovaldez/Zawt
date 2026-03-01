export type CategoryDetail = {
    name: string
    color: string
    subcategories: string[]
}

export const EXPENSE_CONFIG: Record<string, CategoryDetail> = {
    Compras: {
        name: 'Compras',
        color: '#FF57334d',
        subcategories: ['Supermercado', 'Verdulería', 'Farmacia', 'Ropa'],
    },
    Transporte: {
        name: 'Transporte',
        color: '#3498DB4d',
        subcategories: ['Uber', 'Tarjeta SUBE', 'Nafta', 'Peajes'],
    },
    Servicios: {
        name: 'Servicios',
        color: '#F1C40F4d',
        subcategories: ['Luz', 'Agua', 'Gas', 'Internet'],
    },
    Ocio: {
        name: 'Ocio',
        color: '#9B59B64d',
        subcategories: ['Cine', 'Restaurantes', 'Bares'],
    },
    Suscripciones: {
        name: 'Suscripciones',
        color: '#E74C3C4d',
        subcategories: ['Netflix', 'Spotify', 'Gym', 'Crunchyroll'],
    },
    Salud: {
        name: 'Salud',
        color: '#2ECC714d',
        subcategories: ['Obra Social', 'Medicamentos'],
    },
    Educación: {
        name: 'Educación',
        color: '#1ABC9C4d',
        subcategories: ['Cursos', 'Libros', 'Universidad'],
    },
    Computadora: {
        name: 'Computadora',
        color: '#34495E4d',
        subcategories: ['Hardware', 'Software', 'Accesorios'],
    },
    Otros: {
        name: 'Otros',
        color: '#95A5A64d',
        subcategories: ['Varios'],
    },
}

export const INCOME_CONFIG: Record<string, CategoryDetail> = {
    Salario: { name: 'Salario', color: '#0A9DFF4D', subcategories: ['Mensual', 'Aguinaldo'] },
    Ventas: { name: 'Ventas', color: '#FF910A4D', subcategories: ['Freelance', 'Marketplace'] },
    Inversiones: {
        name: 'Inversiones',
        color: '#2980B94D',
        subcategories: ['Dividendos', 'Cripto'],
    },
    Regalos: { name: 'Regalos', color: '#D354004D', subcategories: ['Cumpleaños', 'Otros'] },
}

export type PaymentDetail = {
    name: string
    color: string
}

export const PAYMENT_CONFIG: Record<string, PaymentDetail> = {
    Cash: {
        name: 'Cash',
        color: '#27AE604d',
    },
    Bank: {
        name: 'Bank',
        color: '#2219944d',
    },
}

export type Transaction = {
    id: string
    title: string
    amount: number
    type: 'income' | 'expense'
    category: string
    subcategory?: string
    date: string
    payment: 'Cash' | 'Bank'
}
