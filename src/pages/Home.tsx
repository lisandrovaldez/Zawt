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
import { useTransactions } from '../hooks/queries/useTransactions'
import { useAddTransaction } from '../hooks/mutations/useAddTransaction'

export default function Home() {
    const { isModalOpen, modalType, openModal, closeModal } = useWalletUIStore()
    const { data } = useTransactions()
    const transactions = data?.transactions ?? []
    const totalIncome = data?.totalIncome ?? 0
    const totalExpense = data?.totalExpense ?? 0
    const totalTransactions = data?.totalTransactions ?? 0
    const net = data?.net ?? 0
    const addMutation = useAddTransaction(closeModal)

    return (
        <>
            <Header />
            <main className="flex px-30 py-12">
                <div className="flex flex-col gap-4 mr-20 whitespace-nowrap">
                    <h2 className="text-3xl font-bold">Quick Actions</h2>
                    <ButtonGroup
                        orientation="vertical"
                        aria-label="Vertical button group"
                        variant="contained"
                    >
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
                </div>
                <section className="flex flex-col gap-4 w-full">
                    <div className="flex gap-3 w-full justify-between">
                        <InfoBox
                            title="Total Transactions"
                            value={totalTransactions}
                            icon={ImportExportOutlinedIcon}
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
