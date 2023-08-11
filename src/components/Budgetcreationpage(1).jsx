import React, { useEffect,useState } from 'react'
import Showname from './Showname'
import { useDispatch } from 'react-redux'
import {addExpense} from '../store/slices/Budgetslice'
import Showbudget from './Showbudget'
import { v4 as uuidv4 } from 'uuid';

const Budgetcreationpage = () => {
    const [budgetname, setbudgetname] = useState('')
    const [budgetmoney, setbudgetmoney] = useState('')
    const dispatch = useDispatch()
 
      const addbudget=(e)=>{
         e.preventDefault();
        dispatch(addExpense({ name: budgetname, amount: parseFloat(budgetmoney),id:uuidv4() }))
        setbudgetname('')
        setbudgetmoney('')
      }
    

console.log(uuidv4())
   
  return (
    <div>
      <Showname/>
      <h2 className='shownameh1 hname'>Create budget here !!</h2>
      <div className="budgetbox">
      
      <input className='inputbox' type="text"  value={budgetname} onChange={(e)=>setbudgetname(e.target.value)} placeholder='Enter Budget Name'/>
      <input className='inputbox' type="text"  value={budgetmoney} onChange={(e)=>setbudgetmoney(e.target.value)} placeholder='Enter Budget Amount'/>
      <button className='btn' onClick={addbudget}>Add Budget</button>
      </div>
      <br />
      <hr className='hr'/>
      <hr className='hr'/>
      <Showbudget/>
    </div>
  )
}

export default Budgetcreationpage
