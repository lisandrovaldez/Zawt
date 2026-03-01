import { type Transaction } from '../types'

export let mockTransactions: Transaction[] = [
    {
        id: '1',
        title: 'Sueldo mensual',
        amount: 1500000,
        type: 'income',
        category: 'Salario',
        subcategory: 'Mensual',
        payment: 'Bank',
        date: '2026-02-01',
    },
    {
        id: '2',
        title: 'Compra supermercado',
        amount: 85000,
        type: 'expense',
        category: 'Compras',
        subcategory: 'Supermercado',
        payment: 'Bank',
        date: '2026-02-05',
    },

    {
        id: '3',
        title: 'Pago de internet',
        amount: 15000,
        type: 'expense',
        category: 'Servicios',
        subcategory: 'Internet',
        payment: 'Bank',
        date: '2026-02-10',
    },

    {
        id: '4',
        title: 'Cena con amigos',
        amount: 32000,
        type: 'expense',
        category: 'Ocio',
        subcategory: 'Restaurantes',
        payment: 'Bank',
        date: '2026-02-15',
    },
    {
        id: '5',
        title: 'Venta 3070 TI',
        amount: 10000,
        type: 'income',
        category: 'Ventas',
        subcategory: 'Marketplace',
        payment: 'Cash',
        date: '2026-02-15',
    },
    {
        id: '6',
        title: 'Venta Motherboard',
        amount: 10000,
        type: 'income',
        category: 'Ventas',
        subcategory: 'Marketplace',
        payment: 'Cash',
        date: '2026-02-15',
    },
    {
        id: '7',
        title: 'Venta Motherboard',
        amount: 10000,
        type: 'income',
        category: 'Ventas',
        subcategory: 'Marketplace',
        payment: 'Cash',
        date: '2026-02-15',
    },
    {
        id: '8',
        title: 'Venta Motherboard',
        amount: 10000,
        type: 'income',
        category: 'Ventas',
        subcategory: 'Marketplace',
        payment: 'Cash',
        date: '2026-02-15',
    },
    {
        id: '9',
        title: 'Venta Motherboard',
        amount: 10000,
        type: 'income',
        category: 'Ventas',
        subcategory: 'Marketplace',
        payment: 'Cash',
        date: '2026-02-15',
    },
    {
        id: '10',
        title: 'Cena con amigos',
        amount: 32000,
        type: 'expense',
        category: 'Ocio',
        subcategory: 'Restaurantes',
        payment: 'Bank',
        date: '2026-02-15',
    },
    {
        id: '11',
        title: 'Cena con amigos',
        amount: 32000,
        type: 'expense',
        category: 'Ocio',
        subcategory: 'Restaurantes',
        payment: 'Bank',
        date: '2026-02-15',
    },
    {
        id: '12',
        title: 'Cena con amigos',
        amount: 32000,
        type: 'expense',
        category: 'Ocio',
        subcategory: 'Restaurantes',
        payment: 'Bank',
        date: '2026-02-15',
    },
]

export const api = {
    getTransactions: async (): Promise<Transaction[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([...mockTransactions])
            }, 800)
        })
    },

    addTransaction: async (newTransaction: Omit<Transaction, 'id'>): Promise<Transaction> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const transaction: Transaction = {
                    ...newTransaction,
                    id: Math.random().toString(36).substring(2, 9),
                }
                mockTransactions = [transaction, ...mockTransactions]
                resolve(transaction)
            }, 1000)
        })
    },

    deleteTransaction: async (id: string): Promise<boolean> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                mockTransactions = mockTransactions.filter((t) => t.id !== id)
                resolve(true)
            }, 600)
        })
    },
}
