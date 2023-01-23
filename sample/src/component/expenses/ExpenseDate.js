import React from 'react'
import './ExpenseDate.css'

function ExpenseDate(props) {
                const month=props.Date.toLocaleString('en-US',{month:'long'}) 
                const day=props.Date.toLocaleString('en-US',{day:'2-digit'})
                const year=props.Date.getFullYear()

  return (
  
<div className='date'>
    <div className='expense-date_month'>{month}</div>
    <div className='expense-date_day'>{day}</div>
    <div className='expense-date_year'>{year}</div>
</div>
      
  )
}

export default ExpenseDate
