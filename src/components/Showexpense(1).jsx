import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Showexpense = () => {
    const dispatch=useDispatch()
    const data = useSelector((state) => {
        return state.expense;
      })
   
  return (
    <div>
      <ul>
      {data && data.map(expense => (
          <div className='mainboxexpance mainboxborder'>
          <div className="expense2">
              <h3>Budget {expense.mainname}</h3>
            </div>
            <div className="expense1">
              <h1>Expense Name : {expense.name}</h1>
            </div>
            <div className="expense2">
              <h1>Expense Amount : {expense.amount}</h1>
            </div>
          </div> 
        
      ))}
    </ul>
    </div>
  )
}

export default Showexpense
