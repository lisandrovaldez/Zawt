import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import LogoutIcon from '@mui/icons-material/Logout'
import icon from '../assets/icon.webp'
import { useLogout } from '../hooks/useLogout'

export const Header = () => {
    const logoutMutation = useLogout()

    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexGrow: 1 }}>
                    <img
                        src={icon}
                        alt="zawt icon"
                        className="w-auto h-10 drop-shadow-violet-400 drop-shadow-lg"
                    />
                    <div className="font-['Montserrat',sans-serif] flex flex-col m-0 p-0">
                        <h1
                            className=" font-extrabold text-4xl shadow-2xs drop-shadow-violet-400 drop-shadow-sm     
                          shadow-violet-400 tracking-widest m-0 leading-none bg-size-[400%_400%] animate-diagonal-rgb
                            bg-linear-135 from-violet-400 from-25% via-white to-violet-400 to-100% bg-clip-text text-transparent"
                        >
                            ZAWT
                        </h1>
                        <p className="text-violet-400 font-light text-sm m-0">Expense Tracker</p>
                    </div>
                </Box>

                <Button
                    color="inherit"
                    onClick={() => logoutMutation.mutate()}
                    startIcon={<LogoutIcon />}
                    disabled={logoutMutation.isPending}
                >
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    )
}
