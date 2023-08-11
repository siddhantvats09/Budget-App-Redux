import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addname } from '../store/slices/Username';
import { useNavigate } from 'react-router-dom';




const Name = () => {

    const [name, setname] = useState('')
    const dispatch= useDispatch();
    const nevigate= useNavigate()

    const addnames=()=>{
        dispatch(addname(name))
        nevigate("/create")
    }

  return (
    <div className='mainnamebox'>
      <input className='inputbox namebox' type="text"  value={name} onChange={(e)=>setname(e.target.value)} placeholder='Your Name'/>
      <button className='btn' onClick={addnames}>Submit</button>
    </div>
  )
}

export default Name
