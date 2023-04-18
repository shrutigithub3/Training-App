import { useState, useEffect } from "react";
import React from 'react';
import { Formik , Field } from 'formik';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from'axios';
import UpdateModel from "./UpdateModel";
// import Deletemodal from "./deletemodal";
// import { deleteusers } from "./userservice";

// const input = ({field,form, ...props}) =>{
//     return <input>{...field}{...props}</input>
// }
const NewFormik = () => {
 const [data, setData] = useState(null);
 const [show, setShow] = useState(false);
 const [newuser,setNewuser] = useState({ name: '', email:'',password:'',age: '' ,role: '' });
 const [updateShow,setUpdateShow] = useState(false);
//  const [deleteshow,setDeleteShow] = useState(false);
//  const [deleteclose,setDeleteClose] = useState(false);
 const [updateClose,setUpdateClose] = useState(false);
 const [action,setAction] = useState("add");
 const handleUpdateShow=()=>setUpdateShow(true);
 const handleUpdateClose=()=>setUpdateClose(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
//  const handleDeleteShow=()=>setDeleteShow(true);
//  const handleDeleteClose=()=>setDeleteClose(false);
 
 async function fetchdata() {
    try {
      const response = await fetch("http://localhost:3000/newusers");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log("error", error);
    }
  }
 console.log(data)

 useEffect(() => {
    fetchdata();
 }, []);

 const handleAction = (_id,action) =>{
     const user = data.find((user)=> user._id === _id)
     if(user){
         setNewuser(user);
     }
     if(action === "edit"){
       handleUpdateShow(true);
     }
    
         
    //  }else{
    //   handleDeleteShow();
    //  }
 
//  const handleDelete=()=>{
//   if(user){
//     const res = deleteusers(user._id)
//     if (res.status ===200){
//       fetchdata();
//     } }
//  }
 }

 return(
    <>
  <Table striped bordered hover variant="dark">
   <thead>
     <tr>
      <th>ID</th>
       <th>Name</th>
       <th>Email</th>
       <th>Password</th>
       <th>Age</th>
       <th>Role</th>
       <th>Actions</th>
     
      
     </tr>
   </thead>
   <tbody>
     {data && data.length && (<>
     {data.map((element,index) => {
       return(
         <tr>
           <td>{index}</td>
           <td>{element.name}</td>
           <td>{element.email}</td>
           <td>{element.password}</td>
           <td>{element.age}</td>
           <td>{element.role}</td>
           <td><Button type="success" name="edit" id="edit" onClick={()=>handleAction(element._id,"edit")}>Edit</Button>
          <Button variant="success" name="delete" id="delete" onClick={()=>handleAction(element._id,"delete")}>Delete</Button></td>
         </tr>

       )
     }
     )}
     </>)}
   </tbody>
 
   </Table>
  
   <Button variant="success" onClick={handleShow}>Add User</Button>{' '}
   <UpdateModel updateShow={updateShow} setUpdateShow={setUpdateShow}  newuser={newuser} handleUpdateClose={handleUpdateClose}/>
   {/* <Deletemodal show={deleteshow} handleDeleteShow={handleDeleteShow} handleDelete={handleDelete}/> */}
  </>
)};

export default NewFormik;