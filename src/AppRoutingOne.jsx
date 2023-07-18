import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate, useParams
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import Navbar from "./components/container/navbar";
import TasksPage from "./pages/tasks/TasksPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import { useEffect, useState } from "react";
import StatePage from "./pages/home/StatePage";

function AppRoutingOne() {
  const [logged, setLogged] = useState(false);

  let taskList = [
    {
      id: 1,
      name: "Task 1",
      description: "My first task",
    },
    {
      id: 2,
      name: "Task 2",
      description: "My second task",
    },
    {
      id: 3,
      name: "Task 3",
      description: "My third task",
    },
  ];

  const TaskDetailRoute = () => {
    const {id} = useParams();
    const task = taskList[id -1];
    return <TaskDetailPage task={task}/>
  }

  useEffect(() => {
    const isUserLogged = localStorage.getItem("credentials");
    setLogged(Boolean(isUserLogged));
    console.log("User logged: ", logged);
  }, []);

  const GoProfilePage = () => {
    if (!logged) {
      alert("You must be logged in. Redirect to login page...");
      return <Navigate to="/login" replace />;
    } else {
      return <ProfilePage />;
    }
  };

  const GoLoginPage = () => {
    if (logged) {
      alert("You are logged in. Redirect to home...");
      return <Navigate to="/" replace />;
    } else {
      return <LoginPage />;
    }
  };

  return (
    <Router>
      <div>
        <aside>
          <Link to="/">HOME - </Link>
          <Link to="/login">LOGIN - </Link>
          <Link to="/about"> ABOUT - </Link>
          <Link to="/faqs"> FAQs -</Link>
          <Link to="/task/1">Task 1 -</Link>
          <Link to="/task/2">Task 2 -</Link>
          <Link to="/contact"> NOT EXIST </Link>
        </aside>
        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/online-state/:online" element={<StatePage/>}/>
            <Route path="/login" element={<GoLoginPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route
              exact
              path="/task/:id"
              element={<TaskDetailRoute/>}
            />
            <Route path="/profile" element={<GoProfilePage />} />

            {["/about", "/faqs"].map((path, index) => (
              <Route path={path} element={<AboutPage />} key={index} />
            ))}
            {/* 404 Not Found */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne; 