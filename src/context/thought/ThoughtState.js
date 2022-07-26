import React, { useState } from "react";
import ThoughtContext from "./thoughtContext";
import { auth } from "../../config/db";
import { useEffect } from "react";

const ThoughtState = (props) => {
  const [user,setUser] = useState(null)
  const Cu_user = auth.currentUser;
  const [UserName, setUserName]= useState();
   useEffect(()=>{
    if (Cu_user !== null) {
      setUserName(Cu_user.displayName);

    }else{
      setUserName("newUse4r")
    }

   },[user])

  return (
    <ThoughtContext.Provider value={{user, setUser, UserName}}>
      {props.children}
    </ThoughtContext.Provider>
  )
}

export default ThoughtState
