import { useState, useEffect } from "react";
import React from 'react';
import { Formik , Field } from 'formik';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from'axios';
import { putusers } from "./userservice";

// const input = ({field,form, ...props}) =>{
//     return <input>{...field}{...props}</input>
// }
const UpdateModel = ({updateShow,setUpdateShow,newuser,handleUpdateClose}) => {
 const [data, setData] = useState(null);
 const [show, setShow] = useState(false);
 const [action,setAction] = useState("add");
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 return(
    <>
    <Modal show={updateShow} onHide={handleUpdateClose}>
        <Modal.Header closeButton>
          <Modal.Title>My Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
 
    <h1>Add users</h1>
    <Formik
      initialValues={newuser}
      validate={values => {
        const errors = {};
        if(!values.name){
            errors.all='fill the blanks';
        }else if(values.name<4){
            errors.all='name must be of 3 characters';
        }
        if(!values.email){
            errors.all='fill the blanks';
        }
        else if(values.email=='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'){
               errors.all='enter valid format';
            }
            if(!values.password){
              errors.all='Plz fill';
          }
          else if(values.email=='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'){
            errors.all='enter valid format';
         }

            
        if(!values.age){
            errors.all='fill the blanks';
        }
    
        if(!values.role){
            errors.all='fill the blanks';
        }
        return errors;
      
      }}
    
    onSubmit={(values, { setSubmitting }) => {
        if(values.name && values.email && values.password && values.age && values.role){
            putusers(values._id,values.name,values.email,values.password,values.age,values.role)
      }}}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
           
            type="text"
            name="name"
            placeholder='Enter your name..'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          /><br></br>
          {errors.name && touched.name&& errors.name}

          <input
            type="email"
            name="email"
            placeholder='Enter your email..'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          /><br></br>
         {errors.email && touched.email && errors.email}
         <input
            type="password"
            name="password"
            placeholder='Enter your password..'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          /><br></br>
          {errors.password && touched.password && errors.password}
          <input
            type="number"
            name="age"
            placeholder='Enter your age..'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.age}
          /><br></br>
           {errors.age && touched.age && errors.age}

          
          <Field as="select" name="role">
            <option value="user">User</option>
            <option value="system">System</option>
             <option value="admin">Admin</option>
             </Field><br></br>
             
            
             <br></br>
        <br></br>
         
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
        
      )}
    </Formik>
    </Modal.Body>
        <Modal.Footer>
          {/* <Button type="submit" onClick={(e)=>formSubmit(e)}>submit</Button> */}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
    
        </Modal.Footer>
      </Modal>
   
   

  </>
)};

export default UpdateModel;