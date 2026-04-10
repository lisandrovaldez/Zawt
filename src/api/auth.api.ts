import { apiFetch } from './client'
import { type UserLogin, type UserRegister, type AuthResponse } from '../types.d'

export const loginRequest = (data: UserLogin) => {
    return apiFetch<AuthResponse>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(data),
    })
}

export const registerRequest = (data: UserRegister) => {
    return apiFetch<AuthResponse>('/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
    })
}

export const refreshRequest = (): Promise<AuthResponse> => {
    return apiFetch<AuthResponse>('/auth/refresh', {
        method: 'POST',
    })
}

export const logoutRequest = (accessToken: string) => {
    return apiFetch(
        '/auth/logout',
        {
            method: 'POST',
        },
        accessToken
    )
}
