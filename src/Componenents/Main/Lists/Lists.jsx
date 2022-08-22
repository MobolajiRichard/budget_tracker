import React, {useContext} from 'react'
import {List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Avatar, IconButton, Slide} from '@mui/material'
import {Delete, MoneyOff} from '@mui/icons-material'
import { BudgetTrackerContext } from '../../Context/Context'

function Lists() {
    const {deleteTransaction,  transactions} = useContext(BudgetTrackerContext)
  return (
    <div>
        <List dense={false} sx={{
            maxHeight: '150px',
            overflow: 'auto'
        }}>
            {transactions?.map((transaction)=>(
                <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={ transaction.type === 'Income'? { backgroundColor:'#019934'}: {backgroundColor:'#db2020'}}>
                                <MoneyOff/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`#${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton onClick={()=>deleteTransaction(transaction.id)} edge='end' aria-label='delete'>
                                <Delete/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </List>
    </div>
  )
}

export default Lists