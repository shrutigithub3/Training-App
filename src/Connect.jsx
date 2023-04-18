import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
//import ModalForm from './ModalForm';
import {useState , useEffect} from "react";
function Connect(){
     const [data, setData]= useState(null);
     const[error, setError] = useState(null);
    
  
 function handleClose() {
        return setShow(false);
    }
 const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

     async function getdata() {
        try {
            const response = await fetch("http://localhost:3000/getuser");
            const actualData = await response.json();
            setData(actualData);
            console.log(data);
        }
        catch (err) {
            setError(err.message);
            console.log(error);
        }
    }
      useEffect(()=>{
         getdata();
      }, []);

     return (
       <><Table striped bordered hover variant="dark">
             <thead>
                 <tr>
                     <th>id</th>
                     <th>name</th>
                     <th>role</th>
                 </tr>
             </thead>
             <tbody>
                 {data && data.length && (<>
                     {data.map((item) => {
                         return (
                             <tr>
                                 <td>{item.id}</td>
                                 <td>{item.name}</td>
                                 <td>{item.role}</td>
                             </tr>

                         );
                     }
                     )}


                 </>)}
             </tbody>
         </Table><>
         <Button variant="Add">Add</Button>{' '}
        </> </>
           
            
     )
     
}
          
                
                      
                    
                 
     
     
                    

export default Connect;