import './App.css';
import Tasks from './components/Tasks'
import FormTask from './components/FormTask';
import "./components/styles/globalstyles.css";

function App() {
  const submitTask = (newtask) => {
    newtask = [
      {
        
      },
    ];
  };
  return (
    <>
      <FormTask submitTask={submitTask} />
      <Tasks/>
    </>
  );
}

export default App;
