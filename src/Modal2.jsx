import React, { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


function Modal2() {
  const [show, setShow] = useState(false);
  const[isError, SetISError]= useState(false);
  const[name, setName] = useState("");
  const[role,setRole]=useState("");
  const[data,setData]=useState("");
  const[post,setPost]=useState("");

  function handleClose() {
    return setShow(false);
  }
  const handleShow = () => setShow(true);
  useEffect(()=> {},[isError]);

  const nameOnChange=(e)=>{
    setName(e.target.value);
  }
  const roleOnChange=(e)=>{
    setRole(e.target.value);
  }


  const getdata=async()=> {
    try {
        const response = await fetch("http://localhost:8081/usernew");
        console.log(response)
        const json = await response.json();
        setData(json);
    }
    catch(error) {
      console.log("error", error);
    }
}

const postdata=async()=> {
  try {
    axios
    .post("http://localhost:8081/newuser", {
      name,role
    })
      .then((response) => {
       setPost(response.data);
      });
  }
  catch (error) {
    console.log("error", error);
  }
}

useEffect(()=>{
  getdata();
}, []);

 

console.log(data)

    const formSubmit=(e)=> {
    e.preventDefault();
    console.log("here");
    if (name==""||role==""){
      alert("details should be filled");
      return;
    }
    else {
      for (let i of data) {
        if (i.name === name && i.role === role) {
          alert("Already present");
          return;
        }

      }
      console.log({name,role});
      postdata();
      getdata();
    }
  }
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Add a new User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>My Form</Modal.Title>
        </Modal.Header>
       
          <Modal.Body> 
          <form >
                  <input type ="Name" name = "name" value={name} placeholder="Enter Name" onChange={nameOnChange}/>
                    <br></br>
                  <input type = "Role" role = "role" value={role} placeholder="Enter Role" onChange={roleOnChange}/>
                  
           </form> 
            </Modal.Body>
          <Modal.Footer>
          <Button type="submit" name="submit" onClick={formSubmit} >Submit</Button>
          <Button type="close" className="btn btn-primary" onClick={handleClose} >Close</Button>
          </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal2;