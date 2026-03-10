import { useMutation } from '@tanstack/react-query'
import { logoutRequest } from '../api/auth.api'
import { useAuthStore } from '../store/AuthStore'
import { useNavigate } from 'react-router-dom'

export const useLogout = () => {
    const { accessToken, logout } = useAuthStore()
    const navigate = useNavigate()

    return useMutation({
        mutationFn: () => logoutRequest(accessToken!),
        onSuccess: () => {
            logout()
            navigate('/login')
        },
        onError: () => {
            logout()
            navigate('/login')
        },
    })
}
