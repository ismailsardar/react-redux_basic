import React from 'react'
import { useSelector } from 'react-redux'
import { TodoDelete, TodoEidte } from './TodoDelete'

const ToDoList = () => {
    const todo = useSelector((state)=>state.todo.value)
  return (
    <div className='container-fluid pt-3'>
        <div className="row">
            <div className="col-12">
                <table className='table'>
                    <thead>
                    <tr>
                        <th>NO.</th>
                        <th>ToDo Name</th>
                        <th>Edite</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    {
                        todo.map((item,i)=>{
                            return(
                            <tbody key={i}>
                                <tr>
                                <td>{i+1}</td>
                                <td>{item}</td>
                                <td>
                                    <button onClick={()=> TodoEidte(i,item)} className='btn btn-outline-warning'>Edite</button>
                                    </td>
                                <td>
                                    <button onClick={()=>TodoDelete(i)} className='btn btn-outline-danger'>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                            )
                        })
                    }
                    
                </table>
            </div>
        </div>
    </div>
  )
}

export default ToDoList