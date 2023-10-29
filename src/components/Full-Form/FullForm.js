import React, { useEffect, useState } from "react";
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useNavigate } from "react-router-dom";

function FullForm() {
  const [api, setApi] = useState([]);
  const [values, setValues] = useState({ fname: "", lname: "", phoneNo: "", email: "", address: "" });
  const [editedValues, setEditedValues] = useState({ id: "", fnamel: "", lnamel: "", phoneNol: "", emaill: "", addressl: "" });
  const [orNot, setOrNot] = useState(false);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

useEffect(() => {
  getData();
}, []);

function getData() {
  axios.get('http://localhost:3000/Data').then((res) => setApi(res.data));
}

function handleAddData(e) {
  axios.post('http://localhost:3000/Data', values).then(() => {
    getData();
    setValues({ fname: "", lname: "", phoneNo: "", email: "", address: "" });
  });
  setOrNot(true)
  e.preventDefault();
}

function handleDelete(id) {
  axios.delete(`http://localhost:3000/Data/${id}`).then(() => getData());
}

function handleEdit(val) {
  setModal(!modal)
  setEditedValues({ id: val.id, fnamel: val.fname, lnamel: val.lname, phoneNol: val.phoneNo, emaill: val.email, addressl: val.address });
}


function handleSave(id){
  const UpdatedData = {
    fname: editedValues.fnamel,
    lname:editedValues.lnamel,
    phoneNo:editedValues.phoneNol,
    email:editedValues.emaill,
    address:editedValues.addressl
  }
  axios.put(`http://localhost:3000/Data/${id}`, UpdatedData).then(()=>getData());
  setEditedValues({fnamel: "", lnamel: "", phoneNol: "", emaill: "", addressl: "" })
  setModal(!modal)
}

const actionTemplate = (rowData) => {
  return (
    <div>
      <Button severity="danger" icon="pi pi-trash" className="custom-button" onClick={() => handleDelete(rowData.id)}>Delete</Button>
      <Button label="Edit" icon="pi pi-pencil" severity="warning" className="custom-button" onClick={() => handleEdit(rowData)} />
    </div>
  );
};

return (
  <>
  <div className="return">
    <Dialog header="Update Data" visible={modal} style={{ width: '30vw' }} onHide={() => setModal(!modal)}>
    <form>
      <div className="inp-data">
         <span className="p-float-label">
           <InputText id="fname" value={editedValues.fnamel} onChange={(e) => setEditedValues({ ...editedValues, fnamel: e.target.value })}required/>
           <label htmlFor="fname">First Name</label>
         </span>
       </div>
       <div className="inp-data">
         <span className="p-float-label">
           <InputText id="fname" value={editedValues.lnamel} onChange={(e) => setEditedValues({ ...editedValues, lnamel: e.target.value })}required/>
           <label htmlFor="fname">Last Name</label>
         </span>
       </div>
       <div className="inp-data">
         <span className="p-float-label">
           <InputText id="fname" value={editedValues.phoneNol} onChange={(e) => setEditedValues({ ...editedValues, phoneNol: e.target.value })}required/>
           <label htmlFor="fname">Phone NO</label>
         </span>
       </div>
       <div className="inp-data">
         <span className="p-float-label">
           <InputText id="fname" value={editedValues.emaill} onChange={(e) => setEditedValues({ ...editedValues, emaill: e.target.value })}required/>
           <label htmlFor="fname">Email</label>
         </span>
       </div>
       <div className="inp-data">
         <span className="p-float-label">
           <InputText id="fname" value={editedValues.addressl} onChange={(e) => setEditedValues({ ...editedValues, addressl: e.target.value })}required/>
           <label htmlFor="fname">Address</label>
         </span>
       </div>
       <div className="inp-data">
        <Button type="button" icon="pi pi-download" severity="success" className="custom-button" onClick={()=> handleSave(editedValues.id)}>Save</Button>
       </div>
       </form>
    </Dialog>

    <div className="contain">
      <form onSubmit={handleAddData} className="form">
        <h1>Form Data</h1>
          <div className="form-data">
            <span className="p-float-label">
              <InputText id="fname" value={values.fname} onChange={(e) => setValues({ ...values, fname: e.target.value })} required/>
              <label htmlFor="fname">First Name</label>
            </span>
          </div>
          <div className="form-data">
            <span className="p-float-label">
              <InputText id="lname" value={values.lname} onChange={(e) => setValues({ ...values, lname: e.target.value })} required/>
              <label htmlFor="lname">Last Name</label>
            </span>
          </div>
          <div className="form-data">
            <span className="p-float-label">
              <InputText id="phoneNo" value={values.phoneNo} onChange={(e) => setValues({ ...values, phoneNo: e.target.value })} required/>
              <label htmlFor="phoneNo">Phone Number</label>
            </span>
          </div>
          <div className="form-data">
            <span className="p-float-label">
              <InputText id="email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} required/>
              <label htmlFor="email">Email</label>
            </span>
          </div>
          <div className="form-data">
            <span className="p-float-label">
              <InputText id="address" value={values.address} onChange={(e) => setValues({ ...values, address: e.target.value })} required/>
              <label htmlFor="address">Address</label>
            </span>
          </div>
          <div className="form-data">
          <Button severity="info">Submit</Button> 
          </div>
        </form>
      </div>
      
      
       { orNot === true ? 
        (<div className="table">
        <DataTable 
          value={api.slice().reverse()}
          responsiveLayout="scroll"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          datakey="id"
          paginator={true}
          className="datatable-responsive"
          Template="Showing {first} to {last} of {total Records} posts"
          rows={3}
        >
          <Column field="fname" header="First Name" sortable/>
          <Column field="lname" header="Last Name" sortable/>
          <Column field="phoneNo" header="Phone Number" sortable/>
          <Column field="email" header="Email" sortable/>
          <Column field="address" header="Address" sortable/>
          <Column header="Actions" body={actionTemplate} sortable/>
        </DataTable>
        
        </div>) : ("")         }
        
  </div>
  {orNot === true ?<div className="btn-view"><Button type="button" onClick={()=> navigate('/View')}>View Details</Button></div>: null}
  </>)
}

