import { memo } from 'react'
import { PieChart } from '@mui/x-charts/PieChart'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { type Transaction, EXPENSE_CONFIG, INCOME_CONFIG } from '../types.d'

interface CategoryPieChartsProps {
    incomeTransactions: Transaction[]
    expenseTransactions: Transaction[]
}

interface PieChartCardProps {
    title: string
    data: { id: string; label: string; value: number; color: string }[]
}

const buildChartData = (
    transactions: Transaction[],
    config: Record<string, { name: string; color: string }>
) => {
    const grouped = transactions.reduce<Record<string, number>>((acc, t) => {
        acc[t.category] = (acc[t.category] ?? 0) + t.amount
        return acc
    }, {})

    return Object.entries(grouped).map(([category, value]) => ({
        id: category,
        label: category,
        value,
        color: config[category]?.color.slice(0, 7) ?? '#888888',
    }))
}

const PieChartCard = ({ title, data }: PieChartCardProps) => {
    const isEmpty = data.length === 0 || data.every((d) => d.value === 0)

    return (
        <Box>
            <Typography
                sx={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'text.secondary',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    mb: 1,
                }}
            >
                {title}
            </Typography>
            {isEmpty ? (
                <Box
                    sx={{
                        height: 180,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography sx={{ fontSize: '13px', color: 'text.disabled' }}>
                        No data yet
                    </Typography>
                </Box>
            ) : (
                <PieChart
                    series={[
                        {
                            data,
                            highlightScope: { fade: 'global', highlight: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -4, color: 'gray' },
                            innerRadius: 28,
                            paddingAngle: 1,
                            cornerRadius: 4,
                        },
                    ]}
                    height={180}
                    slotProps={{
                        legend: {
                            direction: 'horizontal',
                            position: { vertical: 'middle', horizontal: 'end' },
                        },
                    }}
                    margin={{ right: 120 }}
                />
            )}
        </Box>
    )
}

const IncomeChart = memo(({ transactions }: { transactions: Transaction[] }) => {
    const data = buildChartData(transactions, INCOME_CONFIG)
    return <PieChartCard title="Income by Category" data={data} />
})

const ExpenseChart = memo(({ transactions }: { transactions: Transaction[] }) => {
    const data = buildChartData(transactions, EXPENSE_CONFIG)
    return <PieChartCard title="Expense by Category" data={data} />
})

export const CategoryPieCharts = ({
    incomeTransactions,
    expenseTransactions,
}: CategoryPieChartsProps) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 2, width: 300 }}>
        <IncomeChart transactions={incomeTransactions} />
        <ExpenseChart transactions={expenseTransactions} />
    </Box>
)
