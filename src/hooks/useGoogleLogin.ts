import { useEffect } from 'react'
import { useAuthStore } from '../store/AuthStore'
import { useNavigate } from 'react-router-dom'

export const useGoogleLogin = () => {
    const setAccessToken = useAuthStore((s) => s.setAccessToken)
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        window.location.href = 'https://zawt-api.onrender.com/auth/google'
    }

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const token = params.get('token')
        const error = params.get('error')

        if (error) {
            console.error('Google login error:', error)
        }

        if (token) {
            setAccessToken(token)

            const redirectTo = sessionStorage.getItem('redirectAfterLogin') || '/'
            sessionStorage.removeItem('redirectAfterLogin')

            navigate(redirectTo)

            window.history.replaceState({}, '', '/login')
        }
    }, [setAccessToken, navigate])

    return { handleGoogleLogin }
}
