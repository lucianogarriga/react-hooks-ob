import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import DashBoard from "./pages/dashboard/DashBoard";
import NotFoundPage from "./pages/404/NotFoundPage";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import TaskListComponent from "./components/container/task_list";
import AxiosCRUDExample from "./components/pure/AxiosCRUDExample";

function AppRoutingFinal() {
  // TODO: Change to value from sessionStorage
  let loggedIn = false;

  const DashboardLogin = () => {
    if (loggedIn) {
      return <Navigate from="/" to="/dashboard" />;
    } else {
      return <Navigate from="/" to="/login" />;
    }
  };

  const DashboardInto = () => {
    if (loggedIn) {
      return <DashBoard />;
    } else {
      return <Navigate from="/" to="/login" />;
    }
  };
  
  const TaskNavigate = () => {
    if (loggedIn){
      return <TaskListComponent/>;
    } else {
      return <Navigate from="/" to="/login"/>
    }
  }

  const GoProfilePage = () => {
    if(loggedIn){
      alert("You are logged in. Redirect to home...");
      return <Navigate to="/" replace />;
    } else {
      alert("You must logged in. Redirect to Login page...");
      return <LoginPage />;
    }
  };

  return (
    <Router>
      <aside>
        <Link to="/">HOME - </Link>
        <Link to="/login">LOGIN - </Link>
        <Link to="/register">REGISTER - </Link>
        <Link to="/tasks"> TASKS - </Link> 
        <Link to="/about"> ABOUT - </Link>
        <Link to="/faqs"> FAQs -</Link>
        <Link to="/contact"> NOT EXIST </Link>
      </aside>
      {/* Route Switch */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* Redirections */}
        <Route exact path="/" element={<DashboardLogin />} />

        {/* Login Route */}
        <Route exact path="/login" element={<LoginPage />} />
        {/* Register Route */}
        <Route exact path="/register" element={<RegisterPage />} />

        {/* Tasks Page */}
        <Route exact path="/tasks" element={<TaskNavigate/>}/>
        {/* Go Profile Page */}
        <Route path="/profile" element={<GoProfilePage/>}/>

        {/* Dashboard Page */}
        <Route exact path="/dashboard" element={<DashboardInto />} />
        {["/about", "/faqs"].map((path, index) => (
          <Route path={path} element={<AboutPage />} key={index} />
        ))}
        {/* Not Found - 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;
