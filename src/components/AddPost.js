import React, { useEffect } from 'react'
// import thoughtContext from '../context/thought/thoughtContext';
import { Button, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';
import "../css/addpost.scss";
import { db, storage } from "../config/db";
import thoughtContext from '../context/thought/thoughtContext';
import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc, FieldValue, serverTimestamp } from "firebase/firestore";
import { useContext } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { async } from '@firebase/util';


function AddPost(props) {
  const { open, onClose } = props
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState();
  const [url, setURL] = useState("");

  useEffect(() => {
    setImage('')
    setURL('')

  }, [open])

  const context = useContext(thoughtContext)
  const { UserName } = context
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setURL(URL.createObjectURL(e.target.files[0]))
    }
  }
  const handleOnChange = (e) => {
    setCaption(e.target.value)
  }


  const handleUpload = () => {
    // upload image 

 

    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image)

    uploadTask.on('state_changed',
      (snapshot) => { },
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            alert("Unauthorize Access")
            break;
          case 'storage/canceled':
            alert("User Cancelled Upload")
            break;
          case 'storage/unknown':
            alert(" Unknown error occurred, inspect error.serverResponse")
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setURL(downloadURL)
          const data = {
            timestamp: serverTimestamp(),
            caption: caption?caption:'no cap',
            comment: "this",
            hours: 1,
            image: downloadURL,
            likedByNumber: 25,
            likedByText: "hell",
            storyBorder: true,
            username: UserName
          }
          const rf = collection(db, "posts")
          addDoc(rf, data).then(function () {
            console.log(" created");
            onClose()
          });
        });
      }
    );

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
          {image ? <Button onClick={ handleUpload}>Upload</Button> : ''}
        </ModalBody>
      </Modal>

    </div>
  )
}

export default AddPost
