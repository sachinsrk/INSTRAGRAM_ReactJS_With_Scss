import React, { useState } from "react";
import ThoughtContext from "./thoughtContext";


const ThoughtState = (props) => {
  const [state, setState] = useState(false)
  return (
    <ThoughtContext.Provider value={{state,setState}}>
      {props.children}
    </ThoughtContext.Provider>
  )
}

export default ThoughtState
