import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { removeExpense } from '../store/slices/Budgetslice';
import { addExpensename } from '../store/slices/ExpenseSlice';
import Showexpense from './Showexpense';

const Showbudget = () => {

  const [budgetname, setbudgetname] = useState('')
  const [budget, setbudget] = useState('')
  const [budgetmoney, setbudgetmoney] = useState('')
  const [id, setid] = useState('')

  const data = useSelector((state) => {
    return state.budget;
  })
  const dispatch=useDispatch()
  

const Addexpense= (e)=>{
// e.preventDefault()
setid(data.id)
setbudget(e)
dispatch(addExpensename({mainname:budget, name: budgetname, amount: parseFloat(budgetmoney),id:id }))
        setbudgetname('')
        setbudgetmoney('')

}



  return (
    <div>
      <ul>
      {data && data.map(expense => (
          <div className='mainboxexpance mainboxborder'>
            <div className="expense1">
              <h1>Budget : {expense.name}</h1>
            </div>
            <div className="expense2">
              <h1>Budget Amount : {expense.amount}</h1>
            </div>
            <button className='btn' onClick={()=>dispatch(removeExpense(expense.id))}>Delete</button>
            <div className="budgetexpense">
            
              <input type="text" value={budgetname} onChange={(e)=>setbudgetname(e.target.value)} className='inputbox namebox' placeholder='Expense name'/>
              <input type="text" className='inputbox namebox' value={budgetmoney} onChange={(e)=>setbudgetmoney(e.target.value)}  placeholder='Expense Amount'/>
              <button className='btn' onClick={()=>Addexpense(expense.name)}>Add Expense</button>
            </div>
          </div> 
        
      ))}
            <Showexpense />
    </ul>
    </div>
  )
}

export default Showbudget
