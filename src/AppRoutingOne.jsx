import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";

function AppRoutingOne() {
  return (
    <Router>
      <div>
        <aside>
          <Link to="/">HOME -- </Link>
          <Link to="/about"> ABOUT -- </Link>
          <Link to="/faqs"> FAQs --</Link>
          <Link to="/contact"> CONTACT </Link>
        </aside>
        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            {["/about", "/faqs"].map((path, index) => (
              <Route path={path} element={<AboutPage />} key={index} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
