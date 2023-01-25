import React from 'react'
import './ExpenseFilter.css'

function ExpenseFilter(props) {
  const dropdownChangeHandler=(event)=>{
    const year=event.target.value
    props.onFilter(year)
  }
  return (
    <div className='expenses-filter'>
       <div className="expenses-filter_control">
          <label htmlFor="">filter by year</label>
          <select value={props.selected} name="" id="" onChange={dropdownChangeHandler}>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="All">All</option>
          </select>
         
       </div>
    </div>
  )
  }
export default ExpenseFilter