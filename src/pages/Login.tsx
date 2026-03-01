import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Link from '@mui/material/Link'
import { EyeIcon, EyeOffIcon, GoogleIcon } from '../assets/svgs'
import icon from '../assets/icon.webp'

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [focused, setFocused] = useState<string | null>(null)

    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: '#080808',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                fontFamily: '"DM Sans", sans-serif',
            }}
        >
            {/* Ambient background glow */}
            <Box
                sx={{
                    position: 'absolute',
                    width: 600,
                    height: 600,
                    borderRadius: '50%',
                    background:
                        'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Subtle grid texture */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
                `,
                    backgroundSize: '48px 48px',
                    pointerEvents: 'none',
                }}
            />

            {/* Card */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: 400,
                    mx: 3,
                    p: '40px 36px',
                    bgcolor: '#111111',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '16px',
                    boxShadow: '0 0 0 1px rgba(0,0,0,0.5), 0 32px 64px rgba(0,0,0,0.4)',
                    '@keyframes fadeUp': {
                        from: { opacity: 0, transform: 'translateY(16px)' },
                        to: { opacity: 1, transform: 'translateY(0)' },
                    },
                    animation: 'fadeUp 0.5s ease forwards',
                }}
            >
                {/* Logo mark */}
                <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
                        <Box
                            sx={{
                                width: 36,
                                height: 36,
                                borderRadius: '10px',
                                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                boxShadow: '0 0 20px rgba(99,102,241,0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <img src={icon} alt="zawt icon" className="w-8" />
                        </Box>
                        <Typography
                            sx={{
                                fontSize: '22px',
                                fontWeight: 800,
                                background:
                                    'linear-gradient(20deg, #a78bfa 0%, #a78bfa 25%, #ffffff 100%)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                filter: 'drop-shadow(0px 1px 1px rgba(167, 139, 250, 0.5))',
                                color: 'transparent',
                                display: 'inline-block',
                                letterSpacing: '3px',
                                lineHeight: 1.2,
                                fontFamily: '"Montserrat", sans-serif',
                            }}
                        >
                            ZAWT
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            fontSize: '22px',
                            fontWeight: 600,
                            color: '#f5f5f5',
                            letterSpacing: '-0.5px',
                            lineHeight: 1.2,
                            fontFamily: '"DM Sans", sans-serif',
                        }}
                    >
                        Welcome back
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            color: 'rgba(255,255,255,0.35)',
                            mt: 0.5,
                            fontFamily: '"DM Sans", sans-serif',
                        }}
                    >
                        Sign in to your account
                    </Typography>
                </Box>

                {/* Google Button */}
                <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    sx={{
                        mb: 3,
                        py: 1.25,
                        color: 'rgba(255,255,255,0.75)',
                        borderColor: 'rgba(255,255,255,0.1)',
                        bgcolor: 'rgba(255,255,255,0.03)',
                        borderRadius: '10px',
                        fontSize: '14px',
                        fontWeight: 500,
                        fontFamily: '"DM Sans", sans-serif',
                        textTransform: 'none',
                        letterSpacing: 0,
                        transition: 'all 0.2s',
                        '&:hover': {
                            bgcolor: 'rgba(255,255,255,0.06)',
                            borderColor: 'rgba(255,255,255,0.18)',
                            transform: 'translateY(-1px)',
                        },
                    }}
                >
                    Continue with Google
                </Button>

                {/* Divider */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                    <Divider sx={{ flex: 1, borderColor: 'rgba(255,255,255,0.07)' }} />
                    <Typography
                        sx={{
                            fontSize: '12px',
                            color: 'rgba(255,255,255,0.2)',
                            fontFamily: '"DM Sans", sans-serif',
                        }}
                    >
                        or
                    </Typography>
                    <Divider sx={{ flex: 1, borderColor: 'rgba(255,255,255,0.07)' }} />
                </Box>

                {/* Form */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: '12px',
                                fontWeight: 500,
                                color: 'rgba(255,255,255,0.45)',
                                mb: 0.75,
                                letterSpacing: '0.02em',
                                fontFamily: '"DM Sans", sans-serif',
                            }}
                        >
                            EMAIL
                        </Typography>
                        <TextField
                            fullWidth
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setFocused('email')}
                            onBlur={() => setFocused(null)}
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    bgcolor: 'rgba(255,255,255,0.03)',
                                    borderRadius: '10px',
                                    fontFamily: '"DM Sans", sans-serif',
                                    fontSize: '14px',
                                    color: 'rgba(255,255,255,0.85)',
                                    transition: 'all 0.2s',
                                    '& fieldset': {
                                        borderColor:
                                            focused === 'email'
                                                ? 'rgba(99,102,241,0.6)'
                                                : 'rgba(255,255,255,0.08)',
                                        transition: 'border-color 0.2s',
                                    },
                                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgba(99,102,241,0.6)',
                                        borderWidth: 1,
                                    },
                                },
                                '& input::placeholder': {
                                    color: 'rgba(255,255,255,0.2)',
                                    opacity: 1,
                                },
                            }}
                        />
                    </Box>

                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mb: 0.75,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '12px',
                                    fontWeight: 500,
                                    color: 'rgba(255,255,255,0.45)',
                                    letterSpacing: '0.02em',
                                    fontFamily: '"DM Sans", sans-serif',
                                }}
                            >
                                PASSWORD
                            </Typography>
                            <Link
                                href="#"
                                underline="none"
                                sx={{
                                    fontSize: '12px',
                                    color: 'rgba(99,102,241,0.8)',
                                    fontFamily: '"DM Sans", sans-serif',
                                    '&:hover': { color: '#6366f1' },
                                    transition: 'color 0.2s',
                                }}
                            >
                                Forgot password?
                            </Link>
                        </Box>
                        <TextField
                            fullWidth
                            placeholder="••••••••"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => setFocused('password')}
                            onBlur={() => setFocused(null)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                            sx={{
                                                color: 'rgba(255,255,255,0.25)',
                                                '&:hover': { color: 'rgba(255,255,255,0.5)' },
                                            }}
                                        >
                                            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    bgcolor: 'rgba(255,255,255,0.03)',
                                    borderRadius: '10px',
                                    fontFamily: '"DM Sans", sans-serif',
                                    fontSize: '14px',
                                    color: 'rgba(255,255,255,0.85)',
                                    '& fieldset': {
                                        borderColor:
                                            focused === 'password'
                                                ? 'rgba(99,102,241,0.6)'
                                                : 'rgba(255,255,255,0.08)',
                                        transition: 'border-color 0.2s',
                                    },
                                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgba(99,102,241,0.6)',
                                        borderWidth: 1,
                                    },
                                },
                                '& input::placeholder': {
                                    color: 'rgba(255,255,255,0.2)',
                                    opacity: 1,
                                },
                            }}
                        />
                    </Box>

                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 0.5,
                            py: 1.35,
                            background: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)',
                            borderRadius: '10px',
                            fontSize: '14px',
                            fontWeight: 600,
                            fontFamily: '"DM Sans", sans-serif',
                            textTransform: 'none',
                            letterSpacing: 0,
                            boxShadow: '0 0 20px rgba(99,102,241,0.25)',
                            transition: 'all 0.2s',
                            '&:hover': {
                                background: 'linear-gradient(135deg, #4f46e5 0%, #6d28d9 100%)',
                                boxShadow: '0 0 28px rgba(99,102,241,0.4)',
                                transform: 'translateY(-1px)',
                            },
                            '&:active': { transform: 'translateY(0)' },
                        }}
                    >
                        Sign in
                    </Button>
                </Box>

                {/* Register link */}
                <Typography
                    sx={{
                        mt: 3,
                        textAlign: 'center',
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.3)',
                        fontFamily: '"DM Sans", sans-serif',
                    }}
                >
                    Don't have an account?{' '}
                    <Link
                        href="#"
                        underline="none"
                        sx={{
                            color: 'rgba(99,102,241,0.8)',
                            fontWeight: 500,
                            '&:hover': { color: '#6366f1' },
                            transition: 'color 0.2s',
                        }}
                    >
                        Create one
                    </Link>
                </Typography>
            </Box>
        </Box>
    )
}
