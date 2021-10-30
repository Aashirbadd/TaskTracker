// Code for a singular task element in react!
import {FaTimes} from 'react-icons/fa' // Import FaTimes (x) icon from fontawesome
import React from 'react'

const Task = ({task, onDelete, reminder}) => {
    return (
        <div className = {`task ${task.reminder ?  'reminder' : ''}`} onDoubleClick = {(id) => reminder(task.id)}>
            <h3>{task.text} <FaTimes style = {{color: 'red', cursor: 'pointer', margin : "9px"}} onClick = { () => onDelete(task.id)}/> 
            </h3>
            <p>{task.day}</p>
        </div>
    )
}
// Deleting the task from clicking of this component icon, needs props that the original caller calls in with it.
// CSS has classes AND subclasses task.reminder takes everything class has, but has an additional highlighting called task reminder (called w spaces)
export default Task
