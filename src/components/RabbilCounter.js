import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,coustom } from '../reduxRabble/state/counter/counterSlice';

const RabbilCounter = () => {

    const count = useSelector((state)=> state.counter.count);
    const dispatch = useDispatch();
    const myRef = useRef();

  return (
    <div>
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <button onClick={()=> dispatch(increment())}>Increse</button>
        <button onClick={()=> dispatch(decrement())}>Decrese</button>
        <div>
            <input type="number" ref={myRef} />
            <button onClick={()=>dispatch(coustom(Number(myRef.current.value)))}>coustom</button>
        </div>
    </div>
  )
}

export default RabbilCounter