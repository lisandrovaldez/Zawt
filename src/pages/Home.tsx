import { Header } from '../components/Header'
import { TransactionsTable } from '../components/TransactionsTable'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import { InfoBox } from '../components/InfoBox'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined'
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined'
import { useWalletUIStore } from '../store/WalletUIStore'
import { TransactionModal } from '../components/TransactionModal'
import { useTransactions } from '../hooks/useTransactions'
import { useCreateTransaction } from '../hooks/useCreateTransaction'
import { CategoryPieCharts } from '../components/CategoryPieCharts'
import { useMemo } from 'react'

export default function Home() {
    const { isModalOpen, modalType, openModal, closeModal } = useWalletUIStore()
    const { data: transactions = [] } = useTransactions()
    const addMutation = useCreateTransaction()

    const incomeTransactions = useMemo(
        () => transactions.filter((t) => t.type === 'income'),
        [transactions]
    )

    const expenseTransactions = useMemo(
        () => transactions.filter((t) => t.type === 'expense'),
        [transactions]
    )

    const totalIncome = useMemo(
        () => incomeTransactions.reduce((sum, t) => sum + t.amount, 0),
        [incomeTransactions]
    )

    const totalExpense = useMemo(
        () => expenseTransactions.reduce((sum, t) => sum + t.amount, 0),
        [expenseTransactions]
    )

    const totalTransactions = transactions.length

    const net = totalIncome - totalExpense

    return (
        <>
            <Header />
            <main className="flex px-30 py-12 mt-4">
                <div className="flex flex-col gap-4 mr-20 whitespace-nowrap">
                    <h2 className="text-3xl font-bold">Quick Actions</h2>
                    <ButtonGroup orientation="vertical" variant="contained">
                        <Button
                            startIcon={<AddOutlinedIcon />}
                            sx={{ justifyContent: 'flex-start' }}
                            onClick={() => openModal('expense')}
                        >
                            New Expense
                        </Button>
                        <Button
                            startIcon={<AddOutlinedIcon />}
                            sx={{ justifyContent: 'flex-start' }}
                            onClick={() => openModal('income')}
                        >
                            New Income
                        </Button>
                    </ButtonGroup>

                    <CategoryPieCharts
                        incomeTransactions={incomeTransactions}
                        expenseTransactions={expenseTransactions}
                    />
                </div>
                <section className="flex flex-col gap-4 w-full">
                    <div className="flex gap-3 w-full justify-between mb-8">
                        <InfoBox
                            title="Total Transactions"
                            value={totalTransactions}
                            icon={ImportExportOutlinedIcon}
                            formatted={false}
                        />

                        <InfoBox
                            title="Total Income"
                            value={totalIncome}
                            icon={TrendingUpOutlinedIcon}
                            iconColor="#24C463"
                        />

                        <InfoBox
                            title="Total Expense"
                            value={totalExpense}
                            icon={TrendingDownOutlinedIcon}
                            iconColor="#EF4544"
                        />

                        <InfoBox
                            title="Net Cash Flow"
                            value={net}
                            icon={ImportExportOutlinedIcon}
                            iconColor={net >= 0 ? '#24C463' : '#EF4544'}
                        />
                    </div>
                    <TransactionsTable data={transactions} type="income" />
                    <TransactionsTable data={transactions} type="expense" />
                </section>
            </main>
            <TransactionModal
                open={isModalOpen}
                handleClose={closeModal}
                type={modalType}
                onSave={(data) => addMutation.mutate(data)}
            />
        </>
    )
}
