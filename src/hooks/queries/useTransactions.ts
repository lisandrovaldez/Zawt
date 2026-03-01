import { useQuery } from '@tanstack/react-query'
import { api } from '../../mocks/mock'
import { type Transaction } from '../../types.d'

export const useTransactions = () => {
    return useQuery({
        queryKey: ['transactions'],
        queryFn: api.getTransactions,
        select: (transactions: Transaction[]) => {
            const totalIncome = transactions
                .filter((t) => t.type === 'income')
                .reduce((acc, t) => acc + t.amount, 0)

            const totalExpense = transactions
                .filter((t) => t.type === 'expense')
                .reduce((acc, t) => acc + t.amount, 0)

            return {
                transactions,
                totalIncome,
                totalExpense,
                totalTransactions: transactions.length,
                net: totalIncome - totalExpense,
            }
        },
    })
}
