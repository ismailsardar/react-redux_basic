import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fatchUsers } from './userSlice';

const UserView = () => {

    const {isLoding, users, error} = useSelector(state=>state.users);
    // console.log(users);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fatchUsers())
    }, [])
    


  return (
    <div>
        {isLoding && <h2>Loding....</h2>}
        {error && <h4>{error}</h4>}
        <section>
            {users && users.map((user)=>{
                return <article key={user.id}>
                    <h3>{user.name}</h3>
                    <h5>{user.email}</h5>
                    <h6>{user.website}</h6>
                </article>                
            })}
        </section>
    </div>
  )
}

export default UserView