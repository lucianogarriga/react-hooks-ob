import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import Navbar from "./components/container/navbar";
import TasksPage from "./pages/tasks/TasksPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";

function AppRoutingOne() {
  return (
    <Router> 
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path='/tasks' element={<TasksPage/>}/>
            <Route path='/task/:id' element={<TaskDetailPage/>}/>
            <Route path="/profile" element={<ProfilePage />} />
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
