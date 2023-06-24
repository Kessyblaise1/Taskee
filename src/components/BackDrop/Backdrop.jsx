import styles from "../newTaskModal/newTask.module.css";

const Backdrop = ({ closeBackdrop }) => {
  return <div className={styles.backdrop} onClick={closeBackdrop}></div>;
};

export default Backdrop;
