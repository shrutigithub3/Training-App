import React from 'react'
import { Table } from 'react-bootstrap'
import "./style.css"

function Todolist(props) {


  
  return (
    <div className='wrapper'>
    <ul> 
    <li className="list-item"> 
        {props.item}
        <button className='edit-btn' onClick={props.updateItem}>Edit</button>    

<button className="delete-btn" 
      onClick={()=>{
        props.deleteItem(props.index)
        
      }}>Delete</button>  
      <button>Submit</button>
 

      </li>
  </ul>
  </div>
  )
}

export default Todolist