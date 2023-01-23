import './App.css';
import Expenses from './component/expenses/Expenses';

function App() {
  const expenses=[
    {expenseDate:new Date(2021,1,11),expenseTitle:"Car Insurance",expenseAmount:"294.67"},
    {expenseDate:new Date(2021,2,22),expenseTitle:"Mobile purchase",expenseAmount:"195"},
    {expenseDate:new Date(2021,3,16),expenseTitle:"Laptop",expenseAmount:"350"},
    {expenseDate:new Date(2021,4,31),expenseTitle:"service of bike",expenseAmount:"67"}
    
   
  ]
  return (
    <div className="App">
       <Expenses items={expenses}/>
    </div>
  );
}
export default App;