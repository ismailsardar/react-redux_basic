import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../services/actions/todosActions';

const Todos = () => {
    const {isLoading,todos,error} = useSelector(state => state);
    console.log(todos)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllTodos());
    }, [dispatch]);
    

  return (
    <>
        <h2>Todos</h2>
        {isLoading && <h3>Loading...</h3>}
        {error && <h3>{error}</h3>}
        <section>
            {todos && todos.map((todo)=>{
                const {id,title} = todo;
                return (
                <article key={id}>
                    <h3>{id}</h3>
                    <h3>{title}</h3>
                </article>
                )
            })}
        </section>
    </>
  )
}

export default Todos