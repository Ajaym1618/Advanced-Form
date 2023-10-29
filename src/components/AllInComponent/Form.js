import React from "react"
import { InputText } from "primereact/inputtext"
import {Button} from "primereact/button"

function FormData(props){
    const{values, setValues, handleAdd} = props;
    return(
        <>
            <form>
                <h1>FormData</h1>
                <div className="form-data">
                    <span className="p-float-label">
                        <InputText id="fname" value={values.fname} onChange={(e) => setValues({ ...values, fname: e.target.value })} />
                        <label htmlFor="fname">First Name</label>
                    </span>
                </div>
                <div className="form-data">
                    <span className="p-float-label">
                        <InputText id="fname" value={values.lname} onChange={(e) => setValues({ ...values, lname: e.target.value })} />
                        <label htmlFor="fname">Last Name</label>
                    </span>
                </div>
                <div className="form-data">
                    <span className="p-float-label">
                        <InputText id="fname" value={values.phoneNo} onChange={(e) => setValues({ ...values,phoneNo: e.target.value })} />
                        <label htmlFor="fname">phoneNo</label>
                    </span>
                </div>
                <div className="form-data">
                    <span className="p-float-label">
                        <InputText id="fname" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} />
                        <label htmlFor="fname">Email</label>
                    </span>
                </div>
                <div className="form-data">
                    <span className="p-float-label">
                        <InputText id="fname" value={values.address} onChange={(e) => setValues({ ...values, address: e.target.value })} />
                        <label htmlFor="fname">Address</label>
                    </span>
                </div>
                <Button severity="info" onClick={handleAdd} id="btn">Submit</Button>
            </form>
        </>
    )
}

export default FormData