import "./App.css"; 
import PropTypes from 'prop-types'; 
import Ejemplo1 from "./hooks/Ejemplo1";
import Ejemplo2 from "./hooks/Ejemplo2";
import Ejemplo3 from "./hooks/Ejemplo3";
import MiComponenteContexto from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";
import TaskListComponent from "./components/container/task_list";
import GreetingStyled from "./components/pure/greetingStyled";  

function App() { 
 
  return (
    <>
      <div className="card">  
      {/* <TaskListComponent/>  */}
      {/* <Ejemplo1 /> */}
      {/* <Ejemplo2 /> */}
      {/* <Ejemplo3/> */}
      {/* <MiComponenteContexto></MiComponenteContexto> */}
      {/* <Ejemplo4 name="Default"> */}
        {/* Todo lo que este dentro de este componente, 
        es el children que se pasa por props */}
        {/* <p>Contenido del children</p>
        <p>Este es el children del componente padre</p>
      </Ejemplo4> */} 
      <GreetingStyled name="Luciano"></GreetingStyled> 
      </div>
    </>
  );
}

// Greeting.propTypes = {
//   name: PropTypes.string,
// };

export default App;
