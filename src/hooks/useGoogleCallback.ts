import { useNavigate } from 'react-router'
import { useAuthStore } from '../store/AuthStore'
import { useEffect } from 'react'

export const useGoogleCallback = () => {
    const setAccessToken = useAuthStore((s) => s.setAccessToken)
    const navigate = useNavigate()

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const token = params.get('token')

        if (token) {
            setAccessToken(token)
            navigate('/', { replace: true })
        }
    }, [setAccessToken, navigate])
}
