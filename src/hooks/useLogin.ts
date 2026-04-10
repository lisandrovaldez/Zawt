import { useMutation } from '@tanstack/react-query'
import { loginRequest } from '../api/auth.api'
import { useAuthStore } from '../store/AuthStore'
import { type UserLogin } from '../types.d'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
    const setAccessToken = useAuthStore((s) => s.setAccessToken)
    const navigate = useNavigate()

    return useMutation({
        mutationFn: (data: UserLogin) => loginRequest(data),

        onSuccess: (data) => {
            setAccessToken(data.accessToken)
            navigate('/')
        },
    })
}
