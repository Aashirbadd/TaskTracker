import {useState} from 'react' // This allows us to use states within our program.
import Task from './Task'       // No .js, nor {} in import statements --> (Maybe look at some book for more syntax) but i think you good!

const Tasks = ({tasks, onDelete, reminder}) => {
    
    return (
        <div>
            {tasks.map( (task) => ( <Task key={task.id} task = {task} onDelete = {onDelete} reminder = {reminder}/> // From a list of tasks, it maps out singular ones (into the task component)
                ))}
        </div>
    )
}
// arrow function syntax (peramaters) => (function def)
export default Tasks

