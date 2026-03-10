import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'
import { ProtectedRoute } from './components/ProtectedRoute'
import { CircularProgress, Box } from '@mui/material'
import { useAutoRefreshToken } from './hooks/useAutoRefreshToken'
import { useGoogleCallback } from './hooks/useGoogleCallback.ts'

const Home = lazy(() => import('./pages/Home.tsx'))
const Login = lazy(() => import('./pages/Login.tsx'))
const Register = lazy(() => import('./pages/Register.tsx'))

function App() {
    useAutoRefreshToken()
    useGoogleCallback()
    return (
        <Suspense
            fallback={
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
            }
        >
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default App
