import {useSelector,useDispatch} from "react-redux";
import { clearState, extraReducers, getUsers, userSelector,users} from './redux/reducer/slice';
import { ErrorMessage } from 'formik';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
export default function User(){
    const dispatch = useDispatch();
    const {isFetching,ErrorMessage,isError,users}=
    useSelector(userSelector);

    useEffect(()=>{
        dispatch(clearState());
        dispatch(getUsers());
    },[]);

    return(
        <>
       {isFetching?
        (<div><h2>Loading</h2></div>):(<div><Table striped bordered hover variant="dark">
        <thead>
          <tr>
           <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Age</th>
            <th>Role</th>
        
          
           
          </tr>
        </thead>
        <tbody>
          {users && users.length && (<>
          {users.map((element,index) => {
            return(
              <tr>
                <td>{index}</td>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.password}</td>
                <td>{element.age}</td>
                <td>{element.role}</td>
              </tr>
     
            )
          }
          )}
          </>)}
        </tbody>
      
        </Table></div>)
        }
</>
    )}