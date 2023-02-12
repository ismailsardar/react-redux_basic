import React from 'react'
import CreateToDos from '../components/rabbilToDo/CreateToDos'
import ToDoList from '../components/rabbilToDo/ToDoList'

const ToDoPage = () => {
  return (
    <div className='container my-5'>
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                      <h3>ToDo-App</h3>                
                    </div>
                    <div className="card-body">
                      <CreateToDos />
                      <ToDoList />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ToDoPage