function FormTask({newtask}) {
  var tasktext = '';
  const handleinputtext = () => {
    tasktext = document.getElementById("inputtext").value
    alert(tasktext);
  };
 
  return (
    <form>
      <h1>To Do List form</h1>
      <label htmlFor="">Task</label>
      <br />
      <input
        type="text"
        placeholder="Type your Task"
        id="inputtext"
        onChange={handleinputtext}
      />

      <button >Add task</button>
    </form>
  );
}

export default FormTask;
