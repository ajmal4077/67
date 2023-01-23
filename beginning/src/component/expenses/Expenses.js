import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'

function Expenses(props) {
  const [filteredYear,setFilteredYear]=useState('2019')

  const filterImportFunction=(selectedYear)=>{
    console.log("data passed to expenses "+selectedYear);
    setFilteredYear(selectedYear)
  }
  console.log(filteredYear);
  return (
    <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onFilter={filterImportFunction}/>
      {props.items.map(event=>{
        return (<ExpenseItem
          date={event.expenseDate}
          title={event.expenseTitle}
          money={event.expenseAmount}
          key={event.id}/>) 
      })}
 
    </Card>
  )
}
export default Expenses