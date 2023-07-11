import "./App.css";
import LoginFormik from "./components/pure/forms/loginFormik";
import GreetingStyled from "./components/pure/greetingStyled";
import OptionalRender from "./components/pure/optionalRender";
import TasksPage from "./pages/tasks/TasksPage";

function App() {
  return (
    <> 
    <LoginFormik/>
      {/* <OptionalRender /> */}
      {/* <TasksPage /> */}
    </>
  );
}

export default App;
