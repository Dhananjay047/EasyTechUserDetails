import React,{ useState ,useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux"
import { getAllUsers,createUser,updateUser } from '../Actions/actions.js'


function Addform({currentId,setCurrentId,Add,setAdd}){

    var [userData,setUserData] = useState({ name: '', email: '', phone: '', area: '', city: '',state: '',country: '' });
    const user = useSelector((state) => currentId ? state.users.find((p) => p._id === currentId) : null )
    const dispatch = useDispatch(); 
    
    useEffect(() => {
        if(user) setUserData(user)
    },[user])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId){
            dispatch(updateUser(currentId,userData));
            setCurrentId(null);
        }
        else{
            dispatch(createUser(userData));
        }
        clear();
        setAdd(!Add);
        dispatch(getAllUsers());    
    }

    const clear = () =>{
        setUserData({ name: '', email: '', phone: '', area: '', city: '',state: '',country: '' });
        setCurrentId(null);
    }

    return(
    <div className="container add-user-form">
        <form className="row g-3" method="user" onSubmit={handleSubmit}>
            <div className="col-md-12">
                <label className="form-label" >Name</label>
                <input type="text" className="form-control" name="name" value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })}  />
            </div>
            <div className="col-md-7">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
            </div>
            <div className="col-md-5">
                <label className="form-label">Phone</label>
                <input type="text" className="form-control" name="phone" value={userData.phone} onChange={(e) => setUserData({ ...userData, phone: e.target.value })}  />
            </div>
            <div className="col-md-8">
                <label className="form-label">Area</label>
                <input type="text" name="area" value={userData.area} className="form-control" onChange={(e) => setUserData({ ...userData, area: e.target.value })} />
            </div>
            <div className="col-md-4">
                <label className="form-label">City</label>
                <input type="text" className="form-control"  name="city" value={userData.city} onChange={(e) => setUserData({ ...userData, city: e.target.value })} />
            </div>
            <div className="col-md-6">
                <label className="form-label">State</label>
                <input type="text" className="form-control" name="state" value={userData.state} onChange={(e) => setUserData({ ...userData, state: e.target.value })}  />
            </div>
            <div className="col-md-6">
                <label className="form-label">Country</label>
                <input type="text" className="form-control" name="country"  value={userData.country} onChange={(e) => setUserData({ ...userData, country: e.target.value })} />
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-lg btn-light">{ currentId ?" update user ":" Add user "}</button>
            </div>
        </form>
    </div>
    );
}


export default Addform;