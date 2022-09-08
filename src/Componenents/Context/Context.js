import React , {useReducer, createContext} from 'react'
import contextReducer from './ContextReducers'

const initialState = JSON.parse(localStorage.getItem('transactions')) || []

export const BudgetTrackerContext = createContext(initialState)

export const Providers = ({children}) => {
const [transactions, dispatch] = useReducer(contextReducer, initialState)
console.log('transaction', transactions);

const deleteTransaction = (id) => dispatch({type:'DELETE_TRANSACTION', payload:id})

const addTransaction = (transaction) => dispatch({type:'ADD_TRANSACTION', payload:transaction})

const balance = transactions.reduce((acc, currVal)=>currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount, 0)

    return(
        <BudgetTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </BudgetTrackerContext.Provider>
    )
}