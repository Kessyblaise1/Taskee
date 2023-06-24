"use client"
import Tasks from '@/components/Tasks/_layout'
import styles from './page.module.css'
import Aside from '@/components/Aside/_layout'
import tasks from '@/data'
import { useState } from 'react'
import CreateTask from '@/components/newTaskModal/_newTask'
import Backdrop from '@/components/BackDrop/Backdrop'

export default function Home() {
  const [showNewTask, setshowNewTask] = useState(false)
  const [taskData, setTaskData] = useState({
    todo : tasks?.filter(task => task.status == "todo"),
    doing:  tasks?.filter(task => task.status == "doing"),
    done : tasks?.filter(task => task.status == "done")
  })

  const closeBackdrop = () => {
    setshowNewTask(false)
  }
  
  
  
  return (
    <div className={styles.container}>
      <Aside />
      <main className={styles.main}>
        <header>
          <h2 className="board_title">Platform Launch</h2>
          <div className={styles.right_pane}>
            <button className={`primary_btn ${styles.create_task}`} onClick={()=> setshowNewTask(!showNewTask)}>+add New Task</button>
            <span className="material-icons">more_vert</span>
          </div>
        </header>
        <div className={styles.tasks_container}>
          <Tasks title={'todo'} taskCount={taskData.todo.length} status={'todo'} todos={taskData.todo}/>
          <Tasks title={'doing'} taskCount={taskData.doing.length} status={'doing'} todos={taskData.doing}/>
          <Tasks title={'done'} taskCount={taskData.done.length} status={'done'} todos={taskData.done}/>
        </div>
      </main>

      {showNewTask && <Backdrop closeBackdrop={closeBackdrop}/>}
      {showNewTask && <CreateTask />}
    </div> 
  )
}
