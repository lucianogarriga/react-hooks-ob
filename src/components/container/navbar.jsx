import React from "react";
import {BrowserRouter as Routes, Route, Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <> 
      <Link to="/">HOME -- </Link>
      <Link to="/about"> ABOUT -- </Link>
      <Link to="/faqs"> FAQs --</Link>
      <Link to="/contact"> NOT EXIST </Link> 
    </>
  );
};

export default Navbar;
