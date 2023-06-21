import Task from "../Task/_task";
import styles from "./tasks.module.css";


const Tasks = ({ status, todos, title, taskCount }) => {

  const colors = {
    todo: "#F3f077",
    doing: "#6660c1",
    done: "#66e1ad"
  }
  
  return (
    <div className={styles.task_container}>
      <div className={styles.title_container}>
        <span className={styles.dot} style={{ backgroundColor: `${colors[status]}` }}></span>
        {title} <span className="qty"> ({taskCount})</span>
      </div>

      <Task tasks={todos}/>
    </div>
  );
};

export default Tasks;
