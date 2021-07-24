import React from 'react';
import { useDispatch } from 'react-redux'
import { deleteUser,updateUser } from '../Actions/actions.js';


function User({user,setCurrentId,Add,setAdd}){
    const dispatch = useDispatch();

    const makeChanges = ()=>{
        setAdd(!Add);
        console.log(user._id);
        setCurrentId(user._id)
    }

    return(
        <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body details">
                <h5 className="card-title">{user.name}</h5>
                <br></br>
                <p className="card-text">Address : {user.area+", "+user.city+", "+user.state+", "+user.country}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Email : {user.email}</li>
                <li className="list-group-item">Phone : {user.phone}</li>
            </ul>
            <div className="card-body bottom-buttons">
                <button className="btn btn-md btn-outline-primary" onClick={makeChanges}>Edit</button>
                <button className="btn btn-md btn-secondary" onClick={()=>dispatch(deleteUser(user._id))}>Delete</button>
            </div>
        </div>
    );
}

export default User; 