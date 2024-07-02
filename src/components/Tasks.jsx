import React, { useState } from "react";
var tasklist = [
  {
    id: "1",
    task: "My fist task",
  },
  { id: "2", task: "My second task" },
];
export default function Tasks() {
  const [checkboxValue, setcheckboxValue] = useState(0);
  const [valcard, setvalcard] = useState();
  function handler() {
    if (checkboxValue == 0) {
      setcheckboxValue(checkboxValue + 1);
    } else {
      setcheckboxValue(checkboxValue - 1);
    }
  }

  return (
    <>
      {tasklist.map((tarea, index) => {
        const valores = (taskid) => {
          setvalcard(tarea=>tarea.id==taskid); //not working bruhhh
          alert(valcard)
        };
        return (
          <>
            <div className="taskcard">
              <input
                type="checkbox"
                id={tarea.id}
                checked={checkboxValue}
                onClick={handler}
              />
              <p>{tarea.task}</p>
            </div>
          </>
        );
      })}
    </>
  );
}
