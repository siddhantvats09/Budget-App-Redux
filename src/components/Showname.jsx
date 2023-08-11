import React from 'react'
import Username from '../store/slices/Username'
import { useSelector } from 'react-redux';

const Showname = () => {
    const data = useSelector((state) => {
        return state.username;
      })

  return (
    <div className='shownameh1'>
    <h1 >Hey Welcome <span className='data'>{data}</span></h1>
    </div>
  )
}

export default Showname
