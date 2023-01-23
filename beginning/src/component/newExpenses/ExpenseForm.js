import React,{useState} from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
    const [enteredTitle,setEnteredTitle]=useState('')
    const [enteredDate,setEnteredDate]=useState('')
    const [enteredAmount,setEnteredAmount]=useState('')

    const addTitle=(event)=>
    {
       const addtitleData=event.target.value
       setEnteredTitle(addtitleData)
    }
    const addCalenderDate=(event)=>{
        const inputtedDate=event.target.value
        setEnteredDate(inputtedDate)
    }
    const addAmount=(event)=>{
        const inputtedAmount=event.target.value
        setEnteredAmount(inputtedAmount)
    }  
    const buttonExpenseData=(event)=>
    {
        event.preventDefault()
        const expenseData={
            expenseTitle:enteredTitle,
            expenseAmount:enteredAmount,
            expenseDate:new Date(enteredDate),
            id:Math.random()
        }
        setEnteredAmount('')
        setEnteredDate('')
        setEnteredTitle('')
        props.onSaveExpenseData(expenseData)
    }
    
  return (
    <form className='input-container' onSubmit={buttonExpenseData}>
      <div className='new-expense_controls'>
         <div className="new-expense_contol">
             <label htmlFor="">Title</label>
             <input type="text" placeholder='Add the title'value={enteredTitle} onChange={addTitle}/>
         </div>
         <div className="new-expense_contol">
             <label htmlFor="">Amount</label>
             <input type="number" min="0.01" step="0.01" placeholder='Add expense'value={enteredAmount} onChange={addAmount}/>
         </div>
         <div className="new-expense_contol">
             <label htmlFor="">Date</label>
             <input type="date" min="2019-01-01" max="2022-12-31" placeholder='Add date'value={enteredDate} onChange={addCalenderDate}/>
         </div>
      </div>
      <div className="new-expense_actions">
           <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}
export default ExpenseForm