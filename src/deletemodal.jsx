import Modal from 'react-bootstrap/Modal';
import {fetchuser,formuser} from "./userservice";

import {useFormik,FormikProvider} from 'formik';
import { Field,Form,Formik,FormikProps } from 'formik';
import Button from 'react-bootstrap/Button';

const Deletemodal = ({show,handleClose,handleDelete})=>{
    return(<>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>My Form</Modal.Title>
        </Modal.Header>
       
          <Modal.Body> 
            Are you sure you want to delete information?
            </Modal.Body>
            <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Cancel
        </Button>
        <Button variant="secondary" onClick={handleDelete}>
            Delete
        </Button>
     </Modal.Footer>
     </Modal>
   </>
        
      )
}
export default Deletemodal;