import React, { useEffect } from 'react'
// import thoughtContext from '../context/thought/thoughtContext';
import { Button, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';
import "../css/addpost.scss";
import { db, storage } from "../config/db";
import thoughtContext from '../context/thought/thoughtContext';
import { useState } from 'react';
// import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";
// import { collection, addDoc, FieldValue, serverTimestamp } from "firebase/firestore";
import { useContext } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { async } from '@firebase/util';


function AddPost(props) {

  const context = useContext(thoughtContext)
  const { addPost } = context
  const { open, onClose } = props
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState();
  const [url, setURL] = useState()

  useEffect(() => {
    setImage('')
    setURL('')

  }, [open])

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setURL(URL.createObjectURL(e.target.files[0]))
    }
  }
  const handleOnChange = (e) => {
    setCaption(e.target.value)
  }


  const handleUpload = async () => {
    // upload image 
    await addPost(image, caption)
    onClose()
  }

  return (
    <div>


      <Modal open={open} onClose={onClose}>

        <ModalHeader>Create new post</ModalHeader>

        <ModalBody>


          <input type="file" id='file' onChange={handleChange} hidden />
          {image ? '' : <label for="file" className='fl'>Select from computer</label>}
          <label htmlfor="file">  <img src={url} /></label>
          <br></br>
          {image ? <input type="text" onChange={handleOnChange} placeholder="caption" value={caption} /> : ''}
          <br></br>
          <br></br>
          {image ? <Button onClick={handleUpload}>Upload</Button> : ''}
        </ModalBody>
      </Modal>

    </div>
  )
}

export default AddPost
