import { Avatar } from '@mui/material'
import icon from '../assets/icon.webp'
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
// import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'

export const Header = () => {
    return (
        <div className="flex items-center justify-between w-full p-3 px-4">
            <div className="flex items-center gap-3">
                <img
                    src={icon}
                    alt="zawt icon"
                    className="w-auto h-12 drop-shadow-violet-400 drop-shadow-lg"
                />
                <div className="font-['Montserrat',sans-serif] flex flex-col m-0 p-0">
                    <h1 className=" font-extrabold text-4xl shadow-2xs drop-shadow-violet-400 drop-shadow-sm shadow-violet-400 tracking-widest m-0 leading-none bg-linear-20 from-violet-400 via-25% to-white bg-clip-text text-transparent">
                        ZAWT
                    </h1>

                    <p className="text-violet-400 font-light text-md m-0">Expense Tracker</p>
                </div>
            </div>
            <Avatar
                alt="profile picture"
                src="https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png"
            />
        </div>
    )
}
