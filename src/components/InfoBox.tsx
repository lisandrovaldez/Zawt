import { Typography } from '@mui/material'
import { type SvgIconComponent } from '@mui/icons-material'

interface InfoBoxProps {
    title: string
    value: string | number
    icon: SvgIconComponent
    iconColor?: string
}

export const InfoBox = ({ title, value, icon: Icon, iconColor }: InfoBoxProps) => {
    return (
        <div className="flex flex-col gap-2 p-4 border-[#1E1E1E] border-2 w-55 whitespace-nowrap">
            <Typography
                variant="h6"
                component="div"
                sx={{
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                {title}
                <Icon sx={{ color: iconColor }} />
            </Typography>
            <p className="text-2xl font-bold text-left" style={{ color: iconColor }}>
                {value}
            </p>
        </div>
    )
}
