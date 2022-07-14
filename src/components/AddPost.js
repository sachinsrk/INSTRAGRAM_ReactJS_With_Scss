import React from 'react'
// import thoughtContext from '../context/thought/thoughtContext';
import { Modal, Button } from 'react-bootstrap';
import "../css/addpost.scss";
import { db } from "../config/db";
import { collection, getDocs, onSnapshot, query } from "@firebase/firestore";


function AddPost(props) {
  return (
    <Modal
      {...props}
      fullscreen="true"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header  className="px-4" closeButton>
        <Modal.Title className="ms-auto" id="contained-modal-title-center" >
          Create New Post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="bd">
        <label htmlFor="upfile" className='ubutton'>this</label>
        <input type="file" id='upfile' hidden />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={{}}>Upload</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddPost
