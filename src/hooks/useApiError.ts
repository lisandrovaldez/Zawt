import { useAuthStore } from '../store/AuthStore'
import { useNavigate } from 'react-router-dom'
import { ApiError } from '../api/client'

export const useApiError = () => {
    const logout = useAuthStore((s) => s.logout)
    const navigate = useNavigate()

    const handleError = (error: unknown) => {
        if (error instanceof ApiError) {
            if (error.status === 401) {
                logout()
                navigate('/login')
            }

            switch (error.status) {
                case 400:
                    console.error('Bad Request:', error.data)
                    break
                case 403:
                    console.error('Forbidden:', error.data)
                    break
                case 404:
                    console.error('Not Found:', error.data)
                    break
                case 500:
                    console.error('Server Error:', error.data)
                    break
            }
        } else if (error instanceof Error) {
            console.error('Error:', error.message)
        } else {
            console.error('Unknown error:', error)
        }
    }

    return { handleError }
}
