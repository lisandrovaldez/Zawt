import { useMutation } from '@tanstack/react-query'
import { registerRequest } from '../api/auth.api'
import { useAuthStore } from '../store/AuthStore'
import { type UserRegister } from '../types.d'
import { useNavigate } from 'react-router-dom'

export const useRegister = () => {
    const setAccessToken = useAuthStore((s) => s.setAccessToken)
    const navigate = useNavigate()

    return useMutation({
        mutationFn: (data: UserRegister) => registerRequest(data),

        onSuccess: (data) => {
            setAccessToken(data.accessToken)
            navigate('/')
        },

        onError: (error) => {
            console.error('Registration error:', error)
        },
    })
}
