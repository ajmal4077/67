import React from 'react'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {
  const saveExpenseDataHandler=(enteredExpenseData)=>{

     console.log(enteredExpenseData);
     props.onAddExpense(enteredExpenseData)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}
export default NewExpense