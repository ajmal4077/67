import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'

function Expenses(props) {
  const [filteredYear,setFilteredYear]=useState('2019')

  const filterImportFunction=(selectedYear)=>{
    setFilteredYear(selectedYear)
  }
  const filteredExpenses=props.items.filter(event=>{
    return event.expenseDate.getFullYear().toString()===filteredYear
  })
  console.log(filteredExpenses);
  return (
    <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onFilter={filterImportFunction}/>
      {filteredExpenses.length===0 &&<p>no data found</p>}
      {filteredExpenses.length>0&&
        filteredExpenses.map(event=>{
          return (<ExpenseItem
            date={event.expenseDate}
            title={event.expenseTitle}
            money={event.expenseAmount}
            key={event.id}/>
                  ) 
     })}
     

    </Card>
  )
}
export default Expenses