import React, { useEffect } from 'react'
// import thoughtContext from '../context/thought/thoughtContext';
import { Modal, Button } from 'react-bootstrap';
import "../css/addpost.scss";
import { db, storage } from "../config/db";
import thoughtContext from '../context/thought/thoughtContext';
import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc, FieldValue, serverTimestamp } from "firebase/firestore";
import { useContext } from 'react';



function AddPost(props) {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState();
  const [url, setURL] = useState("");
 const context = useContext(thoughtContext)
 const {UserName} = context
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
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
      (snapshot) => {},
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
          const data = {
            timestamp: serverTimestamp(),
            caption:caption,
            comment:"this",
            hours:1,
            image:downloadURL,
            likedByNumber:25,
            likedByText:"hell",
            storyBorder:true,
            username:UserName
          }
          const rf = collection(db, "posts")
          addDoc(rf,data).then(function() {
            console.log(" created");
          });
        });
      }
    );

  }

  return (
    <Modal
      {...props}
      fullscreen="true"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="px-4" closeButton>
        <Modal.Title className="ms-auto" id="contained-modal-title-center" >
          Create New Post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <input type="text" onChange={handleOnChange} placeholder="caption" value={caption} />
        <input type="file" onChange={handleChange} />

        <img src={url} alt="" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleUpload}>Upload</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddPost
