import "./App.css";
import LoginFormik from "./components/pure/forms/loginFormik";
import RegisterFormik from "./components/pure/forms/registerFormik";
import GreetingStyled from "./components/pure/greetingStyled";
import OptionalRender from "./components/pure/optionalRender";
import TasksPage from "./pages/tasks/TasksPage";

function App() {
  return (
    <> 
    {/* <LoginFormik/> */}
    {/* <RegisterFormik/> */}
      {/* <OptionalRender /> */}
      <TasksPage />
    </>
  );
}

export default App;
