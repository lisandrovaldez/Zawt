import { useEffect } from 'react'
import { useAuthStore } from '../store/AuthStore'
import { refreshRequest } from '../api/auth.api'

export const useAutoRefreshToken = () => {
    const { accessToken, setAccessToken } = useAuthStore()

    useEffect(() => {
        if (!accessToken) return

        const refreshInterval = setInterval(
            async () => {
                try {
                    const response = await refreshRequest()
                    setAccessToken(response.accessToken)
                } catch (error) {
                    console.error('Error refreshing token:', error)
                }
            },
            14 * 60 * 1000
        )

        return () => clearInterval(refreshInterval)
    }, [accessToken, setAccessToken])
}
