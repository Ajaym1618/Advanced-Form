import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ViewDetails.css"
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
function ViewDetails(){
    const [view, setView] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:3000/Data').then((res)=>setView(res.data))
    },[])

    return (
        <>
        <h1 className="head">User Details</h1>
            <div className="view-data">
                    {view.map((val) =>(
                        <div className="view-user">
                            <ul key={val.id}>
                            <table className="Tabs">
                                <thead></thead>
                                <tbody className="body">
                                    <h1>{val.fname} {val.lname}</h1>
                                    <tr className="row"><li><td className="col">Id :</td><td className="col">{val.id}</td></li></tr>
                                    <tr className="row"><li><td className="col">Firstname :</td><td className="col">{val.fname}</td></li></tr>
                                    <tr className="row"><li><td className="col">Lastname :</td><td className="col">{val.lname}</td></li></tr>
                                    <tr className="row"><li><td className="col">PhoneNo :</td><td className="col">{val.phoneNo}</td></li></tr>
                                    <tr className="row"><li><td className="col">Email :</td><td className="col">{val.email}</td></li></tr>
                                    <tr className="row"><li><td className="col">Address :</td><td className="col">{val.address}</td></li></tr>
                                </tbody>
                            </table>
                            </ul>
                        </div>
                    ))} 

                    {/* <table className="Tabs">
                        <thead></thead>
                        <tbody className="body">
                            <tr className="row"><li><td className="col">Id</td><td className="col">{"val"}</td></li></tr>
                            <tr className="row"><li><td className="col">Firstname</td><td className="col">{"val"}</td></li></tr>
                            <tr className="row"><li><td className="col">Lastname</td><td className="col">{"val"}</td></li></tr>
                            <tr className="row"><li><td className="col">PhoneNo</td><td className="col">{"val"}</td></li></tr>
                            <tr className="row"><li><td className="col">Email</td><td className="col">{"val"}</td></li></tr>
                            <tr className="row"><li><td className="col">Address</td><td className="col">{"val"}</td></li></tr>
                        </tbody>
                    </table> */}
            </div>
            <div className="btn-center"><Button onClick={()=> navigate(-1)} className="btn-viewback">Back</Button> <Button onClick={()=>navigate("/chart")}>See Charts</Button></div>     
        </>
    )

}

export default ViewDetails




