import { apiFetch } from './client'
import { type Transaction } from '../types.d'

export const getTransactions = (accessToken: string) => {
    return apiFetch<Transaction[]>(
        '/transactions',
        {
            method: 'GET',
        },
        accessToken
    )
}

export const createTransaction = (data: Omit<Transaction, 'id'>, accessToken: string) => {
    return apiFetch<Transaction>(
        '/transactions',
        {
            method: 'POST',
            body: JSON.stringify(data),
        },
        accessToken
    )
}
