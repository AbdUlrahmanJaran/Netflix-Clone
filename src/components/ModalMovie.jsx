import React from 'react';
 import Modal from 'react-bootstrap/Modal';
 import Form from 'react-bootstrap/Form'

import { useState } from 'react';

 import Button from 'react-bootstrap/Button';

export default function ModalMovie({ movies }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button onClick={handleShow}>
                Add to favorite
            </button>

             <Modal show={show} onHide={handleClose} >
                 <Modal.Header>
                     <Modal.Title>{movies.title}</Modal.Title>
                 </Modal.Header>

                 <Modal.Body>
                     {movies.release_date} <br />
                     {movies.overview}
                 </Modal.Body>

                 <Form>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Control type="email" placeholder="add comment" />
                     </Form.Group>
                 </Form> 
                 
                 <Modal.Footer>
                 <Button variant="primary">Save changes!</Button>
                     <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                 </Modal.Footer>
             </Modal>
        </>
    );
}