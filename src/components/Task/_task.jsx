import { useRef } from 'react';
import styles from '../Tasks/tasks.module.css'

const Task = ({ tasks }) => {
  const draggable = useRef(null)
  
  const dragInteraction = () => {
    draggable.current.style.cursor = "move"
  }
  return ( 
    <div className="card_container">
      {
        tasks?.map((task, i) => (
          <div className={`${styles.card} draggable`} key={i} draggable="true" ref={draggable} onMouseDown={dragInteraction}>
            <p className={styles.card_title}>{task.title}</p>
            <p className={styles.description}>
              <span>0</span> of <span>3</span> sub tasks
            </p>
          </div>
        )) 
      }
        
      </div>
   );
}
 
export default Task;