export default FullForm;






// // using Multiple Components


// import React, { useEffect, useState } from "react"
// import "./App.css"
// import axios from "axios"
// import Datatable from "./components/DataTable";
// import FormData from "./components/Form";
// import EditedForm from "./components/Edited-Form";
// import { Button } from "primereact/button";

// function App(){
//   const [api, setApi] = useState([]);
//   const [values, setValues] = useState({id:"", fname:"", lname:"", phoneNo:"", email:"", address:""})
//   const [editedValues, setEditedValues] = useState({id:"", fnamel:"", lnamel:"", phoneNol:"", emaill:"", addressl:""})
//   const [modal, setModal] = useState(false)
//   const [orNot, setOrNot] = useState(false)
//   useEffect(()=>{
//     getData()
//   },[])

//   function getData(){
//     axios.get('http://localhost:3000/Data').then((res)=>setApi(res.data)).then(console.log(api))
//   }

//   function handleAdd(e){
//     axios.post('http://localhost:3000/Data',values).then(getData)
//     setOrNot(true)
//     setValues({fname:"", lname:"", phoneNo:"", email:"", address:""})
//     e.preventDefault()
//   }

//   function handleDelete(id){
//     axios.delete(`http://localhost:3000/Data/${id}`).then(getData)
//   }

//   function handleEdit(val){
//     setEditedValues({id:val.id, fnamel: val.fname, lnamel: val.lname, phoneNol: val.phoneNo, emaill: val.email, addressl: val.address})
//     setModal(true)
//   }

// function handleSave(id){
//   const UpdatedData = {
//     fname: editedValues.fnamel,
//     lname:editedValues.lnamel,
//     phoneNo:editedValues.phoneNol,
//     email:editedValues.emaill,
//     address:editedValues.addressl
//   }
//   axios.put(`http://localhost:3000/Data/${id}`, UpdatedData).then(()=>getData());
//   setModal(!modal)
// }

//   function Actions(data){
//     return(
//       <div>
//         <Button icon="pi pi-trash" severity="danger" onClick={()=>handleDelete(data.id)}>Delete</Button>
//         <Button icon="pi pi-pencil" severity="warning" onClick={()=>handleEdit(data)}>Edit</Button>
//       </div>
//     )
//   }
//   return(
//     <>
//       <FormData values = {values} setValues = {setValues} handleAdd = {handleAdd}/>
//       <Datatable api = {api} orNot = {orNot} Actions = {Actions} />
//       <EditedForm editedValues = {editedValues} setEditedValues = {setEditedValues} modal = {modal} setModal = {setModal} handleSave = {handleSave}/>
//     </>
//     )
// }

// export default App





// // EDITING in Existing form


// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import './App.css';
// import { InputText } from 'primereact/inputtext';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { Button } from 'primereact/button';


// function App() {
//   const [api, setApi] = useState([]);
//   const [values, setValues] = useState({ fname: "", lname: "", phoneNo: "", email: "", address: "" });
//   const [editedValues, setEditedValues] = useState({ id: "", fnamel: "", lnamel: "", phoneNol: "", emaill: "", addressl: "" });
//   const [orNot, setOrNot] = useState(false);
//   const [modal, setModal] = useState(false)

//   useEffect(() => {
//     getData();
//   }, []);

//   function getData() {
//     axios.get('http://localhost:3000/Data').then((res) => setApi(res.data));
//   }

