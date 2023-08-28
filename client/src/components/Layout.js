import React from "react";
import Header from "../sections/Header/Header";
import Footer from "../sections/Footer/Footer";

export const Layout = ({ children, numItems }) => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <Header numItems={numItems} />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  );
};
