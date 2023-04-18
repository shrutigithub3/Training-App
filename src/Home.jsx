import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate,useParams } from 'react-router-dom';
import {Field,Form,Formik,Formikprops} from 'formik';
import {SignIn,newusers} from './userservice.jsx';
import Button from "react-bootstrap/Button";
import { setuser } from './service.jsx';
import "./style.css";
 
function Home({setShow}){
  let navigate = useNavigate();
  const changeRoute=()=>{
    let path = '/Newformik';
    navigate(path);
  }

  return(
    <div className='form'>
    <>
      <Formik
      initialValues={{email: '', password: '' }}
      onSubmit={async(values,{setErrors,setSubmitting})=>{
        let response;
        if(values.email && values.password){
          console.log("shsdsy")
          try{
            const response = await SignIn(values.email,values.password)
             if(response.status===200){
              console.log(response.data)
              setuser("user_authority",response.data);
              changeRoute();
            }
          }
          catch(error){
         
            if(error.status===422){
              setErrors(
                {common:error.message}
              )
            }
      
            console.log(error.message)
            setSubmitting(false);
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
            <h2>Sign In Form</h2>
                <input
                    type="email"
                    name="email"
                    placeholder='Enter your email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  /><br></br><br></br>
                  {errors.email && touched.email && errors.email}
                  <input
                    type="password"
                    name="password"
                    placeholder='Enter your password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  /><br></br><br></br>
                  {errors.password && touched.password && errors.password}
                  <a href="Forgot password">Forgot Password</a><br></br><br></br>
                <Button class ="btn btn-outline-info" variant="primary" type="submit" value="Submit" onClick={handleSubmit}>
                  Sign In
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
export default Home;