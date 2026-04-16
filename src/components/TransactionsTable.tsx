import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import DateIcon from '@mui/icons-material/DateRange'
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined'
import Chip from '@mui/material/Chip'
import { INCOME_CONFIG, EXPENSE_CONFIG, PAYMENT_CONFIG, type Transaction } from '../types.d'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import Tooltip from '@mui/material/Tooltip'

const CONFIG = {
    income: INCOME_CONFIG,
    expense: EXPENSE_CONFIG,
}

const LABELS = {
    income: 'Income',
    expense: 'Expenses',
}

interface TransactionsTableProps {
    data: Transaction[]
    type: 'income' | 'expense'
}

export const TransactionsTable = ({ data, type }: TransactionsTableProps) => {
    const config = CONFIG[type]
    const filtered = data.filter((t) => t.type === type)

    return (
        <Paper sx={{ width: '100%', mb: 2, mx: 'auto' }}>
            <Toolbar>
                <Typography sx={{ flex: '1 1 100%' }} variant="h6">
                    <TableRowsOutlinedIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    {LABELS[type]}
                </Typography>
            </Toolbar>
            <TableContainer
                sx={{
                    maxHeight: 221,
                    '&::-webkit-scrollbar': { width: '8px' },
                    '&::-webkit-scrollbar-thumb': { backgroundColor: '#444', borderRadius: '4px' },
                }}
            >
                <Table stickyHeader size="small">
                    <TableHead
                        sx={{
                            '& .MuiTableCell-head': {
                                backgroundColor: '#1E1E1E !important',
                                fontWeight: 'bold',
                            },
                        }}
                    >
                        <TableRow>
                            <TableCell>
                                <DateIcon sx={{ fontSize: 18, mr: 1 }} />
                                Date
                            </TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Subcategory</TableCell>
                            <TableCell>Payment</TableCell>
                            <TableCell>Info</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filtered.map((transaction) => {
                            const categoryInfo = config[transaction.category] || { color: '#999' }
                            const paymentInfo = PAYMENT_CONFIG[transaction.payment] || {
                                color: '#999',
                            }
                            return (
                                <TableRow
                                    key={transaction.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {new Date(transaction.date).toLocaleDateString('es-AR', {
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit',
                                        })}
                                    </TableCell>
                                    <TableCell>
                                        {new Intl.NumberFormat('es-AR', {
                                            style: 'currency',
                                            currency: 'ARS',
                                        }).format(transaction.amount)}
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            label={transaction.category}
                                            size="small"
                                            sx={{
                                                backgroundColor: categoryInfo.color,
                                                color: '#fff',
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            label={transaction.subcategory ?? transaction.category}
                                            size="small"
                                            sx={{
                                                backgroundColor: categoryInfo.color,
                                                color: '#fff',
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            label={transaction.payment}
                                            size="small"
                                            sx={{
                                                backgroundColor: paymentInfo.color,
                                                color: '#fff',
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Tooltip title={transaction.title}>
                                            <InfoOutlinedIcon />
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}
