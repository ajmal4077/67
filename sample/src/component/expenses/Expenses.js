import React from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'

function Expenses(props) {
  return (
    <Card className='expenses'>
      <ExpenseItem date={props.items[0].expenseDate} title={props.items[0].expenseTitle} money={props.items[0].expenseAmount}/>
      <ExpenseItem date={props.items[1].expenseDate} title={props.items[1].expenseTitle} money={props.items[1].expenseAmount}/>
      <ExpenseItem date={props.items[2].expenseDate} title={props.items[2].expenseTitle} money={props.items[2].expenseAmount}/>
      <ExpenseItem date={props.items[3].expenseDate} title={props.items[3].expenseTitle} money={props.items[3].expenseAmount}/>
    </Card>
  )
}
export default Expenses
