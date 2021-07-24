import React from 'react'
import { useSelector } from 'react-redux'
import User from './User.jsx'



const Users = ({setCurrentId,Add,setAdd}) =>{
    const users = useSelector((state) => state.users);
    return (
        !users.length ? <h1> "loading..." </h1> : 
            <div className="row">
                {   
                    users.map((user) => (
                        <div className="col-md-4" key={user._id} >
                            <User user={user} setCurrentId={setCurrentId} setAdd={setAdd} Add={Add} />       
                        </div>    
                    )
                )}              
            </div>           
    ) 
}

export default Users;