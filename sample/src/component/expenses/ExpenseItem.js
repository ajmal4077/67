import React, {useState} from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

function ExpenseItem(props) {
  const [title,finalState]=useState(props.title)
  // here props.title is equal to the title in the array
  // so we need to call the below as {title}

  const clickHandler=()=>{
    finalState('title changed')
    console.log(title);
  }

  return (
    <Card className='Expense-item'>
          <ExpenseDate Date={props.date}/>
          <div className="Expense-item_desctiption">
            <h1>{title}</h1>
          </div>
          <div className="expense-item_price">
              <div className='price'>${props.money}</div>
          </div>
          <button onClick={clickHandler}>change text</button>
    </Card>
  )
}
export default ExpenseItem