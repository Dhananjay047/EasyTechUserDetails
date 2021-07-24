import React,{useState,useEffect} from 'react';
import Addform from "./components/AddForm.jsx"
import { useDispatch } from 'react-redux';
import { getAllUsers } from './Actions/actions.js';
import Users from './components/Users.jsx';

function App() {
  const dispatch = useDispatch();
  const [Add,setAdd] = useState(false);
  const [currentId,setCurrentId] = useState(false);
  
  useEffect(() => {
    dispatch(getAllUsers());
  }, [Add,dispatch,currentId]);

  return (
    <div className='container'>
      <div className="header">
        <h1>
          Users List
        </h1>
        <div>
          { Add ? 
              <div>
                <Addform className="add-user-form" setAdd={setAdd} Add={Add} currentId={currentId} setCurrentId={setCurrentId}/>
                <button className="add-form-button" onClick={()=>{setAdd(!Add)}}>
                  <img src="images/cancel.png"/>
                </button>
                </div> :
                <button className="add-form-button" onClick={()=>{setAdd(!Add)}}>
                  <img src="images/roundAdd.png"/>
                </button> 
            }
        </div>
      </div>
      <div className='container'>
          <Users setCurrentId={setCurrentId} setAdd={setAdd} Add={Add}/>
      </div>
    </div>
    );
}

export default App;
