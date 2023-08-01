import "./App.css";
import AsyncExample from "./components/pure/AsyncExample";
import AxiosCRUDExample from "./components/pure/AxiosCRUDExample";
import AxiosExample from "./components/pure/AxiosExample";
import FetchExample from "./components/pure/FetchExample";
import ObservableExample from "./components/pure/ObservableExample";
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
    {/* Ejemplo Ejercicios Asincronos */}
    {/* <AsyncExample/> */}
    {/* <ObservableExample/> */}
    {/* <FetchExample/> */}
    {/* <AxiosExample/> */}
    <AxiosCRUDExample/>
      {/* <TasksPage /> */}
    </>
  );
}

export default App;
