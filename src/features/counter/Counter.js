import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy5, reset } from './counterSlice';

const CounterView = () => {
  const count = useSelector((state)=>state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
        <h2>Count : {count}</h2>
        <button onClick={()=>{
          dispatch(increment());
        }}>Icerement</button>
        <button onClick={()=>{
          dispatch(decrement());
        }}>Deerement</button>
        <button onClick={()=>{
          dispatch(reset());
        }}>Reset</button>
        <button onClick={()=>{
          dispatch(incrementBy5());
        }}>Icerement By 5</button>
    </>
  )
}

export default CounterView