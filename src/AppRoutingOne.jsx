import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import Navbar from "./components/container/navbar";
import TasksPage from "./pages/tasks/TasksPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginPage from "./pages/auth/LoginPage";

function AppRoutingOne() {
  const logged = false;
 
  const GoProfilePage = () => {
    if(!logged){
      alert("You must be logged in. Redirect to login page...");
      return <Navigate to="/login" replace/>
    } else {
      return <ProfilePage/>
    }
  }

  const GoLoginPage = () => {
    if(logged){
      alert("You are logged in. Redirect to home...");
      return <Navigate to="/" replace/>
    } else {
      return <LoginPage/>
    }
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} /> 
        <Route path="/login" element={<GoLoginPage/>}/> 
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/task/:id" element={<TaskDetailPage />} /> 
        <Route path="/profile" element={<GoProfilePage/>}/>
          
        {["/about", "/faqs"].map((path, index) => (
          <Route path={path} element={<AboutPage />} key={index} />
        ))}
        {/* 404 Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutingOne;