//   function handleAddData(e) {
//     axios.post('http://localhost:3000/Data', values).then(() => {
//       getData();
//       setValues({ fname: "", lname: "", phoneNo: "", email: "", address: "" });
//     });
//     setOrNot(true)
//     e.preventDefault();
//   }

//   function handleDelete(id) {
//     axios.delete(`http://localhost:3000/Data/${id}`).then(() => getData());
//   }

//   function handleEdit(val) {
//     setModal(!modal)
//     setEditedValues({ id: val.id, fnamel: val.fname, lnamel: val.lname, phoneNol: val.phoneNo, emaill: val.email, addressl: val.address });
//   }


//   function handleSave(id){
//     const UpdatedData = {
//       fname: editedValues.fnamel,
//       lname: editedValues.lnamel,
//       phoneNo: editedValues.phoneNol,
//       email: editedValues.emaill,
//       address: editedValues.addressl
//     }
//     axios.put(`http://localhost:3000/Data/${id}`, UpdatedData).then(()=>getData());
//     setModal(!modal)
//   }

//   const actionTemplate = (rowData) => {
//     return (
//       <div>
//         <Button severity="danger" icon="pi pi-trash" className="custom-button" onClick={() => handleDelete(rowData.id)}>Delete</Button>
//         <Button label="Edit" icon="pi pi-pencil" severity="warning" className="custom-button" onClick={() => handleEdit(rowData)} />
//       </div>
//     );
//   };

//   return (
//     <div className="return">
//       <div className="contain">
//         <form onSubmit={handleAddData}>
//           <h1>Form Data</h1>
//             <div className="form-data">
//               <span className="p-float-label">
//                {modal === true ? (<InputText id="fname" value={editedValues.fnamel} onChange={(e) => setEditedValues({ ...editedValues, fnamel: e.target.value })} />) : (<InputText id="fname" value={values.fname} onChange={(e) => setValues({ ...values, fname: e.target.value })} />) }
//                 <label htmlFor="fname">First Name</label>
//               </span>
//             </div>
//             <div className="form-data">
//               <span className="p-float-label">
//                 {modal === true ? (<InputText id="fname" value={editedValues.lnamel} onChange={(e) => setEditedValues({ ...editedValues, lnamel: e.target.value })}/>) : (<InputText id="lname" value={values.lname} onChange={(e) => setValues({ ...values, lname: e.target.value })} />)}
//                 <label htmlFor="lname">Last Name</label>
//               </span>
//             </div>
//             <div className="form-data">
//               <span className="p-float-label">
//                 {modal === true ? (<InputText id="fname" value={editedValues.phoneNol} onChange={(e) => setEditedValues({ ...editedValues, phoneNol: e.target.value })} />) : (<InputText id="phoneNo" value={values.phoneNo} onChange={(e) => setValues({ ...values, phoneNo: e.target.value })} />)}
//                 <label htmlFor="phoneNo">Phone Number</label>
//               </span>
//             </div>
//             <div className="form-data">
//               <span className="p-float-label">
//                 {modal === true ? (<InputText id="fname" value={editedValues.emaill} onChange={(e) => setEditedValues({ ...editedValues, emaill: e.target.value })} />) : (<InputText id="email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} />)}
//                 <label htmlFor="email">Email</label>
//               </span>
//             </div>
//             <div className="form-data">
//               <span className="p-float-label">
//                 {modal === true ? (<InputText id="fname" value={editedValues.addressl} onChange={(e) => setEditedValues({ ...editedValues, addressl: e.target.value })} />) : (<InputText id="address" value={values.address} onChange={(e) => setValues({ ...values, address: e.target.value })} />)}
//                 <label htmlFor="address">Address</label>
//               </span>
//             </div>
//             <div className="form-data">
//             {modal === true ? (<Button icon="pi pi-download" severity="success" className="custom-button" onClick={()=>handleSave(editedValues.id)}>Save</Button>) : (<Button severity="info" type="submit">Submit</Button>)} 
//             </div>
//           </form>
//         </div>
      
//          { orNot === true ? 
//           (<div className="table">
//             <DataTable 
//               value={api.slice().reverse()}
//               responsiveLayout="scroll"
//               paginatorTemplate="FirstPageLink PrevPageLink PageLinks Next PageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
//               datakey="id"
//               paginator={true}
//               className="datatable-responsive"
//               currentPageReport Template="Showing {first} to {last} of {total Records} posts"
//               rows={3}
//             >
//               <Column field="fname" header="First Name" sortable/>
//               <Column field="lname" header="Last Name" sortable/>
//               <Column field="phoneNo" header="Phone Number" sortable/>
//               <Column field="email" header="Email" sortable/>
//               <Column field="address" header="Address" sortable/>
//               <Column header="Actions" body={actionTemplate} sortable/>
//             </DataTable>
//           </div>) : ("")
//           }
//     </div>)
// }

// export default App;
