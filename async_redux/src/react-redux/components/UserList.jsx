import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userfetch } from '../Action.js/Useractions'
const UserList = () => {
    const dispatch=useDispatch()
    const{loading,users,error}=useSelector((state)=>state)
    useEffect(()=>{
        dispatch(userfetch())
    },[dispatch])
    if(loading) return  <p>Loadin users</p>
    if (error)  return <p>{error}</p>
        

  return (
    <div>

        <ul>
            {
                users.map((user)=>(
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default UserList