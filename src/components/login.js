import React from "react";
import { Link } from 'react-router-dom';
import './login.css';


const Login = () => {
    return(
        <div >
            <div className="container">
            <div className="boxShadow">
            <Link to={'/add'}>                
            <button className="loginbuttonStyle">Add Batch</button>
            </Link><br/>
            <Link to={'/update'}>                
            <button className="loginbuttonStyle">Update Batch</button>
            </Link><br/>
            <Link to={'/report'}>                
            <button className="loginbuttonStyle">Create Report</button>
            </Link>
            <button className="loginbuttonStyle">LOGOUT</button>
            </div>
            </div>
        </div>
    );
    
}

export default Login