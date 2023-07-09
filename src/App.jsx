import "./App.css";
import GreetingStyled from "./components/pure/greetingStyled";
import OptionalRender from "./components/pure/optionalRender";
import TasksPage from "./pages/tasks/TasksPage";

function App() {
  return (
    <> 
      <OptionalRender />
      {/* <TasksPage /> */}
    </>
  );
}

export default App;
