import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodos } from '../../reduxRabble/state/todo/todoSlice';

const CreateToDos = () => {

  const dispatch = useDispatch();
  const inputTodo = useRef();

  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-md-10">
              <input type="text" ref={inputTodo} className='form-control' placeholder='ToDo Name...' />                
            </div>
            <div className="col-md-2">                    
                    <button onClick={()=>dispatch(addTodos(inputTodo.current.value))} className='btn btn-primary'>Add ToDo</button>
            </div>
        </div>
    </div>
  )
}

export default CreateToDos