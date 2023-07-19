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

function AppRoutingFinal() {
  // TODO: Change to value from sessionStorage
  let loggedIn = true;

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

  return (
    <Router>
      <aside>
        <Link to="/">HOME - </Link>
        <Link to="/login">LOGIN - </Link>
        <Link to="/register">REGISTER - </Link>
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
