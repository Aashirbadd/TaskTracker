import Header from './components/Header' // Every component you create you have to import it!
import Tasks from './components/Tasks' // Every component you create you have to import it!
import AddTask from './components/AddTask' // Helper component for users to add tasks

import {useState} from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1, // The state is immutable, however you can use setTask to completely create a new one for testing!
        text: 'Track harder than ever!',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    
]); // The first is array elements, second is function to update state.

    // Delete Task
    const deleteTask = (id) => {
      //console.log('delete', id);
      setTasks(tasks.filter((task) => task.id !== id )) 
    }

    // Insert Task
    const insertTask = (task) => {
      const id = Math.floor(Math.random() * 10000) +1 
      const newTask = {id, ...task} // Takes id + all attributes of type task.
      setTasks([...tasks, newTask]) // Add it to tasks using this higher ordered function.
    }


    // Toggle reminder
    const toggleReminder = (id) => setTasks(tasks.map((task) => task.id === id ? { ...task, reminder:!task.reminder} : task))
//...objectProps, prop = newV means keep all the objectprops the same, except assign prop = new value!
// React dev tools is a great way to check states and all that! (better than printing wtH)
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>

      {showAddTask && <AddTask onAdd = {insertTask}/>}

      {tasks.length > 0 ?<Tasks tasks = {tasks} onDelete = {deleteTask} reminder = {toggleReminder}/>
        : "You're done all your tasks!"}
    </div>
  );
}
// When you return a JSX from app.js --> you must only return one parent element (that's why we're putting everything in one div!)
// To display a variable as HTML element, put the variable inside curly brackets.

// After you import what you want, you just embed it like it's a HTML element!

// Everything in react is made up of components (can be functions or classes)
// Most time we use functions with hooks (Watch again till 20 minutes)

// App is the main component where we store all our components! --> And that's what's being put into the main div!
export default App;


// That's how you make your front end, now we're going to build out a mock front end!