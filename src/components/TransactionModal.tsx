import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import { EXPENSE_CONFIG, INCOME_CONFIG, type Transaction } from '../types.d'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs, { type Dayjs } from 'dayjs'
import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { type SelectChangeEvent } from '@mui/material/Select'
import FormHelperText from '@mui/material/FormHelperText'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

interface TransactionModalProps {
    open: boolean
    handleClose: () => void
    type: 'income' | 'expense' | null
    onSave: (data: Omit<Transaction, 'id'>) => void
}

interface FormState {
    title: string
    amount: string
    category: string
    subcategory: string
    payment: 'Cash' | 'Bank' | ''
    date: Dayjs | null
}

const initialForm: FormState = {
    title: '',
    amount: '',
    category: '',
    subcategory: '',
    payment: '',
    date: dayjs(),
}

export const TransactionModal = ({ open, handleClose, type, onSave }: TransactionModalProps) => {
    const [form, setForm] = useState<FormState>(initialForm)
    const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({})

    if (!type) return null

    const touch = (field: keyof FormState) => setTouched((prev) => ({ ...prev, [field]: true }))

    const errors = {
        title: !form.title,
        amount: !form.amount || isNaN(Number(form.amount)) || Number(form.amount) <= 0,
        category: !form.category,
        payment: !form.payment,
        date: !form.date,
    }

    const config = type === 'income' ? INCOME_CONFIG : EXPENSE_CONFIG
    const categories = Object.keys(config)
    const subcategories = form.category ? (config[form.category]?.subcategories ?? []) : []

    const handleSelectChange = (field: keyof FormState) => (e: SelectChangeEvent) => {
        setForm((prev) => ({
            ...prev,
            [field]: e.target.value,
            ...(field === 'category' && { subcategory: '' }),
        }))
    }

    const handleClose_ = () => {
        setForm(initialForm)
        setTouched({})
        handleClose()
    }

    const handleSave = () => {
        setTouched({ title: true, amount: true, category: true, payment: true, date: true })

        if (Object.values(errors).some(Boolean)) return

        onSave({
            title: form.title,
            amount: Number(form.amount),
            type,
            category: form.category,
            subcategory: form.subcategory || undefined,
            payment: form.payment as 'Cash' | 'Bank',
            date: form.date!.format('YYYY-MM-DD'),
        })

        setForm(initialForm)
        setTouched({})
        handleClose_()
    }

    return (
        <Modal
            open={open}
            onClose={handleClose_}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{ backdrop: { timeout: 500 } }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        {type === 'income' ? 'New Income' : 'New Expense'}
                    </Typography>
                    <div className="flex flex-col gap-3">
                        <TextField
                            required
                            fullWidth
                            label="Short Description"
                            value={form.title}
                            onChange={(e) =>
                                setForm((prev) => ({ ...prev, title: e.target.value }))
                            }
                            onBlur={() => touch('title')}
                            error={touched.title && errors.title}
                            helperText={touched.title && errors.title ? 'Required field' : ''}
                        />
                        <DatePicker
                            label="Date"
                            value={form.date}
                            onChange={(val) => setForm((prev) => ({ ...prev, date: val }))}
                            slotProps={{ textField: { required: true, fullWidth: true } }}
                        />
                        <TextField
                            required
                            fullWidth
                            label="Amount"
                            type="number"
                            value={form.amount}
                            onChange={(e) =>
                                setForm((prev) => ({ ...prev, amount: e.target.value }))
                            }
                            onBlur={() => touch('amount')}
                            error={touched.amount && errors.amount}
                            helperText={
                                touched.amount && errors.amount ? 'Enter a valid amount' : ''
                            }
                        />

                        <FormControl fullWidth required error={touched.category && errors.category}>
                            <InputLabel>Category</InputLabel>
                            <Select
                                value={form.category}
                                label="Category"
                                onChange={handleSelectChange('category')}
                                onBlur={() => touch('category')}
                            >
                                {categories.map((cat) => (
                                    <MenuItem value={cat} key={cat}>
                                        {cat}
                                    </MenuItem>
                                ))}
                            </Select>
                            {touched.category && errors.category && (
                                <FormHelperText>Required field</FormHelperText>
                            )}
                        </FormControl>

                        <FormControl fullWidth disabled={!form.category}>
                            <InputLabel>Subcategory</InputLabel>
                            <Select
                                value={form.subcategory}
                                label="Subcategory"
                                onChange={handleSelectChange('subcategory')}
                            >
                                {subcategories.map((sub) => (
                                    <MenuItem value={sub} key={sub}>
                                        {sub}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl fullWidth required error={touched.payment && errors.payment}>
                            <InputLabel>Payment</InputLabel>
                            <Select
                                value={form.payment}
                                label="Payment"
                                onChange={handleSelectChange('payment')}
                                onBlur={() => touch('payment')}
                            >
                                <MenuItem value="Cash">Cash</MenuItem>
                                <MenuItem value="Bank">Bank</MenuItem>
                            </Select>
                            {touched.payment && errors.payment && (
                                <FormHelperText>Required field</FormHelperText>
                            )}
                        </FormControl>

                        <Button variant="contained" onClick={handleSave}>
                            Save
                        </Button>
                    </div>
                </Box>
            </Fade>
        </Modal>
    )
}
