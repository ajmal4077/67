import React,{useState} from 'react'
import './App.css';
import Expenses from './component/expenses/Expenses';
import NewExpense from './component/newExpenses/NewExpense';
const DUMMY_EXPENSES=[
  {expenseDate:new Date(2021,1,11),expenseTitle:"Car Insurance",expenseAmount:"294.67"},
  {expenseDate:new Date(2021,2,22),expenseTitle:"Mobile purchase",expenseAmount:"195"},
  {expenseDate:new Date(2021,3,16),expenseTitle:"Laptop",expenseAmount:"350"},
  {expenseDate:new Date(2021,4,31),expenseTitle:"service of bike",expenseAmount:"67"}
]


function App() {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES) 

  const onAddExpenseHandler=(addedDataToApp)=>{
     return (
      setExpenses(prevData=>{
        return ([addedDataToApp,...prevData])
      })
      )
  }
  return (
    <div className="App">
       <NewExpense onAddExpense={onAddExpenseHandler}/>
       <Expenses items={expenses}/>
    </div>
  );
}
export default App;