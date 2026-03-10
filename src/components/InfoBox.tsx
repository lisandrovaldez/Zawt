import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { type SvgIconComponent } from '@mui/icons-material'

interface InfoBoxProps {
    title: string
    value: number
    icon: SvgIconComponent
    iconColor?: string
    formatted?: boolean
}

export const InfoBox = ({
    title,
    value,
    icon: Icon,
    iconColor = '#fff',
    formatted = true,
}: InfoBoxProps) => {
    const formattedValue = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value)

    const displayValue = formatted ? formattedValue : value

    const valueColor = title === 'Net Cash Flow' ? (value >= 0 ? '#24C463' : '#EF4544') : iconColor

    return (
        <Paper
            sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                bgcolor: 'background.paper',
                borderRadius: 2,
            }}
        >
            <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    {title}
                </Typography>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ color: valueColor, fontWeight: 'bold' }}
                >
                    {displayValue}
                </Typography>
            </Box>
            <Box
                sx={{
                    backgroundColor: `${valueColor}20`,
                    borderRadius: '50%',
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Icon sx={{ color: valueColor }} />
            </Box>
        </Paper>
    )
}
