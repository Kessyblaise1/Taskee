import { useState, useRef, useEffect } from "react";
import "../../app/globals.css";
import styles from "./newTask.module.css";
import { addNewField, handleChange, createTask, updateInputValues } from "./functions";

const CreateTask = () => {
  const subtasksContainer = useRef(null);
  const inputsContainer = useRef(null);

  const [numOfSubTask, setNumOfSubTask] = useState(2);
  const [inputValues, setInputValues] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    subtasks: [],
    status: "todo",
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      subtasks: inputValues,
    }));
  }, [inputValues]);

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
              onChange={(e) => handleChange(e, setFormData, formData)}
            />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="desc">Description</label>
            <textarea
              name="desc"
              id="desc"
              placeholder="it's always good to take a break. This 15 minutes break will recharge the battery a little"
              value={formData.desc}
              onChange={(e) => handleChange(e, setFormData, formData)}
            ></textarea>
          </div>

          <div className={styles.form_group} ref={subtasksContainer}>
            <label htmlFor="subtasks">Subtasks</label>
            <div ref={inputsContainer}>
              {Array.from({ length: numOfSubTask }, (_, index) => (
                <div key={index} className={styles.subtask_group}>
                  <input
                    type="text"
                    name="subtasks"
                    id={`subtask${index + 1}`}
                    placeholder="e.g. make coffee"
                    onChange={() => {
                      updateInputValues(
                        subtasksContainer,
                        setInputValues,
                        setFormData,
                        formData,
                        inputValues
                      );
                    }}
                  />
                  <span className="material-icons" onClick={()=> {
                    setNumOfSubTask(numOfSubTask -1)
                    setInputValues(inputValues.slice(0, -1))
                  }}>close</span>
                </div>
              ))}
            </div>
            <button
              className="add_subtask secondary_btn"
              onClick={(e) => addNewField(e, setNumOfSubTask, numOfSubTask)}
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
              onChange={(e) => handleChange(e, setFormData, formData)}
            >
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
          </div>

          <button
            className="primary_btn"
            type="submit"
            value="Create Task"
            onClick={(e) => {
              createTask(e, subtasksContainer, setInputValues, formData);
            }}
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
