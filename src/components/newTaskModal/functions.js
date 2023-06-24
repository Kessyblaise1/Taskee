export const addNewField = (e, subtasksContainer) => {
  e.preventDefault()
  let node = `<inputtype="text"name="subtasks"id="subtask2"placeholder="e.g. drink coffee and smile"
/>`;
subtasksContainer.current.innerHTML += node
};
