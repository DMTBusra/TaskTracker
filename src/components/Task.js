import React from 'react'
import {FaTimes} from "react-icons/fa"
const Task = ({mission, sil, toogleDone}) => {
    return (
        <div className={`task ${mission.isDone ? "done" : ""}`}
         onDoubleClick={()=> toogleDone(mission.id)}>
            <h3>{mission.text} 
            <FaTimes style={{color:"red"}} onClick={()=> sil(mission.id)}/>
            </h3>
            <p>{mission.day}</p>
        </div>
    )
}

export default Task
