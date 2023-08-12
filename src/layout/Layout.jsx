import React from "react";
import "./layout.css";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
          {/* navbar */}
          <nav>
              <ul>
                  <Link to="/">
                      Home
                  </Link>
                  <Link to="/page-2">
                      page2
                  </Link>
                  <Link to="/page-3">
                      page3
                  </Link>
                  <Link to="/page-4">
                      page4
                  </Link>
                  
              </ul>
          </nav>
          <Outlet></Outlet>
          
    </div>
  );
};

export default Layout;
