import React from "react";
import {DataTable} from "primereact/datatable"
import {Column} from "primereact/column"

function Datatable(props){
    const {api, orNot, Actions} = props;
    return(
        <>
        {orNot === true ?   
            (
                <DataTable
                    value={api.slice().reverse()}
                    responsiveLayout="scroll"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    datakey="id"
                    paginator={true} paginatorClassName="custom-paginator"
                    className="datatable-responsive"
                    rows={2}
                >
                    <Column field="fname" header="FirstName"></Column>
                    <Column field="lname" header="LastName"></Column>
                    <Column field="phoneNo" header="PhoneNO"></Column>
                    <Column field="email" header="Email"></Column>
                    <Column field="address" header="Address"></Column>
                    <Column header="Actions" body={Actions}></Column>
                </DataTable>
            ) : (null)
        }
        </>
    )
}

export default Datatable