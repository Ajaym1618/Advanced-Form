import React from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function EditedForm(props){
    const {editedValues, setEditedValues, modal, setModal, handleSave} = props;
    return(
        <>  { modal === true ?(
             <Dialog header="Update Data" visible={modal} style={{ width: '30vw' }} onHide={() => setModal(!modal)}>       
             <div className="inp-data"> 
                <span className="p-float-label">            
                <InputText id="fname" value={editedValues.fnamel} onChange={(e) => setEditedValues({ ...editedValues, fnamel: e.target.value })} />            
                <label htmlFor="fname">First Name</label>          
                </span>        
            </div>        
            <div className="inp-data">          
                <span className="p-float-label">            
                <InputText id="fname" value={editedValues.lnamel} onChange={(e) => setEditedValues({ ...editedValues, lnamel: e.target.value })} />            
                <label htmlFor="fname">Last Name</label>          
                </span>        
            </div>        
            <div className="inp-data">          
                <span className="p-float-label">            
                    <InputText id="fname" value={editedValues.phoneNol} onChange={(e) => setEditedValues({ ...editedValues, phoneNol: e.target.value })} />            
                    <label htmlFor="fname">Phone NO</label>          
                </span>        
            </div>        
            <div className="inp-data">          
                <span className="p-float-label">            
                    <InputText id="fname" value={editedValues.emaill} onChange={(e) => setEditedValues({ ...editedValues, emaill: e.target.value })} />            
                    <label htmlFor="fname">Email</label>          
                </span>        
            </div>        
            <div className="inp-data">          
                <span className="p-float-label">            
                    <InputText id="fname" value={editedValues.addressl} onChange={(e) => setEditedValues({ ...editedValues, addressl: e.target.value })} />            
                    <label htmlFor="fname">Address</label>          
                </span>        
            </div>        
            <div className="inp-data">         
                <Button severity="success" onClick={()=>handleSave(editedValues.id)}>Save</Button>        
            </div>     
            </Dialog>) : (null)
            }
        </>
    )
}

export default EditedForm