import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate,useParams } from 'react-router-dom';
import {Field,Form,Formik,Formikprops} from 'formik';
import {SignIn,newusers, sendEmail} from './userservice.jsx';
import Button from "react-bootstrap/Button";
import { setuser } from './service.jsx';
import "./style.css";
 
function ForgotPassword({setShow}){
  let navigate = useNavigate();
  const changeRoute=()=>{
    let path = '/';
    navigate(path);
  }

  return(
    <div className='form'>
    <>
      <Formik
      initialValues={{email: ''}}

      onSubmit={async(values,error)=>{
        if(values.email ){
          console.log("shsdsy")
          try{
            console.log("shhgfrsexc")
            console.log(values)
            const response = await sendEmail(values);
             if(response.status==200){
              console.log("hgfhgt")
              changeRoute();
            }
          }
          catch(error){
            alert("invalid user")
            console.log(error);
         
          
          }
        }
      }}
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
        
        <div className ="form-group">
          <form className ="form-inline">
            <h2>Forgot Password</h2>
            <h6>Enter your email for OTP</h6>
          <input
                    type="email"
                    name="email"
                    placeholder='Email address'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  /><br></br><br></br>
                  {errors.email && touched.email && errors.email}
                <Button class ="btn btn-outline-info" variant="primary" type="submit" value="Submit" onClick={handleSubmit}>
                  Send OTP
                </Button>
                {errors && errors.common && (<span class = "error">{errors.common} </span>)}
                </form>
                </div>
      )}
        
      </Formik>
      </>
    </div>
  )
}
export default ForgotPassword;