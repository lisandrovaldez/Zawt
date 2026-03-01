import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../mocks/mock'

export const useAddTransaction = (onSuccessCallback?: () => void) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: api.addTransaction,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['transactions'] })
            onSuccessCallback?.()
        },
    })
}
