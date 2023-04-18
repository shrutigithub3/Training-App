//import logo from './logo.svg';
import './App.css';
import ReactDom from 'react-dom';
// import Welcome from './Welcome.js';
// import Fruits from './classComponent.jsx';
// import Array from './Array.jsx';
// import ArrayofObject from './ArrayofObject.jsx';
// import Property from './property.jsx';
// import WelcomeDialog from './func.jsx';
// import reducer from './useReducer.jsx';
// import { useReducer } from 'react';
// import State from './forms.jsx';
// import Form from './forms.jsx';
//import Connect from './Connect.jsx';
//import BasicExample from './bootstrap.jsx';
// import UsersRecord from './newtable';
// import {UserModal} from "./Newformik";
import { Routes, Route } from 'react-router-dom';
import MainHome from './MainHome.jsx';
//import  About from '/About.jsx';
//import NavBar from './Navbar.jsx';
import React,{useState} from 'react';
//import Modal2 from './Modal2';
//import Button from 'react-bootstrap/Button';
import {Formik,Field}from 'formik';
import Newformik from './Newformik.jsx';
import NavBar from './Navbar.jsx';
import { lazy, Suspense } from 'react';
import MainContainer from './MainContainer';
import User from './User'
// import Time from './useState.jsx';
import ForgotPassword from './ForgotPassword';
import NavBar1 from './Navbar1.jsx';
import Time from './CounterApp.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import Basic from './edit.jsx';
const Home = lazy(() => import('./Home'));



function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
 // let fruits = ["apple","mango","banana","orange"]
  // let newarr = fruits.map((element) =>{
  //   return(
  //     <div>{element}</div>
  //   )
  // })
 
  return (
  <>
    <div className="App">
      {/* <Welcome />
      <Fruits />
      <Array />
      <ArrayofObject /> */}
      {/* <WelcomeDialog newborder = {FancyBorder}/>
      <FancyBorder>
        <div> HI THERE !!</div>
      </FancyBorder>
      <State />
      <Form />  */}
      {/* <Connect /> */}
       {/* <BasicExample />
       */}
      {/* <Newformik/> */}
      {/* <Timer /> */}
      <NavBar1/>
      <Routes>
        <Route path='/CounterApp' element={<Time/>}/>
      </Routes>
      
    
      {/* <Routes>
       <Route path='/' element={ <Home/>} />
       <Route path='/Forgot password' element={<ForgotPassword/>}/>
       <Route path='/Newformik' element={<MainContainer/>}>
       <Route path='/Newformik' element={<User />} />
       </Route>

       </Routes>  */}
      
       {/* <Basic/> */}
       
       </div>
       </>
      
  );
 }
  


export default App;
