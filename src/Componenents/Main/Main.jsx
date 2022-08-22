import React, {useContext} from 'react'
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@mui/material'
import Form from './Form/form'
import { BudgetTrackerContext } from '../Context/Context'
import Lists from './Lists/Lists'

function Main() {
    const {balance} = useContext(BudgetTrackerContext)

  return (
    <div>
        <Card sx={{height:'60%'}}>
            <CardHeader title='Budget Tracker'/>
            <CardContent>
                <Typography align='center' variant='h6'>Total Balance &#8358;{balance}</Typography>
                <Typography align='center' variant='subtitle2' sx={{
                    lineHeight:'1.3em', marginTop:'10px'
                }}>
                    Try saying.
                    Add incomes for &#8358;1000 in category Salary for Monday.
                </Typography>
                <Divider />
                <Form/>
            </CardContent>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Lists/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </div>
  )
}

export default Main