import React, { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
function Login(){
    const [api, setApi] = useState([])
    const [userDetails, setUserDetails] = useState({username:"", password:""})
    const navigate = useNavigate();

    // useEffect(()=>{
    //     handleGetData()
    // },[])

    // function handleGetData(){
    //     axios.get("http://localhost:3000/LoginDetails").then((res)=>setApi(res.data))
    // }

    // function handlePost(){
    //     axios.post("http://localhost:3000/LoginDetails", userDetails).then()
    // }

    function handleButton(){
        // handlePost()
        navigate('/Form')
    }
    return(
        <>
            <div className="con">
                <form action="" className="login-form">
                    <h1>Login</h1>
                <div className="form-data">
                    <span className="p-float-label">
                        <InputText id="username" required onChange={(e)=> setUserDetails({...userDetails, username:e.target.value})}/>
                        <label htmlFor="username">Username</label>
                    </span>
                </div>
                <div className="form-data">
                    <span className="p-float-label">
                    <Password id="password" toggleMask feedback={false} onChange={(e)=> setUserDetails({...userDetails, password:e.target.value})}/>
                        <label htmlFor="password">Password</label>
                    </span>
                </div>
                <Button onClick={handleButton} disabled={!userDetails.username || !userDetails.password}>Submit</Button>

                </form>
            </div>
        </>
    )
}

export default Login