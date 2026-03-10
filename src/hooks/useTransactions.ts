import { useQuery } from '@tanstack/react-query'
import { getTransactions } from '../api/transaction.api'
import { useAuthStore } from '../store/AuthStore'

export const useTransactions = () => {
    const accessToken = useAuthStore((s) => s.accessToken)

    return useQuery({
        queryKey: ['transactions'],
        queryFn: () => getTransactions(accessToken!),
        enabled: !!accessToken,
    })
}
