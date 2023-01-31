import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounterAction, incrementCounterAction, resetCounterAction } from '../services/actions/counterActions';

const Counter = () => {

  const count = useSelector(state => state.count);
  const dispatch = useDispatch()

  const handelChangeIncrement = () => {
    dispatch(incrementCounterAction());
  }
  const handelChangeDecrement = () => {
    dispatch(decrementCounterAction());
  }
  const handelChangeReset = () => {
    dispatch(resetCounterAction());
  }

  return (
    <>
        <h2>Counter App</h2>
        <h3>Count : {count}</h3>
        <button onClick={handelChangeIncrement}>Increment</button>
        <button onClick={handelChangeReset}>Reset</button>
        <button onClick={handelChangeDecrement}>Decrement</button>
    </>
  )
}

export default Counter