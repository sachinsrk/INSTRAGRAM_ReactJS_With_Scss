import React, { useState } from "react";
import ThoughtContext from "./thoughtContext";
import { db, auth, storage } from "../../config/db";
import { useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc, FieldValue, serverTimestamp, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { async } from "@firebase/util";
const ThoughtState = (props) => {
  const [user, setUser] = useState(null)
  const [activeTab, setActiveTab] = useState("Tab-1")
  const Cu_user = auth.currentUser;
  const [userID, setUserID] = useState()
  const [UserName, setUserName] = useState();
  const [UserProfile, setUserProfile] = useState([]);
  const [UserProfileUrl, setUserProfileUrl] = useState();

  const [posts, setPosts] = useState([]);
  const [postCount, setPostCount] = useState(0);
  // const [comments, setComments] = useState([])
  const [commentCount, setCommentCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    if (Cu_user !== null) {
      setUserName(Cu_user.displayName);
    } else {
      setUserName("newUser")
    }

  }, [user])

  useEffect(() => {
    const ref = query(collection(db, "users"), where("displayName", "==", `${UserName}`));
    console.log("enter")    //set item on posts
    const getPro = async () => {
      onSnapshot(ref, (q) => {
        const post = [];
          q.forEach((doc) => {
          // push item on 
          console.log("enter loop")
          post.push(doc.id);
          console.log(doc.id)
          setUserID(doc.id);
          setUserProfileUrl(doc.data().photoURL)
          console.log(doc.data())
        });
        console.log(UserProfileUrl)
        //set item on posts
      });
    }
    getPro();
  }, [UserName])
  // add Comment 


  const addComment = async (id, comment) => {
    const colRef = collection(db, "posts", id, "comment");
    const data = {
      timestamp: serverTimestamp(),
      text: comment,
      username: UserName
    }
    addDoc(colRef, data)
      .then(function () {
        console.log("added");
      }).catch((error) => {
        console.log(error)
        alert(error.message)
      });
  }
  // get comment 
  // const getComment = async (id) => {

  // }
  // get post
  const getPost = async () => {
    const ref = query(collection(db, "posts"), orderBy("timestamp", "desc"));

    onSnapshot(ref, (q) => {
      const post = [];
      q.forEach((doc) => {
        // push item on loop
        post.push(doc);
      });
      //set item on posts
      setPosts(post);
    });

  }
  // add post
  const addPost = async (image, caption) => {
    console.log(image)
    console.log(caption)
    // image get name 
    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image)
    // upload image 
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
        // download and assign post 
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          const data = {
            timestamp: serverTimestamp(),
            caption: caption ? caption : 'no cap',
            comment: "this",
            hours: 1,
            image: downloadURL,
            likedByNumber: 25,
            likedByText: "hell",
            storyBorder: true,
            username: UserName,
            uid: userID
          }
          const rf = collection(db, "posts")
          // add post on collection
          addDoc(rf, data).then(function () {
            console.log(" created");
          });
        });
      }
    );

  }
  return (
    <ThoughtContext.Provider value={{ UserProfile, addPost, getPost, posts, setPosts, addComment, user, setUser, UserName, UserProfileUrl, activeTab, setActiveTab, postCount, setPostCount, commentCount, setCommentCount, likeCount, setLikeCount }}>
      {props.children}
    </ThoughtContext.Provider>
  )
}

export default ThoughtState
