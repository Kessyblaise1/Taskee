import "../../app/globals.css";
import styles from "./newTask.module.css";

const CreateTask = () => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal_container}>
        <p className="modal_title">Add New Task</p>

        <form action="" className={styles.create_form}>
          <div className={styles.form_group}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" placeholder="e.g. take a coffe break" />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="desc">Description</label>
            <textarea
              name="desc"
              id="desc"
              placeholder="it's always good to take a break. This 15 minutes break will recharge the battery a little"
            ></textarea>
          </div>

          <div className={styles.form_group}>
            <label htmlFor="subtasks">Subtasks</label>
            <input type="text" name="subtasks" id="subtask1" placeholder="e.g. make coffee"/>
            <input type="text" name="subtasks" id="subtask2" placeholder="e.g. drink coffee and smile"/>
            <button className="add_subtask secondary_btn">+Add New Subtask</button>
          </div>

          <div className={styles.form_group}>
            <label htmlFor="status">Status</label>
            <select name="status" id="status" className="status">
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
          </div>

          <button className="primary_btn" type="submit" value="Create Task">Create Task</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
