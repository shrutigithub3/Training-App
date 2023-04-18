import Button from 'react-bootstrap/Button';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
function ModalForm(Show,handleclose){
    return(
        <>
          <Modal show={Show} onHide={handleclose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
                <input type ="email" placeholder="Enter email"></input>
                <input type = "password" placeholder="Password"></input>
        
          </form>
          </Modal.Body>
          <Modal.Footer>
          <Button type="submit" class="btn btn-primary">Submit onClick={handleclose}</Button>
          <Button type="close" class= "btn btn-primary">Close onClick={handleclose}</Button>
          </Modal.Footer>
          
        </Modal>
      </>
    )}


export  default ModalForm;

