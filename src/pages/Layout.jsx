import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="row">
        <Sidebar />
        <div className="col-12 col-xl-9">
          <Navbar />
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
