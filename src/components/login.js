import React from "react";
import { Link } from 'react-router-dom';
import './login.css';


const Login = () => {
    const styles = {
        backgroundColor: 'lightblue', // Change to your desired color
      };
    return(
        <div>        
        <div className="maincontainer">
        <div className="upwelltitle"><img src="./upwelllogo.png" alt="upwell" className="logoStyling" /> </div>
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
        </div>
    );
    
}

export default Login