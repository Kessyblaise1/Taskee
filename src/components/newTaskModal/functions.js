import axios from "axios";

export const addNewField = (e, setNumOfSubTask, numOfSubTask) => {
  e.preventDefault()
  setNumOfSubTask(numOfSubTask +1)
};


export const handleChange = (e, setFormData, formData) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });
};


export const createTask = (e, ref, setInputValues, formData) => {
  let inputs = ref.current.querySelectorAll("input");
  let selectedInputValues = Array.from(inputs).map((input) => input.value);
  e.preventDefault();
  setInputValues(selectedInputValues)

  axios.post("http://localhost:80/taskee/task/save", formData);
  console.log(formData);
};


export const updateInputValues = (ref, state1, state2, formData, inputValues) => {
  let inputs = ref.current.querySelectorAll("input");
  let selectedInputValues = Array.from(inputs).map((input) => input.value);
  state1(selectedInputValues)
  state2({
    ...formData,
    subtasks: inputValues,
  });
}

// subtasksContainer, setInputValues, setFormData, formData, inputValues