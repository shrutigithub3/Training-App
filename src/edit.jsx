import React, {useState,useEffect } from 'react';
import { Formik } from 'formik';
import { useNavigate,useParams } from 'react-router-dom';
import {putusers,newusers} from './userservice.jsx';


function Basic({newuser,setNewUser}){
  
const [data, setData] = useState(null);
  let navigate = useNavigate();
  const routeChange = () =>{
    let path = '/EditUser';
    navigate(path);
  }

  const fetchdata = async(id)=>{
    let res = await newusers(id);
    if(res.status==200){
      setNewUser(res.data)
    }
  }
 const {id}=useParams();
  useEffect(() => {
    fetchdata(id);
 }, []);
 const handleAction = (_id,action) =>{
  const user = data.find((user)=> user._id === _id)
  if(user){
      setNewUser(user);
  }
  if(action === "edit"){
    let path = `/EditUser/${user._id}`;
    navigate(path);
      
  }
}
console.log(data)
return(
  <div>
    <>
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
          else if(values.password=='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'){
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
      onSubmit={(values, { resetForm }) => {
        if(values.name && values.email && values.password && values.age && values.role){
          putusers(values._id,values.name,values.email,values.password,values.age,values.role)
    }
  routeChange();
}} >
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
            type="name"
            name="name"
            placeholder='Enter your name'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          /><br></br>
          {errors.name && touched.name && errors.name}
           <input
            type="email"
            name="email"
            placeholder='Enter your email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          /><br></br>
          {errors.email && touched.email && errors.email}
          <input
            type="password "
            name="password"
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
          {/* <Field as="select" name="role">
            <option value="user">User</option>
            <option value="system">System</option>
             <option value="admin">Admin</option>
             </Field><br></br> */}
             <select>
             <option value="user">User</option>
            <option value="system">System</option>
             <option value="admin">Admin</option></select>
             <br></br>
             <br></br>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
         </Formik>
         </>
         </div>
)
}   

export default Basic;