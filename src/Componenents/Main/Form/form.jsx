import React, {useState, useEffect, useContext, useCallback} from 'react'
import {TextField, Grid, FormControl, MenuItem, Select, Typography, InputLabel, Button} from '@mui/material'
import { BudgetTrackerContext } from '../../Context/Context'
import {v4 as uuidv4}from 'uuid'
import {useSpeechContext} from '@speechly/react-client'
import { incomeCategories, expenseCategories } from '../../Constant/categories'
import PopupSnackbar from '../../Snackbar/Snackbar'

function Form() {
    

    const [formData, setFormData] = useState({
      amount:"",
      category:"",
      type:"",
      date: ""
  })
    const [open, setOpen] = useState(false)

    const {addTransaction} = useContext(BudgetTrackerContext)

    const {segment} = useSpeechContext()

    const createTransaction = useCallback(() =>{
      if (Number.isNaN(Number(formData.amount)) || !formData.date.includes('-')) return;
          const transaction = {...formData, amount:Number(formData.amount), id:uuidv4()}
          addTransaction(transaction)
          setFormData({
            amount:"",
            category:"",
            type:"",
            date: ""
        })
          setOpen(true)
      }, [formData, addTransaction])

    useEffect(() => {
        if (segment) {
          if (segment.intent.intent === 'add_expense') {
            setFormData({ ...formData, type: 'Expense' });
          } else if (segment.intent.intent === 'add_income') {
            setFormData({ ...formData, type: 'Income' });
          } else if (segment.isFinal && segment.intent.intent === 'create_transaction') {
            return createTransaction();
          } else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
            return setFormData({
              amount:"",
              category:"",
              type:"",
              date: ""
          });
          }
    
          segment.entities.forEach((s) => {
            const category = `${s.value.charAt(0)}${s.value.slice(1).toLowerCase()}`;
    
            switch (s.type) {
              case 'amount':
                setFormData({ ...formData, amount: s.value });
                break;
              case 'category':
                if (incomeCategories.map((iC) => iC.type).includes(category)) {
                  setFormData({ ...formData, type: 'Income', category });
                } else if (expenseCategories.map((iC) => iC.type).includes(category)) {
                  setFormData({ ...formData, type: 'Expense', category });
                }
                break;
              case 'date':
                setFormData({ ...formData, date: s.value });
                break;
              default:
                break;
            }
          });
    
          if (segment.isFinal && formData.amount && formData.category && formData.type && formData.date) {
            createTransaction();
          }
        }
      }, [segment, createTransaction, formData]);


    const selectedCategories = formData.type === 'Income' ? incomeCategories : formData.type === 'Expense' ? expenseCategories : []

    console.log('word', segment?.words);
  return (
    <div>
        <Grid container spacing={2}>
            <PopupSnackbar open={open} setOpen={setOpen}/>
            <Grid item xs={12}>
                <Typography align='center' variant='subtitle2' gutterBottom>
                   {segment && segment.words.map((w)=>w.value).join(" ")}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select variant='standard' value={formData.type} onChange={(e)=>setFormData({...formData, type:e.target.value})}>
                            <MenuItem value='Income'>Income</MenuItem>
                            <MenuItem value='Expense'>Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select variant='standard' value={formData.category} onChange={(e)=>setFormData({...formData, category:e.target.value})}>
                            {
                                selectedCategories.map((c)=> <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)
                            }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField value={formData.amount} onChange={(e)=>setFormData({...formData, amount:e.target.value})} type='text' variant='standard' label='Amount' fullWidth/>
            </Grid>
            <Grid item xs={6}>
            <TextField value={formData.date} onChange={(e)=>setFormData({...formData, date:(e.target.value)})} type='date' variant='standard' label=' ' fullWidth/>
            </Grid>
        </Grid>
        <Button variant='outlined' onClick={createTransaction} fullWidth  sx={{
                align:'center',
                marginTop:'1em'
            }}>Create</Button>
    </div>
  )
}

export default Form