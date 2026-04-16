import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createTransaction } from '../api/transaction.api'
import { type Transaction } from '../types.d'
import { useAuthStore } from '../store/AuthStore'

export const useCreateTransaction = () => {
    const queryClient = useQueryClient()
    const accessToken = useAuthStore((s) => s.accessToken)

    return useMutation({
        mutationFn: (data: Omit<Transaction, 'id'>) => createTransaction(data, accessToken!),

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['transactions'] })
        },
    })
}
