import React, { useState } from "react";
var tasklist = [
  {
    id: "1",
    task: "My fist task",
  },
  { id: "2", task: "My second task" },
];
export default function Tasks() {
  const [checkboxValue, setcheckboxValue] = useState(false);
  
  return (
    <>
      {tasklist.map((tarea, index) => (
        <>
          <div className="taskcard">
            <input
              type="checkbox"
              id={tarea.id}
              checked={checkboxValue }
              onClick={  () => {
                setcheckboxValue(!checkboxValue);
                alert(`El checkbox ahora es ${!checkboxValue}`);
                
                console.log(tarea.id);
              }}
              />
              <p>{tarea.task}</p>
          </div>
        </>
      ))}
    </>
  );
}
