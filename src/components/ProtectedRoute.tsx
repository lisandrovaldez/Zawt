import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../store/AuthStore'
import { CircularProgress, Box } from '@mui/material'

export const ProtectedRoute = () => {
    const accessToken = useAuthStore((s) => s.accessToken)
    const isLoading = false

    if (isLoading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <CircularProgress />
            </Box>
        )
    }

    return accessToken ? <Outlet /> : <Navigate to="/login" replace />
}
