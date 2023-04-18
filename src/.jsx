import  {Table, Button} from "react-bootstrap"
import {newusers,deleteusers  } from "./userservice.jsx"
import { useState, useEffect } from "react"

 const UsersRecord = ({usersData,setUsersData, show, setShow, editUser, setEditUser}) =>
{
    // const [usersData,setUsersData]=useState([])

        useEffect(()=>{
        getUsersData()
    },[])

    const getUsersData=async ()=>{
        const response = await newusers()
        if (response.status==200){
            setUsersData(response.data)
        }
    }

    const handleDelete = (userId) => {
        deleteusers(userId)
        getUsersData()
      }  

    const handleEdit= (user)=>{
        setEditUser(user)
        setShow(true)
        
    }
    // console.log(usersData)
    return(
        <div>
            <Table striped bordered hover size ="sm">
                <thead>
                    <tr>
                      
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Age</th>
                        <th>Role</th>
                        <th>Actions</th>

                    </tr>

                </thead>
                <tbody>

                    {usersData.map(user => {
                        return(
                            <tr>
                
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                 <td>{user.Password}</td>
                                <td>{user.Age}</td>
                                <td>{user.Role}</td>
                                <td>
                                    <Button variant = "primary" className="mx-2" onClick={()=>handleEdit(user)}>Edit</Button>
                                    <Button variant = "danger" onClick={()=>handleDelete(user._id)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                
            </Table>
        </div>
    )
}
export default UsersRecord