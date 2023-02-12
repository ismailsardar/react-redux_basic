import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './myCounterSlice';

const MyCounterView = () => {

    const counter = useSelector(state=> state.myCounter.count);
    // console.log(counter)

    const dispatch = useDispatch();

  return (
    <>
        <h1>MyCount : {counter}</h1>
        <button className='btn btn-primary' onClick={()=>dispatch(increment())}>Increment</button>
        <button className='btn btn-warning' onClick={()=>dispatch(decrement())}>Decrement</button>
        <button className='btn btn-danger' onClick={()=>dispatch(reset())}>Reset</button>
    </>
  )
}

export default MyCounterView