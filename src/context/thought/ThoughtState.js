import React from "react";
import ThoughtContext from "./thoughtContext";


const ThoughtState = (props) => {
    const state = {
        "name":"gfgf"
    }
  return (
    <ThoughtContext.Provider value={state}>
      {props.children}
    </ThoughtContext.Provider>
  )
}

export default ThoughtState
