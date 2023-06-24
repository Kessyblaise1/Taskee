import { useState, useRef } from "react";
import "../../app/globals.css";
import styles from "./newTask.module.css";
import axios from "axios";
import { addNewField } from "./functions";

const CreateTask = ({ closeBackdrop }) => {
  const subtasksContainer = useRef(null);
  const inputsContainer = useRef(null);

  const [inputValues, setinputValues] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    subtasks: [],
    status: "todo",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createTask = (e) => {
    e.preventDefault();
    let inputs = subtasksContainer.current.querySelectorAll("input");
    let inputValues = Array.from(inputs).map((input) => input.value);

    setinputValues((inputValues) => {
      setFormData({
        ...formData,
        subtasks: inputValues,
      });

      axios.post("http://localhost:80/taskee/task/save", formData);
      console.log(formData);
    });
  };

  return (
    <div className={styles.newTask}>
      <div className={styles.modal_container}>
        <p className="modal_title">Add New Task</p>

        <form action="" className={styles.create_form}>
          <div className={styles.form_group}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="e.g. take a coffee break"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="desc">Description</label>
            <textarea
              name="desc"
              id="desc"
              placeholder="it's always good to take a break. This 15 minutes break will recharge the battery a little"
              value={formData.desc}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className={styles.form_group} ref={subtasksContainer}>
            <label htmlFor="subtasks">Subtasks</label>
            <div ref={inputsContainer}>
              <input type="text" name="subtasks" id="subtask1" placeholder="e.g. make coffee" />
              <input
                type="text"
                name="subtasks"
                id="subtask2"
                placeholder="e.g. drink coffee and smile"
              />
            </div>
            <button
              className="add_subtask secondary_btn"
              onClick={(e) => addNewField(e, subtasksContainer)}
            >
              +Add New Subtask
            </button>
          </div>

          <div className={styles.form_group}>
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              className="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
          </div>

          <button className="primary_btn" type="submit" value="Create Task" onClick={createTask}>
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
